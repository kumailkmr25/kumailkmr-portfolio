"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useVisitorExperience } from "./VisitorExperienceContext";
import { BarChart3, MessageSquare, Zap, Activity } from "lucide-react";

export function IntroAnimation() {
  const { showIntro, setShowIntro } = useVisitorExperience();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showIntro) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      
      const TOTAL_DURATION = shouldReduceMotion ? 2500 : 4500;
      
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        setTimeout(() => setShowIntro(false), 1000); 
      }, TOTAL_DURATION);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [showIntro, setShowIntro, shouldReduceMotion]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] text-white overflow-hidden"
        >
          {/* Ambient Lighting Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.8 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-primary/10 via-emerald-500/5 to-cyan-500/10 blur-[100px]"
            />
          </div>

          {shouldReduceMotion ? (
            /* REDUCED MOTION FALLBACK */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center"
            >
              <h1 className="text-4xl font-bold font-sora mb-2">Kumail Kmr</h1>
              <p className="text-primary">AI Automation Systems</p>
            </motion.div>
          ) : (
            /* FULL CINEMATIC SEQUENCE */
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

              {/* Scene 1 & 2: Neural Formation (0s - 1.5s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.2] }}
                transition={{ duration: 1.5, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg className="w-64 h-64 md:w-96 md:h-96 opacity-60" viewBox="0 0 100 100">
                  <motion.path
                    d="M 20 50 Q 35 20, 50 50 T 80 50"
                    fill="transparent"
                    strokeWidth="0.5"
                    stroke="url(#grad1)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 20 50 Q 50 80, 50 50 T 80 50"
                    fill="transparent"
                    strokeWidth="0.5"
                    stroke="url(#grad2)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                  />
                  <motion.circle cx="50" cy="50" r="2" fill="#10b981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
                  <motion.circle cx="20" cy="50" r="1.5" fill="#fff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
                  <motion.circle cx="80" cy="50" r="1.5" fill="#fff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
                  
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0"/>
                      <stop offset="50%" stopColor="#10b981" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Scene 3: Premium ECG Pulse (1.2s - 2.0s) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.2, delay: 1.2, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center gap-1 h-12">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "2px", backgroundColor: "#fff" }}
                      animate={{ 
                        height: ["2px", `${Math.random() * 40 + 10}px`, "2px"],
                        backgroundColor: ["#fff", "#10b981", "#06b6d4"]
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.2 + (i * 0.03), 
                        ease: "circOut" 
                      }}
                      className="w-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Scene 4 & 5: CSS 3D Chatbot & Holographic Widgets (1.8s - 3.5s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1.5] }}
                transition={{ duration: 2, delay: 1.8, times: [0, 0.2, 0.8, 1], ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative flex items-center justify-center">
                  {/* Holographic Orbit 1 */}
                  <motion.div 
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2, ease: "backOut" }}
                    className="absolute w-48 h-48 border border-white/5 rounded-full flex items-start justify-center"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center -mt-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <BarChart3 className="w-4 h-4 text-emerald-300" />
                    </div>
                  </motion.div>
                  
                  {/* Holographic Orbit 2 */}
                  <motion.div 
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 90, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.1, ease: "backOut" }}
                    className="absolute w-64 h-64 border border-white/5 rounded-full flex items-start justify-center"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center -mt-4 rotate-[-90deg] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <MessageSquare className="w-4 h-4 text-cyan-300" />
                    </div>
                  </motion.div>

                  {/* 3D Glass AI Core */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-60" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-1 rounded-full bg-gradient-to-tr from-emerald-500/40 via-transparent to-cyan-500/40 blur-md"
                    />
                    <Zap className="w-8 h-8 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </div>
                </div>
              </motion.div>

              {/* Scene 6: Brand Reveal (3.2s - 4.5s) */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Systems Initialized
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-sora bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  Kumail Kmr
                </h1>
                <p className="text-lg md:text-xl text-[#a1a1aa] max-w-md mx-auto font-light">
                  Enterprise AI Automation & Systems Architecture
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
