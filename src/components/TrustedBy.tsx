/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRUSTED_COMPANIES } from '../data';

export const TrustedBy: React.FC = () => {
  // Duplicate list to ensure seamless marquee looping
  const doubleCompanies = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section className="py-12 border-y border-[var(--border-color)]/60 bg-[var(--bg-card)]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center type-small-content-semibold uppercase tracking-widest text-[var(--color-gray-muted)] mb-8">
          Trusted by 1,000+ businesses across Sri Lanka
        </p>
        
        {/* Continuous Marquee container */}
        <div className="relative w-full overflow-hidden flex">
          {/* Left/Right fading gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg-page)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg-page)] to-transparent z-10 pointer-events-none" />
 
          <div className="animate-marquee flex items-center gap-16 py-2">
            {doubleCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 min-w-[120px] select-none"
              >
                <span className="type-card-heading tracking-wider text-[var(--color-slate)]/50 hover:text-[var(--color-primary)] transition-colors duration-300 font-sans cursor-pointer">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
