"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

interface MediaShowcaseProps {
  items: MediaItem[];
}

export function MediaShowcase({ items }: MediaShowcaseProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Close modal on escape key
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-black/10 dark:border-white/10 aspect-video hover:border-primary/50 transition-all"
          >
            {/* Thumbnail / Image */}
            <div className="absolute inset-0 bg-[#f4f4f5] dark:bg-[#111111] animate-pulse -z-10" />
            {(item.type === "image" || item.thumbnail) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.type === "image" ? item.url : item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <video 
                src={item.url} 
                className="w-full h-full object-cover opacity-80"
                muted
                playsInline
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Play Button for Videos */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center scale-90 group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--primary-bg)]">
                  <Play className="w-5 h-5 ml-1" />
                </div>
              </div>
            )}

            {/* Info */}
            <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-primary-light text-xs font-semibold tracking-wider uppercase mb-1 block">
                {item.category}
              </span>
              <h3 className="text-white font-bold text-lg leading-tight">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.url}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
