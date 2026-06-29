"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  MessageSquare, 
  Search, 
  GitMerge, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  GraduationCap, 
  TrendingUp,
  CheckCircle2,
  Clock,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../shared/SectionHeading";
import { personalInfo } from "@/lib/data";

const processSteps = [
  { 
    id: 1, 
    icon: <MessageSquare className="w-6 h-6" />, 
    title: "Discovery Session", 
    desc: "Understand your business, objectives, workflows, existing systems, and operational challenges.",
    outcome: "Clear understanding of business goals.",
    time: "30–60 Minutes",
    deliverables: ["Initial Consultation", "Requirement Gathering", "Feasibility Assessment"]
  },
  { 
    id: 2, 
    icon: <Search className="w-6 h-6" />, 
    title: "Business Process Analysis", 
    desc: "Study current workflows. Identify manual work, operational bottlenecks, customer pain points, and repetitive tasks.",
    outcome: "Detailed process assessment.",
    time: "1-2 Days",
    deliverables: ["Workflow Audit", "Bottleneck Identification", "Automation Opportunity Mapping"]
  },
  { 
    id: 3, 
    icon: <GitMerge className="w-6 h-6" />, 
    title: "Solution Architecture", 
    desc: "Design a custom AI solution including automation flow, integrations, AI logic, and human handoff.",
    outcome: "Complete implementation blueprint.",
    time: "3-5 Days",
    deliverables: ["System Architecture Design", "Tech Stack Selection", "Integration Strategy"]
  },
  { 
    id: 4, 
    icon: <Code2 className="w-6 h-6" />, 
    title: "Development & Integration", 
    desc: "Build the solution. Integrate WhatsApp, Voice AI, CRM, internal systems, APIs, and Knowledge Base.",
    outcome: "Fully functional solution.",
    time: "2-4 Weeks",
    deliverables: ["Custom AI Development", "API Integrations", "Workflow Automation Setup"]
  },
  { 
    id: 5, 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: "Testing & Quality Assurance", 
    desc: "Perform workflow testing, AI response testing, performance optimization, and security review.",
    outcome: "Reliable production-ready system.",
    time: "1 Week",
    deliverables: ["Edge Case Testing", "Load Testing", "Security Audits", "User Acceptance Testing"]
  },
  { 
    id: 6, 
    icon: <Rocket className="w-6 h-6" />, 
    title: "Deployment", 
    desc: "Deploy securely. Configure hosting, monitoring, backups, domains, and the production environment.",
    outcome: "Live AI solution.",
    time: "1-2 Days",
    deliverables: ["Production Rollout", "Monitoring Setup", "Backup Configuration"]
  },
  { 
    id: 7, 
    icon: <GraduationCap className="w-6 h-6" />, 
    title: "Training & Onboarding", 
    desc: "Train the team. Provide documentation, knowledge transfer, support sessions, and best practices.",
    outcome: "Confident team adoption.",
    time: "3-5 Days",
    deliverables: ["Team Training Sessions", "Video Tutorials", "Standard Operating Procedures (SOPs)"]
  },
  { 
    id: 8, 
    icon: <TrendingUp className="w-6 h-6" />, 
    title: "Continuous Improvement", 
    desc: "Monitor system performance, collect feedback, improve workflows, and optimize AI responses.",
    outcome: "Long-term business growth.",
    time: "Ongoing",
    deliverables: ["Monthly Performance Reviews", "Prompt Refinement", "Workflow Expansion"]
  },
];

const outcomes = [
  "Custom AI Strategy",
  "Tailored Workflow Design",
  "Production-Ready Solution",
  "Team Training",
  "Documentation",
  "Long-Term Support",
  "Scalable Architecture",
  "Business Process Optimization"
];

