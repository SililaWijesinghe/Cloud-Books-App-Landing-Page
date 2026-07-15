/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureItem, PricingPlan, FAQItem, TestimonialItem, TransactionItem, BankAccountItem } from './types';

export const TRUSTED_COMPANIES = [
  'Abans', 'Softlogic', 'Vogue Jewellers', 'Daraz', 'Asiri Health', 'Arpico', 'LB Finance'
];

export const INTEGRATION_PARTNERS = [
  { name: 'Shopify', logo: 'Shopify' },
  { name: 'WooCommerce', logo: 'WooCommerce' },
  { name: 'PayHere', logo: 'PayHere' },
  { name: 'Slack', logo: 'Slack' },
  { name: 'HubSpot', logo: 'HubSpot' },
  { name: 'Google Workspace', logo: 'Google Workspace' },
  { name: 'Dropbox', logo: 'Dropbox' },
  { name: 'Zapier', logo: 'Zapier' }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'sales-invoicing',
    title: 'Sales & Invoicing',
    description: 'Create professional invoices, manage customers & track outstanding payments.',
    icon: 'FileText',
    benefits: [
      'Improve billing efficiency',
      'Reduce payment delays',
      'Maintain accurate customer records'
    ],
    details: [
      'Professional invoices and quotations',
      'Customer database management',
      'Customer statements & history tracking',
      'Credit notes and adjustments',
      'Recurring invoices'
    ]
  },
  {
    id: 'purchases-expenses',
    title: 'Purchases & Expenses',
    description: 'Manage suppliers, record purchase invoices & keep complete control over expenses.',
    icon: 'ShoppingCart',
    benefits: [
      'Monitor expenses effectively',
      'Understand business costs',
      'Improve financial planning'
    ],
    details: [
      'Supplier management & profiles',
      'Purchase invoices & expense recording',
      'Expense categorization',
      'Cost allocation & document attachments',
      'Supplier payment tracking'
    ]
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    description: 'Track stock levels, manage warehouses & optimize your inventory in real time.',
    icon: 'Layers',
    benefits: [
      'Avoid stock shortages',
      'Reduce inventory losses',
      'Improve purchasing decisions'
    ],
    details: [
      'Product management & stock tracking',
      'Inventory valuation (FIFO/Weighted Average)',
      'Stock movement history & low stock alerts',
      'Warehouse management',
      'Product profitability analysis'
    ]
  },
  {
    id: 'payroll-management',
    title: 'Payroll Management',
    description: 'Automate salary calculations, EPF/ETF, payslips & employee records in minutes.',
    icon: 'Users',
    benefits: [
      'Reduce manual calculations & errors',
      'Save administrative time',
      'Simplify local payroll compliance'
    ],
    details: [
      'Employee database & department mapping',
      'Salary & allowances/deductions engine',
      'Overtime, EPF & ETF calculations',
      'Automated leave management',
      'Payslip generation & history reports'
    ]
  },
  {
    id: 'banking-cash',
    title: 'Banking & Cash',
    description: 'Reconcile bank accounts, monitor cash flow & stay connected with transactions.',
    icon: 'TrendingUp',
    benefits: [
      'Know your available cash position',
      'Reduce reconciliation time',
      'Improve overall financial control'
    ],
    details: [
      'Multiple bank accounts tracking',
      'Cash management & flow monitoring',
      'Bank statement importing & matching',
      'Bank reconciliation tools',
      'Payment tracking & allocations'
    ]
  },
  {
    id: 'financial-reports',
    title: 'Financial Reports',
    description: 'Generate accurate financial statements, real-time insights and tax reports.',
    icon: 'PieChart',
    benefits: [
      'Audit-ready reports instantly',
      'Deep dive into business health',
      'Make evidence-based decisions'
    ],
    details: [
      'Profit & Loss Statement',
      'Balance Sheet & Trial Balance',
      'General Ledger reports',
      'Cash Flow Statement',
      'Accounts Receivable & Payable Reports'
    ]
  },
  {
    id: 'multi-branch',
    title: 'Multi-Branch',
    description: 'Control and monitor multiple locations or branches from a single centralized platform.',
    icon: 'GitBranch',
    benefits: [
      'Centralized real-time reporting',
      'Understand branch performance',
      'User-based location access controls'
    ],
    details: [
      'Branch-wise transactions tagging',
      'Consolidated financial dashboards',
      'Location-based user permissions',
      'Inter-branch transfers tracking',
      'Segmented profit & loss reports'
    ]
  },
  {
    id: 'tax-management',
    title: 'Tax Management',
    description: 'Stay fully compliant with Sri Lankan tax regulations, VAT, and SSCL requirements.',
    icon: 'Briefcase',
    benefits: [
      'Avoid late submission penalties',
      'Accurate tax liability projections',
      'Simplified tax filing records'
    ],
    details: [
      'Sri Lankan tax rates configuration',
      'VAT & SVAT invoice generation',
      'SSCL compliance configurations',
      'Tax summary reports generation',
      'Audit logs for tax modifications'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Professional',
    tagline: 'Perfect for small businesses',
    monthlyPrice: 2500,
    yearlyPrice: 2000, // 20% discount would be LKR 2,000/mo (paid yearly)
    ctaText: 'Start Free Trial',
    features: [
      'Sales & Invoicing',
      'Banking & Cash tracking',
      'Financial Reports',
      'Inventory Management',
      'Payroll (Up to 10 employees)',
      '1 User access'
    ]
  },
  {
    name: 'Business',
    tagline: 'Ideal for growing businesses',
    monthlyPrice: 5000,
    yearlyPrice: 4000, // 20% discount is LKR 4,000/mo
    isPopular: true,
    ctaText: 'Start Free Trial',
    features: [
      'Everything in Professional',
      'Multi-branch management',
      'Advanced BI dashboards',
      'Unlimited users',
      'Priority customer support',
      'Payroll (unlimited employees)'
    ]
  },
  {
    name: 'Enterprise',
    tagline: 'Built for large organizations',
    monthlyPrice: 10000,
    yearlyPrice: 8000, // 20% discount is LKR 8,000/mo
    ctaText: 'Contact Sales',
    features: [
      'Everything in Business',
      'Custom implementation & setup',
      'Dedicated account manager',
      'API access & system integrations',
      'Advanced security features',
      'Custom business solutions'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'CloudBooks has completely changed the way we manage our financial operations. Real-time dashboards help us make faster business decisions.',
    author: 'Director',
    role: 'Managing Director',
    company: 'Trading Company, Colombo'
  },
  {
    quote: 'The software is simple, professional, and has significantly reduced our accounting workload. The local support has been top notch.',
    author: 'Business Owner',
    role: 'Founder & CEO',
    company: 'Retail Sector SME'
  },
  {
    quote: 'CloudBooks payroll and inventory features have saved our team many working hours every month. EPF/ETF automated calculation is a lifesaver.',
    author: 'Finance Manager',
    role: 'Chief Financial Officer',
    company: 'Manufacturing Company'
  },
  {
    quote: 'An affordable and complete accounting solution for growing Sri Lankan businesses. Highly recommended for compliance and peace of mind.',
    author: 'Managing Director',
    role: 'Partner',
    company: 'Service Company, Nugegoda'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is CloudBooks?',
    answer: 'CloudBooks is a next-generation cloud accounting and business management platform designed specifically for Sri Lankan businesses. It combines core accounting, invoicing, payroll, inventory, and multi-branch management in one secure, intuitive app.'
  },
  {
    question: 'Is my data secure with CloudBooks?',
    answer: 'Yes, your data security is our top priority. CloudBooks protects your financial data with enterprise-grade SSL/TLS encryption, bank-level firewalls, automated daily backups, and role-based permissions, ensuring your information is safe and accessible.'
  },
  {
    question: 'Can I access CloudBooks from my mobile?',
    answer: 'Absolutely! Since CloudBooks is a fully cloud-based platform, you can access your real-time dashboards, generate invoices, track expenses, and check reports from any smartphone, tablet, laptop, or desktop with an active internet connection.'
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes. CloudBooks respects your ownership of your data. You can export any financial statements, list of transactions, customer databases, inventory reports, or payroll records into clean Excel, CSV, or PDF formats at any time.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, Mastercard, Amex) processed securely through Sri Lankan payment gateways like PayHere, as well as direct bank transfers and corporate standing orders for yearly subscriptions.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your subscription plan at any time directly from your billing portal. If you upgrade mid-billing cycle, the charges will be pro-rated. No lock-in contracts or exit fees apply.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'There is absolutely no setup fee for our Professional and Business plans. You can register and begin within minutes. For our Enterprise plan, we offer optional customized onboarding, API integrations, and training for a nominal fee depending on scope.'
  },
  {
    question: 'Do you offer local training and support?',
    answer: 'Yes, we take pride in offering premium local support with Sri Lankan agents who understand your local business regulations and tax practices. We offer phone support (+94 77 132 5070), email (info@cloudbook.lk), and on-site training for larger teams.'
  }
];

