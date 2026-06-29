"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { industries, personalInfo } from "@/lib/data";
import { Check, ArrowRight, XCircle } from "lucide-react";

export function WhoIHelp() {
 const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
 const activeIndustry = industries.find(i => i.id === activeIndustryId) || industries[0];

 return (
 <section className="section-py bg-white dark:bg-background">
 <div className="section-container">
 <SectionHeading
 badge="Industry Experience"
 title="Tailored Solutions for Your Sector"
 subtitle="Select your industry to see how AI automation directly solves your specific operational bottlenecks."
 center
 />

 {/* Horizontal Industry Selector */}
 <div className="mt-12 flex overflow-x-auto pb-4 gap-3 no-scrollbar snap-x justify-start md:justify-center">
 {industries.map((ind) => {
 const isActive = activeIndustryId === ind.id;
 return (
 <button
 key={ind.id}
 onClick={() => setActiveIndustryId(ind.id)}
 className={`flex-shrink-0 snap-center flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
 isActive 
 ? "bg-primary text-white border-primary shadow-md" 
 : "bg-surface text-foreground-muted border-border hover:bg-black/5 dark:hover:bg-white/5"
 }`}
 >
 <span>{ind.icon}</span> {ind.name}
 </button>
 );
 })}
 </div>

 {/* Dynamic Content Display */}
 <div className="mt-8 relative min-h-[500px]">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeIndustry.id}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.4, ease: "easeOut" }}
 className="glass-card premium-card overflow-hidden bg-surface/50 /50"
 >
 <div className="grid grid-cols-1 lg:grid-cols-2">
 {/* Left: Problems & Impact */}
 <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border ">
 <div className="flex items-center gap-4 mb-8">
 <div className="w-16 h-16 rounded-2xl emerald-bg text-3xl flex items-center justify-center">
 {activeIndustry.icon}
 </div>
 <div>
 <h3 className="heading-md">{activeIndustry.name}</h3>
 <p className="text-foreground-muted">Common Operational Bottlenecks</p>
 </div>
 </div>

 <div className="space-y-4">
 {activeIndustry.problems.map((prob, idx) => (
 <div key={idx} className="flex items-start gap-3 p-4 bg-white dark:bg-background rounded-xl border border-border shadow-sm">
 <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
 <span className="text-sm font-medium text-foreground leading-relaxed">{prob}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Right: Solutions & Outcomes */}
 <div className="p-8 md:p-12 bg-white dark:bg-background">
 <h4 className="text-sm font-bold tracking-wider text-primary uppercase mb-6 flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
 The Automation Solution
 </h4>
 
 <p className="text-lg text-foreground-muted leading-relaxed mb-8">
 {activeIndustry.howAIHelps}
 </p>

 <h5 className="font-semibold mb-4 text-foreground ">Business Outcomes:</h5>
 <ul className="space-y-3 mb-10">
 {activeIndustry.outcomes.map((outcome, idx) => (
 <li key={idx} className="flex items-start gap-3">
 <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-primary flex items-center justify-center">
 <Check className="w-3 h-3" />
 </div>
 <span className="text-sm font-medium text-foreground-muted">{outcome}</span>
 </li>
 ))}
 </ul>

 <Link
 href={personalInfo.social.calendly}
 target="_blank"
 className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl transition-all hover:bg-primary-light shadow-md hover:shadow-lg active:scale-95"
 >
 Automate Your {activeIndustry.name.split(' ')[0]} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>
 </div>
 </section>
 );
}
