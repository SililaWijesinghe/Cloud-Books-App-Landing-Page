/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  benefits: string[];
  icon: string; // name of Lucide icon
}

export interface PricingPlan {
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TransactionItem {
  id: string;
  reference: string;
  party: string;
  amount: number;
  status: 'Paid' | 'Pending';
  date: string;
}

export interface BankAccountItem {
  name: string;
  number: string;
  balance: number;
}
