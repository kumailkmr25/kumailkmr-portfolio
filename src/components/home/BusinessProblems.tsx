"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { businessProblems } from "@/lib/data";
import { Badge } from "@/components/shared/Badge";

export function BusinessProblems() {
  return (
    <section className="section-py bg-[#f4f4f5] dark:bg-[#111111]">
      <div className="section-container">
        <SectionHeading
          badge="Pain Points"
          title="Business Problems I Solve"
          subtitle="Every card below represents real operational pain — and a proven automation solution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12">
          {businessProblems.map((bp, i) => (
            <motion.div
              key={bp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1, duration: 0.5 }}
              className="premium-card p-5 flex flex-col gap-3 bg-white dark:bg-[#0a0a0a]"
            >
              <div className="text-3xl mb-1">{bp.icon}</div>
              <h3 className="font-semibold text-base text-[#09090b] dark:text-white leading-tight">
                {bp.problem}
              </h3>
              <p className="text-xs text-[#71717a] leading-relaxed">
                {bp.impact}
              </p>

              <div className="my-1 border-t border-black/5 dark:border-white/5" />

              <p className="text-sm text-[#09090b] dark:text-[#a1a1aa] mb-3 flex-1">
                {bp.solution}
              </p>

              <div className="mt-auto">
                <Badge variant="emerald" className="w-full justify-center py-1.5 text-center whitespace-normal text-xs leading-tight">
                  {bp.outcome}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
