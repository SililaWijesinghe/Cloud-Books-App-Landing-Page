/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { OwnerAndIdea } from './components/OwnerAndIdea';
import { Pricing } from './components/Pricing';
import { Integrations } from './components/Integrations';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LucideIcon } from './components/LucideIcon';
import { WhyChoose } from './components/WhyChoose';
import { Industries } from './components/Industries';
import { PartnerProgramme } from './components/PartnerProgramme';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'light';
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showPromo, setShowPromo] = useState(true);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalType, setDemoModalType] = useState<'trial' | 'demo'>('trial');
  const [selectedPlan, setSelectedPlan] = useState<string>('Business');

  // Form Fields
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '1-10',
    industry: 'Retail & Trading'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 400); // smooth exit
            return 100;
          }
          const increment = Math.floor(Math.random() * 10) + 5;
          return Math.min(prev + increment, 100);
        });
      }, 60);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenDemoModal = (type: 'trial' | 'demo', planName = 'Business') => {
    setDemoModalType(type);
    setSelectedPlan(planName);
    setFormStep(1);
    setIsDemoModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Please fill in all contact details.');
        return;
      }
      setFormStep(2);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName) {
      alert('Please fill in your company name.');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(3);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[var(--bg-page)] text-[var(--text-primary)] transition-all">
      
      {/* 0 to 100 Loading Preloader with Logo */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6 ${theme === 'dark' ? 'bg-[#000B1E]' : 'bg-white'}`}
          >
            <div className="flex flex-col items-center gap-5 text-center max-w-sm">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center"
              >
                <span className={`text-4xl font-extrabold tracking-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  CloudBooks
                </span>
              </motion.div>

              <div className="flex flex-col gap-2 w-full mt-4">
                <div className={`flex justify-between items-center text-[10px] font-bold tracking-wider font-mono uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
                  <span>Initializing Secure Ledgers</span>
                  <span>{loadingProgress}%</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative border border-slate-200/30">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#001F5B] via-[#006DFF] to-[#18BDF2] rounded-full"
                    style={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                Sri Lanka's Compliance and Accounting Core v4.1
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Promotional Top Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[var(--color-primary)] text-white text-xs md:text-sm font-semibold py-3 px-6 flex items-center justify-between z-50 border-b border-white/10 relative text-center"
          >
            <div className="flex-1 flex items-center justify-center gap-2 flex-wrap">
              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">OFFER</span>
              <span>Limited Time: 90% OFF for the first 6 months — Start your free trial today!</span>
              <button
                onClick={() => handleOpenDemoModal('trial', 'Business')}
                className="underline hover:text-blue-100 font-bold ml-1 flex items-center gap-0.5 inline-flex"
              >
                Register &rarr;
              </button>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="p-1 hover:bg-white/10 rounded transition-colors ml-4 shrink-0"
              aria-label="Dismiss Banner"
            >
              <LucideIcon name="X" size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navbar Component */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onRequestDemo={() => handleOpenDemoModal('demo')}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* 3. Hero Section */}
        <Hero
          onStartTrial={() => handleOpenDemoModal('trial')}
          onWatchDemo={() => handleOpenDemoModal('demo')}
        />

        {/* 4. Trusted-By Logo Marquee */}
        <TrustedBy />

        {/* 5. Owner & Visionary Idea Section (Origin Story) */}
        <OwnerAndIdea />

        {/* Why Choose CloudBooks Section */}
        <WhyChoose />

        {/* 6. Features Grid Section */}
        <Features />

        {/* Industry Solutions Section */}
        <Industries />

        {/* 7. Pricing Matrix Section */}
        <Pricing
          onPlanSelect={(planName) => handleOpenDemoModal('trial', planName)}
        />

        {/* Partner Programme Section */}
        <PartnerProgramme />

        {/* 8. Third-Party Integrations */}
        <Integrations />

        {/* 9. FAQ Accordions */}
        <FAQ />

        {/* 10. Closing Call-To-Action Banner */}
        <CTA
          onStartTrial={() => handleOpenDemoModal('trial')}
          onRequestDemo={() => handleOpenDemoModal('demo')}
        />

      </main>

      {/* 11. Footer Component */}
      <Footer onStartTrial={() => handleOpenDemoModal('trial')} />

      {/* Interactive Onboarding Trial/Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Backdrop Closer */}
            <div className="absolute inset-0" onClick={() => setIsDemoModalOpen(false)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative z-10 p-6 md:p-8 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-colors cursor-pointer"
              >
                <LucideIcon name="X" size={16} />
              </button>

              {/* Success Screen (Step 3) */}
              {formStep === 3 ? (
                <div className="text-center py-6 flex flex-col items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success-green)]/10 text-[var(--color-success-green)] flex items-center justify-center">
                    <LucideIcon name="Check" size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">Registration Complete!</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">
                      Thank you, <strong>{formData.fullName}</strong>. Your cloud workspace for <strong>{formData.companyName}</strong> is now provisioning.
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      We have sent instructions and login credentials to your business email: <span className="font-bold text-[var(--text-primary)] font-mono">{formData.email}</span>.
                    </p>
                  </div>
                  <div className="w-full p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] space-y-2 mt-2">
                    <p className="font-bold text-[var(--text-primary)]">Need Immediate Setup Help?</p>
                    <p>Our Colombo onboarding desk is active. Call us to jumpstart your compliance setup.</p>
                    <p className="font-bold text-[var(--color-primary)] font-mono">+94 77 132 5070</p>
                  </div>
                  <button
                    onClick={() => setIsDemoModalOpen(false)}
                    className="mt-4 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-md w-full hover:bg-[var(--color-primary)]/90 cursor-pointer"
                  >
                    Enter Live Demo Console
                  </button>
                </div>
              ) : (
                /* Interactive Form Screen */
                <div>
                  <div className="flex items-center gap-3.5 pb-4 border-b border-[var(--border-color)]/60 mb-6">
                    <div className="p-2.5 rounded-xl bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)]">
                      <LucideIcon name={demoModalType === 'trial' ? 'Sparkles' : 'Smartphone'} size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {demoModalType === 'trial' ? 'Start Your Free Trial' : 'Book a Live Product Demo'}
                      </h3>
                      <p className="text-[11px] text-[var(--text-secondary)] font-medium">
                        {demoModalType === 'trial' ? '14 days of unrestricted access • No billing card required' : 'Interact directly with a certified local systems engineer'}
                      </p>
                    </div>
                  </div>

                  {/* Form step tracker */}
                  <div className="flex items-center gap-2 mb-6 text-xs font-bold text-[var(--color-gray-muted)]">
                    <span className={formStep === 1 ? 'text-[var(--color-primary)]' : ''}>1. Contact Info</span>
                    <LucideIcon name="ArrowRight" size={12} />
                    <span className={formStep === 2 ? 'text-[var(--color-primary)]' : ''}>2. Business details</span>
                  </div>

                  {formStep === 1 ? (
                    /* Step 1: Contact Form */
                    <form onSubmit={handleNextStep} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleFormChange}
                          placeholder="E.g., Dinuka Perera"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                          Business Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="dinuka@company.lk"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+94 77 XXX XXXX"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] font-mono"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-6 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-md hover:bg-[var(--color-primary)]/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Continue to Business Info
                        <LucideIcon name="ArrowRight" size={16} />
                      </button>
                    </form>
                  ) : (
                    /* Step 2: Company details */
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleFormChange}
                          placeholder="Ceylon Exports Pvt Ltd"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                            Company Size
                          </label>
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer"
                          >
                            <option value="1-10">1-10 Employees</option>
                            <option value="11-50">11-50 Employees</option>
                            <option value="51-200">51-200 Employees</option>
                            <option value="200+">200+ Employees</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                            Industry Division
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer"
                          >
                            <option value="Retail & Trading">Retail & Trading</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Professional Service">Professional Services</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="Non-Profit">Non-Profit</option>
                          </select>
                        </div>
                      </div>

                      {demoModalType === 'trial' && (
                        <div>
                          <label className="block text-xs font-bold uppercase text-[var(--text-primary)] mb-1.5">
                            Preferred Starting Plan
                          </label>
                          <select
                            value={selectedPlan}
                            onChange={(e) => setSelectedPlan(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer"
                          >
                            <option value="Professional">Professional (LKR 2,500/mo)</option>
                            <option value="Business">Business (LKR 5,000/mo)</option>
                            <option value="Enterprise">Enterprise (LKR 10,000/mo)</option>
                          </select>
                        </div>
                      )}

                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="px-5 py-3.5 rounded-xl text-sm font-semibold border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-all flex items-center justify-center cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-grow py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-md hover:bg-[var(--color-primary)]/90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Setting up ledger space...</span>
                          ) : (
                            <>
                              <span>{demoModalType === 'trial' ? 'Deploy Free Trial Instance' : 'Schedule Demo Consultation'}</span>
                              <LucideIcon name="Check" size={16} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
