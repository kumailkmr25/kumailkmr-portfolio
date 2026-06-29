"use client";

import { motion } from "framer-motion";
import { 
 Building2, 
 Stethoscope, 
 GraduationCap, 
 Utensils, 
 Hotel, 
 Plane, 
 Home, 
 ShoppingBag,
 Briefcase,
 Store
} from "lucide-react";

const industries = [
 { icon: <Building2 />, name: "CA Firms", opportunity: "Automated document collection and tax query handling." },
 { icon: <Stethoscope />, name: "Hospitals", opportunity: "24/7 AI appointment scheduling and patient FAQs." },
 { icon: <GraduationCap />, name: "Coaching", opportunity: "Instant lead nurturing and batch enrollment automation." },
 { icon: <Utensils />, name: "Restaurants", opportunity: "WhatsApp ordering and reservation management." },
 { icon: <Hotel />, name: "Hotels", opportunity: "Automated room service requests and guest feedback." },
 { icon: <Plane />, name: "Travel Agencies", opportunity: "AI itinerary generation and instant quoting." },
 { icon: <Home />, name: "Real Estate", opportunity: "Automated property matching and lead qualification." },
 { icon: <ShoppingBag />, name: "Retail", opportunity: "Inventory alerts and customer support chatbots." },
 { icon: <Briefcase />, name: "Service Firms", opportunity: "Proposal generation and client onboarding workflows." },
 { icon: <Store />, name: "SMEs", opportunity: "Centralized knowledge bases and CRM automation." },
];

export function IndustryGrid() {
 return (
 <section className="py-24 bg-surface border-t border-border ">
 <div className="section-container max-w-6xl">
 <div className="text-center max-w-2xl mx-auto mb-16">
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-foreground ">
 Industries I Work With
 </h2>
 <p className="text-lg text-foreground-muted font-light">
 I build systems that solve industry-specific operational challenges.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 {industries.map((ind, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: i * 0.05 }}
 className="group relative p-6 bg-surface-2 rounded-2xl border border-border hover:border-primary/50 transition-all cursor-pointer h-40 flex flex-col items-center justify-center text-center overflow-hidden"
 >
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
 {/* Default State */}
 <div className="transition-transform duration-300 group-hover:-translate-y-8 group-hover:opacity-0 flex flex-col items-center">
 <div className="w-12 h-12 rounded-xl bg-surface dark:bg-[#222] text-foreground-muted group-hover:text-primary flex items-center justify-center mb-3 transition-colors">
 {ind.icon}
 </div>
 <span className="font-semibold text-foreground text-sm">
 {ind.name}
 </span>
 </div>

 {/* Hover State (Opportunity) */}
 <div className="absolute inset-0 p-4 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
 <p className="text-xs text-primary font-medium leading-relaxed">
 {ind.opportunity}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
