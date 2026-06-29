"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function SmartSectionNav() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Convert scroll progress (0 to 1) into height for the active track
  const activeHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling down 200px
      setIsVisible(window.scrollY > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2 pointer-events-none"
    >
      <div className="relative w-1 h-[250px] bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          style={{ height: activeHeight }}
          className="absolute top-0 left-0 w-full bg-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        />
      </div>
      
      {/* Decorative pulse at the current scroll position */}
      <motion.div 
        style={{ top: activeHeight }}
        className="absolute w-3 h-3 rounded-full bg-primary -translate-x-1/2 left-1/2 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
      />
    </motion.div>
  );
}
