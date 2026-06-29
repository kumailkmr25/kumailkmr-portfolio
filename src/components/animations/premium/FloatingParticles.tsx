"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
 id: number;
 size: number;
 x: number;
 y: number;
 duration: number;
 delay: number;
 drift: string;
}

export const FloatingParticles: React.FC = () => {
 const [particles, setParticles] = useState<Particle[]>([]);

 useEffect(() => {
 const generated = Array.from({ length: 30 }).map((_, i) => ({
 id: i,
 size: Math.random() * 3 + 1,
 x: Math.random() * 100,
 y: Math.random() * 100,
 duration: Math.random() * 20 + 10,
 delay: Math.random() * 5,
 drift: Math.random() > 0.5 ? "10%" : "-10%",
 }));
 // eslint-disable-next-line react-hooks/set-state-in-effect
 setParticles(generated);
 }, []);

 if (particles.length === 0) return null;

 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 {particles.map((p) => (
 <motion.div
 key={p.id}
 animate={{
 y: ["0%", "-100%"],
 x: ["0%", p.drift],
 opacity: [0, 0.5, 0],
 }}
 transition={{
 duration: p.duration,
 repeat: Infinity,
 delay: p.delay,
 ease: "linear",
 }}
 className="absolute rounded-full bg-[#d4af37]"
 style={{
 left: `${p.x}%`,
 top: `${p.y}%`,
 width: p.size,
 height: p.size,
 filter: "blur(1px)",
 }}
 />
 ))}
 </div>
 );
};
