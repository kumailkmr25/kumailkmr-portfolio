"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map, PenTool, Play, CheckCircle2, CloudLightning, GraduationCap, Headphones } from "lucide-react";

const processSteps = [
 { id: 1, icon: <Search />, title: "Discovery", desc: "Understanding your current bottlenecks, tools, and business objectives." },
 { id: 2, icon: <Map />, title: "Business Analysis", desc: "Identifying exactly where AI and automation will deliver the highest ROI." },
 { id: 3, icon: <PenTool />, title: "Solution Design", desc: "Architecting a secure, scalable system tailored to your unique workflows." },
 { id: 4, icon: <Play />, title: "Development", desc: "Building the solution using robust APIs, LLMs, and automation platforms." },
 { id: 5, icon: <CheckCircle2 />, title: "Testing", desc: "Rigorous quality assurance to ensure edge cases are handled gracefully." },
 { id: 6, icon: <CloudLightning />, title: "Deployment", desc: "Seamless rollout with minimal disruption to your daily operations." },
 { id: 7, icon: <GraduationCap />, title: "Training", desc: "Empowering your team to use and manage the new systems effectively." },
 { id: 8, icon: <Headphones />, title: "Ongoing Support", desc: "Continuous monitoring, prompt refinement, and scaling support." },
];

export function ProcessTimeline() {
 const [activeStep, setActiveStep] = useState<number | null>(null);

 return (
 <section className="py-24 bg-surface ">
 <div className="section-container max-w-4xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-foreground ">
 How I Work
 </h2>
 <p className="text-lg text-foreground-muted font-light">
 A structured, transparent process designed to minimize risk and maximize business value.
 </p>
 </div>

 <div className="relative">
 {/* Vertical Line */}
 <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 -translate-x-1/2" />

 <div className="space-y-6">
 {processSteps.map((step, index) => {
 const isEven = index % 2 === 0;
 const isActive = activeStep === step.id;
 
 return (
 <div 
 key={step.id} 
 className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
 onMouseEnter={() => setActiveStep(step.id)}
 onMouseLeave={() => setActiveStep(null)}
 >
 {/* Timeline Dot */}
 <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-background border-2 border-primary -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />

 {/* Content Card */}
 <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-16 md:pl-0 text-left md:text-right' : 'md:pl-12 pl-16 text-left'}`}>
 <motion.div 
 initial={{ opacity: 0, x: isEven ? -20 : 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 className={`p-6 rounded-2xl border transition-all cursor-pointer ${isActive ? 'bg-surface-2 border-primary/40 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-[#1a1a1a]/50'}`}
 >
 <div className={`flex items-center gap-4 mb-2 ${isEven ? 'md:flex-row-reverse flex-row' : 'flex-row'}`}>
 <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-primary text-white' : 'bg-black/5 dark:bg-white/5 text-foreground-muted'}`}>
 {step.icon}
 </div>
 <h3 className="text-lg font-bold text-foreground font-sora">
 {step.title}
 </h3>
 </div>
 
 <AnimatePresence>
 {isActive && (
 <motion.p
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: "auto" }}
 exit={{ opacity: 0, height: 0 }}
 className="text-foreground-muted text-sm leading-relaxed overflow-hidden"
 >
 {step.desc}
 </motion.p>
 )}
 </AnimatePresence>
 </motion.div>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </div>
 </section>
 );
}
