"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MessageSquare, Bot, Database, LayoutDashboard, UserCircle, Brain, ArrowDown } from "lucide-react";

const nodes = [
 { id: "customer", label: "Customer", icon: <UserCircle className="w-5 h-5" />, desc: "A prospect or client initiates contact at any time of day." },
 { id: "channel", label: "WhatsApp / Web", icon: <MessageSquare className="w-5 h-5" />, desc: "The message is instantly captured via official API integration." },
 { id: "ai", label: "AI Assistant", icon: <Bot className="w-5 h-5" />, desc: "The core engine processes intent, qualifies leads, or handles FAQs within 2 seconds." },
 { id: "kb", label: "Knowledge Base", icon: <Brain className="w-5 h-5" />, desc: "The AI references your specific business data to provide accurate, tailored answers." },
 { id: "db", label: "Database Sync", icon: <Database className="w-5 h-5" />, desc: "All interactions, lead scores, and appointments are logged automatically." },
 { id: "dashboard", label: "Business Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, desc: "You maintain a real-time bird's-eye view of all operations." },
];

export function WorkflowVisualizer() {
 const [activeNode, setActiveNode] = useState(nodes[2].id); // Default to AI node

 const activeNodeData = nodes.find(n => n.id === activeNode);

 return (
 <section className="section-py bg-surface overflow-hidden">
 <div className="section-container max-w-5xl">
 <SectionHeading
 badge="Architecture"
 title="How It Works Under the Hood"
 subtitle="A visual breakdown of the typical AI automation workflow. Click any node to understand its role in your business system."
 center
 />

 <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
 
 {/* Left: The Graph */}
 <div className="md:col-span-5 flex flex-col items-center gap-2 relative z-10">
 {nodes.map((node, index) => {
 const isActive = activeNode === node.id;
 const isPast = nodes.findIndex(n => n.id === activeNode) > index;
 
 return (
 <div key={node.id} className="flex flex-col items-center w-full">
 <button
 onClick={() => setActiveNode(node.id)}
 className={`w-full max-w-[280px] p-4 flex items-center gap-4 rounded-xl border transition-all duration-300 ${
 isActive 
 ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105" 
 : isPast 
 ? "bg-white dark:bg-background border-primary/50 text-foreground" 
 : "bg-white dark:bg-background border-border text-foreground-muted hover:border-primary/30"
 }`}
 >
 <div className={`w-10 h-10 rounded-lg flex flex-shrink-0 items-center justify-center ${isActive ? 'bg-white/20' : 'emerald-bg text-primary'}`}>
 {node.icon}
 </div>
 <span className="font-semibold text-sm">{node.label}</span>
 </button>
 
 {/* Connection Line */}
 {index < nodes.length - 1 && (
 <div className="h-8 w-[2px] bg-black/10 dark:bg-white/10 relative my-1">
 {(isActive || isPast) && (
 <motion.div 
 initial={{ height: 0 }}
 animate={{ height: "100%" }}
 transition={{ duration: 0.5 }}
 className="absolute top-0 left-0 w-full bg-primary"
 />
 )}
 {isActive && (
 <motion.div 
 animate={{ y: [0, 32] }}
 transition={{ duration: 1.5, repeat: Infinity }}
 className="absolute -left-[5px] top-0 text-primary"
 >
 <ArrowDown className="w-3 h-3" />
 </motion.div>
 )}
 </div>
 )}
 </div>
 );
 })}
 </div>

 {/* Right: The Explanation Panel */}
 <div className="md:col-span-7 sticky top-32">
 <AnimatePresence mode="wait">
 {activeNodeData && (
 <motion.div
 key={activeNodeData.id}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.4 }}
 className="glass-card premium-card p-8 md:p-12 relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-bl-[100px] pointer-events-none" />
 
 <div className="w-16 h-16 rounded-2xl emerald-bg text-primary flex items-center justify-center mb-8 shadow-inner">
 {activeNodeData.icon}
 </div>
 
 <h4 className="text-sm font-bold tracking-wider text-primary uppercase mb-2">Node Insight</h4>
 <h3 className="heading-md mb-4">{activeNodeData.label}</h3>
 <p className="text-lg text-foreground-muted leading-relaxed mb-8">
 {activeNodeData.desc}
 </p>
 
 <div className="flex items-center gap-2 text-xs font-semibold text-foreground-muted uppercase tracking-widest border-t border-border pt-6 mt-6">
 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> System Online & Integrated
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 
 </div>
 </div>
 </section>
 );
}
