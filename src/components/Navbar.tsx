/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onRequestDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
    
    if (href === '#' || href === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    try {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80; // height of sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } catch (err) {
      console.warn('Invalid selector or element not found:', href);
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-card)]/90 backdrop-blur-md py-1.5 lg:py-3 shadow-md border-b border-[var(--border-color)]'
            : 'bg-transparent py-2 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="flex items-center group"
          >
            <span className={`text-2xl font-extrabold tracking-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              CloudBooks
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 inline-flex items-center min-h-[44px] px-1"
              >
                {link.label}
              </a>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onBlur={() => setTimeout(() => setIsResourcesOpen(false), 200)}
                className="flex items-center gap-1 type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 min-h-[44px] px-1 cursor-pointer"
              >
                Resources
                <LucideIcon
                  name="ChevronDown"
                  size={14}
                  className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-2 shadow-xl z-50"
                  >
                    <a
                      href="#faq"
                      onClick={(e) => handleLinkClick(e, '#faq')}
                      className="flex items-center gap-3 p-2.5 rounded-xl type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-secondary-blue-tint)] transition-all min-h-[44px]"
                    >
                      <LucideIcon name="HelpCircle" size={18} />
                      Help Center & FAQ
                    </a>
                    <a
                      href="#about"
                      onClick={(e) => handleLinkClick(e, '#about')}
                      className="flex items-center gap-3 p-2.5 rounded-xl type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-secondary-blue-tint)] transition-all min-h-[44px]"
                    >
                      <LucideIcon name="Briefcase" size={18} />
                      Partners Program
                    </a>
                    <a
                      href="#values"
                      onClick={(e) => handleLinkClick(e, '#values')}
                      className="flex items-center gap-3 p-2.5 rounded-xl type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-secondary-blue-tint)] transition-all min-h-[44px]"
                    >
                      <LucideIcon name="Shield" size={18} />
                      Our Vision & Core Values
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Theme Toggle Button resembling the spec */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-[var(--border-color)] border border-[var(--border-color)]/30">
              <button
                onClick={() => theme !== 'light' && toggleTheme()}
                className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 cursor-pointer ${
                  theme === 'light'
                    ? 'bg-[var(--color-white)] text-[var(--color-primary)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="Switch to Light Mode"
              >
                <LucideIcon name="Sun" size={16} />
              </button>
              <button
                onClick={() => theme !== 'dark' && toggleTheme()}
                className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-[var(--bg-page)] text-[var(--color-primary)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title="Switch to Dark Mode"
              >
                <LucideIcon name="Moon" size={16} />
              </button>
            </div>

            <a
              href="#signin"
              className="type-menu-button-semibold text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center justify-center min-h-[44px] px-2"
            >
              Sign in
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onRequestDemo}
              className="px-5 min-h-[44px] rounded-xl type-menu-button-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-md shadow-blue-500/10 transition-all cursor-pointer inline-flex items-center justify-center"
            >
              Request Free Demo
            </motion.button>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Theme toggle also on mobile */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] cursor-pointer"
            >
              <LucideIcon name={theme === 'light' ? 'Moon' : 'Sun'} size={18} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-md shadow-blue-500/15 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-[var(--bg-card)] border-b border-[var(--border-color)] fixed top-[56px] left-0 z-40 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="type-menu-button-semibold text-[var(--text-primary)] hover:text-[var(--color-primary)] border-b border-[var(--border-color)]/50 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Resources list inside mobile menu */}
              <div className="flex flex-col gap-2.5 pt-2">
                <span className="type-small-content-semibold uppercase tracking-wider text-[var(--color-gray-muted)]">Resources</span>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="flex items-center gap-3 type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] min-h-[44px]"
                >
                  <LucideIcon name="HelpCircle" size={16} />
                  Help Center & FAQs
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="flex items-center gap-3 type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] min-h-[44px]"
                >
                  <LucideIcon name="Briefcase" size={16} />
                  Partners Program
                </a>
                <a
                  href="#values"
                  onClick={(e) => handleLinkClick(e, '#values')}
                  className="flex items-center gap-3 type-menu-button text-[var(--text-secondary)] hover:text-[var(--color-primary)] min-h-[44px]"
                >
                  <LucideIcon name="Shield" size={16} />
                  Our Vision & Core Values
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[var(--border-color)] mt-2">
                <a
                  href="#signin"
                  className="min-h-[44px] flex items-center justify-center text-center type-menu-button-semibold text-[var(--text-primary)] border border-[var(--border-color)] rounded-xl bg-[var(--bg-page)] w-full"
                >
                  Sign in
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRequestDemo();
                  }}
                  className="min-h-[44px] flex items-center justify-center text-center type-menu-button-semibold bg-[var(--color-primary)] text-white rounded-xl shadow-md cursor-pointer w-full"
                >
                  Request Free Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
