/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  FileText,
  ShoppingCart,
  Layers,
  Users,
  TrendingUp,
  PieChart,
  GitBranch,
  Briefcase,
  Sun,
  Moon,
  Menu,
  X,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Play,
  Shield,
  Cloud,
  Smartphone,
  Send,
  Plus,
  Minus,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles,
  Clock,
  Search,
  HelpCircle,
  TrendingDown,
  CreditCard,
  Building,
  Heart,
  Globe,
  MessageSquare,
  Award,
  BookOpen
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  FileText,
  ShoppingCart,
  Layers,
  Users,
  TrendingUp,
  PieChart,
  GitBranch,
  Briefcase,
  Sun,
  Moon,
  Menu,
  X,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Play,
  Shield,
  Cloud,
  Smartphone,
  Send,
  Plus,
  Minus,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles,
  Clock,
  Search,
  HelpCircle,
  TrendingDown,
  CreditCard,
  Building,
  Heart,
  Globe,
  MessageSquare,
  Award,
  BookOpen
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  className = '',
  size = 20,
  strokeWidth = 2
}) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
};
