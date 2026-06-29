"use client";

import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, Database, HeartHandshake, Settings, TrendingUp, Cpu } from "lucide-react";

const outcomes = [
 { icon: <Clock />, title: "Reduce Repetitive Work" },
 { icon: <Zap />, title: "Improve Response Times" },
 { icon: <Settings />, title: "Streamline Operations" },
 { icon: <Database />, title: "Centralize Knowledge" },
 { icon: <HeartHandshake />, title: "Enhance Customer Experience" },
 { icon: <Cpu />, title: "Automate Routine Processes" },
 { icon: <TrendingUp />, title: "Improve Team Productivity" },
 { icon: <ShieldCheck />, title: "Support Scalable Growth" },
];

export function Outcomes() {
 return (
 <section className="py-24 bg-white dark:bg-background">
 <div className="section-container max-w-6xl">
 <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
 
 <div className="lg:w-1/3 text-center lg:text-left">
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-sora text-foreground ">
 What I Help Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Achieve.</span>
 </h2>
 <p className="text-lg text-foreground-muted font-light leading-relaxed">
 Technology is merely a tool. The true focus is always on delivering measurable business outcomes that directly impact your bottom line.
 </p>
 </div>

 <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
 {outcomes.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.05 }}
 className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/50 hover:border-primary/30 transition-colors"
 >
 <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border shadow-sm flex items-center justify-center text-primary flex-shrink-0">
 {item.icon}
 </div>
 <span className="font-semibold text-foreground text-sm md:text-base">
 {item.title}
 </span>
 </motion.div>
 ))}
 </div>

 </div>
 </div>
 </section>
 );
}
