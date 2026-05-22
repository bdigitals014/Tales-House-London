import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Instagram, Mail, Share2, Sparkles, Check } from 'lucide-react';
import { LogoMark } from './Logo';

interface FooterProps {
  onOpenApply: () => void;
  onExploreManifesto: () => void;
}

export default function Footer({ onOpenApply, onExploreManifesto }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-stone-100 text-stone-800 border-t border-stone-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-stone-200">
          
          {/* Column 1 - Corporate Logo brand details */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Elegant brand logo mark */}
              <div className="flex items-center gap-2 mb-4">
                <LogoMark className="w-10 h-10 block" />
                <div className="flex flex-col">
                  <span className="font-serif text-[15px] tracking-[0.22em] text-stone-900 font-bold uppercase leading-none">
                    TALES HOUSE
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.4em] text-amber-700 font-semibold uppercase mt-0.5">
                    LONDON
                  </span>
                </div>
              </div>

              <address className="font-sans text-xs md:text-sm text-stone-600 leading-relaxed font-light not-italic mt-6 max-w-xs space-y-1">
                <p>Oxford Street, London.</p>
                <p>Redefining Cultural Retail for a New Era.</p>
              </address>

              <span className="font-mono text-[9px] tracking-[0.15em] text-stone-400 font-semibold block mt-8 uppercase">
                POWERED BY BELLAFRICANA
              </span>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 mt-8 text-stone-400 hover:text-stone-900">
              <span className="font-mono text-[9px] tracking-widest text-stone-400 uppercase font-semibold mr-1">
                SOCIALS:
              </span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-stone-200/50 hover:bg-amber-50 hover:border-amber-700/30 hover:text-amber-800 flex items-center justify-center transition-all duration-300">
                <Instagram size={14} />
              </a>
              <a href="mailto:contact@taleshouse.london" className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-stone-200/50 hover:bg-amber-50 hover:border-amber-700/30 hover:text-amber-800 flex items-center justify-center transition-all duration-300">
                <Mail size={14} />
              </a>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('App Link copied successfully to clipboard! Share with your brand community.');
                }}
                className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-stone-200/50 hover:bg-amber-50 hover:border-amber-700/30 hover:text-amber-800 flex items-center justify-center transition-all duration-300"
                title="Share Page"
              >
                <Share2 size={14} />
              </button>
            </div>
          </div>

          {/* Column 2 - Explore Links */}
          <div className="lg:col-span-2.5">
            <span className="font-mono text-[10px] tracking-[0.16em] text-stone-950 font-bold uppercase block mb-6">
              EXPLORE
            </span>
            <ul className="space-y-4 font-sans text-xs md:text-sm text-stone-600 font-light">
              <li>
                <button onClick={onExploreManifesto} className="hover:text-amber-800 transition-colors cursor-pointer text-left">
                  The Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => onOpenApply()} className="hover:text-amber-800 transition-colors cursor-pointer text-left">
                  Brand Application
                </button>
              </li>
              <li>
                <a href="#register-section" className="hover:text-amber-800 transition-colors block">
                  Attendance Pass
                </a>
              </li>
              <li>
                <a href="#register-section" className="hover:text-amber-800 transition-colors block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Community Links */}
          <div className="lg:col-span-2.5">
            <span className="font-mono text-[10px] tracking-[0.16em] text-stone-950 font-bold uppercase block mb-6">
              COMMUNITY
            </span>
            <ul className="space-y-4 font-sans text-xs md:text-sm text-stone-600 font-light">
              <li>
                <a href="#register-section" className="hover:text-amber-800 transition-colors">
                  Creator Login
                </a>
              </li>
              <li>
                <a href="#register-section" className="hover:text-amber-800 transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#register-section" className="hover:text-amber-800 transition-colors">
                  Events Hub
                </a>
              </li>
              <li>
                <a href="#register-section" className="hover:text-amber-800 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter journal submission */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] tracking-[0.16em] text-stone-950 font-bold uppercase block mb-6">
              NEWSLETTER
            </span>
            <p className="font-sans text-xs text-stone-600 leading-relaxed font-light mb-6">
              Receive carefully curated digests detailing brand drops, upcoming creator talks, and exclusive event dates.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                placeholder="Join our journal"
                className="w-full bg-[#FAF9F6] border-b border-stone-300 focus:border-stone-900 focus:outline-none py-3.5 pl-3 pr-10 font-sans text-sm text-stone-900 placeholder-stone-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-amber-800 text-stone-400 transition-colors"
                aria-label="Submit subscribe email"
              >
                <ArrowRight size={18} />
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 font-mono text-[10px] text-amber-800 tracking-wider flex items-center gap-1"
                >
                  <Check size={12} strokeWidth={3} />
                  <span>Subscribed successfully.</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Outer bottom credits row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-serif text-[11px] md:text-sm tracking-[0.2em] font-medium text-stone-500 uppercase text-center md:text-left">
            A PLACE WHERE STORIES COME TO LIFE.
          </span>
          
          <span className="font-mono text-[9px] tracking-widest text-stone-400 uppercase text-center">
            © 2026 TALES HOUSE LONDON. ALL RIGHTS RESERVED.
          </span>

          <div className="flex gap-6 font-mono text-[9px] tracking-widest text-stone-400 hover:text-stone-900 uppercase">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-800 transition-colors">
              INSTAGRAM
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-800 transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
