"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { industries } from "@/lib/data";
import { Check } from "lucide-react";

export function WhoIHelp() {
  return (
    <section className="section-py bg-white dark:bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeading
          badge="Industries"
          title="Who I Help"
          subtitle="AI-powered business systems for the industries that need them most."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card p-6 flex flex-col h-full"
            >
              <div className="emerald-bg rounded-xl p-3 w-fit mb-4 text-3xl">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#09090b] dark:text-white mb-4">
                {industry.name}
              </h3>

              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {industry.problems.slice(0, 3).map((prob, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#71717a] flex items-start gap-2"
                  >
                    <span className="text-[#a1a1aa] mt-0.5">-</span>
                    {prob}
                  </li>
                ))}
              </ul>

              <div className="border-t border-black/5 dark:border-white/5 pt-4 mb-4">
                <p className="text-sm text-[#09090b] dark:text-[#a1a1aa] italic mb-3">
                  {industry.howAIHelps.split(".")[0] + "."}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {industry.outcomes.slice(0, 2).map((outcome, idx) => (
                    <li
                      key={idx}
                      className="text-sm emerald-text flex items-start gap-1.5 font-medium"
                    >
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/industries"
                className="mt-auto pt-2 text-sm font-semibold emerald-text hover:text-primary dark:hover:text-primary-light transition-colors inline-flex items-center gap-1"
              >
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
