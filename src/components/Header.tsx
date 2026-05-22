import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
  onOpenApply: () => void;
}

export default function Header({ onOpenRegister, onOpenApply }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-stone-950/85 backdrop-blur-md py-4 shadow-lg border-b border-stone-800/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Geometric Crown Logo representation in red and clay */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 transition-transform duration-500 hover:rotate-12">
                <path 
                  d="M10 80 L30 30 L50 60 L70 30 L90 80 Z" 
                  fill="currentColor" 
                  className="opacity-90"
                />
                <circle cx="30" cy="22" r="6" fill="#D97706" />
                <circle cx="50" cy="50" r="6" fill="#D97706" />
                <circle cx="70" cy="22" r="6" fill="#D97706" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] text-stone-100 font-semibold leading-none uppercase">
                Tales House
              </span>
              <span className="font-mono text-[9px] tracking-[0.45em] text-amber-500 font-medium uppercase mt-0.5">
                London
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {['Stories', 'Experiences', 'Showcase', 'Process', 'Venue'].map((item) => {
              const targetId = item.toLowerCase() === 'showcase' 
                ? 'showcase-section'
                : item.toLowerCase() === 'process'
                ? 'process-section'
                : item.toLowerCase() === 'experiences'
                ? 'expect-section'
                : item.toLowerCase() === 'venue'
                ? 'directions-section'
                : 'manifesto-section';
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className="font-sans text-xs tracking-widest text-stone-300 hover:text-amber-400 uppercase transition-colors duration-300"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('register-section')}
              className="px-6 py-2.5 bg-transparent border border-stone-600 hover:border-amber-500 text-stone-100 hover:text-amber-400 font-sans text-xs tracking-widest font-medium uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-100 hover:text-amber-500 p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-stone-950 border-b border-stone-800 py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {['Stories', 'Experiences', 'Showcase', 'Process', 'Venue'].map((item) => {
                const targetId = item.toLowerCase() === 'showcase' 
                  ? 'showcase-section'
                  : item.toLowerCase() === 'process'
                  ? 'process-section'
                  : item.toLowerCase() === 'experiences'
                  ? 'expect-section'
                  : item.toLowerCase() === 'venue'
                  ? 'directions-section'
                  : 'manifesto-section';
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(targetId)}
                    className="font-sans text-sm tracking-widest text-left text-stone-300 hover:text-amber-400 uppercase transition-colors"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="h-[1px] bg-stone-800 w-full" />
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection('register-section');
              }}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-stone-900 font-sans text-xs tracking-widest font-semibold uppercase text-center transition-colors"
            >
              Register for Opening Week
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
