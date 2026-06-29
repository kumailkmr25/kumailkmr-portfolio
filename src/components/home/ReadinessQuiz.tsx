"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle2, ArrowRight, RefreshCcw, Activity } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

const questions = [
  { text: "How do you currently handle new customer inquiries?", opts: [{ label: "Manual replies (WhatsApp/Email)", score: 0 }, { label: "Basic auto-reply", score: 5 }, { label: "AI handles and qualifies instantly", score: 10 }] },
  { text: "What happens when a lead contacts you at 2 AM?", opts: [{ label: "They wait until morning", score: 0 }, { label: "They get a generic 'away' message", score: 3 }, { label: "They get an instant, contextual response", score: 10 }] },
  { text: "How much time does your staff spend on repetitive data entry?", opts: [{ label: "Most of their day", score: 0 }, { label: "A few hours", score: 5 }, { label: "Zero, it's automated", score: 10 }] },
  { text: "How do you collect required documents from clients?", opts: [{ label: "Endless follow-up emails/texts", score: 0 }, { label: "Standard web forms", score: 5 }, { label: "Automated portal with smart reminders", score: 10 }] },
  { text: "Are your software tools integrated with each other?", opts: [{ label: "No, entirely siloed", score: 0 }, { label: "Some basic Zapier links", score: 5 }, { label: "Fully synchronized ecosystem", score: 10 }] },
  { text: "How do you schedule client appointments?", opts: [{ label: "Back-and-forth manual coordination", score: 0 }, { label: "Calendly link sent manually", score: 5 }, { label: "AI schedules and syncs automatically", score: 10 }] },
  { text: "Do you have visibility into your customer lifecycle?", opts: [{ label: "No, data is scattered", score: 0 }, { label: "Partially, via a basic CRM", score: 5 }, { label: "Total visibility via live dashboard", score: 10 }] },
  { text: "How do you re-engage old leads?", opts: [{ label: "We don't", score: 0 }, { label: "Manual broadcast lists", score: 4 }, { label: "Automated nurture sequences", score: 10 }] },
  { text: "What happens if a key employee takes a week off?", opts: [{ label: "Things fall through the cracks", score: 0 }, { label: "Others struggle to cover the load", score: 4 }, { label: "Systems handle the routine work seamlessly", score: 10 }] },
  { text: "Do you feel like you are the bottleneck in your business?", opts: [{ label: "Yes, every decision goes through me", score: 0 }, { label: "Sometimes", score: 5 }, { label: "No, the business runs itself", score: 10 }] },
];

export function ReadinessQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (points: number) => {
    setScore(prev => prev + points);
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section className="section-py bg-white dark:bg-[#0a0a0a]">
      <div className="section-container max-w-4xl">
        <SectionHeading
          badge="Readiness Assessment"
          title="Automation Maturity Quiz"
          subtitle="Take this 60-second assessment to discover how ready your business is to implement AI systems."
          center
        />

        <div className="mt-12 glass-card premium-card p-6 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
          {/* Progress Bar */}
          {!showResults && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-black/5 dark:bg-white/5">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(currentQ / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="text-sm font-bold tracking-widest text-[#71717a] uppercase mb-4">
                  Question {currentQ + 1} of {questions.length}
                </div>
                <h3 className="text-2xl md:text-3xl font-sora font-semibold text-foreground mb-8 text-balance">
                  {questions[currentQ].text}
                </h3>
                
                <div className="space-y-3">
                  {questions[currentQ].opts.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.score)}
                      className="w-full text-left p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] hover:border-primary/50 hover:bg-primary/5 transition-all text-foreground font-medium group"
                    >
                      <span className="flex items-center justify-between">
                        {opt.label}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-primary transition-all" />
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full emerald-bg text-primary flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  <Activity className="w-10 h-10" />
                </div>
                
                <h3 className="text-3xl font-sora font-bold text-foreground mb-2">
                  Automation Score: <span className="text-primary">{score}%</span>
                </h3>
                
                <p className="text-lg text-foreground-muted mb-8 max-w-lg mx-auto">
                  {score < 40 
                    ? "Your business is highly manual. Implementing basic AI workflows could cut your operational overhead by up to 60% immediately."
                    : score < 80 
                    ? "You have some systems in place, but you're missing out on total integration. Advanced AI automations will take you to the next level."
                    : "You run a highly automated operation! A custom AI fine-tuning strategy would squeeze out maximum efficiency."}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={personalInfo.social.calendly}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:scale-105 shadow-md transition-all w-full sm:w-auto"
                  >
                    Discuss Your Results
                  </Link>
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#f4f4f5] dark:bg-[#111111] text-foreground font-semibold rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors w-full sm:w-auto"
                  >
                    <RefreshCcw className="w-4 h-4" /> Retake
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
