import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { X, Check, Loader2, Sparkles, Send } from 'lucide-react';
import { BrandApplicationFormData } from '../types';

interface BrandApplicationFormProps {
  selectedModelId: string;
  onClose: () => void;
}

export default function BrandApplicationForm({ selectedModelId, onClose }: BrandApplicationFormProps) {
  const [formData, setFormData] = useState<BrandApplicationFormData>({
    brandName: '',
    website: '',
    instagram: '',
    contactName: '',
    email: '',
    residencyModel: selectedModelId,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [syncStep, setSyncStep] = useState('');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, residencyModel: selectedModelId }));
  }, [selectedModelId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.contactName || !formData.email) {
      alert('Brand Name, Contact Name, and Email are strictly required.');
      return;
    }

    setStatus('submitting');

    try {
      setSyncStep('Authenticating designer profile metadata...');
      await new Promise((r) => setTimeout(r, 650));

      setSyncStep('Uploading brand brief files directly to Curation Portal...');
      await new Promise((r) => setTimeout(r, 800));

      setSyncStep('Establishing Salesforce / Klaviyo automated designer tag rules...');
      await new Promise((r) => setTimeout(r, 750));

      setSyncStep('Finalizing showcase slot candidacy registration...');
      await new Promise((r) => setTimeout(r, 500));

      setStatus('success');
    } catch (_) {
      setStatus('idle');
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF9F6] text-stone-900 shadow-2xl overflow-y-auto">
      
      {/* Header with Close */}
      <div className="p-6 md:p-8 border-b border-stone-200 flex items-center justify-between sticky top-0 bg-[#FAF9F6]/95 backdrop-blur-md z-10">
        <div>
          <span className="font-mono text-[9px] tracking-[0.3em] text-amber-700 uppercase font-bold">
            SHOWCASE APPLICATION
          </span>
          <h4 className="font-serif text-2xl font-light text-stone-950 mt-1">
            Apply for Residenz
          </h4>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-stone-100 text-stone-400 hover:text-stone-900 rounded-full transition-colors"
          aria-label="Close portal"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Body content */}
      <div className="flex-grow p-6 md:p-8">
        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Brand Meta */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                  Brand Name <span className="text-amber-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BellaAfricana Designs"
                  className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                  Website / Lookbook URL
                </label>
                <input
                  type="url"
                  placeholder="https://mybrand.com"
                  className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                  Brand Instagram
                </label>
                <input
                  type="text"
                  placeholder="@brandusername"
                  className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                  Residency Model Option
                </label>
                <select
                  className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900 cursor-pointer"
                  value={formData.residencyModel}
                  onChange={(e) => setFormData({ ...formData, residencyModel: e.target.value })}
                >
                  <option value="discover">DISCOVER (3-Day Residency)</option>
                  <option value="grow">GROW (4-Day Residency)</option>
                  <option value="take_root">TAKE ROOT (7-Day Residency)</option>
                </select>
              </div>
            </div>

            {/* Contact Person */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-stone-200/50 pt-5">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                  Contact Name <span className="text-amber-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Primary representative name"
                  className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                  Contact Email <span className="text-amber-700">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@brand.com"
                  className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Message Story Textarea */}
            <div className="flex flex-col">
              <label className="font-sans text-[10px] tracking-widest font-semibold text-stone-500 uppercase mb-2">
                Brand Heritage & Story Hook (Brief)
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about the lineage, texture, and cultural significance behind your products..."
                className="px-4 py-3 bg-[#FAF9F6] border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none font-sans text-sm text-stone-900 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Primary Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-stone-950 hover:bg-amber-900 text-stone-150 font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-amber-500" />
                    <span>LODGING BRAND APPLICATION...</span>
                  </>
                ) : (
                  <>
                    <Send size={12} className="text-amber-500" />
                    <span>SUBMIT BRAND APPLICATION</span>
                  </>
                )}
              </button>
              
              {status === 'submitting' && (
                <p className="mt-4 font-mono text-[9px] text-amber-700 tracking-wider text-center animate-pulse">
                  {syncStep}
                </p>
              )}
            </div>

          </form>
        ) : (
          <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 stroke-amber-700 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 shadow-inner">
              <Sparkles size={32} className="className animate-pulse" />
            </div>

            <span className="font-mono text-[9px] tracking-[0.3em] text-amber-700 uppercase font-bold">
              APPLICATION RECEIVED
            </span>

            <h4 className="font-serif text-3xl font-light text-stone-950 mt-2">
              Your Story is Lodged
            </h4>
            
            <p className="mt-4 font-sans text-stone-600 text-sm font-light max-w-sm leading-relaxed mx-auto">
              Our core curation committee reviews brand candidates weekly. We will be in contact with <strong className="font-semibold text-stone-900">{formData.contactName}</strong> shortly to talk through visual layouts, fixture structures, and dates.
            </p>

            {/* Informational specs summary */}
            <div className="mt-8 p-5 bg-stone-100 border border-stone-200/60 max-w-md w-full text-left rounded-none font-mono text-xs text-stone-700 leading-relaxed">
              <p className="font-bold border-b border-stone-300/60 pb-2 mb-2 text-stone-800 uppercase tracking-widest text-[9px]">
                SUBMISSION SUMMARY
              </p>
              <div className="space-y-1 text-[11px]">
                <p><span className="text-stone-400">BRAND:</span> {formData.brandName}</p>
                <p><span className="text-stone-400">CONTACT:</span> {formData.contactName} ({formData.email})</p>
                <p><span className="text-stone-400">RESIDENCY SELECTED:</span> <span className="uppercase text-amber-800 font-semibold">{formData.residencyModel}</span></p>
                <p className="text-[10px] text-stone-400 italic pt-2 border-t border-stone-300/40 mt-2">
                  Status: Pending review against Oxford Street retail rules. Partner code generated.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-8 px-6 py-3 bg-stone-900 hover:bg-stone-850 text-stone-150 font-sans text-xs tracking-widest uppercase transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
