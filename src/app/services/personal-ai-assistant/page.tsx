import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { MediaShowcase, MediaItem } from "@/components/services/MediaShowcase";
import { Check, Target, Building2, Brain, Rocket } from "lucide-react";

export const metadata: Metadata = {
 title: "Personal AI Assistant Development | Kumail Kmr",
 description: "Build a customized AI assistant designed specifically for your business or personal workflow to automate repetitive tasks and improve productivity.",
 keywords: "Business AI Assistant, Custom AI Assistant, Enterprise AI Assistant, AI Knowledge Base, AI Workflow Automation, Internal AI Assistant, Business Process Automation",
};

// Placeholder portfolio items for the showcase
const portfolioItems: MediaItem[] = [
 {
 id: "m1",
 type: "image",
 url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
 title: "Executive Workflow Assistant",
 category: "Workflow Demo",
 },
 {
 id: "m2",
 type: "image",
 url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
 title: "Internal SOP AI",
 category: "Client Project",
 },
 {
 id: "m3",
 type: "image",
 url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
 title: "HR Knowledge Retrieval",
 category: "Interactive Demo",
 },
 {
 id: "m4",
 type: "image",
 url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
 title: "Custom Data Integration",
 category: "Architecture Diagram",
 }
];

const industries = [
 "CEOs", "Founders", "Business Owners", 
 "CA Firms", "Hospitals", "HR Teams", 
 "Sales Teams", "Operations Teams", "Consultants", 
 "Agencies", "Professional Service Firms"
];

const outcomes = [
 "Faster access to business information",
 "Reduced manual work",
 "Better operational efficiency",
 "Improved employee productivity",
 "Scalable internal knowledge management",
 "Streamlined business operations",
 "Smarter decision support"
];

export default function PersonalAiAssistantPage() {
 return (
 <main className="bg-white dark:bg-background min-h-screen pt-32 pb-16">
 
 {/* Hero Section */}
 <section className="section-container relative">
 <div className="max-w-4xl">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold tracking-wide mb-6">
 <Brain className="w-4 h-4" /> Internal Operations Automation
 </div>
 <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
 Personal AI Assistant Development
 </h1>
 <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
 Build a customized AI assistant designed specifically for your business or personal workflow. The assistant understands your processes, retrieves information, automates repetitive tasks, and helps improve productivity across daily operations.
 </p>
 </div>
 </section>

 {/* Portfolio Showcase Section */}
 <section className="section-container mt-24">
 <SectionHeading
 title="Portfolio & Demos"
 subtitle="Explore internal AI workflows, custom knowledge bases, and team assistant capabilities."
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
 Businesses often waste valuable time searching for information, repeating internal processes, answering the same questions, and managing knowledge manually. This solution helps organizations centralize business knowledge, improve team productivity, reduce repetitive work, and simplify internal operations.
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
 <h2 className="text-2xl font-bold text-foreground ">Ideal Clients</h2>
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
 <li>• Custom Knowledge Base</li>
 <li>• Document Intelligence</li>
 <li>• Workflow Automation</li>
 <li>• Task Assistance</li>
 <li>• Calendar & Email Assistance</li>
 <li>• CRM Integration</li>
 <li>• Company SOP Assistant</li>
 <li>• Internal Team Assistant</li>
 </ul>
 </div>
 </div>
 
 </div>
 </section>

 {/* CTA */}
 <div className="mt-32">
 <CTA 
 title="Supercharge Your Operations"
 subtitle="Let's discuss how an internal AI assistant can eliminate hours of manual work."
 buttonText="Book a Free Strategy Session"
 />
 </div>

 </main>
 );
}
