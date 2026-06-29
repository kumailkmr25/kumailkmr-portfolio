"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlayCircle, Lock } from "lucide-react";

const categories = ["Hospital", "Restaurant", "CA Firm", "Real Estate", "Travel", "Coaching"];

export function DemoCenter() {
 const [activeCategory, setActiveCategory] = useState(categories[0]);

 return (
 <section className="section-py bg-surface overflow-hidden">
 <div className="section-container max-w-6xl">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
 <SectionHeading
 badge="Live Demos"
 title="Watch AI in Action"
 subtitle="See exactly how these intelligent systems operate in real business environments."
 />
 
 <div className="flex flex-wrap gap-2">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() => setActiveCategory(cat)}
 className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
 activeCategory === cat
 ? "bg-foreground text-background shadow-md"
 : "bg-white dark:bg-background text-foreground-muted hover:bg-black/5 dark:hover:bg-white/5 border border-border "
 }`}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass-card border border-border-strong group cursor-pointer shadow-2xl">
 {/* Premium Empty State Background */}
 <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center z-10 transition-colors group-hover:bg-black/10 dark:group-hover:bg-white/10">
 
 <AnimatePresence mode="wait">
 <motion.div
 key={activeCategory}
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.3 }}
 className="flex flex-col items-center"
 >
 <div className="w-16 h-16 rounded-full bg-black/50 dark:bg-white/10 text-white flex items-center justify-center mb-6 shadow-xl backdrop-blur-md relative">
 <PlayCircle className="w-8 h-8 absolute" />
 <Lock className="w-4 h-4 absolute -bottom-1 -right-1 text-foreground-muted bg-black/80 rounded-full p-0.5" />
 </div>
 
 <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
 {activeCategory} Automation Demo
 </h3>
 <p className="text-foreground-muted max-w-md mx-auto mb-6">
 This detailed technical walkthrough demonstrates the complete workflow for solving the most common bottlenecks in {activeCategory.toLowerCase()} operations.
 </p>
 
 <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 text-foreground-muted text-sm font-medium border border-border-strong ">
 <span>Demo Access Restricted</span>
 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
 </div>
 </motion.div>
 </AnimatePresence>
 
 </div>

 {/* Abstract Grid Background inside player */}
 <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
 />
 </div>
 </div>
 </section>
 );
}
