"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Premium3DBackground } from "@/components/animations/premium/Premium3DBackground";
import MagneticButton from "@/components/ui/MagneticButton";

const headlineVariants: Variants = {
 hidden: { opacity: 0, y: 20 },
 visible: (i: number) => ({
 opacity: 1,
 y: 0,
 transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
 }),
};

const subtitleVariants: Variants = {
 hidden: { opacity: 0, y: 10 },
 visible: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.5 } },
};

const ctaVariants: Variants = {
 hidden: { opacity: 0, scale: 0.95 },
 visible: { opacity: 1, scale: 1, transition: { delay: 1.2, duration: 0.4 } },
};

const HeroAnimation: React.FC = () => {
 const shouldReduce = useReducedMotion();
 return (
 <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
 <Premium3DBackground />
 <div className="relative z-10 px-4 text-center max-w-4xl">
 {/* Headline – word by word reveal */}
 <h1 className="text-5xl font-bold text-white mb-6">
 {"Hello, I’m Kumail".split(" ").map((word, i) => (
 <motion.span
 key={i}
 custom={i}
 initial="hidden"
 animate={shouldReduce ? "visible" : "visible"}
 variants={headlineVariants}
 className="inline-block mr-2"
 >
 {word}
 </motion.span>
 ))}
 </h1>
 {/* Subtitle */}
 <motion.p
 initial="hidden"
 animate={shouldReduce ? "visible" : "visible"}
 variants={subtitleVariants}
 className="text-xl text-gray-300 mb-8"
 >
 Freelance Full‑Stack Engineer & AI Automation Specialist
 </motion.p>
 {/* CTA Buttons */}
 <motion.div
 initial="hidden"
 animate={shouldReduce ? "visible" : "visible"}
 variants={ctaVariants}
 className="flex gap-4 justify-center"
 >
 <MagneticButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
 View Projects
 </MagneticButton>
 <Link href="/contact">
 <MagneticButton>
 Get In Touch
 </MagneticButton>
 </Link>
 </motion.div>
 </div>
 </section>
 );
};

export default HeroAnimation;
