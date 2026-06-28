"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useVisitorExperience } from "./VisitorExperienceContext";

export function IntroAnimation() {
  const { showIntro, setShowIntro } = useVisitorExperience();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showIntro) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
      
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        setTimeout(() => setShowIntro(false), 1000); // wait for exit animation
      }, 2500); // 2.5s duration

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [showIntro, setShowIntro]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          {/* Subtle glowing background effect */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              Kumail Kmr
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
              AI Automation & Business Systems Specialist
            </h2>
            <p className="text-[#a1a1aa] max-w-md mx-auto">
              Helping Businesses Build Smarter Systems with AI
            </p>
          </motion.div>
          
          {/* Modern loader line */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute bottom-20 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
