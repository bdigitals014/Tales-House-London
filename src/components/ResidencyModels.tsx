import { motion } from 'motion/react';
import { RESIDENCY_MODELS } from '../data';
import { Check, Info } from 'lucide-react';

interface ResidencyModelsProps {
  onApplyClick: (modelId: string) => void;
}

export default function ResidencyModels({ onApplyClick }: ResidencyModelsProps) {
  return (
    <section id="showcase-section" className="py-24 md:py-32 bg-[#FAF9F6] text-stone-900 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-[11px] tracking-[0.25em] text-amber-800 font-bold uppercase block">
            SHOWCASE YOUR BRAND
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-950">
            Residency Models
          </h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto mt-6" />
        </div>

        {/* 3 Columns Residency Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {RESIDENCY_MODELS.map((model, index) => {
            const isRecommended = model.recommended;

            return (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col justify-between p-8 md:p-10 relative rounded-none transition-all duration-500 hover:shadow-2xl ${
                  isRecommended
                    ? 'bg-stone-50 border-2 border-amber-800/80 shadow-xl ring-4 ring-amber-500/5 hover:-translate-y-3'
                    : 'bg-[#FAF9F6] border border-stone-200 hover:-translate-y-1'
                }`}
              >
                {/* Recommended Tag */}
                {isRecommended && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-amber-700 text-stone-100 font-sans text-[9px] tracking-widest font-bold uppercase">
                    RECOMMENDED
                  </div>
                )}

                {/* Top Section / Header specs */}
                <div>
                  <h3 className="font-serif text-2xl font-light tracking-wide text-stone-900 uppercase">
                    {model.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-amber-900 font-bold uppercase">
                    {model.duration}
                  </p>

                  <div className="w-12 h-[1px] bg-stone-300 my-6" />

                  {/* Bullet Points */}
                  <ul className="space-y-4 mb-8">
                    {model.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        <span className="font-sans text-xs md:text-sm text-stone-600 leading-relaxed font-light">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Action Section */}
                <div className="pt-6 border-t border-stone-200/60 mt-8">
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <span className="font-serif text-3xl md:text-4xl font-normal text-stone-950">
                        {model.price}
                      </span>
                      <span className="mt-1 block font-mono text-[9px] text-stone-400 uppercase tracking-widest">
                        *Starting rates
                      </span>
                    </div>
                    <div className="text-right text-stone-400 hover:text-stone-600 cursor-help" title={model.description}>
                      <Info size={16} />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onApplyClick(model.id)}
                    className={`w-full py-4 font-sans text-xs tracking-widest font-bold uppercase transition-all duration-300 ${
                      isRecommended
                        ? 'bg-amber-850 hover:bg-stone-900 text-stone-100 shadow-lg hover:shadow-amber-900/10'
                        : 'bg-transparent border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-stone-100'
                    }`}
                  >
                    APPLY NOW
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Small Notice at the bottom of the grid */}
        <p className="mt-8 text-center font-sans text-[11px] text-stone-500 italic">
          Prices are subject to application review and showcase requirements.
        </p>

      </div>
    </section>
  );
}
