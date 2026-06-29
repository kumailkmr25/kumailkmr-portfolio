"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Calendar, Mail, MessageCircle } from "lucide-react";

// Inline SVG components for Social Icons since lucide-react version might not include them
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function FloatingCommunicationDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 15%
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 15 && scrollPercent < 95);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent("Hello Kumail, I visited your portfolio and would like to discuss AI automation solutions for my business.");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
        >
          {/* Dock Container */}
          <div className="glass-card premium-card p-3 shadow-2xl bg-surface/80 backdrop-blur-2xl rounded-2xl border border-border flex flex-col gap-3 items-center">
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${personalInfo.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground hover:bg-[#25D366] hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-5 h-5" />
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-lg">
                Chat on WhatsApp
              </div>
            </a>

            {/* Calendly */}
            <a
              href={personalInfo.social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_var(--color-primary-bg)]"
            >
              <Calendar className="w-5 h-5" />
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-lg">
                Book Strategy Session
              </div>
            </a>

            <div className="w-6 h-px bg-border my-1" />

            {/* LinkedIn */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
            >
              <Linkedin className="w-5 h-5" />
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-lg">
                Connect on LinkedIn
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="relative group w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all shadow-sm hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-lg">
                Email Me
              </div>
            </a>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
