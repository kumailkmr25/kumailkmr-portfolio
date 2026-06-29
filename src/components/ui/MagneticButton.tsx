"use client";

import React from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
 children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "", ...rest }) => {
 const x = useMotionValue(0);
 const y = useMotionValue(0);
 const springConfig = { stiffness: 300, damping: 20 };
 const springX = useSpring(x, springConfig);
 const springY = useSpring(y, springConfig);

 const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
 const rect = e.currentTarget.getBoundingClientRect();
 const offsetX = e.clientX - rect.left - rect.width / 2;
 const offsetY = e.clientY - rect.top - rect.height / 2;
 x.set(offsetX * 0.15);
 y.set(offsetY * 0.15);
 };

 const handleMouseLeave = () => {
 x.set(0);
 y.set(0);
 };

 return (
 <motion.button
 className={cn(
 "relative overflow-hidden rounded-md px-6 py-2 font-medium text-white bg-black border border-[#d4af37]",
 "hover:bg-[#1a1a1a] hover:scale-[1.03] transition-all duration-200",
 "shadow-[0_0_8px_2px_rgba(212,175,55,0.4)]",
 className
 )}
 style={{ translateX: springX, translateY: springY }}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 whileHover={{ boxShadow: "0 0 12px 4px rgba(212,175,55,0.8)" }}
 {...rest}
 >
 {/* Gold shine sweep */}
 <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(212,175,55,0.3),transparent)] animate-[shine_1.5s_ease-in-out_infinite]" />
 {children}
 </motion.button>
 );
};

export default MagneticButton;
