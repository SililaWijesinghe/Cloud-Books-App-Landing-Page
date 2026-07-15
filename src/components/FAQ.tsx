/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { FAQS } from '../data';

export const FAQ: React.FC = () => {
  const [openCol1Index, setOpenCol1Index] = useState<number | null>(null);
  const [openCol2Index, setOpenCol2Index] = useState<number | null>(null);

  // Divide the 8 FAQs equally into 2 columns for desktop
  const col1Faqs = FAQS.slice(0, 4);
  const col2Faqs = FAQS.slice(4, 8);

  const toggleCol1 = (index: number) => {
    setOpenCol1Index(openCol1Index === index ? null : index);
  };

  const toggleCol2 = (index: number) => {
    setOpenCol2Index(openCol2Index === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="type-small-content-semibold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Any Questions?
          </span>
          <h2 className="type-section-heading text-[var(--text-primary)] mt-4 mb-4">
            Frequently asked questions
          </h2>
          <p className="type-body-content text-[var(--text-secondary)]">
            Can't find the answer you are looking for? Contact our local support team at +94 77 132 5070 for immediate onboarding assistance.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
          
          {/* Column 1 Accordion */}
          <div className="flex flex-col gap-4">
            {col1Faqs.map((faq, index) => {
              const isOpen = openCol1Index === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleCol1(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left type-card-heading text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none min-h-[44px] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[var(--text-secondary)]"
                    >
                      <LucideIcon name="ChevronDown" size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 type-body-content text-[var(--text-secondary)] text-left border-t border-[var(--border-color)]/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column 2 Accordion */}
          <div className="flex flex-col gap-4">
            {col2Faqs.map((faq, index) => {
              const isOpen = openCol2Index === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleCol2(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left type-card-heading text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none min-h-[44px] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[var(--text-secondary)]"
                    >
                      <LucideIcon name="ChevronDown" size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 type-body-content text-[var(--text-secondary)] text-left border-t border-[var(--border-color)]/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* Small bottom action */}
        <div className="text-center mt-12">
          <a
            href="#compare"
            className="inline-flex items-center justify-center gap-1.5 type-menu-button-semibold text-[var(--color-primary)] hover:underline min-h-[44px]"
          >
            View all FAQs in our Help Center &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
