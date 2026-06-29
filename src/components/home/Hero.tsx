"use client";

import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/lib/data";
import { ArrowRight, Sparkles, Zap, Clock, ShieldCheck } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-teal-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
        
        {/* Geometric Abstract Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.1) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
          }}
        />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center py-20 mt-12 lg:mt-0">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise Automation Solutions
            </div>

            <h1 className="heading-xl mb-6">
              Build Smarter <br/>
              Business Systems <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-teal-400">
                With AI.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#71717a] max-w-xl text-balance leading-relaxed">
              Stop losing time to repetitive work. I engineer invisible, reliable automation systems that scale your operations, reduce manual bottlenecks, and elevate your customer experience.
            </p>
          </motion.div>

          {/* Premium CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center mt-2"
          >
            <Link 
              href={personalInfo.social.calendly} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Strategy Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground font-medium rounded-xl backdrop-blur-md border border-black/10 dark:border-white/10 transition-all hover:scale-[1.02]"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Outcome Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-4 text-sm font-medium text-[#71717a]"
          >
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Save Hours Daily</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Increase Efficiency</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Secure & Reliable</div>
          </motion.div>
        </div>

        {/* Right Content - Abstract Floating Elements */}
        <div className="relative hidden lg:flex h-full min-h-[500px] w-full items-center justify-center">
          <motion.div style={{ y: y1, opacity }} className="absolute z-20 top-[15%] right-[10%]">
            <div className="glass-card p-6 w-64 flex flex-col gap-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">AI Automation</div>
                  <div className="text-xs text-[#71717a]">Active</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full" />
                </div>
                <div className="h-2 w-[70%] bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[100%] bg-teal-400 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: y2, opacity }} className="absolute z-10 bottom-[20%] left-[5%]">
            <div className="premium-card p-5 w-56 flex flex-col gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-xs font-medium text-[#71717a] uppercase tracking-wider">Time Saved</div>
              <div className="text-3xl font-bold text-foreground">1,240<span className="text-primary text-xl"> hrs</span></div>
              <div className="flex items-center gap-1 text-xs text-primary font-medium">
                <ArrowRight className="w-3 h-3 -rotate-45" /> +42% this month
              </div>
            </div>
          </motion.div>
          
          {/* Decorative central orb */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-primary/20 bg-gradient-to-tr from-primary/5 to-transparent flex items-center justify-center backdrop-blur-3xl"
          >
            <div className="w-[150px] h-[150px] rounded-full bg-primary/10 animate-pulse-slow blur-xl" />
          </motion.div>
        </div>
        
      </div>
      
      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#71717a] font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#71717a]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
