export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  calendly: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  subTagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  upi: string;
  location: string;
  locationEmoji: string;
  available: boolean;
  responseTime: string;
  social: SocialLinks;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  href?: string;
  challenges?: string[];
  benefits?: string[];
  workflow?: { step: string; desc: string; icon?: string }[];
  faqs?: { q: string; a: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  badge: string;
  category: "SaaS" | "E-Commerce" | "AI Tools" | "Websites" | "Automation";
  badgeColor: string;
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  stars: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  delivery: string;
  bestFor: string;
  features: string[];
  excludedFeatures: string[];
  ctaLabel: string;
  ctaLink: string;
  popular?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillsMap {
  frontend: SkillItem[];
  backend: SkillItem[];
  aiAutomation: SkillItem[];
  tools: SkillItem[];
}

export interface TimelineItem {
  year: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IndustryCard {
  id: string;
  icon: string;
  name: string;
  problems: string[];
  howAIHelps: string;
  outcomes: string[];
}

export interface BusinessProblem {
  id: string;
  icon: string;
  problem: string;
  impact: string;
  solution: string;
  outcome: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface CaseStudy {
  id: string;
  label: "Demo Solution" | "Concept Workflow";
  industry: string;
  industryIcon: string;
  problem: string;
  existingProcess: string;
  solution: string;
  workflow: string[];
  impact: string[];
  tags: string[];
  color: string;
}

export interface DemoVideo {
  id: string;
  title: string;
  industry: string;
  icon: string;
  description: string;
  duration: string;
  tag: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  topic: string;
  readTime: string;
  date: string;
  slug: string;
}

export interface WhyWorkWithMe {
  id: string;
  icon: string;
  title: string;
  description: string;
}
