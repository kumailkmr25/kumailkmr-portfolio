"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
  options?: string[];
};

const initialMessages: Message[] = [
  {
    id: "msg1",
    sender: "ai",
    text: "Hi! I'm Kumail's AI Business Assistant. Tell me about your business and I'll recommend the best automation solution.",
    options: [
      "I want to automate customer support",
      "I need a booking system",
      "How does pricing work?",
      "Can we build a custom AI?"
    ]
  }
];

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI response based on logic tree
    setTimeout(() => {
      let aiText = "That sounds like a great use case. The best next step is to map this out on a quick strategy call.";
      let aiOpts = ["Book a free strategy session"];

      if (text.toLowerCase().includes("support")) {
        aiText = "For customer support, we deploy custom AI Knowledge Bases that connect directly to WhatsApp and your website. They handle 80% of FAQs instantly.";
        aiOpts = ["See demo", "Book a free strategy session"];
      } else if (text.toLowerCase().includes("booking")) {
        aiText = "Our AI booking systems integrate with Calendly/Google Calendar. The AI chats with the lead, finds a slot, and handles confirmations and reminders automatically.";
        aiOpts = ["Book a free strategy session"];
      } else if (text.toLowerCase().includes("pricing")) {
        aiText = "Pricing depends on the complexity of the workflow. We offer standard packages for straightforward WhatsApp automations, and custom quotes for complex enterprise systems.";
        aiOpts = ["Book a free strategy session"];
      }

      const aiMsg: Message = { id: (Date.now() + 1).toString(), sender: "ai", text: aiText, options: aiOpts };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-shadow group"
      >
        {/* 3D Live Animated Orb Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600 via-primary to-emerald-300 animate-spin" style={{ animationDuration: '4s' }} />
        
        {/* Spline 3D Robot */}
        <div className="absolute inset-1 rounded-full bg-black z-10 overflow-hidden flex items-center justify-center">
          <iframe 
            src="https://my.spline.design/3drobot-e9c52402ba69da1bf33a5951d8d3f1fc/" 
            className="w-[200%] h-[200%] pointer-events-none" 
            frameBorder="0"
          ></iframe>
        </div>
        
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#0a0a0a] z-40" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100vw-32px)] md:w-[380px] h-[550px] max-h-[85vh] bg-white dark:bg-[#111111] rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-foreground text-background flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">AI Consultant</h4>
                  <div className="flex items-center gap-1.5 text-xs text-background/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-background/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#f4f4f5]/50 dark:bg-[#0a0a0a]">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user" 
                        ? "bg-primary text-white rounded-tr-sm" 
                        : "bg-white dark:bg-[#1a1a1a] text-foreground border border-black/5 dark:border-white/5 rounded-tl-sm shadow-sm"
                    }`}>
                      {msg.text}
                    </div>
                    
                    {/* Options (only show for the latest AI message) */}
                    {msg.sender === "ai" && msg.options && msg.id === messages[messages.length - 1]?.id && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {msg.options.map((opt, i) => {
                          if (opt.toLowerCase().includes("book")) {
                            return (
                              <Link 
                                key={i}
                                href={personalInfo.social.calendly} 
                                target="_blank"
                                className="px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-full shadow-sm hover:scale-105 transition-transform"
                              >
                                {opt}
                              </Link>
                            )
                          }
                          return (
                            <button
                              key={i}
                              onClick={() => handleSend(opt)}
                              className="px-3 py-1.5 bg-white dark:bg-[#222] border border-black/10 dark:border-white/10 text-[#71717a] text-xs font-medium rounded-full hover:border-primary/50 hover:text-primary transition-colors text-left"
                            >
                              {opt}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="self-start items-start max-w-[85%] flex gap-1 p-4 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-2xl rounded-tl-sm shadow-sm">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-[#a1a1aa] rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#a1a1aa] rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#a1a1aa] rounded-full" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area (Disabled since it's guided via options for this demo, or we can allow typing) */}
            <div className="p-3 bg-white dark:bg-[#111111] border-t border-black/5 dark:border-white/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select an option above..."
                  disabled
                  className="w-full bg-[#f4f4f5] dark:bg-[#1a1a1a] text-sm rounded-xl py-3 pl-4 pr-12 focus:outline-none opacity-50 cursor-not-allowed"
                />
                <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#a1a1aa]">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