export const RECENT_TRANSACTIONS: TransactionItem[] = [
  { id: '1', reference: 'INV-00254', party: 'ACME Pvt Ltd', amount: 120000, status: 'Paid', date: '2026-07-14' },
  { id: '2', reference: 'INV-00255', party: 'Global Solutions', amount: 86000, status: 'Pending', date: '2026-07-13' },
  { id: '3', reference: 'INV-00256', party: 'Lanka Holdings', amount: 340000, status: 'Paid', date: '2026-07-12' },
  { id: '4', reference: 'EXP-00912', party: 'Ceylon Electricity', amount: 45000, status: 'Paid', date: '2026-07-11' }
];

export const BANK_ACCOUNTS: BankAccountItem[] = [
  { name: 'Commercial Bank', number: '* 1234', balance: 450000 },
  { name: 'Sampath Bank', number: '* 5678', balance: 200000 },
  { name: 'HNB Operating', number: '* 9012', balance: 650000 }
];

export const INDUSTRIES = [
  {
    title: 'Startups & Entrepreneurs',
    tagline: 'Build your business foundation with professional accounting tools from day one.',
    bulletType: 'check',
    prefix: 'CloudBooks helps startups:',
    points: [
      'Track income and expenses',
      'Create professional invoices',
      'Monitor cash flow',
      'Maintain organized financial records'
    ],
    icon: 'Sparkles'
  },
  {
    title: 'Small & Medium Enterprises (SMEs)',
    tagline: 'Grow confidently with complete financial visibility.',
    bulletType: 'check',
    prefix: 'Benefits:',
    points: [
      'Better decision-making',
      'Improved cost control',
      'Automated reporting',
      'Efficient business management'
    ],
    icon: 'TrendingUp'
  },
  {
    title: 'Retail & Trading Businesses',
    tagline: 'Control sales, inventory, and profitability.',
    bulletType: 'check',
    prefix: 'Solutions:',
    points: [
      'Stock management',
      'Sales tracking',
      'Supplier management',
      'Customer management'
    ],
    icon: 'ShoppingCart'
  },
  {
    title: 'Manufacturing Companies',
    tagline: 'Improve production efficiency and cost control.',
    bulletType: 'check',
    prefix: 'Features:',
    points: [
      'Inventory monitoring',
      'Cost analysis',
      'Material tracking',
      'Profitability reporting'
    ],
    icon: 'Factory'
  },
  {
    title: 'Professional Service Firms',
    tagline: 'Manage projects, billing, and expenses efficiently.',
    bulletType: 'bullet',
    prefix: 'Ideal for:',
    points: [
      'Consultants',
      'Agencies',
      'Professional firms',
      'Service providers'
    ],
    icon: 'Briefcase'
  },
  {
    title: 'E-Commerce Businesses',
    tagline: 'Manage online business operations seamlessly.',
    bulletType: 'check',
    prefix: 'Features:',
    points: [
      'Online sales tracking',
      'Inventory synchronization',
      'Customer management',
      'Financial reporting'
    ],
    icon: 'Globe'
  },
  {
    title: 'Non-Profit Organizations',
    tagline: 'Maintain transparency and financial accountability.',
    bulletType: 'check',
    prefix: 'Features:',
    points: [
      'Fund tracking',
      'Expense management',
      'Reporting controls'
    ],
    icon: 'Heart'
  },
  {
    title: 'Multi-Branch Businesses',
    tagline: 'Manage multiple locations from a single platform.',
    bulletType: 'check',
    prefix: 'Benefits:',
    points: [
      'Centralized reporting',
      'Branch performance analysis',
      'User-based access control'
    ],
    icon: 'GitBranch'
  }
];

