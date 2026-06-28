"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface WorkflowStep {
  step: string;
  desc: string;
  icon?: string;
}

export function WorkflowTimeline({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto w-full">
      {steps.map((step, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-full flex items-center bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#f4f4f5] dark:bg-[#111111] flex items-center justify-center text-xl mr-6 flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              {step.icon || "✓"}
            </div>
            <div>
              <h4 className="font-bold text-[#09090b] dark:text-white text-lg mb-1">{step.step}</h4>
              <p className="text-[#71717a] text-sm leading-relaxed">{step.desc}</p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black -mt-4 -mr-4 pointer-events-none">
              {index + 1}
            </div>
          </motion.div>

          {/* Connection arrow except for last item */}
          {index < steps.length - 1 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + 0.3, duration: 0.5 }}
              className="w-0.5 bg-black/10 dark:bg-white/10 my-2 relative flex items-center justify-center"
            >
              <ArrowDown className="w-4 h-4 text-black/30 dark:text-white/30 absolute bg-[#f4f4f5] dark:bg-[#111111] rounded-full" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
