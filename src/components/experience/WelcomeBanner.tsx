"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, PartyPopper } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useVisitorExperience } from "./VisitorExperienceContext";

export function WelcomeBanner() {
  const { showIntro } = useVisitorExperience();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!showIntro) {
      const hasClosed = sessionStorage.getItem("kk_banner_closed");
      if (!hasClosed) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 8000); 
        
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
            className="pointer-events-auto relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-2xl overflow-hidden text-center p-8"
          >
            {/* Celebration Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
            <motion.div 
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"] 
              }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(16,185,129,0.4) 0%, transparent 50%)',
                backgroundSize: '200% 200%'
              }}
            />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Icon / Celebration */}
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <PartyPopper className="w-8 h-8" />
              </motion.div>
              
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-3 font-sora">
                  Welcome to Premium Consulting
                </h2>
                <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-md mx-auto">
                  Explore custom AI automation solutions built to help businesses work smarter and scale efficiently.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4">
                <Link 
                  href="/services"
                  onClick={handleClose}
                  className="w-full sm:w-auto flex-1 py-3 px-6 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex justify-center items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-primary" /> Explore Services
                </Link>
                <Link 
                  href={personalInfo.social.calendly}
                  target="_blank"
                  onClick={handleClose}
                  className="w-full sm:w-auto flex-1 py-3 px-6 text-sm font-semibold bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                >
                  Book a Call
                </Link>
              </div>
              
              <button 
                onClick={handleClose}
                className="mt-2 p-2 text-[#71717a] hover:text-white hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-sm w-10 h-10"
                aria-label="Close welcome banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10 pointer-events-auto"
            onClick={handleClose}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
