import { motion } from 'motion/react';
import { EXPECT_CARDS } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Expect() {
  return (
    <section id="expect-section" className="py-24 md:py-32 bg-stone-100 text-stone-900 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-[11px] tracking-[0.25em] text-amber-800 font-bold uppercase block">
            WHAT TO EXPECT
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-950">
            Immersion in <span className="italic font-normal text-amber-800">Every Corner</span>
          </h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto mt-6" />
        </div>

        {/* 4 Cards Grid Layout with premium hover cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {EXPECT_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#FAF9F6] border border-stone-200/40 p-5 flex flex-col justify-between hover:shadow-2xl hover:border-stone-300/60 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Frame */}
              <div>
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-200">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-stone-950/10 opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-20" />
                </div>

                {/* Card Meta Content */}
                <h3 className="font-serif text-xl font-medium tracking-tight text-stone-950 group-hover:text-amber-800 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-xs md:text-sm text-stone-600 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Action Button at bottom of card */}
              <div className="mt-8 pt-4 border-t border-stone-200/50 flex items-center justify-between text-stone-400 group-hover:text-amber-800 transition-colors duration-300">
                <span className="font-mono text-[10px] tracking-widest font-semibold uppercase">
                  EXPERIENCE 0{index + 1}
                </span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
