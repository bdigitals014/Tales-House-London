import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SOCIAL_METRICS } from '../data';

interface CounterProps {
  number: number;
  suffix: string;
  durationMs?: number;
}

function Counter({ number, suffix, durationMs = 1500 }: CounterProps) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / durationMs, 1);
      
      // Smooth easing out cubic
      const easedPercent = 1 - Math.pow(1 - percent, 3);
      setCurrent(Math.floor(easedPercent * number));

      if (percent < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(number);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, number, durationMs]);

  return (
    <span ref={elementRef} className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-stone-100/95 tracking-tight">
      {current}
      <span className="text-amber-500 font-normal">{suffix}</span>
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-[#5B3E2F] text-stone-100 overflow-hidden relative">
      {/* Texture accent overlay */}
      <div className="absolute inset-0 bg-stone-950/10 pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 divide-stone-600/30">
          
          {SOCIAL_METRICS.map((metric) => (
            <div 
              key={metric.id} 
              className="flex flex-col items-center justify-center text-center p-4 hover:bg-stone-900/10 transition-colors duration-300"
            >
              <div className="mb-3">
                <Counter number={metric.number} suffix={metric.suffix} />
              </div>

              {/* Stat metadata Label */}
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-stone-300 uppercase mt-2 text-center max-w-[160px] md:max-w-none">
                {metric.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
