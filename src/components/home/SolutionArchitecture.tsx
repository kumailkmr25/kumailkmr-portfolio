"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowDown } from "lucide-react";

const flowSteps = [
  {
    icon: "👤",
    title: "Customer",
    desc: "Initiates contact or takes an action",
  },
  {
    icon: "💬",
    title: "WhatsApp / Website",
    desc: "The primary communication channel",
  },
  {
    icon: "🤖",
    title: "AI Assistant",
    desc: "Understands intent and extracts context",
  },
  {
    icon: "⚙️",
    title: "Business Logic",
    desc: "Applies your specific business rules",
  },
  {
    icon: "🧠",
    title: "Knowledge Base",
    desc: "Retrieves company-specific information",
  },
  {
    icon: "🗄️",
    title: "CRM / Database",
    desc: "Updates records and tracks interactions",
  },
  {
    icon: "📊",
    title: "Dashboard",
    desc: "Provides management visibility",
  },
  {
    icon: "👨‍💻",
    title: "Human Escalation",
    desc: "Seamless handoff for complex queries",
  },
];

export function SolutionArchitecture() {
  return (
    <section className="section-py bg-[#f4f4f5] dark:bg-[#111111]">
      <div className="section-container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              badge="Architecture"
              title="How I Design Business Systems"
              subtitle="Every solution is tailored to your specific workflows. We don't just use a single tool; we connect best-in-class platforms to create an integrated ecosystem."
            />
            
            <div className="mt-10 flex flex-col gap-6">
              <div className="premium-card p-6 bg-white dark:bg-[#0a0a0a] border-l-4 border-l-primary">
                <h3 className="font-bold text-lg mb-2">Tailored Workflows</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">
                  Off-the-shelf software forces you to change how you work. I design architectures that fit naturally into your existing processes, minimizing friction for your team.
                </p>
              </div>
              <div className="premium-card p-6 bg-white dark:bg-[#0a0a0a] border-l-4 border-l-blue-500">
                <h3 className="font-bold text-lg mb-2">Modular & Scalable</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">
                  Systems are built using modular components. If you need to swap out your CRM or upgrade your AI models in the future, the architecture handles it seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-10 bottom-10 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-primary-border dark:via-primary-border/50 to-transparent -translate-x-1/2" />
            
            <div className="flex flex-col gap-3 relative z-10 py-6">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center justify-center relative"
                >
                  <div className="w-full max-w-sm premium-card bg-white dark:bg-[#0a0a0a] p-4 flex items-center gap-4 hover:border-primary-border dark:hover:border-primary-border transition-colors shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#f4f4f5] dark:bg-[#111111] flex items-center justify-center text-xl flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#09090b] dark:text-white text-sm">
                        {step.title}
                      </span>
                      <span className="text-xs text-[#71717a]">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-primary-light dark:text-emerald-800 hidden">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
