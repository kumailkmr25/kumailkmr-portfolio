"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
 { text: "Websites", x: "10%", y: "20%", rotate: -12 },
 { text: "AI Automation", x: "75%", y: "15%", rotate: 8 },
 { text: "Dashboards", x: "15%", y: "65%", rotate: 5 },
 { text: "WhatsApp Systems", x: "70%", y: "75%", rotate: -5 },
 { text: "Business Growth", x: "45%", y: "45%", rotate: 0 },
];

export const FloatingGlassCards: React.FC = () => {
 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
 {cards.map((card, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ 
 opacity: 0.3, 
 scale: 1,
 y: [0, -20, 0],
 rotate: [card.rotate, card.rotate + 5, card.rotate],
 }}
 transition={{
 opacity: { duration: 2, delay: i * 0.5 },
 y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
 rotate: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" },
 }}
 className="absolute glass-card px-6 py-3 rounded-2xl border-white/10 bg-white/5 backdrop-blur-md"
 style={{ left: card.x, top: card.y }}
 >
 <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]/80">
 {card.text}
 </span>
 </motion.div>
 ))}
 </div>
 );
};
