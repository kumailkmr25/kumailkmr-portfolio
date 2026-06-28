"use client";

import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { processSteps } from "@/lib/data";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax line effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-[#050505] relative overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary-light mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-teal-200">Systems.</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg md:text-xl font-light">
            A battle-tested framework moving from chaos to clarity. No guesswork. Just engineered execution.
          </p>
        </div>

        <div className="relative mt-16 md:mt-24">
          {/* Animated Glowing Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary/0 via-primary-light to-primary/0 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 relative z-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[28px] md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0a0a] border-4 border-primary-border flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] z-20">
                  <div className="w-3 h-3 rounded-full bg-primary-light" />
                </div>

                {/* Content - Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:flex-1" />

                {/* Content Card */}
                <div className="flex-1 pl-16 md:pl-0 w-full group">
                  <div className={`p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-colors duration-500 overflow-hidden ${
                    i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className="bg-[#0a0a0a] rounded-[31px] p-8 md:p-10 border border-white/5 group-hover:border-primary-border transition-all duration-500 relative overflow-hidden h-full">
                      
                      {/* Subtle hover glow inside card */}
                      <div className="absolute -inset-24 bg-primary-bg group-hover:bg-primary-bg blur-3xl transition-colors duration-700 pointer-events-none" />

                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{step.icon}</span>
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        {step.duration && (
                          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-[#a1a1aa] tracking-widest uppercase">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-[#a1a1aa] text-lg leading-relaxed relative z-10 font-light group-hover:text-white/80 transition-colors">
                        {step.description}
                      </p>

                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center relative z-10">
          <Link 
            href={personalInfo.social.calendly} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg transition-all hover:bg-primary-light hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1"
          >
            Start with a Free Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
