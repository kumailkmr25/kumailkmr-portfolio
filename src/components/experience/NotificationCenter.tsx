"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { useVisitorExperience, NotificationItem } from "./VisitorExperienceContext";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

// How long a toast stays on screen automatically
const TOAST_DURATION = 4000;

export function NotificationCenter() {
  const { 
    notifications, 
    unreadCount, 
    soundEnabled, 
    toggleSound, 
    markAllAsRead, 
    addNotification, 
    showIntro 
  } = useVisitorExperience();
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<NotificationItem | null>(null);

  // Sequence Logic
  useEffect(() => {
    // Wait until intro is done
    if (showIntro) return;

    let welcomeTimer: NodeJS.Timeout;
    let offerTimer: NodeJS.Timeout;
    let toastHideTimer: NodeJS.Timeout;

    const checkTimers = () => {
      const now = Date.now();
      
      const lastWelcome = parseInt(localStorage.getItem("kk_last_welcome") || "0", 10);
      const lastOffer = parseInt(localStorage.getItem("kk_last_offer") || "0", 10);
      
      const ONE_DAY = 24 * 60 * 60 * 1000;
      const SEVEN_DAYS = 7 * ONE_DAY;

      // 1. Welcome Toast
      if (now - lastWelcome > ONE_DAY) {
        welcomeTimer = setTimeout(() => {
          const welcomeNotif = {
            type: "welcome" as const,
            title: "👋 Welcome!",
            message: "Explore AI-powered business solutions designed to reduce manual work, improve customer experience, and streamline business operations.",
            ctaText: "View Services",
            ctaHref: "/services",
          };
          addNotification(welcomeNotif);
          // Set as active toast to pop up
          setActiveToast({ ...welcomeNotif, id: 'temp-welcome', timestamp: now, read: false });
          localStorage.setItem("kk_last_welcome", now.toString());

          // Hide toast after 4s
          toastHideTimer = setTimeout(() => setActiveToast(null), TOAST_DURATION);

        }, 1500); // 1.5s after intro finishes
      }

      // 2. Offer Toast
      if (now - lastOffer > SEVEN_DAYS) {
        offerTimer = setTimeout(() => {
          const offerNotif = {
            type: "offer" as const,
            title: "🎁 Free Business Automation Audit",
            message: "Book a complimentary strategy session and receive a personalized automation assessment for your business.",
            ctaText: "Book Now",
            ctaHref: personalInfo.social.calendly,
          };
          addNotification(offerNotif);
          setActiveToast({ ...offerNotif, id: 'temp-offer', timestamp: now, read: false });
          localStorage.setItem("kk_last_offer", now.toString());

          toastHideTimer = setTimeout(() => setActiveToast(null), TOAST_DURATION);

        }, 1500 + TOAST_DURATION + 5000); // 5 seconds AFTER welcome toast disappears
      }
    };

    checkTimers();

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(offerTimer);
      clearTimeout(toastHideTimer);
    };
    // Provide context and props down, removing the outer floating div for the bell icon
    // so it can sit inline in the Navbar.
  }, [showIntro, addNotification]);

  return (
    <>
      {/* Active Toast Notification */}
      <AnimatePresence>
        {activeToast && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: activeToast.type === 'welcome' ? 0 : 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: activeToast.type === 'welcome' ? 0 : 50 }}
            className={
              activeToast.type === 'welcome'
                ? "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                : "fixed top-24 right-6 z-50 w-80 md:w-96"
            }
          >
            <div className={
              activeToast.type === 'welcome'
                ? "w-full max-w-md bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
                : "bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden relative w-full"
            }>
              <div className="p-6 md:p-8">
                <h4 className="font-bold text-[#09090b] dark:text-white text-xl flex items-center gap-2 mb-3">
                  {activeToast.title}
                </h4>
                {activeToast.type !== 'welcome' && (
                  <button 
                    onClick={() => setActiveToast(null)}
                    className="absolute top-4 right-4 text-[#71717a] hover:text-[#09090b] dark:hover:text-white transition-colors p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <p className="text-[#71717a] leading-relaxed mb-6">
                  {activeToast.message}
                </p>
                <div className="flex gap-3">
                  {activeToast.ctaHref && (
                    <Link 
                      href={activeToast.ctaHref}
                      target={activeToast.ctaHref.includes("http") ? "_blank" : undefined}
                      onClick={() => setActiveToast(null)}
                      className="flex-1 bg-[#09090b] dark:bg-white text-white dark:text-[#09090b] text-center py-3 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      {activeToast.ctaText}
                    </Link>
                  )}
                  <Link 
                    href={personalInfo.social.calendly}
                    target="_blank"
                    onClick={() => setActiveToast(null)}
                    className="flex-1 bg-[#f4f4f5] dark:bg-[#111111] text-[#09090b] dark:text-white text-center py-3 text-sm font-semibold rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-black/5 dark:border-white/5"
                  >
                    Book Session
                  </Link>
                </div>
                {activeToast.type === 'welcome' && (
                  <div className="mt-6 flex justify-center border-t border-black/5 dark:border-white/5 pt-4">
                    <button 
                      onClick={() => setActiveToast(null)}
                      className="text-[#71717a] hover:text-[#09090b] dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <X className="w-4 h-4" /> Close
                    </button>
                  </div>
                )}
              </div>
              {/* Progress indicator */}
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: TOAST_DURATION / 1000, ease: "linear" }}
                className="h-1 bg-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bell Icon for Navbar */}
      <div className="relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) markAllAsRead();
          }}
          className="w-10 h-10 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative group"
        >
          <Bell className="w-5 h-5 text-[#09090b] dark:text-white group-hover:text-primary transition-colors" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white dark:border-[#0a0a0a]">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-3 right-0 w-80 md:w-96 bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px] z-50 origin-top-right"
            >
              {/* Header */}
              <div className="p-4 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-[#f4f4f5]/50 dark:bg-[#111111]/50">
                <h3 className="font-bold text-[#09090b] dark:text-white flex items-center gap-2">
                  <Bell className="w-4 h-4" /> Notifications
                </h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleSound}
                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-[#71717a]"
                    title={soundEnabled ? "Disable Sounds" : "Enable Sounds"}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-[#71717a]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Notification List */}
              <div className="overflow-y-auto p-4 flex flex-col gap-3 flex-1 custom-scrollbar">
                {notifications.length === 0 ? (
                  <div className="text-center py-8 text-[#71717a] text-sm">
                    No new notifications.
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className={`p-4 rounded-xl border ${!notif.read ? 'bg-primary/5 border-primary/20' : 'bg-[#f4f4f5] dark:bg-[#111111] border-black/5 dark:border-white/5'}`}
                    >
                      <h4 className="font-bold text-[#09090b] dark:text-white text-sm mb-1">{notif.title}</h4>
                      <p className="text-xs text-[#71717a] mb-3 leading-relaxed">{notif.message}</p>
                      {notif.ctaHref && (
                        <Link 
                          href={notif.ctaHref}
                          target={notif.ctaHref.includes("http") ? "_blank" : undefined}
                          className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {notif.ctaText} <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
