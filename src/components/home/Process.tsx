"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/lib/data";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Process() {
  const [expandedStep, setExpandedStep] = useState<number>(processSteps[0].step);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="section-container relative z-10 max-w-4xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary-light mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white font-sora">
            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-emerald-200">Systems.</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg font-light">
            A battle-tested framework moving from chaos to clarity. Click on any phase to explore.
          </p>
        </div>

        <div className="relative mt-12 flex flex-col gap-4">
          {processSteps.map((step, index) => {
            const isExpanded = expandedStep === step.step;
            
            return (
              <div 
                key={step.step}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "bg-white/5 border-primary/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]" 
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => setExpandedStep(isExpanded ? 0 : step.step)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-xl transition-colors ${
                      isExpanded ? "bg-primary text-white shadow-lg" : "bg-white/10 text-white/50"
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary-light tracking-widest uppercase mb-1">
                        Phase 0{step.step}
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold font-sora transition-colors ${isExpanded ? "text-white" : "text-[#a1a1aa]"}`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? "rotate-180 bg-white/10 text-white" : "bg-transparent text-[#71717a]"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 flex flex-col md:flex-row gap-6 md:gap-12 md:ml-18">
                        <p className="text-[#a1a1aa] text-lg leading-relaxed flex-1">
                          {step.description}
                        </p>
                        {step.duration && (
                          <div className="flex-shrink-0">
                            <div className="px-4 py-2 rounded-lg bg-black/40 border border-white/5 flex flex-col items-start">
                              <span className="text-[10px] uppercase tracking-widest text-[#71717a] font-bold mb-1">Timeline</span>
                              <span className="text-primary-light font-medium">{step.duration}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href={personalInfo.social.calendly}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:scale-105 shadow-md hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
          >
            Start Phase 01 Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
