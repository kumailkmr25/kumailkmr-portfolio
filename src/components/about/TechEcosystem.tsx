"use client";

import { motion } from "framer-motion";
import { ArrowDown, Brain, Database, Users, Workflow, Building, Smartphone } from "lucide-react";

export function TechEcosystem() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="section-container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-[#09090b] dark:text-white">
            The Technology Ecosystem
          </h2>
          <p className="text-lg text-[#71717a] font-light">
            How systems seamlessly integrate to turn raw data into automated business value.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Layer 1: Business */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-2/3 p-6 rounded-2xl bg-[#f4f4f5] dark:bg-[#111111] border border-black/5 dark:border-white/5 flex items-center justify-center gap-4 z-10"
          >
            <Building className="w-8 h-8 text-[#71717a]" />
            <span className="font-bold text-lg text-[#09090b] dark:text-white">Your Business Data</span>
          </motion.div>

          <ArrowDown className="my-4 text-primary animate-bounce opacity-50" />

          {/* Layer 2: Input Channels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full grid grid-cols-2 gap-4 z-10"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 shadow-lg flex flex-col items-center justify-center gap-3 text-center">
              <Smartphone className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-sm">WhatsApp / Voice</span>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 shadow-lg flex flex-col items-center justify-center gap-3 text-center">
              <Database className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-sm">Web / CRM Data</span>
            </div>
          </motion.div>

          <ArrowDown className="my-4 text-primary animate-bounce opacity-50" />

          {/* Layer 3: AI Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full sm:w-4/5 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl animate-pulse" />
            <Brain className="w-12 h-12 text-primary mb-4 relative z-10" />
            <h3 className="font-bold text-xl text-[#09090b] dark:text-white relative z-10">AI & Automation Layer</h3>
            <p className="text-sm text-[#71717a] text-center mt-2 relative z-10">Intelligent Routing • Contextual Memory • Automated Responses</p>
          </motion.div>

          <ArrowDown className="my-4 text-primary animate-bounce opacity-50" />

          {/* Layer 4: Output / Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full grid grid-cols-2 gap-4 z-10"
          >
            <div className="p-6 rounded-2xl bg-[#f4f4f5] dark:bg-[#111111] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-3 text-center">
              <Workflow className="w-6 h-6 text-orange-500" />
              <span className="font-semibold text-sm">Automated Workflows</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#f4f4f5] dark:bg-[#111111] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-3 text-center">
              <Users className="w-6 h-6 text-purple-500" />
              <span className="font-semibold text-sm">Human Hand-off</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
