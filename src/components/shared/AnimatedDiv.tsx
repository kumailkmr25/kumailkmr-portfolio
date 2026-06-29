"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedDivProps {
 children: ReactNode;
 delay?: number;
 className?: string;
}

export function AnimatedDiv({ children, delay = 0, className }: AnimatedDivProps) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.45, delay }}
 className={className}
 >
 {children}
 </motion.div>
 );
}