export const PARTNERS_PROGRAM = [
  {
    title: 'Accounting Partners',
    tagline: 'Help your clients modernize their accounting systems.',
    prefix: 'Benefits:',
    points: [
      'Partner training',
      'Client management support',
      'Revenue opportunities'
    ],
    icon: 'BookOpen'
  },
  {
    title: 'Business Consultants',
    tagline: 'Add value to your consulting services with digital accounting solutions.',
    prefix: 'Focus:',
    points: [
      'Provide strategic advisory with real-time numbers',
      'Guide clients on localized taxation compliance',
      'Leverage multi-branch centralized dashboards'
    ],
    icon: 'Compass'
  },
  {
    title: 'Technology Partners',
    tagline: 'Build integrations and innovative business solutions.',
    prefix: 'Features:',
    points: [
      'Secure developer sandbox access',
      'Robust localized API bridges',
      'Co-marketing and technical support'
    ],
    icon: 'Cpu'
  },
  {
    title: 'Referral Partners',
    tagline: 'Earn rewards by introducing businesses to CloudBooks.',
    prefix: 'Rewards:',
    points: [
      'Attractive margin percentages',
      'Continuous monthly referral payouts',
      'Easy link-based tracker tools'
    ],
    icon: 'Gift'
  }
];

export const PARTNER_BENEFITS = [
  'Professional training',
  'Marketing assistance',
  'Dedicated support',
  'Revenue sharing opportunities',
  'Product updates'
];

export const CORE_VALUES = [
  { title: 'Innovation', desc: 'Continuously improving through technology.' },
  { title: 'Integrity', desc: 'Protecting customer trust and business information.' },
  { title: 'Simplicity', desc: 'Making accounting easier for everyone.' },
  { title: 'Customer Success', desc: 'Helping businesses achieve sustainable growth.' }
];
