"use client";

import { personalInfo } from "@/lib/data";

import Link from "next/link";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const titleWords = ["Build", "Smarter", "Business", "Systems", "with", "AI."];

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute inset-0 dot-grid-bg opacity-[0.15] dark:opacity-[0.05]" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center py-20">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge badge-emerald w-fit mb-6">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for New Projects
            </div>

            <h1 className="heading-xl mb-6">
              Stop Losing Time to
              <br />
              Repetitive Work.
              <br />
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={word === "Smarter" ? "gradient-text mr-3" : "mr-3"}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <p className="text-lg text-[#71717a] max-w-xl text-balance leading-relaxed">
              I help businesses automate customer communication, lead
              management, operations, and repetitive workflows using AI-powered
              systems that improve efficiency and customer experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Automation Audit
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View My Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-4 border-t border-black/5 dark:border-white/5"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#09090b] dark:text-white">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl font-bold emerald-text">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-[#71717a] uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:flex justify-center items-center relative animate-float"
        >
          <div className="flex flex-col gap-4 relative">
            <WorkflowNode icon="💬" label="WhatsApp Inquiry" delay={1.2} />
            <WorkflowConnector delay={1.4} />
            <WorkflowNode
              icon="🤖"
              label="AI Assistant Replies & Qualifies"
              delay={1.6}
              active
            />
            <WorkflowConnector delay={1.8} />
            <div className="flex gap-8">
              <div className="flex flex-col gap-4">
                <WorkflowNode icon="📅" label="Auto-Book Appointment" delay={2.0} />
              </div>
              <div className="flex flex-col gap-4">
                <WorkflowNode icon="📊" label="Update Dashboard" delay={2.2} />
              </div>
            </div>
            <WorkflowConnector delay={2.4} />
            <WorkflowNode icon="👨‍💻" label="Human Notification" delay={2.6} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowNode({
  icon,
  label,
  delay,
  active = false,
}: {
  icon: string;
  label: string;
  delay: number;
  active?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`workflow-node relative z-10 ${
        active ? "border-primary-border shadow-[0_0_20px_rgba(16,185,129,0.15)]" : ""
      }`}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-sm font-semibold text-[#09090b] dark:text-white">
        {label}
      </span>
      {active && (
        <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
      )}
    </motion.div>
  );
}

function WorkflowConnector({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "2rem", opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="workflow-connector relative z-0"
    />
  );
}
