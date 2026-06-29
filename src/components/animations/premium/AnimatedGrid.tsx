"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedGrid: React.FC = () => {
 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
 <div 
 className="absolute inset-0"
 style={{
 perspective: "1000px",
 perspectiveOrigin: "50% 50%",
 }}
 >
 <motion.div 
 initial={{ rotateX: 45, y: -200 }}
 animate={{ 
 y: [0, -100, 0],
 }}
 transition={{
 duration: 20,
 repeat: Infinity,
 ease: "linear",
 }}
 className="absolute inset-0"
 style={{
 backgroundImage: `
 linear-gradient(to right, #d4af37 1px, transparent 1px),
 linear-gradient(to bottom, #d4af37 1px, transparent 1px)
 `,
 backgroundSize: "60px 60px",
 height: "200%",
 width: "100%",
 transformOrigin: "center top",
 }}
 />
 </div>
 
 {/* Radial fade to hide edges */}
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
 </div>
 );
};
