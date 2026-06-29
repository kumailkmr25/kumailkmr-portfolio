"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Calendar, X, Sparkles } from "lucide-react";

export function FloatingDesktopCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 35 && scrollPercent < 90) { // Don't show at very bottom where footer is
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block w-[340px]"
        >
          <div className="glass-card premium-card p-5 shadow-2xl bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl">
            <button 
              onClick={() => setIsDismissed(true)}
              className="absolute top-3 right-3 p-1 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#71717a] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full emerald-bg text-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground leading-tight mb-1">
                  Need help improving your business operations?
                </h4>
                <p className="text-xs text-[#71717a]">
                  Let&apos;s map out your automation opportunities.
                </p>
              </div>
            </div>
            
            <Link
              href={personalInfo.social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-medium text-sm rounded-xl hover:bg-primary-light transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4" /> Book Strategy Session
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
