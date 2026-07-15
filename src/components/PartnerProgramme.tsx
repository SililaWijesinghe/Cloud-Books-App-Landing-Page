/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PARTNERS_PROGRAM, PARTNER_BENEFITS } from '../data';

export const PartnerProgramme: React.FC = () => {
  return (
    <section id="partner-programme" className="py-20 md:py-28 bg-[var(--bg-card)] border-b border-[var(--border-color)]/50 relative overflow-hidden">
      {/* Subtle details background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="type-small-content-semibold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Partnership Opportunities
          </span>
          <h2 className="type-section-heading text-[var(--text-primary)] mt-4 mb-4">
            Grow Together with CloudBooks
          </h2>
          <p className="type-body-content text-[var(--text-secondary)]">
            Become a certified CloudBooks partner to deploy localized, modern cloud accounting and billing solutions across Sri Lankan businesses.
          </p>
        </div>

        {/* 2x2 Grid of Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PARTNERS_PROGRAM.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-3xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 text-left flex flex-col justify-between hover:border-[var(--color-primary)]/30 transition-all group"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] group-hover:scale-110 transition-all">
                    <LucideIcon name={partner.icon} size={22} />
                  </div>
                  <h3 className="type-card-heading text-[var(--text-primary)]">
                    {partner.title}
                  </h3>
                </div>
                
                <p className="type-body-content text-[var(--text-secondary)] mb-6 font-medium">
                  {partner.tagline}
                </p>

                {/* Sub items checklist */}
                <div className="border-t border-[var(--border-color)]/50 pt-5 mt-4">
                  <p className="type-small-content-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                    {partner.prefix}
                  </p>
                  <ul className="space-y-2.5">
                    {partner.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 type-body-content text-[var(--text-primary)]">
                        <span className="p-0.5 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0 mt-0.5">
                          <LucideIcon name="Check" size={10} strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    // Scroll to footer or trigger onboarding modal
                    const footerContact = document.getElementById('navbar-header');
                    if (footerContact) {
                      footerContact.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 type-menu-button-semibold text-[var(--color-primary)] hover:underline min-h-[44px]"
                >
                  Apply as {partner.title} &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Partner Benefits Bar directly from page 13 of PDF */}
        <div className="p-8 md:p-10 rounded-3xl bg-[var(--bg-page)] border border-[var(--border-color)] text-left shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <h3 className="type-subheading text-[var(--text-primary)] mb-2">
                All-Inclusive Partner Benefits
              </h3>
              <p className="type-body-content text-[var(--text-secondary)]">
                Our partners receive extensive backup from our central Sri Lankan operations, including marketing assistance and direct systems engineers support.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {PARTNER_BENEFITS.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]/60 type-body-content font-bold text-[var(--text-primary)] shadow-sm"
                  >
                    <div className="p-1 rounded-full bg-[var(--color-success-green)]/10 text-[var(--color-success-green)] shrink-0">
                      <LucideIcon name="Check" size={12} strokeWidth={3.5} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
