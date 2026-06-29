"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Mail } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-24 bg-[#09090b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="section-container max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-sora text-white">
            Let's Build Smarter Business Systems Together
          </h2>
          <p className="text-lg md:text-xl text-[#a1a1aa] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            If you're looking to reduce repetitive work, improve operational efficiency, or enhance customer experience with AI, let's discuss how a custom solution can support your business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={personalInfo.social.calendly}
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Book a Free Strategy Session <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
