/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';

export const AIInsight: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>('Profitability trend');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [aiAnswer, setAiAnswer] = useState<string>('Your revenue increased by 18.7% compared to last month, with top performing branches in Colombo and Kandy leading sales expansion.');
  const [typedInput, setTypedInput] = useState<string>('');
  
  const questionMap: Record<string, string> = {
    'Cash flow this month': 'Inflow stands strong at LKR 2,450,000 against LKR 1,350,000 in expenses. Cash reserves increased by LKR 1,100,000. Your net runaway is currently projected at 18 months.',
    'Top expenses': 'Salary payouts are your single largest category at LKR 607,500 (45%), followed by Office Rent at LKR 337,500 (25%), and Utilities at LKR 202,500 (15%). Utilities dropped 11% this month.',
    'Profitability trend': 'Your net profitability has expanded to 44.9% (an 18.7% increase compared to last month). This positive margin growth is driven by lower cost of goods sold (COGS) in our retail trading division.'
  };

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      setAiAnswer(questionMap[question] || 'Analyzing your spreadsheets...');
      setIsTyping(false);
    }, 850);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedInput.trim()) return;
    
    setSelectedQuestion('');
    setIsTyping(true);
    
    setTimeout(() => {
      setAiAnswer(`Based on your recent transactions, your question about "${typedInput}" indicates strong interest in operational audits. Our records show total assets have expanded by LKR 450,000. VAT liability for next month is fully funded in your escrow ledger.`);
      setIsTyping(false);
      setTypedInput('');
    }, 1000);
  };

  return (
    <section id="ai-intelligence" className="py-20 md:py-28 relative overflow-hidden bg-[var(--bg-card)]/40 border-y border-[var(--border-color)]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Heading and Info */}
          <div className="lg:col-span-5 text-left flex flex-col gap-5 items-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-[var(--color-primary)]/20 text-xs font-semibold text-[var(--color-primary)]">
              <LucideIcon name="Sparkles" size={12} />
              CloudBooks Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              AI built for your business
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              CloudBooks Intelligence interprets complex transaction records instantly. Get plain-English explanations about cash reserves, vendor bills, tax allocations, and operational anomalies.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Eliminate hours of spreadsheet assembly. Speak directly with a secure, private assistant that helps you save tax outlays, prevent double payments, and monitor division performance.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline mt-2 group"
            >
              Get started with CloudBooks AI
              <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Mock Interactive Chat Dashboard */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />
              
              {/* Chat Title */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-5">
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                    <LucideIcon name="Sparkles" size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">Ask CloudBooks AI</h3>
                    <p className="text-[10px] text-[var(--color-success-green)] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success-green)] animate-ping" />
                      Active Ledger Assistant
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-[var(--color-gray-muted)] font-mono">SECURE CHAT</span>
              </div>

              {/* Chat Form */}
              <form onSubmit={handleCustomSubmit} className="flex gap-2 mb-4">
                <div className="relative flex-grow">
                  <LucideIcon name="Search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-gray-muted)]" size={16} />
                  <input
                    type="text"
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                    placeholder="Ask a question about your business..."
                    className="w-full pl-10 pr-4 py-3 text-xs md:text-sm rounded-xl border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                  />
                  {typedInput === '' && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-[var(--color-primary)] animate-pulse" />
                  )}
                </div>
                <button
                  type="submit"
                  className="px-4 py-3 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[var(--color-primary)]/90 shadow-md flex items-center justify-center cursor-pointer transition-all shrink-0"
                >
                  <LucideIcon name="Send" size={16} />
                </button>
              </form>

              {/* Suggestions row */}
              <div className="flex flex-wrap gap-2 mb-5">
                {Object.keys(questionMap).map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleQuestionClick(question)}
                    className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-all cursor-pointer ${
                      selectedQuestion === question
                        ? 'bg-[var(--color-primary)] text-white shadow-md shadow-blue-500/10'
                        : 'bg-[var(--bg-page)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--color-primary)]/40 hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Simulated chat container */}
              <div className="min-h-24 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-color)] flex flex-col justify-center relative">
                
                <AnimatePresence mode="wait">
                  {isTyping ? (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 pl-2 text-[var(--text-secondary)]"
                    >
                      <span className="text-xs font-bold font-mono">CloudBooks AI is reading ledgers</span>
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '300ms' }} />
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3.5 text-left"
                    >
                      <div className="p-1.5 rounded-lg bg-[var(--color-success-green)]/10 text-[var(--color-success-green)] shrink-0 mt-0.5">
                        <LucideIcon name="TrendingUp" size={14} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-muted)] block mb-1">
                          AI Insight
                        </span>
                        <p className="text-xs md:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                          {aiAnswer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              
              <div className="mt-4 flex items-center justify-between text-[9px] text-[var(--color-gray-muted)] font-bold">
                <span className="flex items-center gap-1 text-[var(--color-success-green)]">
                  <LucideIcon name="Shield" size={10} />
                  Enterprise-grade data encryption (AES-256)
                </span>
                <span>Response time: ~45ms</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
