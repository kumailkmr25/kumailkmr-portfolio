"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { XCircle, CheckCircle2 } from "lucide-react";

export function BeforeAfter() {
  return (
    <section className="section-py bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="section-container max-w-5xl">
        <SectionHeading
          badge="Transformation"
          title="The Automation Shift"
          subtitle="See the difference between running a business manually versus running it on intelligent systems."
          center
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Decorative VS circle in the middle (visible on md+) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 z-20 items-center justify-center font-bold text-[#71717a] shadow-lg">
            VS
          </div>

          {/* BEFORE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-[2rem] bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 relative"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Before Automation</h3>
              <p className="text-[#71717a] text-sm">You are the bottleneck in your own business.</p>
            </div>
            
            <ul className="space-y-5">
              {[
                "Hours wasted on manual copy-pasting",
                "Leads missed because of delayed responses",
                "Scattered data across spreadsheets and WhatsApp",
                "Staff overwhelmed by repetitive support queries",
                "Scaling requires hiring more admin staff"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2rem] bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 relative shadow-[0_0_40px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-2">After Automation</h3>
              <p className="text-[#71717a] text-sm">Systems run seamlessly in the background.</p>
            </div>
            
            <ul className="space-y-5 relative z-10">
              {[
                "Instant responses 24/7 across all channels",
                "Zero manual data entry; perfect sync",
                "Centralized dashboards for total visibility",
                "Staff focused entirely on high-value strategy",
                "Scale operations with zero extra headcount"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
