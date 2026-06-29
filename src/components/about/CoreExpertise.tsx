"use client";

import { motion } from "framer-motion";
import { Code, MessageCircle, Mic, BrainCircuit, Workflow, Smartphone, Bot, Database, BarChart, Lightbulb, Combine, Blocks } from "lucide-react";

const expertise = [
 { icon: <BrainCircuit />, title: "AI Automation", desc: "End-to-end intelligent systems." },
 { icon: <MessageCircle />, title: "AI Customer Support", desc: "24/7 intelligent query resolution." },
 { icon: <Mic />, title: "AI Voice Agents", desc: "Conversational voice receptionists." },
 { icon: <Code />, title: "Prompt Engineering", desc: "Optimizing LLMs for accuracy." },
 { icon: <Workflow />, title: "Workflow Automation", desc: "Eliminating manual data entry." },
 { icon: <Smartphone />, title: "WhatsApp Automation", desc: "Business on the world's biggest app." },
 { icon: <Bot />, title: "AI Assistants", desc: "Custom bots for internal teams." },
 { icon: <Database />, title: "Knowledge Base Systems", desc: "Vector search for company data." },
 { icon: <BarChart />, title: "Process Optimization", desc: "Streamlining operations for scale." },
 { icon: <Lightbulb />, title: "AI Consulting", desc: "Strategic technology advisory." },
 { icon: <Blocks />, title: "Process Mapping", desc: "Visualizing and fixing bottlenecks." },
 { icon: <Combine />, title: "API Integrations", desc: "Connecting disjointed software." },
];

export function CoreExpertise() {
 return (
 <section className="py-24 bg-white dark:bg-background">
 <div className="section-container max-w-6xl">
 <div className="text-center max-w-2xl mx-auto mb-16">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
 Technical Capabilities
 </div>
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-foreground ">
 Core Expertise
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 {expertise.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.05 }}
 className="p-5 rounded-2xl border border-border bg-surface/50 flex items-start gap-4 hover:bg-white dark:hover:bg-[#1a1a1a] hover:shadow-lg transition-all"
 >
 <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
 {item.icon}
 </div>
 <div>
 <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
 <p className="text-xs text-foreground-muted leading-relaxed">{item.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
