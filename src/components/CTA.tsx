/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface CTAProps {
  onStartTrial: () => void;
  onRequestDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartTrial, onRequestDemo }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[var(--color-primary)] text-white">
      {/* Absolute decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      {/* Floating vector wireframes */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-10 hidden xl:block">
        <LucideIcon name="Cloud" size={240} strokeWidth={1} />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Circular logo badge */}
          <div className="w-14 h-14 rounded-2xl bg-white text-[var(--color-primary)] flex items-center justify-center shadow-lg shadow-blue-800/20 mb-2">
            <LucideIcon name="Cloud" size={32} strokeWidth={2.5} />
          </div>

          <h2 className="type-section-heading max-w-2xl text-white">
            Ready to simplify your accounting?
          </h2>
          
          <p className="type-body-content text-blue-100 max-w-xl font-medium">
            Join thousands of Sri Lankan businesses and start automating your books, payroll, and stock control today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStartTrial}
              className="w-full sm:w-auto px-8 min-h-[44px] rounded-xl type-menu-button-semibold bg-white text-[var(--color-primary)] hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Free Trial
              <LucideIcon name="ArrowRight" size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-8 min-h-[44px] rounded-xl type-menu-button-semibold border-2 border-white text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Free Demo
            </motion.button>
          </div>

          {/* Quick legal / trust helper text */}
          <p className="type-small-content text-blue-200 mt-2 font-medium">
            No credit card required • 14-day free trial • Instantly set up in 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
