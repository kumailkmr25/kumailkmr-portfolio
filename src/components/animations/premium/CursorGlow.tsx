"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorGlow: React.FC = () => {
 const [isMobile, setIsMobile] = useState(false);
 const mouseX = useMotionValue(0);
 const mouseY = useMotionValue(0);

 const springConfig = { damping: 25, stiffness: 150 };
 const smoothX = useSpring(mouseX, springConfig);
 const smoothY = useSpring(mouseY, springConfig);

 useEffect(() => {
 const checkMobile = () => setIsMobile(window.innerWidth < 768);
 checkMobile();
 window.addEventListener("resize", checkMobile);

 const handleMouseMove = (e: MouseEvent) => {
 mouseX.set(e.clientX);
 mouseY.set(e.clientY);
 };

 if (!isMobile) {
 window.addEventListener("mousemove", handleMouseMove);
 }

 return () => {
 window.removeEventListener("resize", checkMobile);
 window.removeEventListener("mousemove", handleMouseMove);
 };
 }, [isMobile, mouseX, mouseY]);

 if (isMobile) return null;

 return (
 <motion.div
 className="fixed inset-0 z-0 pointer-events-none"
 style={{
 background: `radial-gradient(600px circle at var(--x) var(--y), rgba(212,175,55,0.07), transparent 80%)`,
 }}
 >
 <motion.div 
 className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-[80px]"
 style={{
 left: smoothX,
 top: smoothY,
 }}
 />
 </motion.div>
 );
};
