"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Badge } from "@/components/shared/Badge";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  badge?: string;
}

export function CTA({ title, subtitle, buttonText, badge }: CTAProps = {}) {
  return (
    <section className="bg-[#09090b] text-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto py-24 px-6 text-center flex flex-col items-center gap-6"
        >
          <Badge variant="emerald">{badge || "Ready to Transform Your Operations?"}</Badge>
          
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {title || "Stop Running Your Business Manually. Let AI Handle the Repetitive Work."}
          </h2>
          
          <p className="text-[#a1a1aa] text-lg max-w-2xl leading-relaxed">
            {subtitle || "Book a free 30-minute automation audit. I'll map your biggest workflow bottlenecks and show you exactly where AI can save you time and money."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              {buttonText || "Book Free Automation Audit"}
            </Link>
            <Link
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5 w-full sm:w-auto"
            >
              Chat on WhatsApp
            </Link>
          </div>
          
          <p className="text-sm text-[#71717a] mt-2">
            30-minute call · No commitment · Free of charge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
