"use client";

import { motion } from "framer-motion";

import { Lock, ShieldCheck, Database, Key } from "lucide-react";

const securityFeatures = [
 {
 icon: <Lock className="w-6 h-6" />,
 title: "Data Confidentiality",
 description: "Your business data and customer information remain completely confidential and are never used to train public AI models.",
 },
 {
 icon: <ShieldCheck className="w-6 h-6" />,
 title: "Compliance-Conscious",
 description: "Systems are designed with data protection principles in mind, ensuring secure handling of PII (Personally Identifiable Information).",
 },
 {
 icon: <Database className="w-6 h-6" />,
 title: "Secure Integrations",
 description: "All integrations between platforms (WhatsApp, CRM, AI) use encrypted, industry-standard API connections and secure webhooks.",
 },
 {
 icon: <Key className="w-6 h-6" />,
 title: "Role-Based Access",
 description: "Dashboards and internal tools are built with strict access controls, so staff only see the information they need to do their jobs.",
 },
];

export function SecurityPrivacy() {
 return (
 <section className="section-py relative overflow-hidden bg-[#050505] text-white border-y border-white/5">
 {/* Premium Background Effects */}
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#050505] to-[#050505]" />
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] opacity-30 blur-[100px] rounded-full bg-primary/20 pointer-events-none" />
 
 <div className="section-container relative z-10">
 <div className="flex flex-col items-center text-center">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold tracking-wide mb-6 shadow-[0_0_20px_var(--primary-bg)]">
 <ShieldCheck className="w-4 h-4" /> Trust & Security
 </div>
 <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
 Enterprise-Grade Data Protection
 </h2>
 <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
 Modern business automation requires treating customer and operational data with the highest level of security and respect.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
 {securityFeatures.map((feature, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
 >
 {/* Hover Glow Effect */}
 <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
 
 <div className="relative z-10">
 <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary-light flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_var(--primary-bg)]">
 {feature.icon}
 </div>
 <h3 className="font-bold text-lg text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
 {feature.title}
 </h3>
 <p className="text-foreground-muted text-sm leading-relaxed">
 {feature.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 
 <div className="mt-12 p-6 rounded-2xl bg-primary-bg border border-primary-border flex flex-col md:flex-row items-center gap-6 justify-between max-w-4xl mx-auto">
 <div>
 <h4 className="font-bold text-white mb-1">NDA-Friendly Projects</h4>
 <p className="text-sm text-foreground-muted">I am happy to sign non-disclosure agreements before reviewing your internal processes or sensitive workflows.</p>
 </div>
 <div className="flex-shrink-0">
 <span className="inline-flex items-center gap-2 rounded-lg bg-[#059669] px-4 py-2 text-sm font-semibold text-white">
 Secure by Design
 </span>
 </div>
 </div>
 </div>
 </section>
 );
}
