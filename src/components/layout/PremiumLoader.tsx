"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const messages = [
 "Initializing AI Systems...",
 "Connecting Business Workflows...",
 "Preparing Intelligent Solutions...",
 "Loading Portfolio..."
];

export function PremiumLoader() {
 const [loading, setLoading] = useState(true);
 const [msgIndex, setMsgIndex] = useState(0);

 useEffect(() => {
 // Cycle messages every 600ms
 const interval = setInterval(() => {
 setMsgIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
 }, 600);

 // Hide loader after 2.4 seconds
 const timeout = setTimeout(() => {
 setLoading(false);
 }, 2400);

 return () => {
 clearInterval(interval);
 clearTimeout(timeout);
 };
 }, []);

 return (
 <AnimatePresence>
 {loading && (
 <motion.div
 key="premium-loader"
 initial={{ opacity: 1 }}
 exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white dark:bg-background"
 >
 <div className="flex flex-col items-center gap-6">
 <motion.div
 animate={{ rotate: 360 }}
 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
 className="text-primary"
 >
 <Loader2 className="w-12 h-12" />
 </motion.div>
 <div className="h-6 relative overflow-hidden flex items-center justify-center w-64">
 <AnimatePresence mode="popLayout">
 <motion.span
 key={msgIndex}
 initial={{ y: 20, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -20, opacity: 0 }}
 transition={{ duration: 0.3 }}
 className="absolute text-sm font-medium text-foreground-muted tracking-wider uppercase text-center w-full"
 >
 {messages[msgIndex]}
 </motion.span>
 </AnimatePresence>
 </div>
 {/* Progress Bar */}
 <div className="w-48 h-1 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden mt-2">
 <motion.div 
 initial={{ width: "0%" }}
 animate={{ width: "100%" }}
 transition={{ duration: 2.2, ease: "easeInOut" }}
 className="h-full bg-primary"
 />
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}
