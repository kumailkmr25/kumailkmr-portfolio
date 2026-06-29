"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
 { title: "Business-First Thinking", desc: "I prioritize ROI over novelty. If a simpler tool solves it better, we use that." },
 { title: "Tailored Solutions", desc: "Your business is unique; your automation shouldn't be off-the-shelf." },
 { title: "Long-Term Partnership", desc: "I build robust systems and provide ongoing support to scale them." },
 { title: "Transparent Communication", desc: "Clear expectations on capabilities, timelines, and costs. No jargon." },
 { title: "Scalable Architecture", desc: "Workflows built to handle 10x your current volume without breaking." },
 { title: "Practical Implementation", desc: "Seamless integration into your existing tech stack." },
];

export function WhyChooseMe() {
 return (
 <section className="py-24 bg-surface border-y border-border ">
 <div className="section-container max-w-5xl">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-foreground ">
 Why Businesses Choose Me
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {reasons.map((reason, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 className="flex items-start gap-4 p-6 bg-surface-2 rounded-2xl shadow-sm border border-border "
 >
 <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
 <div>
 <h4 className="text-lg font-bold text-foreground mb-2">{reason.title}</h4>
 <p className="text-foreground-muted text-sm leading-relaxed">{reason.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
