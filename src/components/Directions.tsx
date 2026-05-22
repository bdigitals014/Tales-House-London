import { motion } from 'motion/react';
import { MapPin, Building, Navigation, ExternalLink } from 'lucide-react';

export default function Directions() {
  const addressQuery = "28 Cavendish Square, London W1G 0DB";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;

  return (
    <section id="directions-section" className="py-24 md:py-32 bg-[#FAF9F6] text-stone-900 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-sans text-xs tracking-[0.3em] font-bold uppercase text-stone-950 flex items-center justify-center gap-1.5">
            GET DIRECTION <span className="text-amber-500 font-extrabold">TO THE VENUE</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Brand Grid Layout matching design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Terracotta Luxury Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-[#9B332B] text-stone-100 p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            {/* Elegant watermark logo inside */}
            <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] opacity-[0.03] select-none pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-64 h-64 text-stone-100">
                <path d="M10 80 L30 30 L50 60 L70 30 L90 80 Z" fill="currentColor" />
              </svg>
            </div>

            <div className="space-y-10 relative z-10">
              
              {/* Row 1: Venue */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0 border border-white/10">
                  <Building size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold tracking-wide uppercase text-stone-200">
                    Venue
                  </h3>
                  <p className="mt-1 font-sans text-sm text-stone-150 font-light">
                    Luxury Promise
                  </p>
                </div>
              </div>

              {/* Row 2: Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0 border border-white/10">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold tracking-wide uppercase text-stone-200">
                    Address
                  </h3>
                  <p className="mt-1 font-sans text-sm text-stone-150 font-light leading-relaxed">
                    28 Cavendish Square (Off Oxford Street), <br />London W1G 0DB
                  </p>
                </div>
              </div>

              {/* Row 3: Direction */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-amber-450 shrink-0 border border-white/10">
                  <Navigation size={22} strokeWidth={1.5} className="rotate-45" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold tracking-wide uppercase text-stone-200">
                    Direction
                  </h3>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-block font-sans text-sm text-amber-300 hover:text-amber-250 font-normal underline decoration-amber-400/50 underline-offset-4 transition-colors group"
                  >
                    28 Cavendish Square, London W1G 0DB
                    <ExternalLink size={12} className="inline-block ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

            </div>

            {/* Aesthetic disclaimer note at bottom */}
            <div className="mt-12 pt-6 border-t border-white/10 text-[10px] text-stone-300 font-mono tracking-wider relative z-10">
              OXFORD STREET • FLAGSHIP SPACE ACCESS
            </div>

          </motion.div>

          {/* Right Block: Grayscale/Gold Map Representation Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 relative min-h-[350px] bg-stone-200 border border-stone-300/40 overflow-hidden shadow-lg flex flex-col justify-between group"
          >
            {/* Elegant gray embed Google Maps view centered directly on Cavendish Square target */}
            <iframe
              title="Google Map showing 28 Cavendish Square, London"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90999557283!2d-0.14660352337775535!3d51.51485607181467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad38722aa01%3A0xe6bf44bc48fbf20f!2s28%20Cavendish%20Sq%2C%20London%20W1G%200DB!5e0!3m2!1sen!2suk!4v1716380620123!5m2!1sen!2suk&style=feature:all|element:all|saturation:-100|lightness:10"
              className="w-full h-full min-h-[400px] border-0 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating indicator */}
            <div className="absolute top-4 right-4 bg-stone-900/95 backdrop-blur-sm text-stone-100 px-4 py-2 font-mono text-[9px] tracking-widest uppercase border border-stone-800 pointer-events-none shadow-md">
              MAP INTERACTIVE
            </div>

            {/* Open Google Maps button at the bottom absolute layer */}
            <div className="absolute bottom-4 left-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-900 text-stone-100 font-sans text-[10px] tracking-widest font-semibold uppercase px-4 py-2.5 shadow-lg transition-colors duration-300 border border-stone-800"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
