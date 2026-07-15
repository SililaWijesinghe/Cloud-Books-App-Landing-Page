/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { INDUSTRIES } from '../data';

export const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentIndustry = INDUSTRIES[activeTab];

  return (
    <section id="industries" className="py-20 md:py-28 bg-[var(--bg-page)] relative overflow-hidden border-b border-[var(--border-color)]/50">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mt-4 mb-4">
            One Powerful Platform. Unlimited Business Possibilities.
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            CloudBooks is designed to support businesses across different industries. Choose your sector to see how we streamline your specific workflow.
          </p>
        </div>

        {/* Outer Tabs/Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Tabs Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 w-full">
            {INDUSTRIES.map((ind, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={ind.title}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-4.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[var(--bg-card)] border-[var(--color-primary)] shadow-md text-[var(--color-primary)] font-bold'
                      : 'bg-transparent border-[var(--border-color)]/60 hover:bg-[var(--bg-card)]/50 hover:border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl transition-all ${
                      isActive ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)]'
                    }`}>
                      <LucideIcon name={ind.icon} size={18} />
                    </div>
                    <span className="text-sm md:text-base font-semibold">{ind.title}</span>
                  </div>
                  <LucideIcon
                    name="ChevronRight"
                    size={16}
                    className={`transition-transform duration-200 ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Industry Deep Dive Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-8 md:p-10 shadow-lg text-left flex flex-col justify-between min-h-[460px] relative overflow-hidden"
              >
                <div>
                  {/* Decorative Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center mb-6">
                    <LucideIcon name={currentIndustry.icon} size={28} />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-2">
                    {currentIndustry.title}
                  </h3>
                  
                  <p className="text-base text-[var(--color-primary)] font-semibold mb-6">
                    {currentIndustry.tagline}
                  </p>

                  <div className="border-t border-[var(--border-color)]/60 pt-6 mt-6">
                    <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">
                      {currentIndustry.prefix}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentIndustry.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3 text-sm text-[var(--text-primary)] font-medium">
                          {currentIndustry.bulletType === 'check' ? (
                            <span className="p-0.5 rounded bg-[var(--color-success-green)]/10 text-[var(--color-success-green)] mt-0.5 shrink-0">
                              <LucideIcon name="Check" size={12} strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                          )}
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[var(--border-color)]/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[var(--text-secondary)]">
                    Interested in starting with <span className="font-bold text-[var(--text-primary)]">{currentIndustry.title}</span> templates?
                  </div>
                  <a
                    href="#pricing"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all flex items-center gap-1.5"
                  >
                    Select Plan
                    <LucideIcon name="ArrowRight" size={12} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
