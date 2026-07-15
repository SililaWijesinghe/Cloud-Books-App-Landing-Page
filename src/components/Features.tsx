/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { FEATURES } from '../data';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[var(--bg-page)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="type-small-content-semibold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Complete Business Hub
          </span>
          <h2 className="type-section-heading text-[var(--text-primary)] mt-4 mb-5">
            Run more than just your books
          </h2>
          <p className="type-body-content text-[var(--text-secondary)]">
            CloudBooks combines your financial accounts, billing pipeline, stock inventory, and employee payroll into one intelligent platform.
          </p>
        </div>

        {/* Features 4x2 Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedFeature(feature)}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--color-primary)]/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-start text-left group"
            >
              {/* Feature Icon box */}
              <div className="p-3 rounded-xl bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] mb-5 group-hover:scale-110 transition-transform duration-300">
                <LucideIcon name={feature.icon} size={22} strokeWidth={2.2} />
              </div>

              <h3 className="type-card-heading text-[var(--text-primary)] mb-2.5 flex items-center gap-1">
                {feature.title}
                <LucideIcon
                  name="ArrowRight"
                  size={14}
                  className="text-[var(--color-primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </h3>

              <p className="type-body-content text-[var(--text-secondary)] flex-grow">
                {feature.description}
              </p>

              <span className="type-small-content-semibold text-[var(--color-primary)] hover:underline mt-4 flex items-center gap-1">
                View capabilities &rarr;
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Detailed Modal popup for deeper engagement */}
        <AnimatePresence>
          {selectedFeature && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/50 backdrop-blur-sm">
              {/* Backdrop closer */}
              <div className="absolute inset-0" onClick={() => setSelectedFeature(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 p-6 md:p-8"
              >
                {/* Modal close Button */}
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-colors cursor-pointer"
                >
                  <LucideIcon name="X" size={18} />
                </button>

                <div className="flex items-center gap-4 mb-6 text-left">
                  <div className="p-3.5 rounded-2xl bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)]">
                    <LucideIcon name={selectedFeature.icon} size={26} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="type-subheading text-[var(--text-primary)]">
                      {selectedFeature.title} Capabilities
                    </h3>
                    <p className="type-body-content text-[var(--text-secondary)]">{selectedFeature.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left mt-4">
                  {/* Features checklist */}
                  <div>
                    <h4 className="type-small-content-semibold uppercase tracking-widest text-[var(--color-gray-muted)] mb-4">
                      Core System Features
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {selectedFeature.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 type-body-content text-[var(--text-primary)]">
                          <span className="p-0.5 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] mt-0.5 shrink-0">
                            <LucideIcon name="Check" size={12} strokeWidth={3} />
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business benefits checklist */}
                  <div>
                    <h4 className="type-small-content-semibold uppercase tracking-widest text-[var(--color-success-green)] mb-4">
                      Key Sri Lankan Benefits
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {selectedFeature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2.5 type-body-content text-[var(--text-primary)]">
                          <span className="p-0.5 rounded bg-[var(--color-success-green)]/10 text-[var(--color-success-green)] mt-0.5 shrink-0">
                            <LucideIcon name="Check" size={12} strokeWidth={3} />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 type-small-content text-[var(--text-secondary)]">
                      Built specifically considering local tax (VAT/SSCL) laws, EPF/ETF requirements, and Sri Lankan business practices.
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[var(--border-color)] flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="px-5 min-h-[44px] rounded-xl type-menu-button-semibold border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-all cursor-pointer flex items-center justify-center"
                  >
                    Close
                  </button>
                  <a
                    href="#pricing"
                    onClick={() => setSelectedFeature(null)}
                    className="px-5 min-h-[44px] rounded-xl type-menu-button-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all cursor-pointer flex items-center justify-center"
                  >
                    Get Started Free
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
