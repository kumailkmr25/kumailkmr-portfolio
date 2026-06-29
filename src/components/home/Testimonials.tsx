"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
 const [index, setIndex] = useState(0);
 const [direction, setDirection] = useState(1);
 const [isPaused, setIsPaused] = useState(false);

 useEffect(() => {
 if (isPaused) return;
 const timer = setInterval(() => {
 setDirection(1);
 setIndex((prev) => (prev + 1) % testimonials.length);
 }, 5000);
 return () => clearInterval(timer);
 }, [isPaused]);

 const handleNext = () => {
 setDirection(1);
 setIndex((prev) => (prev + 1) % testimonials.length);
 };

 const handlePrev = () => {
 setDirection(-1);
 setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
 };

 const variants: Variants = {
 enter: (direction: number) => ({
 x: direction > 0 ? 50 : -50,
 opacity: 0,
 scale: 0.95
 }),
 center: {
 x: 0,
 opacity: 1,
 scale: 1,
 transition: { duration: 0.5, ease: "easeOut" }
 },
 exit: (direction: number) => ({
 x: direction < 0 ? 50 : -50,
 opacity: 0,
 scale: 0.95,
 transition: { duration: 0.5, ease: "easeIn" }
 })
 };

 const currentTestimonial = testimonials[index];

 return (
 <section className="section-py bg-white dark:bg-background">
 <div className="section-container">
 <SectionHeading
 title="What Business Owners Say"
 subtitle="Real feedback from businesses that have experienced the impact of automation."
 />

 <div className="relative mt-16 max-w-3xl mx-auto"
 onMouseEnter={() => setIsPaused(true)}
 onMouseLeave={() => setIsPaused(false)}>
 
 <div className="relative min-h-[300px] flex items-center justify-center">
 <AnimatePresence mode="wait" custom={direction}>
 <motion.div
 key={index}
 custom={direction}
 variants={variants}
 initial="enter"
 animate="center"
 exit="exit"
 className="w-full premium-card p-8 md:p-12 flex flex-col items-center text-center gap-6"
 >
 <div className="text-amber-400 text-2xl tracking-widest">
 ★★★★★
 </div>
 
 <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
 &quot;{currentTestimonial.quote}&quot;
 </p>
 
 <div className="flex flex-col items-center gap-3 mt-4">
 <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center shadow-[0_0_15px_var(--primary-bg)]">
 {currentTestimonial.avatar}
 </div>
 <div className="flex flex-col">
 <span className="font-bold text-foreground text-lg">
 {currentTestimonial.name}
 </span>
 <span className="text-sm text-primary">
 {currentTestimonial.role}
 </span>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Controls */}
 <div className="flex items-center justify-center gap-6 mt-8">
 <button 
 onClick={handlePrev}
 className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-foreground-muted hover:text-foreground dark:hover:text-white hover:bg-surface dark:hover:bg-[#111111] transition-all"
 >
 <ChevronLeft className="w-5 h-5" />
 </button>
 
 <div className="flex gap-2">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => {
 setDirection(i > index ? 1 : -1);
 setIndex(i);
 }}
 className={cn(
 "w-2.5 h-2.5 rounded-full transition-all duration-300",
 index === i 
 ? "bg-primary scale-125" 
 : "bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40"
 )}
 />
 ))}
 </div>

 <button 
 onClick={handleNext}
 className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-foreground-muted hover:text-foreground dark:hover:text-white hover:bg-surface dark:hover:bg-[#111111] transition-all"
 >
 <ChevronRight className="w-5 h-5" />
 </button>
 </div>
 
 </div>
 </div>
 </section>
 );
}
