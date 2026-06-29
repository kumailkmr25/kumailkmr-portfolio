"use client";

import { Badge } from "@/components/shared/Badge";
import { stats, industries } from "@/lib/data";
import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="bg-white dark:bg-[#0a0a0a] pt-12 pb-20 border-b border-black/5 dark:border-white/5 relative z-20">
      <div className="section-container">
        
        {/* Top Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-foreground font-sora">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-2xl font-bold text-primary font-sora">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-[#71717a]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-widest text-center">
            Trusted by businesses across industries
          </p>
          <div className="marquee-mask w-full relative flex overflow-hidden">
            <div className="marquee flex gap-4 min-w-full py-2">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-[#f4f4f5] dark:bg-[#111111] rounded-xl border border-black/5 dark:border-white/5 whitespace-nowrap shadow-sm">
                  <span className="text-xl">{ind.icon}</span> 
                  <span className="text-sm font-semibold text-foreground">{ind.name}</span>
                </div>
              ))}
              {/* Duplicate for infinite scroll effect */}
              {industries.map((ind, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 px-6 py-3 bg-[#f4f4f5] dark:bg-[#111111] rounded-xl border border-black/5 dark:border-white/5 whitespace-nowrap shadow-sm">
                  <span className="text-xl">{ind.icon}</span> 
                  <span className="text-sm font-semibold text-foreground">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
