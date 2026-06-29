"use client";

import { personalInfo } from "@/lib/data";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/home/CTA";

const questions = [
 {
 id: "volume",
 question: "How many customer inquiries do you receive daily across all channels?",
 options: ["Under 20", "20 - 50", "50 - 200", "200+"],
 },
 {
 id: "team",
 question: "How many staff members handle customer communication?",
 options: ["Just me", "1-2 staff", "3-5 staff", "More than 5"],
 },
 {
 id: "time",
 question: "How much time is spent daily on repetitive administrative tasks?",
 options: ["1-2 hours", "3-5 hours", "Half the day", "Most of the day"],
 },
 {
 id: "whatsapp",
 question: "Do you use WhatsApp for business communication?",
 options: ["Yes, heavily", "Yes, occasionally", "No, but we want to", "No"],
 },
 {
 id: "followup",
 question: "How are potential leads currently followed up?",
 options: [
 "Manually via WhatsApp/Email",
 "We try, but often forget",
 "We have some automation",
 "They aren't followed up",
 ],
 },
];

export default function AuditPage() {
 const [currentStep, setCurrentStep] = useState(0);
 const [answers, setAnswers] = useState<Record<string, string>>({});
 const [isAnalyzing, setIsAnalyzing] = useState(false);
 const [showResults, setShowResults] = useState(false);

 const handleOptionSelect = (option: string) => {
 setAnswers((prev) => ({
 ...prev,
 [questions[currentStep].id]: option,
 }));

 if (currentStep < questions.length - 1) {
 setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
 } else {
 setIsAnalyzing(true);
 setTimeout(() => {
 setIsAnalyzing(false);
 setShowResults(true);
 }, 2000);
 }
 };

 const getRecommendation = () => {
 const highVolume = answers.volume === "50 - 200" || answers.volume === "200+";
 const manualFollowup = answers.followup === "We try, but often forget" || answers.followup === "They aren't followed up";
 const heavyWhatsapp = answers.whatsapp === "Yes, heavily" || answers.whatsapp === "Yes, occasionally";

 if (highVolume && heavyWhatsapp) {
 return {
 title: "High-Priority: WhatsApp AI Assistant",
 description: "Your business is losing significant hours to WhatsApp queries. An AI assistant could handle 80% of these instantly, freeing up your team.",
 };
 }
 if (manualFollowup) {
 return {
 title: "High-Priority: Automated Lead Nurturing",
 description: "You are losing revenue from leads falling through the cracks. A centralized CRM with automated follow-ups is critical.",
 };
 }
 return {
 title: "Core Business Automation",
 description: "Based on your inputs, standardizing your workflows and automating your highest-volume repetitive tasks will yield immediate ROI.",
 };
 };

 return (
 <>
 <main className="bg-surface min-h-screen">
 <section className="section-py section-container pt-32 max-w-4xl">
 <SectionHeading
 badge="Free Assessment"
 title="Business Automation Audit"
 subtitle="Take this 60-second assessment to discover exactly where automation will have the biggest impact on your operations."
 center
 />

 <div className="mt-16 bg-white dark:bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border min-h-[400px] flex flex-col relative overflow-hidden">
 {!isAnalyzing && !showResults && (
 <>
 <div className="flex justify-between items-center mb-8">
 <Badge variant="gray">
 Question {currentStep + 1} of {questions.length}
 </Badge>
 <div className="flex gap-1">
 {questions.map((_, i) => (
 <div
 key={i}
 className={`h-1.5 rounded-full transition-all duration-300 ${
 i <= currentStep
 ? "w-6 bg-primary"
 : "w-2 bg-black/10 dark:bg-white/10"
 }`}
 />
 ))}
 </div>
 </div>

 <AnimatePresence mode="wait">
 <motion.div
 key={currentStep}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.3 }}
 className="flex-1 flex flex-col justify-center"
 >
 <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-tight">
 {questions[currentStep].question}
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {questions[currentStep].options.map((option, i) => (
 <button
 key={i}
 onClick={() => handleOptionSelect(option)}
 className="text-left p-6 rounded-xl border border-border-strong hover:border-primary dark:hover:border-primary hover:bg-primary-bg dark:hover:bg-primary-bg transition-all group"
 >
 <span className="font-medium text-foreground group-hover:text-primary dark:group-hover:text-primary-light">
 {option}
 </span>
 </button>
 ))}
 </div>
 </motion.div>
 </AnimatePresence>
 
 {currentStep > 0 && (
 <button 
 onClick={() => setCurrentStep(prev => prev - 1)}
 className="mt-8 text-sm text-foreground-muted hover:text-foreground dark:hover:text-white self-start"
 >
 ← Back
 </button>
 )}
 </>
 )}

 {isAnalyzing && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="flex-1 flex flex-col items-center justify-center text-center gap-6"
 >
 <div className="relative flex items-center justify-center w-20 h-20">
 <div className="absolute inset-0 border-4 border-border rounded-full" />
 <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
 <span className="text-2xl">🤖</span>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-2">Analyzing your operations...</h3>
 <p className="text-foreground-muted">Mapping bottlenecks and identifying AI opportunities</p>
 </div>
 </motion.div>
 )}

 {showResults && (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 className="flex-1 flex flex-col"
 >
 <div className="flex items-center gap-3 mb-6">
 <CheckCircle2 className="w-8 h-8 text-primary" />
 <h2 className="text-2xl font-bold">Your Analysis is Ready</h2>
 </div>

 <div className="bg-primary-bg dark:bg-primary-bg border border-primary-border dark:border-primary-border rounded-2xl p-6 md:p-8 mb-8">
 <Badge variant="emerald" className="mb-4">Primary Recommendation</Badge>
 <h3 className="text-xl font-bold text-foreground mb-3">
 {getRecommendation().title}
 </h3>
 <p className="text-foreground leading-relaxed">
 {getRecommendation().description}
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
 <div className="p-6 rounded-xl border border-border bg-surface ">
 <h4 className="font-semibold mb-2">Potential Time Saved</h4>
 <p className="text-2xl font-bold text-foreground ">15-20 Hours/Week</p>
 </div>
 <div className="p-6 rounded-xl border border-border bg-surface ">
 <h4 className="font-semibold mb-2">Implementation Complexity</h4>
 <p className="text-2xl font-bold text-foreground ">Low-Medium</p>
 </div>
 </div>

 <div className="mt-auto text-center border-t border-border pt-8">
 <h3 className="font-bold text-lg mb-4">Want to see how this works in practice?</h3>
 <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto justify-center px-8">
 Discuss Your Results <ArrowRight className="w-4 h-4 ml-2" />
 </Link>
 </div>
 </motion.div>
 )}
 </div>
 </section>
 </main>
 <CTA />
 </>
 );
}
