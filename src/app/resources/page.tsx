"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Download, FileText, CheckSquare, BookOpen, Layers } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { CTA } from "@/components/home/CTA";

const resources = [
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Automation Readiness Checklist",
    description: "A 10-point checklist to determine if your business processes are stable enough for AI automation.",
    type: "PDF Checklist",
    tag: "Getting Started",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Business Process Mapping Template",
    description: "The exact framework I use to map out client workflows before writing a single line of code.",
    type: "Notion Template",
    tag: "Operations",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "AI Adoption Guide for Non-Tech Founders",
    description: "A jargon-free guide on how to integrate AI into your operations without breaking existing systems.",
    type: "E-Book",
    tag: "Strategy",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "WhatsApp Business API Playbook",
    description: "Best practices, template guidelines, and automation rules for WhatsApp Business.",
    type: "PDF Guide",
    tag: "Customer Experience",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <main className="bg-white dark:bg-[#0a0a0a] min-h-screen">
        <section className="section-py section-container pt-32">
          <SectionHeading
            badge="Free Resources"
            title="Resource Library"
            subtitle="Downloadable frameworks, templates, and guides to help you standardize operations and prepare for automation."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="premium-card p-8 bg-[#f4f4f5] dark:bg-[#111111] flex flex-col relative group"
              >
                <div className="absolute top-6 right-6">
                  <Badge variant="gray" className="text-xs">{resource.type}</Badge>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-[#09090b] dark:text-white mb-6 border border-black/5 dark:border-white/5 shadow-sm">
                  {resource.icon}
                </div>
                <Badge variant="emerald" className="w-fit mb-3 text-[10px] uppercase tracking-wider">{resource.tag}</Badge>
                <h3 className="text-xl font-bold text-[#09090b] dark:text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-[#71717a] text-sm leading-relaxed flex-1 mb-8">
                  {resource.description}
                </p>
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-[#09090b] dark:text-white font-semibold text-sm hover:bg-primary-bg dark:hover:bg-primary-bg hover:border-primary-border dark:hover:border-primary-border transition-colors group-hover:text-primary dark:group-hover:text-primary-light">
                  <Download className="w-4 h-4" /> Download Resource
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <CTA />
    </>
  );
}
