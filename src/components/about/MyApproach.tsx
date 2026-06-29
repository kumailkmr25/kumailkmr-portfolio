"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, RefreshCw } from "lucide-react";

const approachSteps = [
 {
 icon: <Search className="w-6 h-6" />,
 title: "Understand",
 description: "Every business is different. I begin by understanding workflows, pain points, and goals before recommending technology."
 },
 {
 icon: <PenTool className="w-6 h-6" />,
 title: "Design",
 description: "I architect tailored AI systems aligned with the way the business operates, ensuring a perfect operational fit."
 },
 {
 icon: <Code2 className="w-6 h-6" />,
 title: "Build",
 description: "Every solution is designed to integrate naturally into existing processes and immediately improve day-to-day operations."
 },
 {
 icon: <RefreshCw className="w-6 h-6" />,
 title: "Improve",
 description: "I continuously refine and optimize systems as business needs evolve, ensuring long-term scalable success."
 }
];

export function MyApproach() {
 return (
 <section className="py-24 bg-surface border-y border-border ">
 <div className="section-container max-w-6xl">
 <div className="text-center max-w-2xl mx-auto mb-16">
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-foreground ">
 My Approach
 </h2>
 <p className="text-lg text-foreground-muted font-light">
 I do not build generic chatbots. I engineer bespoke operational systems rooted in fundamental business analysis.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {approachSteps.map((step, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="premium-card p-8 bg-surface-2 flex flex-col items-center text-center group"
 >
 <div className="w-16 h-16 rounded-2xl bg-surface dark:bg-[#222] text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
 {step.icon}
 </div>
 <h3 className="text-xl font-bold text-foreground mb-3 font-sora">
 {step.title}
 </h3>
 <p className="text-foreground-muted text-sm leading-relaxed">
 {step.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
