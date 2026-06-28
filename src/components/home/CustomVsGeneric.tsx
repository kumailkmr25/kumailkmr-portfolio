"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/shared/Badge";

const comparison = [
  {
    feature: "Business Fit",
    generic: "You must adapt your processes to fit the software limitations.",
    custom: "The system is built exactly around how your business operates.",
  },
  {
    feature: "Flexibility",
    generic: "Feature requests take years or are ignored completely.",
    custom: "Can be modified, extended, or integrated at any time.",
  },
  {
    feature: "Integration",
    generic: "Limited native integrations; often requires manual data transfer.",
    custom: "Seamlessly connects with your existing CRM, tools, and databases.",
  },
  {
    feature: "Scalability",
    generic: "Cost increases dramatically as user seats or volume grows.",
    custom: "Infrastructure scales efficiently with minimal marginal cost.",
  },
  {
    feature: "Long-Term Value",
    generic: "You rent the software forever and own none of the intellectual property.",
    custom: "You own the tailored workflows and specific logic driving your business.",
  },
];

export function CustomVsGeneric() {
  return (
    <section className="section-py bg-white dark:bg-[#0a0a0a]">
      <div className="section-container max-w-5xl">
        <SectionHeading
          badge="Why Custom Systems?"
          title="Generic Software vs. Tailored Business Systems"
          subtitle="Off-the-shelf SaaS products are built for the average user. A custom AI automation system is built specifically to generate ROI for your business."
          center
        />

        <div className="mt-16 premium-card bg-white dark:bg-[#0a0a0a] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/5 dark:border-white/5 bg-[#f4f4f5] dark:bg-[#111111]">
            <div className="md:col-span-3 p-6 flex items-center">
              <span className="font-bold text-[#71717a] uppercase tracking-wider text-xs">Comparison</span>
            </div>
            <div className="md:col-span-4 p-6 border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5 bg-red-50/30 dark:bg-red-950/10">
              <Badge variant="gray" className="mb-2">Off-The-Shelf SaaS</Badge>
              <h3 className="font-bold text-lg">Generic Software</h3>
            </div>
            <div className="md:col-span-5 p-6 border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5 bg-primary-bg/50 dark:bg-primary-bg">
              <Badge variant="emerald" className="mb-2">Consulting Standard</Badge>
              <h3 className="font-bold text-lg text-[#059669] dark:text-[#10b981]">Tailored Business Systems</h3>
            </div>
          </div>

          <div className="flex flex-col">
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 border-b border-black/5 dark:border-white/5 last:border-b-0"
              >
                <div className="md:col-span-3 p-6 flex items-center bg-[#f4f4f5]/50 dark:bg-[#111111]/50">
                  <span className="font-semibold text-[#09090b] dark:text-white">{row.feature}</span>
                </div>
                
                <div className="md:col-span-4 p-6 border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5 flex gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#71717a] leading-relaxed">{row.generic}</span>
                </div>
                
                <div className="md:col-span-5 p-6 border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5 flex gap-3 bg-primary-bg/10 dark:bg-primary-bg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#09090b] dark:text-[#a1a1aa] leading-relaxed font-medium">{row.custom}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
