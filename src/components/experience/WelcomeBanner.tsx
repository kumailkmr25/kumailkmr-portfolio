"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useVisitorExperience } from "./VisitorExperienceContext";

export function WelcomeBanner() {
  const { showIntro } = useVisitorExperience();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show banner after intro is completely gone and a few seconds have passed
    // to let the toast notifications take priority if they are appearing.
    if (!showIntro) {
      const hasClosed = sessionStorage.getItem("kk_banner_closed");
      if (!hasClosed) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 8000); // Wait 8 seconds after intro (so toast finishes first)
        
        return () => clearTimeout(timer);
      }
    }
  }, [showIntro]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("kk_banner_closed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-40 bg-[#0a0a0a] border-b border-white/10 text-white"
        >
          <div className="section-container py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm md:text-base text-[#a1a1aa] leading-snug">
                  <strong className="text-white">Welcome!</strong> Thanks for visiting my portfolio. Explore custom AI automation solutions built to help businesses work smarter.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link 
                  href="/services"
                  onClick={handleClose}
                  className="px-4 py-1.5 text-sm font-semibold bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  Explore Services
                </Link>
                <Link 
                  href={personalInfo.social.calendly}
                  target="_blank"
                  onClick={handleClose}
                  className="px-4 py-1.5 text-sm font-semibold bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Book a Call
                </Link>
                <button 
                  onClick={handleClose}
                  className="p-1.5 text-[#a1a1aa] hover:text-white hover:bg-white/10 rounded-md transition-colors ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
