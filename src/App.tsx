import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Expect from './components/Expect';
import WhoBelongs from './components/WhoBelongs';
import RegistrationForm from './components/RegistrationForm';
import ResidencyModels from './components/ResidencyModels';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import CalendarSection from './components/Calendar';
import Directions from './components/Directions';
import Footer from './components/Footer';
import BrandApplicationForm from './components/BrandApplicationForm';

export default function App() {
  const [activeModelId, setActiveModelId] = useState('take_root');
  const [isBrandPortalOpen, setIsBrandPortalOpen] = useState(false);

  // Smooth UI Scrolling Triggers
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrandPortal = (modelId: string) => {
    setActiveModelId(modelId);
    setIsBrandPortalOpen(true);
  };

  return (
    <div id="root-viewport" className="min-h-screen flex flex-col relative w-full overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      
      {/* Scroll-Dynamic Translucent Blurry Header */}
      <Header 
        onOpenRegister={() => handleScrollToSection('register-section')}
        onOpenApply={() => handleOpenBrandPortal('take_root')}
      />

      {/* Hero Section with Live Countdown */}
      <Hero 
        onRegisterClick={() => handleScrollToSection('register-section')}
        onShowcaseClick={() => handleScrollToSection('showcase-section')}
      />

      {/* Visual / Editorial Story elements */}
      <main className="flex-grow">
        
        {/* Section 2 - The Manifesto */}
        <Manifesto onExploreVisionClick={() => handleScrollToSection('expect-section')} />

        {/* Section 3 - What to Expect grid cards */}
        <Expect />

        {/* Section 4 - Who Belongs here grid items */}
        <WhoBelongs />

        {/* Section 5 - Opening Week Registration with pass generator */}
        <RegistrationForm />

        {/* Section 6 - Showcase Residency Models */}
        <ResidencyModels onApplyClick={handleOpenBrandPortal} />

        {/* Section 7 - The Process (Sticky Side-By-Side scroller) */}
        <Process />

        {/* Section 8 - Terracotta Social Proof Metrics with scrolling counters */}
        <SocialProof />

        {/* Section 9 - Calendar Experiences Spotlights */}
        <CalendarSection />

        {/* Section 9.5 - Directions & Venue Details Map Block */}
        <Directions />

      </main>

      {/* Section 10 - Standard Footer details */}
      <Footer 
        onOpenApply={() => handleOpenBrandPortal('take_root')} 
        onExploreManifesto={() => handleScrollToSection('manifesto-section')}
      />

      {/* Beautiful Side Sliding Panel Portal for Brand Application form */}
      <AnimatePresence>
        {isBrandPortalOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            
            {/* Blurry Backdrop tap helper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsBrandPortalOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Slide Out Panel containing registration form fields */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-lg md:max-w-xl h-full z-10"
            >
              <BrandApplicationForm 
                selectedModelId={activeModelId}
                onClose={() => setIsBrandPortalOpen(false)}
              />
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
