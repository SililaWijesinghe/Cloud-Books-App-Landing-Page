/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';

export const WhyChoose: React.FC = () => {
  const items = [
    {
      title: 'Access Your Business Anytime, Anywhere',
      desc: 'Manage your accounting, sales, inventory, and reports from any device with an internet connection.',
      icon: 'Smartphone',
      color: 'blue'
    },
    {
      title: 'Secure Cloud-Based Technology',
      desc: 'Your business data is protected with modern security systems, automated backups, and controlled user access.',
      icon: 'Shield',
      color: 'green'
    },
    {
      title: 'Real-Time Business Insights',
      desc: 'Get instant visibility into revenue, expenses, profitability, cash flow, and business performance.',
      icon: 'BarChart3',
      color: 'indigo'
    },
    {
      title: 'Complete Accounting Automation',
      desc: 'Reduce manual work and improve accuracy by automating your daily accounting processes.',
      icon: 'Cpu',
      color: 'purple'
    },
    {
      title: 'Designed for Sri Lankan Businesses',
      desc: 'Built considering Sri Lankan accounting requirements, taxation (VAT, SVAT, SSCL), business practices, and SME needs.',
      icon: 'MapPin',
      color: 'orange'
    },
    {
      title: 'Affordable & Scalable',
      desc: 'Start small and upgrade as your business grows without expensive upfront software investments.',
      icon: 'TrendingUp',
      color: 'teal'
    }
  ];

  return (
    <section id="why-choose" className="py-20 md:py-28 relative bg-[var(--bg-page)] border-b border-[var(--border-color)]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Why Choose CloudBooks?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mt-4 mb-4">
            Cloud Accounting Software Designed for Modern Sri Lankan Businesses
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Running a successful business requires more than just recording transactions. You need accurate information, powerful insights, and complete control over your financial operations.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group text-left flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LucideIcon name={item.icon} size={22} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[var(--color-primary)] text-xs font-bold mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <LucideIcon name="ArrowRight" size={12} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Home page intro text directly from page 1 of PDF */}
        <div className="mt-20 p-8 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] text-left shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10" />
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4">
            Simplify Your Accounting. Empower Your Business Growth.
          </h3>
          <div className="space-y-4 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
            <p>
              <strong>CloudBooks</strong> is a next-generation cloud accounting and business management platform designed to help Sri Lankan businesses automate accounting, streamline operations, and make smarter decisions with real-time financial information.
            </p>
            <p>
              Whether you are a startup building your first business, a growing SME expanding operations, a retailer managing inventory, a manufacturer controlling costs, or an established enterprise operating multiple branches, CloudBooks provides everything you need in one powerful platform.
            </p>
            <p className="font-semibold text-[var(--text-primary)]">
              With CloudBooks, your financial data is available anytime, anywhere, allowing you to manage your business confidently from your office, home, or while travelling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
