/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onPlanSelect }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const comparisonData = [
    { name: 'Sales & Invoicing', business: true, enterprise: true },
    { name: 'Banking', business: true, enterprise: true },
    { name: 'Financial Reports', business: true, enterprise: true },
    { name: 'Inventory', business: true, enterprise: true },
    { name: 'Payroll', business: true, enterprise: true },
    { name: 'Multi Branch', business: true, enterprise: true },
    { name: 'Unlimited Users', business: true, enterprise: true },
    { name: 'API Access', business: false, enterprise: true },
    { name: 'Priority Support', business: true, enterprise: true },
    { name: 'Dedicated Manager', business: false, enterprise: true }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="type-small-content-semibold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Simple & Transparent
          </span>
          <h2 className="type-section-heading text-[var(--text-primary)] mt-4 mb-4">
            Find a plan that's right for you
          </h2>
          <p className="type-body-content text-[var(--text-secondary)]">
            Choose a level of capabilities that matches your transactions, employees, and reporting requirements. No hidden fees or lock-ins.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`type-menu-button-semibold transition-colors duration-200 ${billingPeriod === 'monthly' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
              Monthly billing
            </span>
            
            {/* Pill Switcher */}
            <button
              type="button"
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full p-0.5 cursor-pointer flex items-center transition-all duration-300 min-h-[44px]"
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-5.5 h-5.5 bg-[var(--color-primary)] rounded-full shadow-md"
                style={{
                  marginLeft: billingPeriod === 'yearly' ? 'auto' : '0'
                }}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`type-menu-button-semibold transition-colors duration-200 ${billingPeriod === 'yearly' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                Yearly billing
              </span>
              <span className="px-2.5 py-0.5 type-small-content-semibold text-white bg-[var(--color-success-green)] rounded-full uppercase tracking-wide">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Columns Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, i) => {
            const currentPrice = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            const subtitle = billingPeriod === 'monthly' ? '/month' : '/month (billed yearly)';

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between text-left transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[var(--color-secondary-blue-tint)] border-2 border-[var(--color-primary)] shadow-2xl scale-100 lg:scale-[1.03] z-10'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg hover:shadow-xl hover:border-[var(--color-primary)]/30'
                }`}
              >
                {/* Popular Ribbon/Badge */}
                {plan.isPopular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 type-small-content-semibold text-white bg-[var(--color-primary)] rounded-full uppercase tracking-widest shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="type-card-heading text-[var(--text-primary)] mb-1">
                    {plan.name} Plan
                  </h3>
                  <p className="type-small-content-medium text-[var(--text-secondary)] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Block with crossfade */}
                  <div className="flex items-baseline gap-1.5 mb-8 border-b border-[var(--border-color)] pb-6">
                    <span className="type-card-heading text-[var(--text-primary)] font-mono">LKR</span>
                    <div className="relative h-10 overflow-hidden flex items-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrice}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.25 }}
                          className="type-main-heading text-[var(--text-primary)] font-mono inline-block"
                        >
                          {currentPrice.toLocaleString('en-US')}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <span className="type-small-content text-[var(--text-secondary)] font-mono">
                      {subtitle}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 type-body-content text-[var(--text-primary)] leading-tight">
                        <span className={`p-0.5 rounded-full mt-0.5 shrink-0 ${plan.isPopular ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : 'bg-[var(--color-success-green)]/15 text-[var(--color-success-green)]'}`}>
                          <LucideIcon name="Check" size={12} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-Action button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full min-h-[44px] flex items-center justify-center rounded-xl type-menu-button-semibold transition-all cursor-pointer shadow-md ${
                    plan.isPopular
                      ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-blue-500/10'
                      : 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-blue-tint)]'
                  }`}
                >
                  {plan.ctaText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Small bottom action */}
        <div id="compare" className="text-center mt-12">
          <button
            onClick={() => setIsComparisonOpen(true)}
            className="inline-flex items-center gap-1.5 type-menu-button-semibold text-[var(--color-primary)] hover:underline group cursor-pointer bg-transparent border-0 min-h-[44px]"
          >
            Explore all feature comparisons &rarr;
          </button>
        </div>

      </div>

      {/* Feature Comparison Modal */}
      <AnimatePresence>
        {isComparisonOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setIsComparisonOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl w-full max-w-xl p-6 md:p-8 relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setIsComparisonOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] transition-colors cursor-pointer"
              >
                <LucideIcon name="X" size={16} />
              </button>

              <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-4 mb-6 text-left">
                <div className="p-2 bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] rounded-lg">
                  <LucideIcon name="Layers" size={20} />
                </div>
                <div>
                  <h3 className="type-card-heading text-[var(--text-primary)]">
                    PAGE 7 – FEATURE COMPARISON
                  </h3>
                  <p className="type-small-content text-[var(--text-secondary)]">Detailed plan capabilities side-by-side</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-color)]">
                      <th className="py-3 type-small-content-semibold uppercase tracking-wider text-[var(--text-secondary)]">Feature</th>
                      <th className="py-3 type-small-content-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">Business</th>
                      <th className="py-3 type-small-content-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)]/50">
                    {comparisonData.map((row) => (
                      <tr key={row.name} className="hover:bg-[var(--bg-page)]/50 transition-colors">
                        <td className="py-3 type-body-content font-semibold text-[var(--text-primary)]">{row.name}</td>
                        <td className="py-3 text-center">
                          {row.business ? (
                            <span className="inline-block p-1 rounded-full bg-green-500/10 text-[var(--color-success-green)]">
                              <LucideIcon name="Check" size={14} strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="text-[var(--text-secondary)] font-bold">—</span>
                          )}
                        </td>
                        <td className="py-3 text-center">
                          {row.enterprise ? (
                            <span className="inline-block p-1 rounded-full bg-green-500/10 text-[var(--color-success-green)]">
                              <LucideIcon name="Check" size={14} strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="text-[var(--text-secondary)] font-bold">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-5 border-t border-[var(--border-color)] flex justify-end gap-3">
                <button
                  onClick={() => setIsComparisonOpen(false)}
                  className="px-5 min-h-[44px] rounded-xl type-menu-button-semibold border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-page)] cursor-pointer flex items-center justify-center"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setIsComparisonOpen(false);
                    onPlanSelect('Business');
                  }}
                  className="px-5 min-h-[44px] rounded-xl type-menu-button-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 cursor-pointer flex items-center justify-center"
                >
                  Get Business Plan
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
