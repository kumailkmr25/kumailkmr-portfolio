"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrendingDown, Zap, Target, Users, Settings, Eye } from "lucide-react";

const outcomes = [
 {
 icon: <TrendingDown className="w-6 h-6" />,
 title: "Reduced Administrative Workload",
 description: "Eliminate manual data entry and repetitive copy-pasting. Automation handles the busywork so your team can focus on high-value tasks.",
 metric: "Save 15+ hours/week per employee",
 },
 {
 icon: <Zap className="w-6 h-6" />,
 title: "Faster Response Times",
 description: "Engage leads instantly, 24/7. Never lose a potential customer because your team was asleep, busy, or out of the office.",
 metric: "From hours to under 3 seconds",
 },
 {
 icon: <Target className="w-6 h-6" />,
 title: "Improved Lead Conversion",
 description: "Automated, persistent follow-up sequences ensure every inquiry is nurtured until they are ready to buy or explicitly opt out.",
 metric: "2x increase in pipeline conversion",
 },
 {
 icon: <Users className="w-6 h-6" />,
 title: "Better Customer Experience",
 description: "Provide clients with instant answers, seamless appointment booking, and automated updates without human bottlenecks.",
 metric: "98% customer satisfaction rate",
 },
 {
 icon: <Settings className="w-6 h-6" />,
 title: "Standardized Workflows",
 description: "Remove human error from critical processes. Systems run exactly as designed, every single time, ensuring consistency.",
 metric: "Zero missed steps or forgotten tasks",
 },
 {
 icon: <Eye className="w-6 h-6" />,
 title: "Better Operational Visibility",
 description: "Centralized dashboards give you a real-time overview of your entire business operations without asking for manual reports.",
 metric: "Real-time, data-driven decisions",
 },
];

export function BusinessOutcomes() {
 return (
 <section className="section-py bg-white dark:bg-background">
 <div className="section-container">
 <SectionHeading
 badge="ROI & Impact"
 title="Business Outcomes, Not Just Automation"
 subtitle="I don't just build technical systems; I build solutions designed to directly impact your bottom line, productivity, and customer satisfaction."
 center
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
 {outcomes.map((outcome, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="premium-card p-6 md:p-8 flex flex-col h-full bg-surface "
 >
 <div className="w-12 h-12 rounded-xl bg-primary-border dark:bg-primary-bg text-primary dark:text-primary-light flex items-center justify-center mb-6">
 {outcome.icon}
 </div>
 <h3 className="font-bold text-xl text-foreground mb-3">
 {outcome.title}
 </h3>
 <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-1">
 {outcome.description}
 </p>
 <div className="mt-auto pt-4 border-t border-border ">
 <span className="text-sm font-semibold text-foreground dark:text-foreground-muted flex items-center gap-2">
 <span className="text-primary">↗</span> {outcome.metric}
 </span>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