export function Process() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  // Scroll logic for the connecting trunk
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 bg-background transition-colors duration-500 overflow-hidden relative border-y border-border" ref={containerRef}>
      {/* Decorative ambient lighting - Removed mix-blend-screen for Light Theme compatibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-40 dark:opacity-20" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] opacity-40 dark:opacity-20" />
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <SectionHeading 
            badge="Methodology"
            title="How We Transform Your Business with AI"
            subtitle="From understanding your business challenges to deploying intelligent AI systems, every project follows a structured, transparent, and collaborative process designed to deliver measurable business outcomes."
            center
          />
        </div>

        {/* Tree Journey Roadmap */}
        <div className="relative mb-32" ref={roadmapRef}>
          {/* Static Background Trunk */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[6px] bg-surface-2 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glowing Trunk */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-4 w-[6px] bg-gradient-to-b from-emerald-400 via-primary to-transparent -translate-x-1/2 rounded-full shadow-[0_0_20px_var(--color-primary)] origin-top"
          />

          <div className="space-y-8 md:space-y-16">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedStep === step.id;

              return (
                <div 
                  key={step.id}
                  className={`relative flex items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row group cursor-pointer`}
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                >
                  
                  {/* Tree Branch Visual (Desktop Only) */}
                  <div className={`hidden md:block absolute top-[40px] w-[calc(50%-2rem)] h-px bg-border -z-10 ${isEven ? 'right-1/2' : 'left-1/2'}`} />
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "calc(50% - 2rem)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`hidden md:block absolute top-[40px] h-[3px] bg-primary shadow-[0_0_10px_var(--color-primary)] -z-10 ${isEven ? 'right-1/2' : 'left-1/2'}`} 
                  />

                  {/* Trunk Node / Hub */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center mt-6">
                    <motion.div 
                      className={`w-8 h-8 rounded-full border-[6px] flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-primary border-background shadow-[0_0_25px_var(--color-primary)] scale-125' : 'bg-surface border-surface-2 group-hover:border-primary/50'}`}
                    >
                      {isExpanded && <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 pl-24 md:pl-0 text-left md:text-right' : 'md:pl-16 pl-24 text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className={`relative p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                        isExpanded 
                          ? 'bg-card border-primary shadow-[0_20px_60px_rgba(16,185,129,0.15)] scale-[1.02] md:scale-[1.05] z-30' 
                          : 'bg-card/80 border-border hover:bg-card hover:border-primary/40 hover:shadow-xl z-10'
                      }`}
                    >
                      <div className={`flex items-start gap-5 mb-5 ${isEven ? 'md:flex-row-reverse flex-row' : 'flex-row'}`}>
                        {/* Icon Box */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isExpanded 
                            ? 'bg-primary text-white shadow-[0_0_25px_var(--color-primary-bg)] scale-110' 
                            : 'bg-surface text-primary group-hover:bg-primary/10'
                        }`}>
                          {step.icon}
                        </div>
                        
                        <div className={`flex-1 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-1.5 block">Phase 0{step.id}</span>
                          <h3 className="text-2xl font-bold text-foreground font-sora tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-foreground-muted text-base leading-relaxed font-medium">
                        {step.desc}
                      </p>

                      <div className={`mt-6 flex items-center gap-4 text-sm font-semibold text-foreground ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                        <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border">
                          <Clock className="w-4 h-4 text-primary" /> {step.time}
                        </div>
                        <div className={`flex items-center gap-1 transition-transform duration-300 text-primary p-2 bg-primary/5 rounded-full ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 mt-8 border-t border-border">
                              <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> Core Deliverables
                              </h4>
                              <ul className="space-y-3 mb-8">
                                {step.deliverables.map((item, i) => (
                                  <li key={i} className={`text-base font-medium text-foreground-muted flex items-start gap-3 ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                    <span className={`w-2 h-2 rounded-full bg-primary/70 mt-2 flex-shrink-0 ${isEven ? 'md:hidden block' : 'block'}`} />
                                    {item}
                                    <span className={`w-2 h-2 rounded-full bg-primary/70 mt-2 flex-shrink-0 ${isEven ? 'hidden md:block' : 'hidden'}`} />
                                  </li>
                                ))}
                              </ul>

                              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 pointer-events-none" />
                                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Expected Outcome</span>
                                <p className="text-base font-bold text-foreground relative z-10">{step.outcome}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Outcome Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-sora mb-4 tracking-tight">Enterprise Standard Deliverables</h3>
            <p className="text-foreground-muted text-lg font-medium">Included as standard in every full-cycle automation engagement.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, idx) => (
              <div 
                key={idx}
                className="premium-card bg-card p-6 rounded-3xl border border-border flex flex-col items-center justify-center text-center gap-4 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-base font-bold text-foreground">{outcome}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contextual CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto premium-card bg-card overflow-hidden rounded-3xl border-2 border-primary/20 p-10 md:p-16 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold font-sora mb-6 text-foreground tracking-tight">
              Ready to Build Smarter Systems?
            </h3>
            <p className="text-foreground-muted mb-10 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Let's discuss your business goals and explore how tailored AI solutions can improve efficiency, reduce repetitive work, and support long-term growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                href={personalInfo.social.calendly} 
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-base font-bold rounded-2xl shadow-xl shadow-primary/25 hover:scale-105 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3"
              >
                Book a Strategy Session <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto px-10 py-5 bg-surface text-foreground text-base font-bold rounded-2xl border border-border hover:bg-surface-2 transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
