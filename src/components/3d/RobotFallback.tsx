"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function RobotFallback() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center relative">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/20 blur-[80px] rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-teal-400/20 blur-[60px] rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      {/* Mock Robot Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-[300px] h-[300px] rounded-[3rem] border border-border/50 bg-surface/30 backdrop-blur-3xl flex flex-col items-center justify-center shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        
        {/* Core Node */}
        <div className="relative w-32 h-32 rounded-full border border-primary/30 flex items-center justify-center mb-6">
          <div className="w-24 h-24 rounded-full border border-teal-500/30 flex items-center justify-center">
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 60px rgba(16,185,129,0.5)", "0 0 20px rgba(16,185,129,0.2)"],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-primary flex items-center justify-center shadow-[0_0_40px_var(--color-primary)]"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-sm font-bold text-foreground tracking-widest uppercase mb-1">AI Core Online</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-foreground-muted font-medium">Processing Data...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
