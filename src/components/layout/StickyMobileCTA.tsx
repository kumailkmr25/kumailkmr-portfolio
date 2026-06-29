"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { MessageCircle, Calendar } from "lucide-react";

export function StickyMobileCTA() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 // Show after scrolling past the hero section (e.g. 500px)
 if (window.scrollY > 300) {
 setIsVisible(true);
 } else {
 setIsVisible(false);
 }
 };
 
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <AnimatePresence>
 {isVisible && (
 <motion.div
 initial={{ y: 100 }}
 animate={{ y: 0 }}
 exit={{ y: 100 }}
 transition={{ type: "spring", stiffness: 260, damping: 20 }}
 className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden bg-white/80 dark:bg-background/80 backdrop-blur-xl border-t border-border-strong shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
 >
 <div className="flex items-center gap-3 pb-safe">
 <Link 
 href={personalInfo.whatsappUrl} 
 target="_blank" 
 rel="noopener noreferrer"
 className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-xl shadow-md active:scale-95 transition-transform"
 >
 <MessageCircle className="w-6 h-6" />
 </Link>
 
 <Link
 href={personalInfo.social.calendly}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-white font-semibold text-sm rounded-xl shadow-lg active:scale-95 transition-transform"
 >
 <Calendar className="w-4 h-4" /> Book Strategy Session
 </Link>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
