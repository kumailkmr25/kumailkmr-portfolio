"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
 { id: "all", label: "All Solutions" },
 { id: "customer-experience", label: "Customer Experience" },
 { id: "operations", label: "Operations" },
 { id: "lead-management", label: "Lead Management" },
 { id: "intelligence", label: "Intelligence" },
];

const categoryMap: Record<string, string[]> = {
 "customer-experience": ["ai-support", "ai-voice", "knowledge-base", "review-mgmt", "ai-creative-videos", "ai-support-chatbot", "personal-ai-assistant"],
 operations: ["workflow-auto", "doc-collection", "order-mgmt", "booking", "onboarding", "dashboard", "personal-ai-assistant"],
 "lead-management": ["lead-system", "whatsapp-auto", "crm", "proposal", "ai-creative-videos", "ai-support-chatbot"],
 intelligence: ["custom-ai", "ai-creative-videos", "personal-ai-assistant"],
};

export function ServicesSection() {
 const [activeTab, setActiveTab] = useState("all");

 const filteredServices = services.filter((s) => {
 if (activeTab === "all") return true;
 return categoryMap[activeTab]?.includes(s.id);
 });

 return (
 <section className="section-py bg-white dark:bg-background">
 <div className="section-container">
 <SectionHeading
 badge="Solutions"
 title="Business Solutions I Deliver"
 subtitle="Every service is designed around a specific business outcome — not just technology."
 />

 {/* Tabs */}
 <div className="flex flex-wrap gap-2 mt-8 mb-10">
 {categories.map((cat) => (
 <button
 key={cat.id}
 onClick={() => setActiveTab(cat.id)}
 className={cn(
 "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
 activeTab === cat.id
 ? "bg-[#09090b] dark:bg-white text-white dark:text-foreground border-transparent"
 : "bg-white dark:bg-background text-foreground-muted border-border-strong hover:border-black/20 dark:hover:border-white/20 hover:text-foreground dark:hover:text-white"
 )}
 >
 {cat.label}
 </button>
 ))}
 </div>

 {/* Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 <AnimatePresence mode="popLayout">
 {filteredServices.map((service) => {
 const serviceUrl = service.href || `/services/${service.id}`;
 const CardContent = (
 <>
 <div className="w-12 h-12 rounded-xl bg-white dark:bg-background border border-border flex items-center justify-center text-2xl mb-6">
 {service.icon}
 </div>
 <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-between">
 {service.title}
 <span className="text-primary text-sm font-normal bg-primary/10 px-2 py-1 rounded-md whitespace-nowrap ml-3">View Details &rarr;</span>
 </h3>
 <p className="text-foreground-muted text-sm leading-relaxed mb-8 flex-1">
 {service.description}
 </p>

 <div className="pt-6 border-t border-border mt-auto">
 <ul className="flex flex-col gap-3">
 {service.features.slice(0, 3).map((feature, idx) => (
 <li key={idx} className="flex gap-3 text-sm">
 <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
 <span className="text-foreground-muted">{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 </>
 );

 return (
 <motion.div
 layout
 key={service.id}
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.9 }}
 transition={{ duration: 0.3 }}
 >
 <Link href={serviceUrl} className="premium-card p-8 flex flex-col h-full bg-surface hover:border-primary/50 transition-colors cursor-pointer group">
 {CardContent}
 </Link>
 </motion.div>
 );
 })}
 </AnimatePresence>
 </div>

 <div className="mt-12 text-center">
 <Link
 href="/services"
 className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-[#059669] dark:hover:text-[#10b981] transition-colors"
 >
 View All Solutions <span>→</span>
 </Link>
 </div>
 </div>
 </section>
 );
}
