"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
 children: React.ReactNode;
 className?: string;
 delay?: number;
 width?: "fit-content" | "100%";
}

const SectionReveal: React.FC<SectionRevealProps> = ({ 
 children, 
 className = "", 
 delay = 0.2,
 width = "100%" 
}) => {
 const shouldReduceMotion = useReducedMotion();

 return (
 <motion.div
 initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ 
 duration: 0.8, 
 delay: delay,
 ease: [0.21, 0.47, 0.32, 0.98] 
 }}
 className={className}
 style={{ width }}
 >
 {children}
 </motion.div>
 );
};

export default SectionReveal;
