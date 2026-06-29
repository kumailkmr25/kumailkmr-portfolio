"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
 q: string;
 a: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
 setOpenIndex(openIndex === index ? null : index);
 };

 return (
 <div className="flex flex-col gap-4">
 {faqs.map((faq, index) => {
 const isOpen = openIndex === index;
 return (
 <div 
 key={index}
 className="border border-border rounded-2xl bg-white dark:bg-background overflow-hidden"
 >
 <button
 onClick={() => toggle(index)}
 className="w-full flex items-center justify-between p-6 text-left hover:bg-surface dark:hover:bg-[#111111] transition-colors"
 >
 <span className="font-semibold text-lg text-foreground ">
 {faq.q}
 </span>
 <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0 ml-4">
 {isOpen ? (
 <Minus className="w-4 h-4 text-primary" />
 ) : (
 <Plus className="w-4 h-4 text-foreground-muted" />
 )}
 </div>
 </button>
 <AnimatePresence initial={false}>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 >
 <div className="p-6 pt-0 text-foreground-muted leading-relaxed border-t border-border mt-4">
 {faq.a}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>
 );
}
