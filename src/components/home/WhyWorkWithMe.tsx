"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whyWorkWithMe } from "@/lib/data";

export function WhyWorkWithMeSection() {
  return (
    <section className="section-py bg-white dark:bg-[#0a0a0a]">
      <div className="section-container">
        <SectionHeading
          badge="Why Choose Me"
          title="A Different Kind of AI Consultant"
          subtitle="I don't just build automation — I build business systems that deliver lasting results."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {whyWorkWithMe.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card p-6 flex flex-col gap-4"
            >
              <div className="emerald-bg rounded-lg p-2 w-fit text-2xl">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-[#09090b] dark:text-white text-lg leading-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
