"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/data";
import { Badge } from "@/components/shared/Badge";
import Link from "next/link";
import { MessageCircle, Mail, Map, Target, Check } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const discoverySteps = [
 "Business understanding & goals",
 "Current workflow review",
 "Pain-point identification",
 "Opportunity mapping",
 "Solution recommendations",
 "Timeline discussion",
 "Questions & Answers"
];

export default function BookConsultationPage() {
 const [context, setContext] = useState("");

 const handleWhatsApp = (e: React.MouseEvent) => {
 e.preventDefault();
 let url = personalInfo.whatsappUrl;
 if (context.trim()) {
 url += `?text=${encodeURIComponent(`Hi Kumail, I'd like to book a free audit. Here is some context about my business:\n\n${context}`)}`;
 } else {
 url += `?text=${encodeURIComponent(`Hi Kumail, I'd like to book a free automation audit.`)}`;
 }
 window.open(url, '_blank');
 };

 const handleEmail = (e: React.MouseEvent) => {
 e.preventDefault();
 const subject = "Business Automation Audit Request";
 let body = "Hi Kumail,\n\nI'd like to book a free automation audit for my business.";
 if (context.trim()) {
 body += `\n\nHere is some context about my current operations and challenges:\n\n${context}`;
 }
 window.open(`mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
 };

 return (
 <main className="bg-white dark:bg-background min-h-screen">
 <section className="section-py section-container pt-32">
 <div className="max-w-5xl mx-auto">
 <SectionHeading
 badge="Free Audit"
 title="Book Your Discovery Call"
 subtitle="Let's discuss your business operations and identify where AI automation can drive the most ROI."
 />

 <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
 
 {/* Form Section */}
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 className="premium-card p-8 bg-surface "
 >
 <h3 className="text-xl font-bold mb-6 text-foreground ">
 How would you like to connect?
 </h3>
 
 <div className="mb-8">
 <label htmlFor="context" className="block text-sm font-medium text-foreground dark:text-foreground-muted mb-2">
 Optional: Tell me briefly about your business and biggest bottleneck
 </label>
 <textarea
 id="context"
 rows={4}
 value={context}
 onChange={(e) => setContext(e.target.value)}
 placeholder="e.g. We are a CA firm spending 15 hours a week chasing clients for documents..."
 className="w-full rounded-xl border border-border-strong bg-white dark:bg-background p-4 text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-colors"
 />
 </div>

 <div className="flex flex-col gap-4">
 <button
 onClick={handleWhatsApp}
 className="flex items-center justify-between w-full p-4 rounded-xl border border-primary bg-primary text-white hover:bg-primary transition-colors group"
 >
 <div className="flex items-center gap-3">
 <MessageCircle className="w-5 h-5" />
 <span className="font-semibold">Connect via WhatsApp</span>
 </div>
 <Badge variant="gray" className="bg-white/20 text-white border-none group-hover:bg-white/30 transition-colors">
 Fastest Response
 </Badge>
 </button>

 <button
 onClick={handleEmail}
 className="flex items-center gap-3 w-full p-4 rounded-xl border border-border-strong bg-white dark:bg-background text-foreground hover:border-[#09090b] dark:hover:border-white transition-colors"
 >
 <Mail className="w-5 h-5 text-foreground-muted" />
 <span className="font-semibold">Send me an Email</span>
 </button>

 <Link
 href={personalInfo.social.linkedin}
 target="_blank"
 className="flex items-center gap-3 w-full p-4 rounded-xl border border-border-strong bg-white dark:bg-background text-foreground hover:border-[#0a0a0a] hover:bg-[#0a66c2] hover:text-white dark:hover:border-white dark:hover:bg-[#0a66c2] transition-all group"
 >
 <FaLinkedin className="w-5 h-5 text-[#0a66c2] group-hover:text-white transition-colors" />
 <span className="font-semibold">Message on LinkedIn</span>
 </Link>
 </div>

 <div className="mt-8 pt-8 border-t border-border flex items-center gap-4 text-sm text-foreground-muted">
 <Map className="w-5 h-5 flex-shrink-0" />
 <p>Based in {personalInfo.location}, working with clients globally.</p>
 </div>
 </motion.div>

 {/* Info Section */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="flex flex-col gap-8"
 >
 <div>
 <h3 className="text-2xl font-bold mb-6 text-foreground ">
 What happens on the call?
 </h3>
 
 <div className="premium-card bg-surface p-6 relative overflow-hidden mb-6">
 <div className="absolute left-10 top-8 bottom-8 w-px bg-primary-border dark:bg-primary-bg" />
 <div className="flex flex-col gap-6 relative z-10">
 {discoverySteps.map((step, idx) => (
 <div key={idx} className="flex items-center gap-4">
 <div className="w-8 h-8 rounded-full bg-primary-border dark:bg-primary-bg text-primary dark:text-primary-light flex items-center justify-center text-sm font-bold border-2 border-white dark:border-[#111111] shadow-sm flex-shrink-0">
 {idx + 1}
 </div>
 <span className="text-sm font-medium text-foreground ">{step}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="premium-card bg-white dark:bg-background p-6 border-l-4 border-l-primary">
 <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
 <Check className="w-5 h-5 text-primary" /> What this IS
 </h4>
 <p className="text-sm text-foreground-muted leading-relaxed">
 A free, 30-minute focused business discussion entirely about your operations and where you can save time.
 </p>
 </div>
 <div className="premium-card bg-white dark:bg-background p-6 border-l-4 border-l-red-500">
 <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
 <Target className="w-5 h-5 text-red-500" /> What this IS NOT
 </h4>
 <p className="text-sm text-foreground-muted leading-relaxed">
 A high-pressure sales pitch. If automation isn&apos;t the right fit for your current stage, I will tell you directly.
 </p>
 </div>
 </div>
 </div>
 </motion.div>

 </div>
 </div>
 </section>
 </main>
 );
}
