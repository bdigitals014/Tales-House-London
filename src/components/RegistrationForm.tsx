import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Ticket, Sparkles, Send, Loader2 } from 'lucide-react';
import { RegistrationFormData } from '../types';

export default function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    instagram: '',
    city: '',
    attendanceType: 'Guest',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [syncStep, setSyncStep] = useState('');

  const attendanceOptions = ['Guest', 'Creator', 'Press', 'Buyer', 'Founder', 'Brand'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert('First Name and Email are strictly required.');
      return;
    }

    setStatus('submitting');
    
    // Simulate premium Multi-System CRM Syncing
    try {
      setSyncStep('Authenticating credentials...');
      await new Promise((r) => setTimeout(r, 600));
      
      setSyncStep('Registering with Mailchimp automation pools...');
      await new Promise((r) => setTimeout(r, 850));
      
      setSyncStep('Logging record to HubSpot Enterprise CRM database...');
      await new Promise((r) => setTimeout(r, 700));
      
      setSyncStep('Dispatching confirmation sequence...');
      await new Promise((r) => setTimeout(r, 550));
      
      setStatus('success');
    } catch (e) {
      setStatus('idle');
    }
  };

  return (
    <section id="register-section" className="py-24 bg-[#EFECE6] text-stone-900 overflow-hidden border-t border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Card Frame holding form or ticket */}
        <div className="bg-[#FAF9F6] p-8 md:p-16 shadow-2xl relative border border-stone-100">
          
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header Copy */}
                <div className="text-center max-w-xl mx-auto mb-12">
                  <span className="font-sans text-[11px] tracking-[0.25em] text-amber-800 font-bold uppercase block">
                    ACCESS THE OPENING
                  </span>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl font-light tracking-tight text-stone-950">
                    Be Part of Opening Week
                  </h3>
                  <p className="mt-3 font-sans text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                    Limited spots available for private previews, interactive workshops, panel discussions and exclusive launch activations from June 6–11.
                  </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="flex flex-col">
                      <label htmlFor="firstName" className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                        First Name <span className="text-amber-700">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        disabled={status === 'submitting'}
                        className="px-4 py-3 bg-[#FAF9F6] border-b border-stone-300 focus:border-amber-800 focus:outline-none font-sans text-sm text-stone-900 placeholder-stone-400 transition-colors duration-300"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                      <label htmlFor="lastName" className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        disabled={status === 'submitting'}
                        className="px-4 py-3 bg-[#FAF9F6] border-b border-stone-300 focus:border-amber-800 focus:outline-none font-sans text-sm text-stone-900 placeholder-stone-400 transition-colors duration-300"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                        Email Address <span className="text-amber-700">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        disabled={status === 'submitting'}
                        className="px-4 py-3 bg-[#FAF9F6] border-b border-stone-300 focus:border-amber-800 focus:outline-none font-sans text-sm text-stone-900 placeholder-stone-400 transition-colors duration-300"
                        placeholder="email@address.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col">
                      <label htmlFor="instagram" className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                        Instagram
                      </label>
                      <input
                        id="instagram"
                        type="text"
                        disabled={status === 'submitting'}
                        className="px-4 py-3 bg-[#FAF9F6] border-b border-stone-300 focus:border-amber-800 focus:outline-none font-sans text-sm text-stone-900 placeholder-stone-400 transition-colors duration-300"
                        placeholder="@username"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* City */}
                    <div className="flex flex-col">
                      <label htmlFor="city" className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        disabled={status === 'submitting'}
                        className="px-4 py-3 bg-[#FAF9F6] border-b border-stone-300 focus:border-amber-800 focus:outline-none font-sans text-sm text-stone-900 placeholder-stone-400 transition-colors duration-300"
                        placeholder="e.g. London"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>

                    {/* Attendance Type */}
                    <div className="flex flex-col">
                      <label htmlFor="attendanceType" className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                        Attendance Type
                      </label>
                      <select
                        id="attendanceType"
                        disabled={status === 'submitting'}
                        className="px-4 py-3 bg-[#FAF9F6] border-b border-stone-300 focus:border-amber-800 focus:outline-none font-sans text-sm text-stone-900 cursor-pointer transition-colors duration-300"
                        value={formData.attendanceType}
                        onChange={(e) => setFormData({ ...formData, attendanceType: e.target.value })}
                      >
                        {attendanceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#FAF9F6] text-stone-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="pt-8 text-center">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-8 bg-stone-900 hover:bg-amber-900 text-stone-150 font-sans text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 "
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin text-amber-500" />
                          <span>REQUESTING ACCESS...</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} className="text-amber-500" />
                          <span>REQUEST ACCESS</span>
                        </>
                      )}
                    </button>
                    
                    {/* Live integration syncing loader */}
                    {status === 'submitting' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 font-mono text-[10px] text-amber-700 tracking-wider text-center"
                      >
                        {syncStep}
                      </motion.p>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center flex flex-col items-center"
              >
                {/* Success Indicator */}
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 mb-6 border border-amber-200 shadow-inner">
                  <CheckCircle2 size={36} />
                </div>

                <span className="font-mono text-[10px] tracking-[0.3em] text-amber-700 uppercase font-semibold">
                  REGISTRATION CONFIRMED
                </span>
                
                <h3 className="mt-2 font-serif text-3xl md:text-4xl text-stone-950 font-light max-w-lg leading-tight">
                  Welcome to Tales House
                </h3>

                <p className="mt-4 font-sans text-stone-600 text-xs md:text-sm font-light max-w-md leading-relaxed">
                  Excellent, <strong className="font-semibold">{formData.firstName}</strong>. Your application for private preview opening week access has been stored, synchronized with our concierge mailing pools, and logged for guest curation.
                </p>

                {/* Styled Dynamic Ticket Pass */}
                <div className="mt-10 w-full max-w-md bg-stone-900 text-stone-100 p-6 md:p-8 relative overflow-hidden rounded-none shadow-2xl border-l-[6px] border-amber-500">
                  {/* Watermark Logo symbol */}
                  <div className="absolute -right-10 -bottom-10 opacity-5 w-48 h-48">
                    <Ticket className="w-full h-full text-stone-100" />
                  </div>

                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <div className="text-left">
                      <span className="font-serif text-sm tracking-widest font-semibold uppercase text-stone-100">TALES HOUSE</span>
                      <p className="font-mono text-[8px] text-amber-500 tracking-[0.3em] uppercase">ACCESS PASS</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[11px] text-stone-400 bg-stone-800/80 px-2 py-1 uppercase tracking-widest">
                        {formData.attendanceType}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-5 text-left font-mono">
                    <div>
                      <span className="text-[8px] text-stone-500 uppercase tracking-widest">GUEST</span>
                      <p className="text-xs text-stone-300 uppercase font-medium mt-0.5 truncate">
                        {formData.firstName} {formData.lastName || 'Guest'}
                      </p>
                    </div>
                    <div>
                      <span className="text-[8px] text-stone-500 uppercase tracking-widest">IG ACCOUNT</span>
                      <p className="text-xs text-amber-400 font-medium mt-0.5 truncate">
                        {formData.instagram || 'Not specified'}
                      </p>
                    </div>
                    <div>
                      <span className="text-[8px] text-stone-500 uppercase tracking-widest">DATE RANGES</span>
                      <p className="text-[11px] text-stone-300 font-medium mt-0.5">
                        JUNE 6 — 11, 2026
                      </p>
                    </div>
                    <div>
                      <span className="text-[8px] text-stone-500 uppercase tracking-widest">LOCATION</span>
                      <p className="text-[11px] text-stone-300 font-medium mt-0.5">
                        OXFORD ST, LONDON
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-stone-800 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-stone-500 tracking-widest uppercase">
                      ID: TH-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                    <Sparkles size={14} className="text-amber-500 animate-pulse" />
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-sans text-[11px] tracking-widest font-semibold text-stone-500 hover:text-stone-900 uppercase border-b border-stone-300 pb-1"
                  >
                    Register another guest
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
