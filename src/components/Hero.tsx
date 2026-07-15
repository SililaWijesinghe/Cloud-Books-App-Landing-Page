/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { RECENT_TRANSACTIONS, BANK_ACCOUNTS } from '../data';

// Custom lightweight count-up component
const CountUp: React.FC<{ value: number; duration?: number; prefix?: string }> = ({
  value,
  duration = 1200,
  prefix = ''
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    const start = 0;
    const end = value;
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, 20);
    
    const startTime = Date.now();
    const timer = setInterval(() => {
      const remaining = Math.max(0, startTime + duration - Date.now());
      const progress = 1 - remaining / duration;
      const current = Math.floor(start + progress * range);
      
      if (active) {
        setCount(current);
      }
      
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [value, duration]);

  return <span>{prefix}{count.toLocaleString('en-US')}</span>;
};

interface HeroProps {
  onStartTrial: () => void;
  onWatchDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTrial, onWatchDemo }) => {
  const [selectedDonutSegment, setSelectedDonutSegment] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics'>('overview');

  const stats = [
    { label: 'Total Revenue (LKR)', value: 2450000, change: '+12.3%', up: true },
    { label: 'Total Expenses (LKR)', value: 1350000, change: '-8.3%', up: true }, // expenses down is good
    { label: 'Net Profit (LKR)', value: 1100000, change: '+18.7%', up: true },
    { label: 'Cash Balance (LKR)', value: 650000, change: '+5.3%', up: true },
  ];

  const donutData = [
    { name: 'Salaries', value: 45, color: '#2684FF' },
    { name: 'Rent', value: 25, color: '#5596EA' },
    { name: 'Utilities', value: 15, color: '#76AFF9' },
    { name: 'Others', value: 15, color: '#FC801E' },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--hero-glow))]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings & Content */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[var(--color-secondary-blue-tint)] border border-[var(--color-primary)]/15 max-w-full text-xs font-semibold"
            >
              <div className="flex items-center gap-1.5 text-[var(--color-primary)] uppercase tracking-wider font-bold shrink-0">
                <LucideIcon name="Sparkles" size={12} className="text-[var(--color-primary)] shrink-0 animate-pulse" />
                <span>Sri Lanka’s Premier Cloud Platform</span>
              </div>
              <span className="hidden sm:inline text-[var(--color-primary)]/20 font-light">|</span>
              <div className="hidden sm:inline text-[var(--text-secondary)] font-medium">
                All Your Business. All in the Cloud.
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="type-main-heading text-[var(--text-primary)] sm:max-w-2xl"
            >
              Simplify Your Accounting. Empower Your Business Growth.
              <span className="text-[var(--color-primary)] type-subheading mt-4 block">
                Cloud Accounting Software Designed for Modern Sri Lankan Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="type-body-content text-[var(--text-secondary)] sm:max-w-lg"
            >
              CloudBooks helps Sri Lankan businesses automate bookkeeping, payroll, and stock management in one secure workspace. Make smarter, faster business decisions with real-time financial tracking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onStartTrial}
                className="w-full sm:w-auto px-7 min-h-[44px] rounded-xl type-menu-button-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Free Trial
                <LucideIcon name="ArrowRight" size={16} />
              </button>
              
              <button
                onClick={onWatchDemo}
                className="w-full sm:w-auto px-7 min-h-[44px] rounded-xl type-menu-button-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-blue-tint)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LucideIcon name="Play" size={14} className="fill-[var(--color-primary)]" />
                Watch Demo
              </button>
            </motion.div>

            {/* Quick Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-color)]/60 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-green-500/10 text-[var(--color-success-green)]">
                  <LucideIcon name="Shield" size={16} />
                </div>
                <div className="text-left">
                  <p className="type-small-content-semibold text-[var(--text-primary)]">Secure & Reliable</p>
                  <p className="type-small-content text-[var(--text-secondary)]">Your data is safe</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-[var(--color-primary)]">
                  <LucideIcon name="Smartphone" size={16} />
                </div>
                <div className="text-left">
                  <p className="type-small-content-semibold text-[var(--text-primary)]">Access Anywhere</p>
                  <p className="type-small-content text-[var(--text-secondary)]">Use any device</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-500/10 text-[var(--color-warning-orange)]">
                  <LucideIcon name="Users" size={16} />
                </div>
                <div className="text-left">
                  <p className="type-small-content-semibold text-[var(--text-primary)]">Local Support</p>
                  <p className="type-small-content text-[var(--text-secondary)]">Expert local team</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Multi-Device Mockups */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end w-full">
            {/* Background glowing blur effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -z-10" />
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-teal-500/5 blur-3xl -z-10" />

            <div className="relative w-full max-w-[620px] pb-10 sm:pb-0">
              {/* Dashboard Wrapper */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl overflow-hidden p-5 flex flex-col gap-4 relative hover:shadow-blue-500/5 transition-shadow duration-300 hidden sm:flex"
                style={{
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                {/* Floating keyframes defined directly for both screens */}
                <style>{`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                  }
                  @keyframes floatMobile {
                    0%, 100% { transform: translateY(0px) rotate(-1deg); }
                    50% { transform: translateY(-12px) rotate(1.5deg); }
                  }
                `}</style>

                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-secondary)] ml-2">CloudBooks Dashboard — Overview</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-page)] rounded-lg border border-[var(--border-color)]">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all ${
                        activeTab === 'overview'
                          ? 'bg-[var(--bg-card)] text-[var(--color-primary)] shadow-sm'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('analytics')}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all ${
                        activeTab === 'analytics'
                          ? 'bg-[var(--bg-card)] text-[var(--color-primary)] shadow-sm'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      Analytics
                    </button>
                  </div>
                </div>

                {/* 4 Stat Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 flex flex-col justify-between"
                    >
                      <span className="text-[11px] font-medium text-[var(--text-secondary)] block mb-1">
                        {stat.label}
                      </span>
                      <div className="flex items-baseline justify-between">
                        <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-mono">
                          <CountUp value={stat.value} prefix="LKR " />
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-0.5 ${
                            stat.up
                              ? 'bg-[var(--color-success-green)]/10 text-[var(--color-success-green)]'
                              : 'bg-[var(--color-warning-orange)]/10 text-[var(--color-warning-orange)]'
                          }`}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Two Column Layout: Charts & Accounts */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {/* Cash Flow Line Chart */}
                  <div className="md:col-span-3 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[var(--text-primary)]">Cash Flow (6 Months)</span>
                      <span className="text-[9px] font-bold text-[var(--color-success-green)] bg-[var(--color-success-green)]/10 px-1.5 py-0.5 rounded">
                        Inflow Strong
                      </span>
                    </div>
                    
                    {/* Custom SVG Line Chart */}
                    <div className="h-28 w-full mt-2 relative">
                      <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="300" y2="20" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3" />
                        <line x1="0" y1="50" x2="300" y2="50" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3" />
                        <line x1="0" y1="80" x2="300" y2="80" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3" />

                        {/* Area Gradient */}
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Path Area */}
                        <path
                          d="M0,80 Q50,40 100,60 T200,30 T300,10 L300,100 L0,100 Z"
                          fill="url(#chartGrad)"
                        />

                        {/* Line Path */}
                        <motion.path
                          d="M0,80 Q50,40 100,60 T200,30 T300,10"
                          fill="none"
                          stroke="var(--color-primary)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />

                        {/* Dots & Labels */}
                        <circle cx="100" cy="60" r="3.5" fill="var(--color-primary)" stroke="var(--bg-card)" strokeWidth="1.5" />
                        <circle cx="200" cy="30" r="3.5" fill="var(--color-primary)" stroke="var(--bg-card)" strokeWidth="1.5" />
                        <circle cx="300" cy="10" r="3.5" fill="var(--color-primary)" stroke="var(--bg-card)" strokeWidth="1.5" />
                      </svg>

                      <div className="flex justify-between text-[8px] font-bold text-[var(--text-secondary)] font-mono mt-1 px-1">
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                      </div>
                    </div>
                  </div>

                  {/* Expenses Donut Chart */}
                  <div className="md:col-span-2 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 flex flex-col justify-between">
                    <span className="text-[11px] font-bold text-[var(--text-primary)] block mb-2">Top Expenses</span>
                    
                    <div className="flex items-center gap-3">
                      {/* SVG Donut */}
                      <div className="w-16 h-16 relative flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="var(--border-color)" strokeWidth="3" />
                          
                          {/* Segment 1: 45% */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="transparent"
                            stroke="#2684FF"
                            strokeWidth="3.5"
                            strokeDasharray="45 55"
                            strokeDashoffset="0"
                            className="transition-all duration-300 cursor-pointer hover:stroke-width-[4.5px]"
                            onMouseEnter={() => setSelectedDonutSegment('Salaries (45%)')}
                            onMouseLeave={() => setSelectedDonutSegment(null)}
                          />

                          {/* Segment 2: 25% */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="transparent"
                            stroke="#5596EA"
                            strokeWidth="3.5"
                            strokeDasharray="25 75"
                            strokeDashoffset="-45"
                            className="transition-all duration-300 cursor-pointer hover:stroke-width-[4.5px]"
                            onMouseEnter={() => setSelectedDonutSegment('Rent (25%)')}
                            onMouseLeave={() => setSelectedDonutSegment(null)}
                          />

                          {/* Segment 3: 15% */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="transparent"
                            stroke="#76AFF9"
                            strokeWidth="3.5"
                            strokeDasharray="15 85"
                            strokeDashoffset="-70"
                            className="transition-all duration-300 cursor-pointer hover:stroke-width-[4.5px]"
                            onMouseEnter={() => setSelectedDonutSegment('Utilities (15%)')}
                            onMouseLeave={() => setSelectedDonutSegment(null)}
                          />

                          {/* Segment 4: 15% */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="transparent"
                            stroke="#FC801E"
                            strokeWidth="3.5"
                            strokeDasharray="15 85"
                            strokeDashoffset="-85"
                            className="transition-all duration-300 cursor-pointer hover:stroke-width-[4.5px]"
                            onMouseEnter={() => setSelectedDonutSegment('Others (15%)')}
                            onMouseLeave={() => setSelectedDonutSegment(null)}
                          />
                        </svg>
                        <div className="absolute text-[8px] font-bold text-[var(--text-secondary)] text-center w-full truncate px-1">
                          {selectedDonutSegment || 'LKR'}
                        </div>
                      </div>

                      {/* Donut Legend */}
                      <div className="flex flex-col gap-1">
                        {donutData.map((d, index) => (
                          <div key={index} className="flex items-center gap-1.5 text-[9px] font-medium text-[var(--text-secondary)]">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                            <span className="font-bold text-[var(--text-primary)]">{d.value}%</span>
                            <span>{d.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bank Accounts & Recent Transactions split */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {/* Recent Transactions List */}
                  <div className="md:col-span-3 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3 border-b border-[var(--border-color)] pb-1.5">
                      <span className="text-[11px] font-bold text-[var(--text-primary)]">Recent Transactions</span>
                      <span className="text-[9px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer">View All</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {RECENT_TRANSACTIONS.slice(0, 3).map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between py-1 border-b border-[var(--border-color)]/30 last:border-0">
                          <div className="text-left">
                            <p className="text-[10px] font-bold text-[var(--text-primary)]">{tx.party}</p>
                            <p className="text-[8px] text-[var(--color-gray-muted)] font-mono">{tx.reference} • {tx.date}</p>
                          </div>
                          <div className="text-right flex items-center gap-2">
                            <span className="text-[10px] font-bold text-[var(--text-primary)] font-mono">
                              LKR {tx.amount.toLocaleString('en-US')}
                            </span>
                            <span
                              className={`text-[8px] font-extrabold px-1.5 py-0.5 rounded ${
                                tx.status === 'Paid'
                                  ? 'bg-green-500/10 text-[var(--color-success-green)]'
                                  : 'bg-orange-500/10 text-[var(--color-warning-orange)]'
                              }`}
                            >
                              {tx.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bank Accounts List */}
                  <div className="md:col-span-2 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)]/60 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3 border-b border-[var(--border-color)] pb-1.5">
                      <span className="text-[11px] font-bold text-[var(--text-primary)]">Bank Accounts</span>
                      <span className="text-[9px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer">Sync</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {BANK_ACCOUNTS.map((bank, index) => (
                        <div key={index} className="flex items-center justify-between text-left">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] flex items-center justify-center">
                              <LucideIcon name="CreditCard" size={12} />
                            </div>
                            <div>
                              <p className="text-[9px] font-bold text-[var(--text-primary)]">{bank.name}</p>
                              <p className="text-[7px] text-[var(--color-gray-muted)] font-mono">{bank.number}</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold text-[var(--text-primary)] font-mono">
                            LKR {bank.balance.toLocaleString('en-US')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Phone Mockup Overlay */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative sm:absolute mx-auto sm:mx-0 -bottom-4 sm:-bottom-8 left-0 sm:-left-12 z-20 w-[185px] h-[375px] rounded-[38px] bg-[var(--bg-card)] border-[7px] border-slate-800 dark:border-slate-950 shadow-2xl flex flex-col overflow-hidden select-none"
                style={{
                  animation: 'floatMobile 5.5s ease-in-out infinite'
                }}
              >
                {/* Speaker Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-800 dark:bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-1.5" />
                  <span className="w-5 h-0.5 rounded-full bg-slate-700" />
                </div>

                {/* Phone screen view */}
                <div className="flex-grow flex flex-col bg-[var(--bg-page)] pt-6 p-2 text-left text-[var(--text-primary)] h-full justify-between">
                  <div>
                    {/* Status row */}
                    <div className="flex justify-between items-center text-[7px] font-bold text-[var(--text-secondary)] mb-1.5 px-1">
                      <span>9:41 AM</span>
                      <div className="flex items-center gap-0.5">
                        <LucideIcon name="Wifi" size={7} />
                        <LucideIcon name="Battery" size={7} />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-[7px] leading-none">
                          CB
                        </div>
                        <div className="leading-none">
                          <p className="text-[7.5px] font-black text-[var(--text-primary)] tracking-tight">CloudBooks</p>
                          <p className="text-[5px] text-[var(--text-secondary)] font-medium">Colombo HQ</p>
                        </div>
                      </div>
                      <div className="w-3.5 h-3.5 rounded-full bg-[var(--border-color)]/50 flex items-center justify-center text-[var(--text-primary)]">
                        <LucideIcon name="Bell" size={7} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Active Cash Card */}
                    <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]/60 mb-2 shadow-sm leading-none">
                      <span className="text-[5px] font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">
                        Cash Balance
                      </span>
                      <p className="text-[10px] font-bold text-[var(--text-primary)] font-mono">
                        LKR 650,000
                      </p>
                      <div className="flex items-center gap-0.5 mt-0.5 text-[5px] font-semibold text-[var(--color-success-green)]">
                        <LucideIcon name="TrendingUp" size={6} />
                        <span>+5.3% this week</span>
                      </div>
                    </div>

                    {/* Tiny Quick Action grids */}
                    <div className="grid grid-cols-2 gap-1.5 mb-2">
                      <div className="p-1 rounded-lg bg-[var(--color-secondary-blue-tint)] text-[var(--color-primary)] text-[6px] font-bold flex items-center justify-center gap-1 cursor-pointer hover:opacity-90">
                        <LucideIcon name="FileText" size={8} strokeWidth={2.5} className="shrink-0" />
                        <span>Invoices</span>
                      </div>
                      <div className="p-1 rounded-lg bg-green-500/10 text-[var(--color-success-green)] text-[6px] font-bold flex items-center justify-center gap-1 cursor-pointer hover:opacity-90">
                        <LucideIcon name="PlusCircle" size={8} strokeWidth={2.5} className="shrink-0" />
                        <span>New Sale</span>
                      </div>
                    </div>

                    {/* Active Feed */}
                    <div className="rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]/60 p-1.5 flex flex-col justify-between overflow-hidden mb-1">
                      <div>
                        <span className="text-[6px] font-bold text-[var(--text-primary)] border-b border-[var(--border-color)]/40 pb-0.5 block mb-1">
                          Active Accounts
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center justify-between text-[5.5px] py-0.5">
                            <span className="font-medium text-[var(--text-primary)]">Sampath LKR</span>
                            <span className="font-bold text-[var(--text-primary)] font-mono">450,000</span>
                          </div>
                          <div className="flex items-center justify-between text-[5.5px] py-0.5">
                            <span className="font-medium text-[var(--text-primary)]">Commercial</span>
                            <span className="font-bold text-[var(--text-primary)] font-mono">200,000</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Synchronized indicator */}
                      <div className="mt-1.5 p-0.5 rounded bg-[var(--color-success-green)]/10 text-[var(--color-success-green)] text-[5px] font-bold text-center flex items-center justify-center gap-0.5">
                        <LucideIcon name="CheckCircle2" size={6} strokeWidth={2.5} />
                        <span>Synced to Cloud</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav tabs simulation */}
                  <div className="flex items-center justify-between pt-1.5 border-t border-[var(--border-color)]/40 text-[var(--text-secondary)]">
                    <LucideIcon name="Home" size={9} className="text-[var(--color-primary)]" strokeWidth={2.5} />
                    <LucideIcon name="LineChart" size={9} strokeWidth={2} />
                    <LucideIcon name="FolderClosed" size={9} strokeWidth={2} />
                    <LucideIcon name="User" size={9} strokeWidth={2} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
