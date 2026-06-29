"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What types of businesses do you work with?", answer: "I work primarily with service-based businesses, clinics, CA firms, coaching institutes, and SMEs looking to streamline their repetitive operations." },
  { question: "Can AI integrate with our existing systems?", answer: "Yes. I build custom integrations (via APIs, Make, or Zapier) to connect the AI solutions seamlessly into your existing CRM, calendar, or database." },
  { question: "How long does implementation take?", answer: "Simple automation (like a WhatsApp bot) takes 1-2 weeks. Complex end-to-end business systems typically take 3-6 weeks, depending on your requirements." },
  { question: "Is training included?", answer: "Absolutely. I provide full documentation, video walkthroughs, and live team training to ensure everyone is comfortable using the new systems." },
  { question: "What happens after deployment?", answer: "I offer ongoing support packages to monitor system health, refine AI prompts, and build additional features as your business grows." },
  { question: "Can the solution grow with our business?", answer: "Yes, every system I build uses scalable cloud infrastructure. It will handle 10 leads a day or 1,000 without requiring a complete rebuild." },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sora text-[#09090b] dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-primary/50 bg-[#f4f4f5]/50 dark:bg-[#111111]' : 'border-black/10 dark:border-white/10 bg-transparent'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#09090b] dark:text-white pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#71717a] transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#71717a] text-sm leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
