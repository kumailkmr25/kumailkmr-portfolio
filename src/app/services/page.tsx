"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";
import { CTA } from "@/components/home/CTA";
import { Check } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import Link from "next/link";

const techEcosystem = [
 {
 category: "AI Models",
 role: "The Brains",
 value: "I use state-of-the-art LLMs (like OpenAI's GPT-4) not because they're trendy, but because they can understand complex customer intent and navigate ambiguous business rules better than older rigid decision trees.",
 },
 {
 category: "WhatsApp Business API",
 role: "The Interface",
 value: "Your customers already live in WhatsApp. By building the automation directly into the tools they already use, we eliminate the friction of asking them to download new apps or learn new portals.",
 },
 {
 category: "Automation Platforms",
 role: "The Connectors",
 value: "Tools like Make.com or Zapier act as the nervous system, allowing data to flow securely between the AI, your communication channels, and your backend databases without human intervention.",
 },
 {
 category: "Cloud Databases & CRMs",
 role: "The Memory",
 value: "Whether we integrate with your existing CRM (Salesforce, HubSpot) or build a custom lightweight database, this layer ensures the system remembers customer context and historical interactions.",
 },
 {
 category: "Dashboards",
 role: "The Visibility",
 value: "I implement clean, real-time dashboards so you are never locked out of what the automation is doing. You get complete transparency into conversation logs, lead statuses, and system performance.",
 }
];

export default function ServicesPage() {
 return (
 <>
 <main className="bg-white dark:bg-background min-h-screen">
 <section className="section-py section-container pt-32">
 <SectionHeading
 badge="Business Solutions"
 title="Systems Designed For ROI"
 subtitle="I build tailored automation ecosystems that eliminate administrative waste and accelerate your operational velocity."
 center
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
 {services.map((service, i) => {
 const serviceUrl = service.href || `/services/${service.id}`;
 const CardContent = (
 <>
 <div className="w-12 h-12 rounded-xl bg-white dark:bg-background border border-border flex items-center justify-center text-2xl mb-6">
 {service.icon}
 </div>
 <h2 className="text-xl font-bold text-foreground mb-3 flex items-center justify-between">
 {service.title}
 <span className="text-primary text-sm font-normal bg-primary/10 px-2 py-1 rounded-md whitespace-nowrap ml-3">View Details &rarr;</span>
 </h2>
 <p className="text-foreground-muted text-sm leading-relaxed mb-8 flex-1">
 {service.description}
 </p>

 <div className="pt-6 border-t border-border ">
 <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider mb-4">
 Key Outcomes
 </h4>
 <ul className="flex flex-col gap-3">
 {service.features.map((feature, idx) => (
 <li key={idx} className="flex gap-3 text-sm">
 <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
 <span className="text-foreground-muted">{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 </>
 );

 return (
 <motion.div
 key={service.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 >
 <Link href={serviceUrl} className="premium-card p-8 flex flex-col h-full bg-surface hover:border-primary/50 transition-colors cursor-pointer group">
 {CardContent}
 </Link>
 </motion.div>
 );
 })}
 </div>
 </section>

 <section className="section-py bg-surface ">
 <div className="section-container max-w-5xl">
 <SectionHeading
 badge="The Stack"
 title="Technology Ecosystem"
 subtitle="I choose technology based on business value, stability, and integration capability—not technical jargon."
 center
 />
 
 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
 {techEcosystem.map((tech, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="p-6 bg-white dark:bg-background rounded-2xl border border-border "
 >
 <div className="flex items-center justify-between mb-4">
 <h3 className="font-bold text-lg text-foreground ">{tech.category}</h3>
 <Badge variant="emerald" className="text-xs">{tech.role}</Badge>
 </div>
 <p className="text-sm text-foreground-muted leading-relaxed">
 {tech.value}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 </main>
 <CTA />
 </>
 );
}
