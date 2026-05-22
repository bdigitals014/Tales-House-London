import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ManifestoProps {
  onExploreVisionClick: () => void;
}

export default function Manifesto({ onExploreVisionClick }: ManifestoProps) {
  return (
    <section id="manifesto-section" className="py-24 md:py-32 bg-[#FAF9F6] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-600 block" />
              <span className="font-sans text-[11px] tracking-[0.25em] text-amber-700 font-semibold uppercase">
                THE MANIFESTO
              </span>
            </div>

            {/* Editorial Header */}
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 leading-tight">
              More Than <span className="italic font-normal text-amber-800">Retail.</span>
            </h2>

            {/* Main Story Blocks */}
            <div className="mt-8 space-y-6 font-sans text-stone-700 text-sm md:text-base leading-relaxed font-light">
              <p>
                TALES House was created from a simple, profound belief: <strong className="font-semibold text-stone-900">African and diaspora brands deserve more than digital visibility.</strong>
              </p>
              <p>
                They deserve physical sanctuaries in the global design capitals where their narratives can be fully felt, smelled, and explored. Where stories of lineage, texture, and deep generational craftsmanship come to life.
              </p>
              <p>
                By placing curated African creative brilliance squarely in the center of London's historic Oxford Street, we are establishing a dynamic cultural bridge that completely redefines the boundaries of modern retail.
              </p>
            </div>

            {/* Link Anchor */}
            <button
              onClick={onExploreVisionClick}
              className="mt-10 self-start group inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] font-bold text-stone-950 uppercase border-b border-stone-950 pb-2 transition-all duration-300 hover:text-amber-700 hover:border-amber-700"
            >
              <span>EXPLORE OUR VISION</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Right Visual Image Column with overlap card */}
          <div className="lg:col-span-7 relative">
            {/* Main Ambient Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&h=1600&q=80"
                alt="Curated Retail Space Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none scale-100 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-950/5 mix-blend-multiply" />
            </div>

            {/* Overlapping Citation Card exactly as designed */}
            <div className="absolute left-0 bottom-0 md:-left-8 md:-bottom-8 max-w-[280px] md:max-w-[340px] bg-[#EFECE6] border-l-4 border-amber-800 p-6 md:p-8 shadow-xl">
              <blockquote className="font-serif text-lg md:text-2xl text-stone-900 italic font-light leading-snug">
                "A place where stories come to life."
              </blockquote>
              <cite className="block mt-3 font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-stone-500 uppercase font-medium not-italic">
                — TALES House Philosophy
              </cite>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
