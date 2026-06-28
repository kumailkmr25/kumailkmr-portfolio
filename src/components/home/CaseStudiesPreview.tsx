"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { ArrowRight, BarChart3, Clock, Zap } from "lucide-react";
import { useRef } from "react";

export function CaseStudiesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-[#050505] relative overflow-hidden text-white border-y border-white/5"
    >
      {/* Premium Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-bg rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary-light mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Proven Outcomes
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-teal-200">Efficiency.</span>
            </h2>
            <p className="text-[#a1a1aa] text-lg md:text-xl max-w-xl font-light">
              See how I&apos;ve helped businesses like yours transform their operations
              and scale efficiently with custom AI systems.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium transition-all backdrop-blur-md"
          >
            View All Architectures
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.slice(0, 4).map((cs, i) => (
            <motion.div
              key={cs.id}
              style={{ y: i % 2 !== 0 ? y : 0 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              className="group relative p-1 rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-primary-bg group-hover:bg-primary-bg transition-colors duration-700 blur-2xl" />
              <div className="relative h-full bg-[#0a0a0a] rounded-[22px] p-8 md:p-10 flex flex-col border border-white/5 group-hover:border-primary-border transition-colors duration-500 z-10 overflow-hidden">
                
                {/* Subtle Grid in Card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                      {cs.industryIcon}
                    </div>
                    <span className="font-semibold text-white tracking-wide">
                      {cs.industry}
                    </span>
                  </div>
                  <div className="px-3 py-1 text-xs font-semibold text-[#a1a1aa] bg-white/5 rounded-full border border-white/10">
                    {cs.label}
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary-light transition-colors">
                    {cs.problem}
                  </h3>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-[#a1a1aa]">
                      <div className="w-8 h-8 rounded-full bg-primary-bg text-primary-light flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-white">{cs.impact[0]}</span>
                    </div>
                    {cs.impact[1] && (
                      <div className="flex items-center gap-4 text-sm text-[#a1a1aa]">
                        <div className="w-8 h-8 rounded-full bg-primary-bg text-primary-light flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4" />
                        </div>
                        <span>{cs.impact[1]}</span>
                      </div>
                    )}
                    {cs.impact[2] && (
                      <div className="flex items-center gap-4 text-sm text-[#a1a1aa]">
                        <div className="w-8 h-8 rounded-full bg-primary-bg text-primary-light flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <span>{cs.impact[2]}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="flex gap-2 flex-wrap">
                    {cs.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs text-[#71717a] font-medium tracking-wide uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-primary group-hover:border-primary-light group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
