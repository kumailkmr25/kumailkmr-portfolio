"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
 Code, 
 Cpu, 
 BarChart3, 
 MessageSquare, 
 Database, 
 Calendar, 
 Briefcase 
} from "lucide-react";

const icons = [
 { Icon: Code, x: "5%", y: "40%", delay: 0 },
 { Icon: Cpu, x: "85%", y: "60%", delay: 1 },
 { Icon: BarChart3, x: "20%", y: "80%", delay: 2 },
 { Icon: MessageSquare, x: "75%", y: "30%", delay: 3 },
 { Icon: Database, x: "40%", y: "15%", delay: 4 },
 { Icon: Calendar, x: "60%", y: "85%", delay: 5 },
 { Icon: Briefcase, x: "90%", y: "10%", delay: 6 },
];

export const BackgroundIcons: React.FC = () => {
 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
 {icons.map((item, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0 }}
 animate={{ 
 opacity: 1,
 y: [0, -20, 0],
 rotate: [0, 10, 0],
 }}
 transition={{
 opacity: { duration: 2, delay: item.delay },
 y: { duration: 10 + i, repeat: Infinity, ease: "easeInOut" },
 rotate: { duration: 15 + i, repeat: Infinity, ease: "easeInOut" },
 }}
 className="absolute"
 style={{ left: item.x, top: item.y }}
 >
 <item.Icon size={120} strokeWidth={1} color="#d4af37" />
 </motion.div>
 ))}
 </div>
 );
};
