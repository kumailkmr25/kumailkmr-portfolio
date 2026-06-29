"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Trash2 } from "lucide-react";
import { RiRobotFill } from "react-icons/ri";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
};

const getTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const getInitialMessages = (): Message[] => [
  {
    id: "msg1",
    sender: "ai",
    text: "👋 Hi! I'm Kumail's AI Business Assistant. I'm here to help you explore AI solutions for your business.\n\nHow can I help you today?",
    timestamp: getTimestamp(),
  }
];

const SUGGESTED_QUESTIONS = [
  "What AI services do you offer?",
  "How do you onboard new clients?",
  "What documents are needed to start?",
  "How do you calculate ROI?",
  "Do you sign an NDA?",
  "What is your delivery timeline?",
  "How does the agreement process work?",
  "What post-launch support do you offer?",
  "Do you provide ongoing AI maintenance?",
  "Book a consultation"
];

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(getInitialMessages());
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
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text, timestamp: getTimestamp() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiText = "That sounds like a great use case. The best next step is to map this out on a quick strategy call.";
      
      const lower = text.toLowerCase();
      if (lower.includes("support") || lower.includes("maintenance") || lower.includes("care")) {
        aiText = "We offer comprehensive post-launch support and AI maintenance packages to ensure your systems run smoothly and adapt to any updates.";
      } else if (lower.includes("services")) {
        aiText = "We offer Custom AI Business Systems, WhatsApp Automation, AI Voice Agents, and Customer Support AI. What area are you looking to automate?";
      } else if (lower.includes("cost") || lower.includes("roi")) {
        aiText = "Our systems typically generate a positive ROI within the first 2-3 months by saving countless hours of manual work and increasing lead conversion. We can provide a detailed ROI calculator during our call.";
      } else if (lower.includes("time") || lower.includes("delivery")) {
        aiText = "Most core AI automation systems are delivered and deployed within 2 to 4 weeks, including testing and integration.";
      } else if (lower.includes("onboard") || lower.includes("document")) {
        aiText = "Client onboarding is seamless. We start with a kickoff call and provide a simple checklist for any necessary access documents or business data we need to train your AI.";
      } else if (lower.includes("nda") || lower.includes("agreement")) {
        aiText = "Yes, we always sign an NDA before discussing your internal processes. Our service agreements are straightforward and prioritize your data privacy and intellectual property.";
      } else if (lower.includes("book") || lower.includes("consultation")) {
        aiText = "Fantastic! You can book a free strategy session directly below.";
      }

      const aiMsg: Message = { id: (Date.now() + 1).toString(), sender: "ai", text: aiText, timestamp: getTimestamp() };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const clearChat = () => {
    setMessages(getInitialMessages());
  };

  return (
    <>
      {/* Premium Trigger Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 w-[80px] h-[80px] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-shadow group border border-border"
      >
        {/* Animated Orb Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600 via-primary to-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
        
        {/* Glassmorphic 3D Container */}
        <div className="absolute inset-1 rounded-full bg-surface/90 backdrop-blur-xl z-10 overflow-hidden flex items-center justify-center">
          <RiRobotFill className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background shadow-lg z-40 animate-pulse" />
      </motion.button>

      {/* Premium Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-32px)] md:w-[400px] h-[600px] max-h-[85vh] bg-surface/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-border-strong flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 border-b border-border bg-background/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <RiRobotFill className="w-8 h-8 text-primary" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-surface" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Kumail's AI Assistant</h4>
                  <div className="flex items-center gap-1.5 text-xs text-primary">
                    Online & Ready
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearChat}
                  className="p-2 text-foreground-muted hover:text-red-400 hover:bg-background rounded-full transition-colors"
                  title="Clear Chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground-muted hover:text-foreground hover:bg-background rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3">
              <div className="flex justify-center mb-2">
                <span className="text-[10px] uppercase tracking-wider text-foreground-muted bg-background px-3 py-1 rounded-full">Today</span>
              </div>
              
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}
                >
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-primary text-white rounded-tr-sm" 
                      : "bg-surface-2 text-foreground border border-border rounded-tl-sm"
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-foreground-muted mt-1 px-1">
                    {msg.timestamp}
                  </span>
                  
                  {/* Book Consultation specific button */}
                  {msg.sender === "ai" && msg.text.includes("book a free strategy") && (
                    <Link 
                      href={personalInfo.social.calendly} 
                      target="_blank"
                      className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
                    >
                      Book Consultation
                    </Link>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="self-start items-start max-w-[85%] flex gap-1 p-4 bg-surface-2 border border-border rounded-2xl rounded-tl-sm shadow-sm">
                  <span className="text-xs text-foreground-muted mr-2">AI is thinking</span>
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions & Input Area */}
            <div className="bg-background/80 backdrop-blur-md border-t border-border p-3">
              {/* Horizontally scrolling chips */}
              <div className="flex overflow-x-auto gap-1 pb-2 scrollbar-hide -mx-1 px-1">
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap px-3 py-1.5 bg-surface border border-border text-foreground-muted text-xs font-medium rounded-full hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors flex-shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  disabled
                  className="w-full bg-surface border border-border text-foreground text-sm rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-primary/50 opacity-50 cursor-not-allowed transition-colors"
                />
                <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-foreground-muted rounded-lg opacity-50">
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
