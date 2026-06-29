"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

export function AboutHero() {
 return (
 <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-background">
 {/* Premium Ambient Background */}
 <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
 <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-50 dark:opacity-30 absolute top-[-200px]" />
 </div>

 <div className="section-container max-w-6xl relative z-10">
 <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
 
 {/* Text Content */}
 <div className="flex-1 text-center lg:text-left">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface dark:bg-white/5 border border-border text-xs font-semibold tracking-widest uppercase text-foreground-muted mb-6">
 <Sparkles className="w-3.5 h-3.5 text-primary" />
 About The Consultant
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance font-sora text-foreground ">
 Helping Businesses Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Smarter with AI.</span>
 </h1>
 
 <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
 I design and build custom AI-powered systems that reduce manual work, streamline operations, improve customer experiences, and help businesses scale with confidence.
 </p>

 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
 <Link
 href={personalInfo.social.calendly}
 target="_blank"
 className="w-full sm:w-auto px-8 py-4 bg-[#09090b] dark:bg-white text-white dark:text-foreground font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-black/10 dark:shadow-white/10 flex items-center justify-center gap-2"
 >
 Book a Free Strategy Session <ArrowRight className="w-4 h-4" />
 </Link>
 <Link
 href="#services"
 className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border-strong text-foreground font-medium rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center"
 >
 Explore My Services
 </Link>
 </div>
 </motion.div>
 </div>

 {/* Premium Portrait Placeholder */}
 <motion.div
 initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
 animate={{ opacity: 1, scale: 1, rotate: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="flex-1 w-full max-w-[500px] relative"
 >
 <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glass-card premium-card border border-border-strong bg-gradient-to-tr from-[#f4f4f5] to-white dark:from-[#111111] dark:to-[#1a1a1a] shadow-2xl p-2">
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5 mix-blend-overlay" />
 <div className="w-full h-full rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center relative overflow-hidden group">
 
 <Image 
   src="/images/profile.jpg"
   alt="Kumail Kmr"
   fill
   className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
   sizes="(max-width: 768px) 100vw, 500px"
   priority
 />

 </div>
 </div>
 
 {/* Floating Element */}
 <motion.div 
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="absolute -bottom-6 -left-6 md:-left-12 px-6 py-4 bg-surface-2 rounded-2xl shadow-xl border border-border backdrop-blur-lg flex items-center gap-4"
 >
 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
 <Sparkles className="w-5 h-5" />
 </div>
 <div>
 <p className="text-xs font-bold text-foreground-muted uppercase tracking-wider mb-1">Status</p>
 <p className="font-semibold text-foreground text-sm">Accepting New Projects</p>
 </div>
 </motion.div>
 </motion.div>

 </div>
 </div>
 </section>
 );
}
