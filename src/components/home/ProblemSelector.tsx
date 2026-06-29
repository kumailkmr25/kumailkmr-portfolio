"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, Bot, Zap, Database, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

const problems = [
  {
    id: "inquiries",
    title: "Too many customer inquiries",
    solution: "AI Customer Support Assistant",
    desc: "Deploy a 24/7 AI agent that handles 80% of FAQs instantly across WhatsApp and website.",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    id: "slow",
    title: "Slow response times",
    solution: "Instant Lead Responder",
    desc: "Automated systems that engage leads within 3 seconds, drastically improving conversion.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "manual",
    title: "Manual paperwork",
    solution: "Automated Document Collection",
    desc: "Smart portals that chase clients for documents and automatically organize them in your drive.",
    icon: <Database className="w-5 h-5" />
  },
  {
    id: "staff",
    title: "Staff bogged down by repetitive work",
    solution: "Internal Workflow Automation",
    desc: "Connect your existing apps to move data automatically, freeing your team for high-value work.",
    icon: <Bot className="w-5 h-5" />
  },
  {
    id: "scheduling",
    title: "Appointment scheduling chaos",
    solution: "AI Booking System",
    desc: "Self-serve booking assistants with automatic calendar sync, reminders, and payment collection.",
    icon: <Calendar className="w-5 h-5" />
  }
];

export function ProblemSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProblem = problems.find(p => p.id === selectedId);

  return (
    <section className="section-py bg-[#f4f4f5] dark:bg-[#111111] overflow-hidden relative">
      <div className="section-container relative z-10 max-w-5xl">
        <div className="text-center mb-12 flex flex-col items-center">
          <SectionHeading
            badge="Interactive Assessment"
            title="What challenge is your business facing?"
            subtitle="Select your biggest bottleneck below to discover the exact automation solution you need."
            center
          />
        </div>

        {/* Problem Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {problems.map((p) => {
            const isSelected = selectedId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(isSelected ? null : p.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isSelected 
                    ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105" 
                    : "bg-white dark:bg-[#1a1a1a] text-[#71717a] border-black/5 dark:border-white/5 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Solution Reveal */}
        <AnimatePresence mode="wait">
          {selectedProblem && (
            <motion.div
              key={selectedProblem.id}
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card premium-card overflow-hidden"
            >
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white to-[#f4f4f5] dark:from-[#111] dark:to-[#0a0a0a]">
                <div className="w-16 h-16 rounded-2xl emerald-bg text-primary flex items-center justify-center flex-shrink-0 shadow-inner">
                  {selectedProblem.icon}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-[#71717a] font-semibold text-sm uppercase tracking-wider mb-2">Recommended Solution</h4>
                  <h3 className="heading-md mb-3">{selectedProblem.solution}</h3>
                  <p className="text-foreground-muted text-lg max-w-xl text-balance">
                    {selectedProblem.desc}
                  </p>
                </div>
                
                <div className="flex-shrink-0 mt-6 md:mt-0">
                  <Link
                    href={personalInfo.social.calendly}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
                  >
                    Solve This Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
