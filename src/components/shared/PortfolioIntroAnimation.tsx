"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NAME = "Kumail kmr";
const ROLE = "Websites • AI Automation • Business Growth Systems";
const TAGLINE = "Premium digital systems for serious businesses.";

const GOLD = "rgba(212,175,55,1)";
const GOLD_DIM = "rgba(212,175,55,0.6)";

/* ─── tiny particle helper ─── */
type Particle = { id: number; x: number; y: number; r: number; dur: number; delay: number };
function makeParticles(n: number): Particle[] {
 return Array.from({ length: n }, (_, i) => ({
 id: i,
 x: Math.random() * 100,
 y: Math.random() * 100,
 r: 0.8 + Math.random() * 1.4,
 dur: 2.5 + Math.random() * 3,
 delay: Math.random() * 3,
 }));
}

export function PortfolioIntroAnimation() {
 const prefersReduced = useReducedMotion();
 const [show, setShow] = useState(false);
 const [done, setDone] = useState(false);
 const [exiting, setExiting] = useState(false);
 const particles = useRef<Particle[]>(makeParticles(22));
 const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

 useEffect(() => {
 // Skip if already seen this session or prefers reduced motion
 if (prefersReduced || sessionStorage.getItem("intro_done") === "1") {
 queueMicrotask(() => setDone(true));
 return;
 }
 queueMicrotask(() => setShow(true));

 // Auto-exit after 3.8s
 timer.current = setTimeout(() => triggerExit(), 3800);
 return () => { if (timer.current) clearTimeout(timer.current); };
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 function triggerExit() {
 if (timer.current) clearTimeout(timer.current);
 setExiting(true);
 setTimeout(() => {
 setShow(false);
 setDone(true);
 sessionStorage.setItem("intro_done", "1");
 }, 700);
 }

 if (done) return null;
 if (!show) return null;

 return (
 <AnimatePresence>
 {!exiting && (
 <motion.div
 key="intro"
 initial={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.7, ease: "easeInOut" }}
 className="fixed inset-0 z-999 flex flex-col items-center justify-center overflow-hidden"
 style={{ background: "#000000" }}
 onClick={triggerExit}
 aria-label="Intro animation — click to skip"
 >
 {/* ── Background radial glow ── */}
 <motion.div
 initial={{ opacity: 0, scale: 0.6 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1.4, ease: "easeOut" }}
 className="pointer-events-none absolute inset-0"
 style={{
 background:
 "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0.04) 50%, transparent 80%)",
 }}
 />

 {/* ── Floating particles ── */}
 {particles.current.map((p) => (
 <motion.span
 key={p.id}
 className="pointer-events-none absolute rounded-full"
 style={{
 left: `${p.x}%`,
 top: `${p.y}%`,
 width: p.r * 2,
 height: p.r * 2,
 background: GOLD,
 opacity: 0,
 boxShadow: `0 0 ${p.r * 4}px ${GOLD_DIM}`,
 }}
 animate={{ opacity: [0, 0.7, 0], y: [0, -18, -36] }}
 transition={{
 duration: p.dur,
 delay: p.delay,
 repeat: Infinity,
 ease: "easeInOut",
 }}
 />
 ))}

 {/* ── Centre content ── */}
 <div className="relative flex flex-col items-center gap-5 px-6 text-center select-none">

 {/* Name — letter by letter */}
 <motion.h1
 className="flex gap-[2px] text-[3rem] font-bold tracking-[0.18em] text-white sm:text-[4.5rem] md:text-[5.5rem]"
 style={{ fontFamily: "var(--font-playfair), serif" }}
 aria-label={NAME}
 >
 {NAME.split("").map((ch, i) => (
 <motion.span
 key={i}
 initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
 transition={{
 delay: 0.15 + i * 0.055,
 duration: 0.45,
 ease: [0.22, 1, 0.36, 1],
 }}
 style={{ color: ch === " " ? "transparent" : undefined }}
 >
 {ch === " " ? "\u00A0" : ch}
 </motion.span>
 ))}
 </motion.h1>

 {/* Role line */}
 <motion.p
 initial={{ opacity: 0, y: 14 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.85, duration: 0.55, ease: "easeOut" }}
 className="text-sm font-semibold uppercase tracking-[0.22em] sm:text-base"
 style={{ color: GOLD_DIM, fontFamily: "var(--font-outfit), sans-serif" }}
 >
 {ROLE}
 </motion.p>

 {/* Gold horizontal line */}
 <motion.div
 initial={{ scaleX: 0, opacity: 0 }}
 animate={{ scaleX: 1, opacity: 1 }}
 transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 style={{
 height: 1,
 width: "100%",
 maxWidth: 380,
 background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
 transformOrigin: "center",
 boxShadow: `0 0 10px ${GOLD_DIM}`,
 }}
 />

 {/* Tagline */}
 <motion.p
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 1.5, duration: 0.55, ease: "easeOut" }}
 className="text-xs font-light tracking-widest text-slate-400 sm:text-sm italic"
 style={{ fontFamily: "var(--font-playfair), serif" }}
 >
 {TAGLINE}
 </motion.p>
 </div>

 {/* Skip hint */}
 <motion.p
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.8, duration: 0.5 }}
 className="absolute bottom-8 text-[10px] font-medium uppercase tracking-[0.25em] text-white/20 sm:text-xs"
 >
 Tap anywhere to skip
 </motion.p>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
