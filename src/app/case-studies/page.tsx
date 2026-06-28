"use client";

import { personalInfo } from "@/lib/data";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { ArrowRight, BarChart3, Clock, Zap, Target, Layers } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-primary-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-bg rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <section className="section-py section-container pt-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary-light mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live Architectures
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-teal-200">Operations.</span>
          </h1>
          <p className="text-[#a1a1aa] text-lg md:text-xl font-light leading-relaxed">
            Examine our blueprint demonstrations. We engineer workflows that bypass human bottlenecks and create limitless scale for your operations.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              className="group relative p-1 rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-primary-bg group-hover:bg-primary-bg transition-colors duration-700 blur-2xl" />
              <div className="relative h-full bg-[#0a0a0a] rounded-[31px] p-8 md:p-12 flex flex-col lg:flex-row gap-12 border border-white/5 group-hover:border-primary-border transition-colors duration-500 z-10 overflow-hidden">
                
                {/* Subtle Grid in Card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Left Col - Overview */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                      {cs.industryIcon}
                    </div>
                    <div>
                      <span className="block font-semibold text-white tracking-wide text-lg">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">
                        {cs.label}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:text-primary-light transition-colors">
                    {cs.problem}
                  </h2>

                  <div className="prose prose-invert prose-emerald">
                    <p className="text-[#a1a1aa] leading-relaxed">
                      <strong className="text-white block mb-2 font-semibold">The Old Way:</strong>
                      {cs.existingProcess}
                    </p>
                    <p className="text-[#a1a1aa] leading-relaxed mt-4">
                      <strong className="text-primary-light block mb-2 font-semibold">The Automated Solution:</strong>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Right Col - Workflow & Metrics */}
                <div className="flex-1 lg:pl-12 lg:border-l border-white/10 relative z-10 flex flex-col justify-between">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-6">
                      <Layers className="w-4 h-4 text-primary-light" /> Technical Architecture
                    </h4>
                    <div className="flex flex-col gap-4 relative mb-10">
                      <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-white/10" />
                      {cs.workflow.map((step, idx) => (
                        <div key={idx} className="flex gap-4 relative z-10">
                          <div className="w-6 h-6 rounded-full bg-[#111111] border border-white/20 text-[#a1a1aa] flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:border-primary-border group-hover:text-primary-light transition-colors">
                            {idx + 1}
                          </div>
                          <p className="text-sm font-medium text-[#a1a1aa] leading-relaxed pt-0.5">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-6">
                      <Target className="w-4 h-4 text-primary-light" /> ROI Metrics
                    </h4>
                    <ul className="flex flex-col gap-4">
                      {cs.impact.map((imp, idx) => {
                        const icons = [<Zap key={1} />, <Clock key={2} />, <BarChart3 key={3} />];
                        return (
                          <li key={idx} className="flex items-center gap-4 text-sm text-white font-medium bg-white/5 border border-white/5 rounded-xl p-4 group-hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-primary-bg text-primary-light flex items-center justify-center flex-shrink-0">
                              {icons[idx % icons.length]}
                            </div>
                            <span>{imp}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-8 flex gap-2 flex-wrap">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#71717a] font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center relative z-10 p-12 rounded-[2rem] bg-gradient-to-br from-primary-border/20 to-transparent border border-primary-border">
          <h2 className="text-3xl font-bold mb-4">Want these results for your business?</h2>
          <p className="text-[#a1a1aa] mb-8 max-w-xl mx-auto">Let&apos;s design a custom architecture tailored to your specific bottlenecks.</p>
          <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book an Automation Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
