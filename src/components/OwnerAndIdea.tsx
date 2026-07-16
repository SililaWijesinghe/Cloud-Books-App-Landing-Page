/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
// @ts-ignore
import yasithaImage from '../assets/images/yasitha.webp';

export const OwnerAndIdea: React.FC = () => {
  return (
    <section id="owner-vision" className="py-16 md:py-24 relative overflow-hidden bg-[var(--bg-card)]/40 border-y border-[var(--border-color)]/60">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Founder Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-xl border border-[var(--border-color)] bg-[var(--bg-page)] group"
            >
              <img
                src={yasithaImage}
                alt="Yasitha Kaushalya - Chartered Accountant & Founder of CloudBooks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Name Tag on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[9px] font-bold tracking-widest text-[#006DFF] bg-white px-2.5 py-1 rounded-full shadow-sm mb-2 inline-block">
                  FOUNDER & ARCHITECT
                </span>
                <h4 className="text-lg font-extrabold text-white tracking-tight">
                  Yasitha Kaushalya
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Chartered Accountant (CA Sri Lanka)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visionary Story & Idea Details */}
          <div className="lg:col-span-7 text-left flex flex-col gap-5 items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-[var(--color-primary)]/20 text-xs font-semibold text-[var(--color-primary)] w-fit">
                <LucideIcon name="Sparkles" size={12} />
                The Origin Story
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                Designed by an Accountant, <br className="hidden md:block"/>
                <span className="text-[#006DFF]">Built for Your Growth.</span>
              </h2>
            </motion.div>

            {/* Owner Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-5 rounded-2xl bg-[var(--bg-page)] border-l-4 border-[#006DFF] border-y border-r border-[var(--border-color)]/60 shadow-sm"
            >
              <p className="text-sm italic text-[var(--text-primary)] leading-relaxed font-medium">
                "Over a decade of auditing diverse Sri Lankan businesses showed me that SMEs struggle because traditional software is too complex, costly, or disconnected from local tax realities."
              </p>
            </motion.div>

            {/* The Vision & Compliance Idea */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed"
            >
              <p>
                As a practicing Chartered Accountant, Yasitha designed CloudBooks to simplify compliance. It bridges the gap between daily operations and tax reporting, offering single-click SVAT and IRD-aligned exports.
              </p>
            </motion.div>

            {/* Core Idea Pill Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-1"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[var(--color-success-green)]/15 text-[var(--color-success-green)] flex items-center justify-center mt-0.5 shrink-0">
                  <LucideIcon name="Check" size={10} strokeWidth={3} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[var(--text-primary)]">Sri Lanka Tax Alignment</h5>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">Built-in VAT and SVAT tracking features.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[var(--color-success-green)]/15 text-[var(--color-success-green)] flex items-center justify-center mt-0.5 shrink-0">
                  <LucideIcon name="Check" size={10} strokeWidth={3} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[var(--text-primary)]">Auditor-Friendly Ledgers</h5>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">Speed up your annual audits with structured data.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
