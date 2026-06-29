"use client";

import { personalInfo } from "@/lib/data";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import Link from "next/link";

const industryWorkflows = [
 {
 icon: "📊",
 name: "CA Firms & Accounting",
 workflow: [
 "Client uploads tax documents via secure portal",
 "AI automatically extracts and verifies information",
 "Automated WhatsApp reminders sent for missing documents",
 "Partner dashboard updates in real-time",
 "Compliance deadlines automatically tracked in calendar"
 ]
 },
 {
 icon: "🏥",
 name: "Hospitals & Clinics",
 workflow: [
 "Patient requests appointment via WhatsApp",
 "AI cross-references doctor availability",
 "Automated booking confirmation and pre-visit instructions sent",
 "AI handles follow-up FAQs automatically",
 "Feedback collected post-visit automatically"
 ]
 },
 {
 icon: "✈️",
 name: "Travel Agencies",
 workflow: [
 "Lead submits inquiry on website",
 "AI qualifies lead via instant WhatsApp message",
 "Basic itinerary generated automatically based on budget",
 "Agent notified with qualified lead details",
 "Automated follow-up sequence nurtures until booking"
 ]
 },
 {
 icon: "🏢",
 name: "Real Estate Agencies",
 workflow: [
 "Prospect clicks social media ad",
 "AI assistant captures requirements (budget, location)",
 "Automated property matching from database",
 "Viewing scheduled via automated calendar link",
 "Agent receives complete lead profile before viewing"
 ]
 },
 {
 icon: "🍽️",
 name: "Restaurants & Cafés",
 workflow: [
 "Customer messages WhatsApp for reservation",
 "AI checks table availability and confirms",
 "Digital menu sent automatically if requested",
 "Automated reminder sent 2 hours before booking",
 "Review request sent 1 hour after meal"
 ]
 },
 {
 icon: "🎓",
 name: "Coaching Institutes",
 workflow: [
 "Student inquires about course fees",
 "AI assistant provides curriculum and fee structure",
 "Automated enrollment link sent",
 "Payment verification triggers onboarding sequence",
 "Student automatically added to learning portal"
 ]
 }
];

export default function IndustriesPage() {
 return (
 <>
 <main className="bg-surface min-h-screen">
 <section className="section-py section-container">
 <SectionHeading
 badge="Industry Workflows"
 title="How Automation Works In Your Sector"
 subtitle="I don't just sell software. I design specific operational workflows tailored to how your industry functions."
 center
 />

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
 {industryWorkflows.map((industry, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="premium-card p-8 flex flex-col bg-white dark:bg-background"
 >
 <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
 <div className="emerald-bg rounded-xl p-4 text-4xl">
 {industry.icon}
 </div>
 <h2 className="text-2xl font-bold text-foreground ">
 {industry.name}
 </h2>
 </div>

 <div className="flex-1">
 <h4 className="font-semibold text-sm text-foreground-muted uppercase tracking-wider mb-6">
 Automated Workflow Design
 </h4>
 <div className="flex flex-col gap-4 relative">
 <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-primary-border dark:bg-primary-bg" />
 {industry.workflow.map((step, idx) => (
 <div key={idx} className="flex gap-4 relative z-10">
 <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 border-4 border-white dark:border-[#0a0a0a]">
 {idx + 1}
 </div>
 <div className="pt-0.5">
 <p className="text-sm font-medium text-foreground dark:text-foreground-muted leading-relaxed">
 {step}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="mt-8 pt-6 border-t border-border ">
 <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"
 className="btn-secondary w-full justify-center"
 >
 Discuss Your {industry.name} Workflow
 </Link>
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* Not Listed Section */}
 <section className="bg-[#09090b] text-white py-20">
 <div className="section-container max-w-3xl text-center flex flex-col items-center gap-6">
 <h2 className="text-3xl font-bold tracking-tight">
 Is Your Industry Listed?
 </h2>
 <p className="text-foreground-muted text-lg">
 If your business type isn&apos;t listed above, that doesn&apos;t mean automation can&apos;t help. 
 The core principles of operational efficiency apply to almost every sector.
 Get in touch and I&apos;ll assess your specific workflows.
 </p>
 <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
 Book a Free Audit
 </Link>
 </div>
 </section>
 </main>
 <CTA />
 </>
 );
}
