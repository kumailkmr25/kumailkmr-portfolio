"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useVisitorExperience } from "./VisitorExperienceContext";

// Web Audio API helper for a futuristic UI chime (zero assets needed!)
const playFuturisticChime = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Oscillator 1: High pitched sweep
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(800, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    
    // Oscillator 2: Lower bell tone
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(400, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.2);

    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 0.5);
    osc2.stop(ctx.currentTime + 0.8);
  } catch (e) {
    console.warn("Audio playback failed or blocked.", e);
  }
};

export function IntroAnimation() {
  const { showIntro, setShowIntro } = useVisitorExperience();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const audioPlayed = useRef(false);

  useEffect(() => {
    if (showIntro) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      
      // Check user preferences for sound
      const isMuted = localStorage.getItem('portfolio_mute_sound') === 'true';
      
      if (!isMuted && !audioPlayed.current) {
        // Attempt to play sound (may be blocked by browser autoplay policy until interaction)
        // A click event listener on the window can catch it if blocked, but for a short intro we just try.
        setTimeout(() => playFuturisticChime(), 1000);
        audioPlayed.current = true;
      }

      const TOTAL_DURATION = shouldReduceMotion ? 2500 : 5000;
      
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
          onClick={() => {
            // Unblock audio on click if they clicked early
            if (!audioPlayed.current) {
               playFuturisticChime();
               audioPlayed.current = true;
            }
          }}
        >
          {/* Ambient Lighting Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.8 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-primary/20 via-emerald-500/10 to-cyan-500/20 blur-[100px]"
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

              {/* Neural Particles / ECG Background (0s - 2.5s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.2] }}
                transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-1 h-12 mb-8">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "2px", backgroundColor: "#fff" }}
                      animate={{ 
                        height: ["2px", `${Math.random() * 60 + 10}px`, "2px"],
                        backgroundColor: ["#fff", "var(--color-primary)", "#06b6d4"]
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5 + (i * 0.04), 
                        ease: "circOut" 
                      }}
                      className="w-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  ))}
                </div>
              </motion.div>

              {/* 3D Spline Robot Reveal (1.5s - 4s) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1.2], y: [50, 0, 0, -20] }}
                transition={{ duration: 2.5, delay: 1.5, times: [0, 0.2, 0.8, 1], ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full flex items-center justify-center overflow-hidden">
                   {/* Glow behind robot */}
                   <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0" />
                   
                   <iframe 
                      src="https://my.spline.design/3drobot-e9c52402ba69da1bf33a5951d8d3f1fc/" 
                      className="w-[150%] h-[150%] relative z-10 pointer-events-none mix-blend-screen" 
                      frameBorder="0"
                      loading="lazy"
                   />
                </div>
              </motion.div>

              {/* Brand Reveal (3.5s - 5s) */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.2, delay: 3.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-primary mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Systems Initialized
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-sora bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  Kumail Kmr
                </h1>
                <p className="text-lg md:text-xl text-[#a1a1aa] max-w-md mx-auto font-light">
                  Enterprise AI Automation
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
