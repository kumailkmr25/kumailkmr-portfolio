import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { MediaShowcase, MediaItem } from "@/components/services/MediaShowcase";
import { Check, Target, Building2, MessageSquare, Rocket } from "lucide-react";

export const metadata: Metadata = {
 title: "AI Customer Support Chatbot | Kumail Kmr",
 description: "An intelligent AI-powered customer support assistant that instantly responds to customer inquiries across WhatsApp and websites.",
 keywords: "AI Customer Support Chatbot, WhatsApp AI Chatbot, Website AI Chatbot, AI Knowledge Base, Customer Experience Automation",
};

// Placeholder portfolio items for the showcase
const portfolioItems: MediaItem[] = [
 {
 id: "m1",
 type: "image",
 url: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
 title: "WhatsApp Clinic Assistant",
 category: "Workflow Demo",
 },
 {
 id: "m2",
 type: "image",
 url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
 title: "E-commerce Support Bot",
 category: "Client Project",
 },
 {
 id: "m3",
 type: "image",
 url: "https://images.unsplash.com/photo-1512758117929-08620014e2cb?q=80&w=2070&auto=format&fit=crop",
 title: "Knowledge Base Integration",
 category: "Architecture Diagram",
 },
 {
 id: "m4",
 type: "image",
 url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
 title: "Instant Lead Qualification",
 category: "Interactive Demo",
 }
];

const industries = [
 "Hospitals & Clinics", "CA Firms", "Coaching Institutes", 
 "Restaurants", "Hotels", "Travel Agencies", 
 "Real Estate", "Retail Stores", "E-commerce", 
 "Educational Institutions", "Professional Service Firms", "SMEs"
];

const outcomes = [
 "Faster response times",
 "Better customer experience",
 "Reduced operational costs",
 "Increased customer satisfaction",
 "More qualified leads",
 "Higher team productivity",
 "Consistent customer communication"
];

export default function AiSupportChatbotPage() {
 return (
 <main className="bg-white dark:bg-background min-h-screen pt-32 pb-16">
 
 {/* Hero Section */}
 <section className="section-container relative">
 <div className="max-w-4xl">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold tracking-wide mb-6">
 <MessageSquare className="w-4 h-4" /> Customer Experience Automation
 </div>
 <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
 AI Customer Support Chatbot
 </h1>
 <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
 An intelligent AI-powered customer support assistant that instantly responds to customer inquiries across WhatsApp and websites, helping businesses deliver fast, accurate, and consistent support 24/7 while reducing staff workload.
 </p>
 </div>
 </section>

 {/* Portfolio Showcase Section */}
 <section className="section-container mt-24">
 <SectionHeading
 title="Portfolio & Demos"
 subtitle="See how the AI Support Chatbot works across different platforms and industries."
 />
 <div className="mt-12">
 <MediaShowcase items={portfolioItems} />
 </div>
 </section>

 {/* Deep Dive Section */}
 <section className="section-container mt-32">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 
 {/* Left Column: Problems & Tech */}
 <div className="flex flex-col gap-12">
 <div>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
 <Target className="w-5 h-5 text-primary" />
 </div>
 <h2 className="text-2xl font-bold text-foreground ">The Business Problem</h2>
 </div>
 <p className="text-foreground-muted leading-relaxed">
 Many businesses lose customers because inquiries go unanswered or are delayed. This solution helps businesses respond instantly, reduce customer waiting time, lower support workload, and capture every inquiry—even outside business hours.
 </p>
 </div>

 <div className="premium-card p-8 bg-surface ">
 <div className="flex items-center gap-3 mb-6">
 <Rocket className="w-5 h-5 text-primary" />
 <h3 className="font-bold text-foreground ">Business Outcomes</h3>
 </div>
 <ul className="flex flex-col gap-4">
 {outcomes.map((outcome, i) => (
 <li key={i} className="flex gap-3 text-sm">
 <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
 <span className="text-foreground-muted">{outcome}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Right Column: Industries */}
 <div>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
 <Building2 className="w-5 h-5 text-primary" />
 </div>
 <h2 className="text-2xl font-bold text-foreground ">Ideal Industries</h2>
 </div>
 <div className="flex flex-wrap gap-2">
 {industries.map((ind, i) => (
 <div key={i} className="px-4 py-2 rounded-full border border-border-strong text-foreground-muted text-sm bg-white dark:bg-background">
 {ind}
 </div>
 ))}
 </div>
 
 <div className="mt-12 pt-12 border-t border-border-strong ">
 <h3 className="text-xl font-bold text-foreground mb-4">Core Capabilities</h3>
 <ul className="grid grid-cols-2 gap-3 text-foreground-muted text-sm">
 <li>• 24/7 Customer Support</li>
 <li>• Instant Responses</li>
 <li>• WhatsApp & Website Integration</li>
 <li>• FAQ Automation</li>
 <li>• Appointment Booking</li>
 <li>• Human Agent Handoff</li>
 <li>• Multi-language Support</li>
 <li>• Smart Conversation Memory</li>
 </ul>
 </div>
 </div>
 
 </div>
 </section>

 {/* CTA */}
 <div className="mt-32">
 <CTA 
 title="Never Miss Another Customer Inquiry"
 subtitle="Let's build a support system that works for your business 24/7."
 buttonText="Book a Free Strategy Session"
 />
 </div>

 </main>
 );
}
