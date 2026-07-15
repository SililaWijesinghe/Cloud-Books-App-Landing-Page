/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { INTEGRATION_PARTNERS } from '../data';

export const Integrations: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const additionalPartners = [
    { name: 'Xero Ledger Sync', logo: 'Layers' },
    { name: 'Stripe Payments', logo: 'CreditCard' },
    { name: 'Microsoft Excel', logo: 'FileText' },
    { name: 'Mailchimp CRM', logo: 'Users' }
  ];

  const displayPartners = showAll 
    ? [...INTEGRATION_PARTNERS, ...additionalPartners] 
    : INTEGRATION_PARTNERS;

  return (
    <section id="integrations" className="py-20 md:py-28 relative bg-[var(--bg-card)]/30 border-y border-[var(--border-color)]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="type-small-content-semibold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-secondary-blue-tint)] px-3.5 py-1.5 rounded-full">
            Ecosystem Connectivity
          </span>
          <h2 className="type-section-heading text-[var(--text-primary)] mt-4 mb-4">
            Connect with the tools you love
          </h2>
          <p className="type-body-content text-[var(--text-secondary)]">
            CloudBooks bridges your billing pipeline directly with webshops, local payment processors, corporate bank feeds, and file vaults seamlessly.
          </p>
        </div>

        {/* Integration Badges / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          <AnimatePresence>
            {displayPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center gap-3.5 hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Simulated Logo Mark */}
                <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center font-bold font-mono group-hover:scale-110 transition-transform">
                  {partner.logo === 'Shopify' && <LucideIcon name="ShoppingCart" size={16} />}
                  {partner.logo === 'WooCommerce' && <LucideIcon name="FileText" size={16} />}
                  {partner.logo === 'PayHere' && <LucideIcon name="CreditCard" size={16} />}
                  {partner.logo === 'Slack' && <LucideIcon name="Globe" size={16} />}
                  {partner.logo === 'HubSpot' && <LucideIcon name="Users" size={16} />}
                  {partner.logo === 'Google Workspace' && <LucideIcon name="Briefcase" size={16} />}
                  {partner.logo === 'Dropbox' && <LucideIcon name="Layers" size={16} />}
                  {partner.logo === 'Zapier' && <LucideIcon name="TrendingUp" size={16} />}
                  {!['Shopify', 'WooCommerce', 'PayHere', 'Slack', 'HubSpot', 'Google Workspace', 'Dropbox', 'Zapier'].includes(partner.logo) && (
                    <LucideIcon name={partner.logo} size={16} />
                  )}
                </div>

                <span className="type-card-heading text-[var(--text-primary)]">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action button */}
        <div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 type-menu-button-semibold text-[var(--color-primary)] hover:underline cursor-pointer group min-h-[44px]"
          >
            {showAll ? 'Collapse additional integrations' : 'View all integrations'}
            <LucideIcon
              name="ArrowRight"
              size={14}
              className={`group-hover:translate-x-1 transition-transform ${showAll ? '-rotate-90' : ''}`}
            />
          </button>
        </div>

      </div>
    </section>
  );
};
