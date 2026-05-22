import { motion } from 'motion/react';
import { WHO_BELONGS_ITEMS } from '../data';
import * as Icons from 'lucide-react';

export default function WhoBelongs() {
  return (
    <section className="py-20 md:py-24 bg-[#EFECE6]/50 text-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-[11px] tracking-[0.25em] text-amber-800 font-bold uppercase block">
            WHO IS TALES FOR?
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light tracking-tight text-stone-950">
            A Global Hub for Creative Minds
          </h2>
          <div className="w-8 h-[1px] bg-stone-300 mx-auto mt-4" />
        </div>

        {/* Icons Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {WHO_BELONGS_ITEMS.map((item, index) => {
            // Dynamically resolve Icon from Lucide icons package
            const IconComponent = (Icons as any)[item.iconName] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col items-center justify-center p-6 bg-[#FAF9F6] border border-stone-200/50 hover:border-amber-700/40 hover:shadow-lg rounded-none text-center cursor-default transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Circle wrapper with hover backgrounds */}
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors duration-300">
                  <IconComponent size={20} strokeWidth={1.5} />
                </div>

                {/* Role Label */}
                <span className="mt-4 font-sans text-xs tracking-[0.15em] font-medium text-stone-800 uppercase group-hover:text-amber-900 transition-colors duration-300">
                  {item.label}
                </span>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
