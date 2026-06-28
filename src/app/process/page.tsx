"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CTA } from "@/components/home/CTA";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useRef } from "react";

const expandedProcessSteps = [
  { step: 1, title: "Discovery", duration: "Day 1", description: "A high-level discussion of your business goals, current bottlenecks, and whether automation is the right fit for you." },
  { step: 2, title: "Workflow Audit", duration: "Day 2-3", description: "Deep dive into your existing processes. We identify exactly where time is being lost to repetitive tasks and manual data entry." },
  { step: 3, title: "Process Mapping", duration: "Day 4-5", description: "I create a visual architecture of how the automated system will flow, from data capture to final execution." },
  { step: 4, title: "Solution Design", duration: "Day 6-7", description: "Selecting the right technology stack (AI models, integrations, databases) and defining the exact business logic." },
  { step: 5, title: "Prototype", duration: "Week 2", description: "Building a functional MVP (Minimum Viable Product) of the core automated workflow for you to test." },
  { step: 6, title: "Testing", duration: "Week 3", description: "Rigorous edge-case testing to ensure the AI responds correctly, data syncs properly, and error handling works." },
  { step: 7, title: "Deployment", duration: "Week 4", description: "Moving the system into your live production environment, integrating it securely with your existing tools." },
  { step: 8, title: "Training", duration: "Week 4", description: "Training your team on how to manage, monitor, and interact with the new automated systems." },
  { step: 9, title: "Continuous Improvement", duration: "Ongoing", description: "Regular monitoring, prompt optimization, and system upgrades to ensure the automation scales with your business." }
];

const expandedFaqs = [
  { question: "How long does implementation take?", answer: "A standard automation implementation takes 3-4 weeks from discovery to deployment. Complex multi-channel systems may take 6-8 weeks." },
  { question: "Can existing systems be integrated?", answer: "Yes. I specialize in integrating AI with your existing tools (CRM, ERP, spreadsheets) using secure API connections." },
  { question: "Will staff require training?", answer: "Minimal training is required. The systems are designed to operate in the background or via familiar interfaces like WhatsApp. Comprehensive handover documentation is always provided." },
  { question: "Can the AI be customized?", answer: "Absolutely. The AI is trained specifically on your business knowledge base, tone of voice, and operational rules." },
  { question: "Who owns the solution?", answer: "You do. You own the workflows, the data, and the tailored business logic. I build the infrastructure for you." },
  { question: "How is ongoing support handled?", answer: "I offer monthly retainer packages for continuous monitoring, maintenance, prompt optimization, and priority support." },
  { question: "Can workflows evolve as the business grows?", answer: "Yes, the modular architecture allows us to easily add new capabilities, integrate new tools, or modify the business logic as your operations scale." }
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <main className="bg-[#050505] min-h-screen text-white selection:bg-primary-bg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-bg rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <section className="section-py section-container pt-40 relative z-10 max-w-5xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary-light mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              9-Step Methodology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
              Structured for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-teal-200">Success.</span>
            </h1>
            <p className="text-[#a1a1aa] text-lg md:text-xl font-light leading-relaxed">
              I don&apos;t just &quot;build a bot&quot;. I follow a rigorous 9-step methodology to ensure the automation actually solves your operational bottlenecks and scales effortlessly.
            </p>
          </div>

          <div ref={containerRef} className="mt-32 relative">
            {/* Animated Parallax Line */}
            <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
              <motion.div 
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-primary/0 via-primary-light to-primary/0 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              />
            </div>

            <div className="flex flex-col gap-16 md:gap-32">
              {expandedProcessSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Node */}
                  <div className="absolute left-[36px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] z-20 group-hover:border-primary-border transition-colors">
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-light to-primary">
                      0{step.step}
                    </span>
                  </div>

                  <div className="hidden md:block md:flex-1" />

                  <div className="flex-1 pl-20 md:pl-0 w-full group">
                    <div className={`p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-colors duration-500 overflow-hidden ${
                      i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}>
                      <div className="bg-[#0a0a0a] rounded-[31px] p-8 md:p-12 border border-white/5 group-hover:border-primary-border transition-all duration-500 relative overflow-hidden">
                        
                        <div className="absolute -inset-24 bg-primary-bg group-hover:bg-primary-bg blur-3xl transition-colors duration-700 pointer-events-none" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                          <h3 className="text-3xl font-bold text-white group-hover:text-primary-light transition-colors">
                            {step.title}
                          </h3>
                          <span className="w-fit px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-[#a1a1aa] tracking-widest uppercase">
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-[#a1a1aa] text-lg leading-relaxed relative z-10 font-light group-hover:text-white/80 transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]" />
          <div className="section-container max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-[#a1a1aa] text-lg">Clear answers on timelines, ownership, and integrations.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              {expandedFaqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 text-center relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-primary-bg blur-3xl" />
          <div className="section-container flex flex-col items-center gap-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to streamline your operations?</h2>
            <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg transition-all hover:bg-primary-light hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1">
              Book Your Free Discovery Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <CTA />
    </>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <span className="font-semibold text-lg text-white pr-8 group-hover:text-primary-light transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[#71717a] transition-transform duration-300 flex-shrink-0 group-hover:text-primary-light",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-base md:text-lg text-[#a1a1aa] leading-relaxed font-light">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
