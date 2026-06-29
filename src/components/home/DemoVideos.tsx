"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { demoVideos, personalInfo } from "@/lib/data";
import { Badge } from "@/components/shared/Badge";
import { Play, X } from "lucide-react";
import Link from "next/link";

export function DemoVideos() {
 const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

 return (
 <section className="section-py bg-surface ">
 <div className="section-container">
 <SectionHeading
 badge="Demos"
 title="See the Systems in Action"
 subtitle="Watch how AI automation transforms day-to-day business operations."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
 {demoVideos.map((video, i) => (
 <motion.div
 key={video.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="premium-card overflow-hidden group cursor-pointer"
 onClick={() => setSelectedVideo(video.id)}
 >
 <div className="bg-[#111111] dark:bg-[#1a1a1a] h-48 relative flex items-center justify-center">
 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
 <div className="text-5xl relative z-0 opacity-50 filter blur-[2px]">
 {video.icon}
 </div>
 <div className="absolute z-20 flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 group-hover:bg-primary group-hover:border-primary-light transition-all">
 <Play className="w-6 h-6 ml-1" fill="currentColor" />
 </div>
 <div className="absolute bottom-3 right-3 z-20">
 <Badge variant="black" className="px-2 py-0.5 text-[10px]">
 {video.duration}
 </Badge>
 </div>
 </div>
 <div className="p-5 flex flex-col gap-2 bg-white dark:bg-background">
 <div className="flex items-center justify-between mb-1">
 <Badge variant="gray">{video.industry}</Badge>
 </div>
 <h3 className="font-semibold text-lg text-foreground leading-tight">
 {video.title}
 </h3>
 <p className="text-sm text-foreground-muted line-clamp-2">
 {video.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 <AnimatePresence>
 {selectedVideo && (
 <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="absolute inset-0 bg-black/80 backdrop-blur-sm"
 onClick={() => setSelectedVideo(null)}
 />
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 className="relative w-full max-w-md bg-surface rounded-2xl shadow-2xl overflow-hidden z-10"
 >
 <div className="flex justify-between items-center p-4 border-b border-border ">
 <h3 className="font-semibold text-lg">Demo Request</h3>
 <button
 onClick={() => setSelectedVideo(null)}
 className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-500"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 <div className="p-6 flex flex-col items-center text-center gap-4">
 <div className="w-16 h-16 rounded-full bg-primary-border dark:bg-primary-bg flex items-center justify-center text-primary dark:text-primary-light mb-2">
 <Play className="w-8 h-8 ml-1" fill="currentColor" />
 </div>
 <h4 className="text-xl font-bold">Video Coming Soon</h4>
 <p className="text-foreground-muted text-sm leading-relaxed mb-4">
 This demo video is currently being recorded. If you&apos;d like to see a live demonstration of this system, send me a quick message on WhatsApp.
 </p>
 <Link
 href={personalInfo.whatsappUrl}
 target="_blank"
 className="btn-primary w-full justify-center"
 >
 Request Live Demo on WhatsApp
 </Link>
 <button
 onClick={() => setSelectedVideo(null)}
 className="mt-2 text-sm text-foreground-muted hover:text-foreground dark:hover:text-white"
 >
 Close
 </button>
 </div>
 </motion.div>
 </div>
 )}
 </AnimatePresence>
 </section>
 );
}
