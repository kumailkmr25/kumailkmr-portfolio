"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { Handshake, Scale, TrendingUp, Shield, Activity, Lightbulb } from "lucide-react";

const coreValues = [
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Business-First Thinking",
    description: "I don't sell AI for the sake of AI. If a simple spreadsheet solves your problem better than a complex neural network, I will build the spreadsheet. The goal is ROI, not novelty."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Transparency",
    description: "I clearly communicate what automation can do, what it can't do, and how long it will take. No exaggerated claims or hidden technical debt."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Long-Term Partnerships",
    description: "I don't just hand over a piece of software and disappear. I build robust systems and provide ongoing support to ensure they evolve as your business grows."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Continuous Improvement",
    description: "Automation is not a set-and-forget project. I proactively monitor system performance and refine AI prompts to continuously improve accuracy and efficiency."
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Scalable Systems",
    description: "Every architecture is built with scale in mind. The workflow that handles 50 leads today should seamlessly handle 500 leads tomorrow without breaking."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Ethical AI Implementation",
    description: "I prioritize data privacy, secure integrations, and clear human-handoff protocols to ensure your AI represents your brand responsibly."
  }
];

export default function AboutPage() {
  return (
    <>
      <main className="bg-white dark:bg-[#0a0a0a] min-h-screen">
        <section className="section-py section-container pt-32 max-w-4xl">
          <SectionHeading
            badge="About Me"
            title="I Transform Business Operations"
            subtitle="I'm Kumail Kmr, an AI Automation & Business Systems Specialist dedicated to helping founders reclaim their time."
            center
          />

          <div className="mt-16 text-lg text-[#71717a] leading-relaxed space-y-6">
            <p>
              Many businesses struggle not because they lack demand, but because their 
              <span className="text-[#09090b] dark:text-white font-medium"> internal operations are breaking under the weight of manual, repetitive work</span>. 
              Founders find themselves spending hours answering the same WhatsApp queries, chasing clients for documents, and managing data entry instead of focusing on growth.
            </p>
            <p>
              I solve this by designing <span className="text-[#09090b] dark:text-white font-medium">enterprise-grade AI automation systems</span> tailored to your exact workflows.
            </p>
            <p>
              My approach bridges the gap between complex technology and practical business application. I analyze how your business operates, identify the operational bottlenecks, and architect secure, scalable automated solutions that integrate seamlessly with your existing tools.
            </p>
          </div>
        </section>

        <section className="section-py bg-[#f4f4f5] dark:bg-[#111111]">
          <div className="section-container max-w-5xl">
            <SectionHeading
              badge="Consulting Philosophy"
              title="My Business Values"
              subtitle="The principles that guide every system I architect and every client I partner with."
              center
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {coreValues.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="premium-card p-8 bg-white dark:bg-[#0a0a0a]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-bg dark:bg-primary-bg text-primary dark:text-primary-light flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-lg text-[#09090b] dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <CTA />
    </>
  );
}
