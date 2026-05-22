import { motion } from 'motion/react';
import { CALENDAR_EVENTS } from '../data';
import { Calendar, Plus, ChevronRight } from 'lucide-react';

export default function CalendarSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] text-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with right side "VIEW ALL EVENTS" link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-8 mb-16 gap-4">
          <div>
            <span className="font-sans text-[11px] tracking-[0.25em] text-amber-800 font-bold uppercase block">
              EXPERIENCE CALENDAR
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-950">
              Coming Up
            </h2>
          </div>
          <div>
            <a
              href="#register-section"
              className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] font-bold text-stone-950 uppercase border-b border-stone-950 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors"
            >
              <span>VIEW ALL EVENTS</span>
              <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* 4 Columns Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CALENDAR_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col justify-between p-6 bg-[#FAF9F6] border-l-2 border-stone-200 hover:border-amber-700 hover:bg-[#EFECE6]/25 transition-all duration-300"
            >
              <div>
                {/* Date stamp header */}
                <div className="flex items-center gap-2 text-amber-800 font-mono text-[9px] md:text-[10px] tracking-widest font-bold uppercase">
                  <Calendar size={12} strokeWidth={2} />
                  <span>{event.date}</span>
                </div>

                {/* Subtag/Category pill */}
                <span className="inline-block mt-4 px-2 py-0.5 bg-stone-100 text-stone-500 rounded-none font-sans text-[8px] tracking-wider uppercase font-semibold">
                  {event.tag}
                </span>

                {/* Main Event Title */}
                <h4 className="mt-4 font-serif text-lg font-medium tracking-tight text-stone-950 group-hover:text-amber-900 transition-colors">
                  {event.title}
                </h4>

                {/* Event text */}
                <p className="mt-3 font-sans text-xs text-stone-600 leading-relaxed font-light">
                  {event.description}
                </p>
              </div>

              {/* Action arrow button trigger */}
              <div className="mt-8 pt-4 border-t border-stone-200/50 flex items-center justify-between text-stone-400 group-hover:text-amber-800 transition-colors">
                <span className="font-mono text-[9px] tracking-wider uppercase">
                  ACTIVE SLOT
                </span>
                <Plus size={14} className="transition-transform duration-300 group-hover:rotate-90" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
