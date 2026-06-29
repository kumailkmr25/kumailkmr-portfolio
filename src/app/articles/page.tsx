"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/shared/Badge";
import { useState } from "react";
import { toast } from "react-hot-toast";

// Placeholder articles for the Knowledge Center based on requested professional topics
const articles = [
 {
 id: "a1",
 title: "The True Cost of Manual Data Entry in 2026",
 excerpt: "Why relying on human capital for repetitive administrative tasks is no longer a viable scaling strategy.",
 topic: "Operational Efficiency",
 readTime: "4 min read",
 date: "Jun 12, 2026",
 slug: "#"
 },
 {
 id: "a2",
 title: "AI Adoption: A Framework for Non-Technical Founders",
 excerpt: "How to integrate AI into your operations securely without disrupting your existing business processes.",
 topic: "AI Adoption",
 readTime: "6 min read",
 date: "May 28, 2026",
 slug: "#"
 },
 {
 id: "a3",
 title: "Transforming WhatsApp into a Customer Experience Engine",
 excerpt: "Moving beyond basic chatbots: How to build intelligent conversational flows that actually convert leads.",
 topic: "Customer Experience",
 readTime: "5 min read",
 date: "May 15, 2026",
 slug: "#"
 },
 {
 id: "a4",
 title: "Digital Transformation vs. Digital Tool Bloat",
 excerpt: "More SaaS subscriptions don't equal better operations. Why workflow optimization must precede software adoption.",
 topic: "Digital Transformation",
 readTime: "7 min read",
 date: "Apr 30, 2026",
 slug: "#"
 }
];

const categories = [
 "All",
 "Business Automation",
 "Operational Efficiency",
 "AI Adoption",
 "Customer Experience",
 "WhatsApp Business",
 "Digital Transformation",
 "Industry-Specific"
];

export default function ArticlesPage() {
 const [email, setEmail] = useState("");

 const handleSubscribe = (e: React.FormEvent) => {
 e.preventDefault();
 if (!email) return;
 
 // Simulate API call
 toast.success("Successfully subscribed to the newsletter!");
 setEmail("");
 };

 return (
 <>
 <main className="bg-surface min-h-screen">
 <section className="section-py section-container pt-32 max-w-5xl">
 <SectionHeading
 badge="Knowledge Center"
 title="Insights & Strategies"
 subtitle="Professional perspectives on business automation, operational efficiency, and scalable AI architecture."
 center
 />

 <div className="mt-12 flex flex-wrap justify-center gap-2">
 {categories.map((category, i) => (
 <button
 key={i}
 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
 i === 0
 ? "bg-[#09090b] text-white dark:bg-white dark:text-foreground"
 : "bg-white dark:bg-background text-foreground-muted border border-border-strong hover:border-[#09090b] dark:hover:border-white"
 }`}
 >
 {category}
 </button>
 ))}
 </div>

 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
 {articles.map((article, i) => (
 <motion.div
 key={article.id}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="premium-card p-8 bg-white dark:bg-background flex flex-col group"
 >
 <div className="flex items-center justify-between mb-6">
 <Badge variant="emerald">{article.topic}</Badge>
 <div className="flex items-center gap-2 text-sm text-foreground-muted">
 <Clock className="w-4 h-4" />
 <span>{article.readTime}</span>
 </div>
 </div>

 <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
 {article.title}
 </h3>
 <p className="text-foreground-muted leading-relaxed mb-8 flex-1">
 {article.excerpt}
 </p>

 <div className="flex items-center justify-between pt-6 border-t border-border ">
 <span className="text-sm font-medium text-foreground dark:text-foreground-muted">
 {article.date}
 </span>
 <Link
 href={article.slug}
 className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-primary-light hover:text-primary dark:hover:text-primary-light transition-colors"
 >
 Read Article <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </motion.div>
 ))}
 </div>
 
 <div className="mt-20 p-8 rounded-2xl border border-border-strong bg-white dark:bg-background text-center max-w-2xl mx-auto flex flex-col items-center">
 <div className="w-12 h-12 rounded-full bg-primary-border dark:bg-primary-bg text-primary flex items-center justify-center mb-4">
 <BookOpen className="w-6 h-6" />
 </div>
 <h3 className="text-xl font-bold mb-2">Want to receive these insights via email?</h3>
 <p className="text-foreground-muted mb-6">Join a private list of founders and operational leaders receiving bi-weekly essays on business automation.</p>
 <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
 <input 
 type="email" 
 placeholder="founder@company.com" 
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 className="flex-1 rounded-xl border border-border-strong px-4 py-2 bg-transparent focus:outline-none focus:border-primary transition-colors"
 />
 <button type="submit" className="btn-primary rounded-xl px-6">
 Subscribe
 </button>
 </form>
 </div>
 </section>
 </main>
 <CTA />
 </>
 );
}
