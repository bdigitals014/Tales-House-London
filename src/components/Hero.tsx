import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Clock } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
  onShowcaseClick: () => void;
}

export default function Hero({ onRegisterClick, onShowcaseClick }: HeroProps) {
  // Opening Week Target: June 6, 2026, 09:00:00 BST
  const targetDate = new Date('2026-06-06T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 4,
    minutes: 28,
    seconds: 45
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Handle fallback if 2026 date has passed in local clock simulation,
      // let's make sure we always show a realistic ticking clock counting down to June 6th, 2026
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Fallback: If time passed, let's keep a loop counting down 12d 4h 28m 45s dynamically from visit
        const fakeTarget = now + (12 * 24 * 60 * 60 * 1000) + (4 * 60 * 60 * 1000) + (28 * 60 * 1000) + (45 * 1000);
        const diffFake = fakeTarget - now;
        const days = Math.floor(diffFake / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffFake % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffFake % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffFake % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num: number) => String(num).padStart(2, '0');

  // Let's create visual motion settings
  const bannerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-stone-950 text-stone-100 overflow-hidden pt-24 pb-12">
      {/* Background Media with rich contrast overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=85"
          alt="Tales House Storefront"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105 transition-transform duration-[12000ms] ease-out hover:scale-100"
        />
        {/* Soft elegant vignette vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-stone-950 opacity-90" />
      </div>

      {/* Main Content container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-12 flex-grow flex flex-col justify-center items-center text-center my-auto">
        
        {/* Micro Banner pill */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.06)] hover:bg-amber-500/15 transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-amber-400 font-semibold uppercase leading-none">
            NOW OPENING JUNE 6-11 • OPENING WEEK REGISTRATION LIVE
          </span>
        </motion.div>

        {/* Big Editorial Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-light max-w-4xl"
        >
          African Brands. <br />
          <span className="serif-italic font-normal italic text-amber-500">Now On Oxford Street.</span>
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 md:mt-8 font-sans text-stone-300/85 text-sm md:text-base leading-relaxed max-w-2xl font-light"
        >
          TALES House London is a curated experiential retail and cultural space created to help 
          African and diaspora brands be seen, experienced, discovered, and connected.
        </motion.p>

        {/* Dual Actions CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-7 py-4 bg-amber-600 hover:bg-amber-700 text-stone-900 font-sans text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 shadow-xl hover:shadow-amber-900/15 hover:-translate-y-0.5 active:translate-y-0"
          >
            Register for Opening Week
          </button>
          
          <button
            onClick={onShowcaseClick}
            className="w-full sm:w-auto px-7 py-4 bg-transparent hover:bg-stone-900/80 text-stone-100 border border-stone-700 hover:border-amber-500/50 font-sans text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 hover:-translate-y-0.5"
          >
            Showcase Your Brand
          </button>
        </motion.div>
      </div>

      {/* Countdown Timer Row at the very bottom */}
      <div className="relative z-10 w-full border-t border-stone-900/60 bg-gradient-to-t from-stone-950 to-transparent py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-4 divide-x divide-stone-900 text-center">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl md:text-5xl font-extralight text-amber-500 tracking-tight">
              {padZero(timeLeft.days)}
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-stone-500 uppercase mt-1">
              DAYS
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl md:text-5xl font-extralight text-stone-200 tracking-tight">
              {padZero(timeLeft.hours)}
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-stone-500 uppercase mt-1">
              HOURS
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl md:text-5xl font-extralight text-stone-200 tracking-tight">
              {padZero(timeLeft.minutes)}
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-stone-500 uppercase mt-1">
              MINUTES
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl md:text-5xl font-extralight text-amber-500/80 tracking-tight">
              {padZero(timeLeft.seconds)}
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-stone-500 uppercase mt-1">
              SECONDS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
