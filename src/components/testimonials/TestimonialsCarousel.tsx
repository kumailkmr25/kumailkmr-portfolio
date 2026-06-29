"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

const TestimonialsCarousel: React.FC = () => {
 const [index, setIndex] = useState(0);

 const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
 const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

 useEffect(() => {
 const timer = setInterval(next, 5000);
 return () => clearInterval(timer);
 }, []);

 return (
 <div className="relative max-w-4xl mx-auto px-4 py-20">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
 <div className="p-4 rounded-full bg-black border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
 <Quote className="w-8 h-8 text-[#d4af37]" />
 </div>
 </div>

 <div className="relative min-h-[400px] flex items-center justify-center">
 <AnimatePresence mode="wait">
 <motion.div
 key={index}
 initial={{ opacity: 0, scale: 0.95, x: 20 }}
 animate={{ opacity: 1, scale: 1, x: 0 }}
 exit={{ opacity: 0, scale: 0.95, x: -20 }}
 transition={{ duration: 0.5, ease: "easeOut" }}
 className="text-center space-y-8"
 >
 <div className="flex justify-center gap-1">
 {[...Array(5)].map((_, i) => (
 <motion.div
 key={i}
 animate={{ scale: [1, 1.2, 1] }}
 transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
 >
 <Star className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
 </motion.div>
 ))}
 </div>

 <p className="text-2xl md:text-3xl font-playfair italic text-slate-200 leading-relaxed max-w-3xl mx-auto">
 &quot;{testimonials[index].quote}&quot;
 </p>

 <div className="flex flex-col items-center space-y-4">
 <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 flex items-center justify-center text-xl font-bold text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.1)]">
 {testimonials[index].avatar}
 </div>
 <div className="space-y-1">
 <h4 className="text-xl font-bold text-white tracking-tight">{testimonials[index].name}</h4>
 <p className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-[10px]">
 {testimonials[index].role}
 </p>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 <div className="flex justify-center gap-4 mt-8">
 <button 
 onClick={prev}
 className="p-3 rounded-full border border-white/10 hover:border-[#d4af37] transition-colors text-white"
 >
 <ChevronLeft className="w-6 h-6" />
 </button>
 <button 
 onClick={next}
 className="p-3 rounded-full border border-white/10 hover:border-[#d4af37] transition-colors text-white"
 >
 <ChevronRight className="w-6 h-6" />
 </button>
 </div>
 </div>
 );
};

export default TestimonialsCarousel;
