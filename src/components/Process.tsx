import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  return (
    <section id="process-section" className="py-24 md:py-32 bg-[#FAF9F6] text-stone-900 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
          
          {/* Left Column - Locked / Sticky on Desktop/Tablet scrolled views */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit py-2">
            
            {/* Tagline category */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-600 block" />
              <span className="font-sans text-[11px] tracking-[0.25em] text-amber-700 font-bold uppercase">
                THE PROCESS
              </span>
            </div>

            {/* Main Header title */}
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 leading-tight">
              From Story <br />
              <span className="italic font-normal text-amber-800">to Shelf</span>
            </h2>

            {/* Description note */}
            <p className="mt-6 font-sans text-sm text-stone-600 leading-relaxed font-light max-w-sm">
              We guide exceptional creators through a structural roadmap spanning curation to active brick-and-mortar storefront commerce on London's most historic street.
            </p>

            {/* Custom connecting geometric line indicator */}
            <div className="hidden lg:block w-[1px] h-32 bg-stone-200 mt-10 ml-4 relative">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-2.5 h-2.5 bg-amber-700 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Right Column - Free Scroll, stacking 01 to 05 steps */}
          <div className="lg:col-span-7 space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group p-6 md:p-8 bg-[#FAF9F6] hover:bg-[#EFECE6]/50 border border-stone-200/40 hover:border-amber-700/30 transition-all duration-300 md:grid md:grid-cols-12 gap-6 items-start"
              >
                {/* Large high-contrast serif Number index */}
                <div className="md:col-span-2 mb-4 md:mb-0">
                  <span className="font-serif text-5xl md:text-6xl font-extralight text-stone-200 group-hover:text-amber-700/25 transition-colors duration-300 leading-none">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Metadata Title & Description */}
                <div className="md:col-span-10">
                  <h3 className="font-serif text-xl font-medium text-stone-950 group-hover:text-amber-800 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs md:text-sm text-stone-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
