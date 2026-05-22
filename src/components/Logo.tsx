import { SVGProps } from 'react';

// The highly polished, exact SVG replica of the Tales House London brand logo mark.
// It incorporates the classic crossing African hut rafter peak and the modern geometric art emblem.
export function LogoMark({ className = "w-10 h-10", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-500 hover:scale-105`}
      {...props}
    >
      {/* 
        1. THE ROOF PEAK (Crossing Rafter Beams)
        Drawn with slightly organic, uneven edges to reflect the raw, rustically hand-woven thatched look.
        Color: Terracotta Chocolate Burgundy (#5B1E19)
      */}
      {/* Left Rafter Beam */}
      <path
        d="M 18,45 C 19,43 21,41 24,42 L 56,15 C 57.5,13.5 59,12 60.5,10.5 C 61,10 62,9.5 63,11 C 63.8,12 63.5,13 62.5,14 L 28,47 C 26,49 23,49 20,48 Z"
        fill="#5B1E19"
        className="opacity-95"
      />
      
      {/* Right Rafter Beam (Crosses Behind / Over at the apex) */}
      <path
        d="M 82,45 C 81,43 79,41 76,42 L 44,15 C 42.5,13.5 41,12 39.5,10.5 C 39,10 38,9.5 37,11 C 36.2,12 36.5,13 37.5,14 L 72,47 C 74,49 77,49 80,48 Z"
        fill="#5B1E19"
        className="opacity-95"
      />

      {/* 
        2. THE GEOMETRIC ART EMBLEM (Beneath the peak) 
        Perfectly proportioned, scaled up, and centered vectors matching the uploaded branding guide.
      */}
      
      {/* RED SHAPE (Top-Left Profile/Crown piece - #D22424) */}
      <path
        d="M 36,25 L 49,25 C 52,25 53,28 50,30 C 53,32 53,36 50,38 L 49,38 C 49,43 49,47 49,51.5 C 49,53.5 46.5,54.5 43.5,54.5 L 36,54.5 Z"
        fill="#D22424"
      />

      {/* BLUE SHAPE (Bottom-Left Swoop/Shield piece - #16429A) */}
      <path
        d="M 36,51.5 C 36,65 42,75 49,75 L 49,51.5 Z"
        fill="#16429A"
      />

      {/* GREEN SHAPE (Top-Right Right-Angle Triangle - #0D9E67) */}
      <polygon
        points="49,51.5 58,32 58,51.5"
        fill="#0D9E67"
      />

      {/* ORANGE SHAPE (Bottom-Right Split Circle - #EF961E) */}
      {/* Top Half of circle */}
      <path
        d="M 49,61 A 10.5,10.5 0 0,1 70,61 Z"
        fill="#EF961E"
      />
      {/* Bottom Half of circle */}
      <path
        d="M 49,64 A 10.5,10.5 0 0,0 70,64 Z"
        fill="#EF961E"
      />
    </svg>
  );
}

// Full logo with beautiful high-end serif and mono branding typography built-in.
// Adapts beautifully to dark or light containers using flexible text color classes.
export function LogoFull({ className = "w-48 h-auto", isLight = false, ...props }: SVGProps<SVGSVGElement> & { isLight?: boolean }) {
  const textColor = isLight ? "fill-stone-100" : "fill-[#5B1E19]";
  const sublineColor = isLight ? "fill-amber-500" : "fill-[#5B1E19]";

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <LogoMark className="w-20 h-20 mb-2" />
      <svg
        viewBox="0 0 280 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        {...props}
      >
        {/* TALES HOUSE */}
        <text
          x="140"
          y="45"
          textAnchor="middle"
          className={textColor}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 800,
            fontSize: "26px",
            letterSpacing: "0.22em",
          }}
        >
          TALES HOUSE
        </text>

        {/* LONDON */}
        <text
          x="140"
          y="85"
          textAnchor="middle"
          className={sublineColor}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.45em",
          }}
        >
          LONDON
        </text>
      </svg>
    </div>
  );
}
