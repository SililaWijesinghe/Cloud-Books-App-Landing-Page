/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { INDUSTRIES, PARTNERS_PROGRAM, CORE_VALUES } from '../data';

interface FooterProps {
  onStartTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartTrial }) => {
  const [activeModal, setActiveModal] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const showAboutModal = () => {
    setActiveModal({
      title: 'About CloudBooks',
      content: (
        <div className="text-left space-y-4 text-sm">
          <p className="font-bold text-[var(--color-primary)]">Empowering Sri Lankan Businesses Through Technology</p>
          <p className="text-[var(--text-secondary)]">
            CloudBooks was created with one simple goal: <strong>to make professional cloud accounting technology accessible to every business in Sri Lanka.</strong>
          </p>
          <p className="text-[var(--text-secondary)]">
            We believe businesses should spend less time managing complex spreadsheets and paperwork, and more time focusing on operational scaling and growth.
          </p>
          <div className="border-t border-[var(--border-color)]/50 pt-3">
            <p className="font-semibold text-[var(--text-primary)]">Our Vision</p>
            <p className="text-[var(--text-secondary)] text-xs">To become Sri Lanka's most trusted, secure cloud accounting and business compliance platform.</p>
          </div>
          <div className="pt-1">
            <p className="font-semibold text-[var(--text-primary)]">Our Core Values</p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {CORE_VALUES.map((val) => (
                <div key={val.title} className="p-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--border-color)]/40">
                  <span className="font-bold text-[var(--text-primary)] text-xs block mb-1">{val.title}</span>
                  <span className="text-[var(--text-secondary)] text-[10px] leading-tight block">{val.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    });
  };

  const showContactModal = () => {
    setActiveModal({
      title: 'Contact CloudBooks',
      content: (
        <div className="text-left space-y-4 text-sm">
          <p className="font-bold text-[var(--color-primary)]">Reach out for local support and onboarding</p>
          <p className="text-[var(--text-secondary)]">
            Our specialized support desk is located in Nugegoda and understands local taxation policies, VAT, SSCL, and salary structures.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center">
                <LucideIcon name="Smartphone" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-gray-muted)] font-bold uppercase tracking-wider">Phone Hotline</p>
                <p className="text-sm font-bold text-[var(--text-primary)] font-mono">+94 77 132 5070</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center">
                <LucideIcon name="FileText" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-gray-muted)] font-bold uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-bold text-[var(--text-primary)] font-mono hover:underline">
                  <a href="mailto:info@cloudbook.lk">info@cloudbook.lk</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center">
                <LucideIcon name="Globe" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-gray-muted)] font-bold uppercase tracking-wider">Official Website</p>
                <p className="text-sm font-bold text-[var(--text-primary)] font-mono hover:underline">
                  <a href="https://www.cloudbook.lk" target="_blank" rel="noopener noreferrer">www.cloudbook.lk</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center">
                <LucideIcon name="MapPin" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-gray-muted)] font-bold uppercase tracking-wider">Headquarters Location</p>
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  No. 165, Highlevel Road, Nugegoda, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    });
  };

  const showIndustryModal = (industry: any) => {
    setActiveModal({
      title: `${industry.title} Solution`,
      content: (
        <div className="text-left space-y-4 text-sm">
          <p className="font-bold text-[var(--color-primary)]">{industry.tagline}</p>
          <div>
            <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">{industry.prefix}</p>
            <ul className="space-y-1.5 list-disc pl-5">
              {industry.points.map((p: string, i: number) => (
                <li key={i} className="text-xs text-[var(--text-primary)] font-semibold">{p}</li>
              ))}
            </ul>
          </div>
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed border-t border-[var(--border-color)]/50 pt-3">
            CloudBooks configures your ledger accounts dynamically to match industry-specific practices. Our system automates retail VAT invoices, tracks batch expiration dates, aggregates bills, and produces localized financial statements ready for audits.
          </p>
          <div className="p-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 text-xs text-[var(--text-secondary)]">
            <strong>Key Benefit:</strong> Real-time branch inventory sync and cross-location sales reporting available under our Business Plan.
          </div>
        </div>
      )
    });
  };

  const showPartnersModal = (partner: any) => {
    setActiveModal({
      title: partner.title,
      content: (
        <div className="text-left space-y-4 text-sm">
          <p className="font-bold text-[var(--color-primary)]">{partner.tagline}</p>
          <div>
            <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">{partner.prefix}</p>
            <ul className="space-y-1.5 list-disc pl-5">
              {partner.points.map((p: string, i: number) => (
                <li key={i} className="text-xs text-[var(--text-primary)] font-semibold">{p}</li>
              ))}
            </ul>
          </div>
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed border-t border-[var(--border-color)]/50 pt-3">
            Become a part of the CloudBooks partner program and provide modern, localized cloud bookkeeping and accounting tools to businesses. You will gain access to free certification training, marketing materials, a dedicated accounts partner, and high-margin referral sharing opportunities.
          </p>
          <div className="flex justify-end gap-3 pt-3">
            <button
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 text-xs font-bold border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-page)] text-[var(--text-primary)] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                setActiveModal(null);
                onStartTrial();
              }}
              className="px-4 py-2 text-xs font-bold bg-[var(--color-primary)] text-white rounded-xl cursor-pointer"
            >
              Apply to Partner Program
            </button>
          </div>
        </div>
      )
    });
  };

  return (
    <footer className="bg-[#030B17] text-gray-400 py-16 border-t border-gray-900 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-8 mb-12">
          
          {/* Logo / Brand block (2 columns) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-md">
                <LucideIcon name="Cloud" size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Cloud<span className="text-[var(--color-primary)]">Books</span>
              </span>
            </a>
            <p className="text-gray-400 text-xs leading-relaxed text-left max-w-sm mt-1">
              Sri Lanka's premier cloud accounting & business management platform. Built to automate ledgers, payroll compliance, inventory tracking and invoicing.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-3">
              <a href="#facebook" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
                <LucideIcon name="Facebook" size={18} />
              </a>
              <a href="#linkedin" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
                <LucideIcon name="Linkedin" size={18} />
              </a>
              <a href="#youtube" className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">
                <LucideIcon name="Youtube" size={18} />
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#integrations" onClick={(e) => handleLinkClick(e, '#integrations')} className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">System Updates</a></li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {INDUSTRIES.map((ind) => (
                <li key={ind.title}>
                  <button
                    onClick={() => showIndustryModal(ind)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-white transition-colors">Help Center & FAQ</a></li>
              {PARTNERS_PROGRAM.map((p) => (
                <li key={p.title}>
                  <button
                    onClick={() => showPartnersModal(p)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={showAboutModal} className="hover:text-white transition-colors text-left">
                  About Us & Vision
                </button>
              </li>
              <li>
                <button onClick={showContactModal} className="hover:text-white transition-colors text-left">
                  Contact Local Office
                </button>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Careers <span className="text-[10px] text-[var(--color-primary)] font-bold ml-1">WE'RE HIRING</span>
                </a>
              </li>
              <li>
                <a href="#partners" onClick={showContactModal} className="hover:text-white transition-colors">
                  System Partners
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-900/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <span>&copy; 2026 CloudBooks. All rights reserved.</span>
            <span className="text-gray-500">|</span>
            <span>
              Developed by{' '}
              <a 
                href="https://premierdigital.lk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white text-[var(--color-primary)] font-semibold underline decoration-[var(--color-primary)]/40 hover:decoration-white transition-all"
              >
                Premier Digital Pvt Ltd
              </a>
            </span>
            <span className="text-gray-500">|</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1.5 p-1 px-2.5 rounded-lg bg-gray-950 border border-gray-900">
            <LucideIcon name="Globe" size={12} />
            <select className="bg-transparent text-gray-400 text-[10px] font-bold focus:outline-none cursor-pointer">
              <option value="en">English (Sri Lanka)</option>
              <option value="si">සිංහල (Sinhala)</option>
              <option value="ta">தமிழ் (Tamil)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Interactive Modal Portal popup */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setActiveModal(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl w-full max-w-lg p-6 relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-colors"
              >
                <LucideIcon name="X" size={16} />
              </button>

              <div className="flex items-center gap-3.5 border-b border-[var(--border-color)]/50 pb-3 mb-4 text-left">
                <div className="p-2 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)]">
                  <LucideIcon name="Shield" size={20} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {activeModal.title}
                </h3>
              </div>

              <div className="py-2">
                {activeModal.content}
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-color)]/30 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-xs font-bold bg-[var(--color-primary)] text-white rounded-xl shadow-md hover:bg-[var(--color-primary)]/90"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
