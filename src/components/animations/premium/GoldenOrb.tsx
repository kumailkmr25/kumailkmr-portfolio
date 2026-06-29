"use client";

import React from "react";
import { motion } from "framer-motion";

export const GoldenOrb: React.FC = () => {
 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <motion.div
 animate={{
 scale: [1, 1.2, 1],
 opacity: [0.1, 0.2, 0.1],
 x: [0, 50, 0],
 y: [0, -30, 0],
 }}
 transition={{
 duration: 10,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,#d4af37_0%,transparent_70%)] blur-[120px]"
 />
 
 <motion.div
 animate={{
 scale: [1.2, 1, 1.2],
 opacity: [0.05, 0.15, 0.05],
 x: [0, -40, 0],
 y: [0, 60, 0],
 }}
 transition={{
 duration: 15,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,#d4af37_0%,transparent_70%)] blur-[100px]"
 />
 </div>
 );
};
