"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type NotificationType = "welcome" | "offer" | "update";

export interface NotificationItem {
 id: string;
 type: NotificationType;
 title: string;
 message: string;
 timestamp: number;
 read: boolean;
 ctaText?: string;
 ctaHref?: string;
}

interface VisitorExperienceContextType {
 notifications: NotificationItem[];
 unreadCount: number;
 soundEnabled: boolean;
 toggleSound: () => void;
 markAllAsRead: () => void;
 addNotification: (notification: Omit<NotificationItem, "id" | "timestamp" | "read">) => void;
 playNotificationSound: () => void;
 showIntro: boolean;
 setShowIntro: (val: boolean) => void;
}

const VisitorExperienceContext = createContext<VisitorExperienceContextType | undefined>(undefined);

// Web Audio API helper for a premium, soft "pop" sound
let audioContext: AudioContext | null = null;

const playSoftPop = () => {
 try {
 if (!audioContext) {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
 }
 if (audioContext.state === 'suspended') {
 audioContext.resume();
 }

 const osc = audioContext.createOscillator();
 const gainNode = audioContext.createGain();

 osc.type = "sine";
 // Soft high-pitched bell tone
 osc.frequency.setValueAtTime(800, audioContext.currentTime);
 osc.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);

 // Attack and decay
 gainNode.gain.setValueAtTime(0, audioContext.currentTime);
 gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.02);
 gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

 osc.connect(gainNode);
 gainNode.connect(audioContext.destination);

 osc.start(audioContext.currentTime);
 osc.stop(audioContext.currentTime + 0.5);
 } catch {
 // Ignore audio errors (e.g. strict autoplay policy before interaction)
 }
};

export const VisitorExperienceProvider = ({ children }: { children: React.ReactNode }) => {
 const [notifications, setNotifications] = useState<NotificationItem[]>([]);
 const [soundEnabled, setSoundEnabled] = useState(true);
 const [showIntro, setShowIntro] = useState(false);
 
 // Interactions tracking to allow audio
 const [hasInteracted, setHasInteracted] = useState(false);

 useEffect(() => {
 // Load preferences from localStorage
 const savedSound = localStorage.getItem("kk_sound_enabled");
 if (savedSound !== null) {
 // eslint-disable-next-line react-hooks/set-state-in-effect
 setSoundEnabled(savedSound === "true");
 }

 const savedNotifications = localStorage.getItem("kk_notifications");
 if (savedNotifications) {
 try {
 setNotifications(JSON.parse(savedNotifications));
 } catch {
 // ignore
 }
 }

 // Always show intro on refresh
 setShowIntro(true);

 const handleInteraction = () => setHasInteracted(true);
 window.addEventListener("click", handleInteraction, { once: true });
 window.addEventListener("keydown", handleInteraction, { once: true });
 window.addEventListener("scroll", handleInteraction, { once: true });

 return () => {
 window.removeEventListener("click", handleInteraction);
 window.removeEventListener("keydown", handleInteraction);
 window.removeEventListener("scroll", handleInteraction);
 };
 }, []);

 const toggleSound = () => {
 const newVal = !soundEnabled;
 setSoundEnabled(newVal);
 localStorage.setItem("kk_sound_enabled", String(newVal));
 };

 const playNotificationSound = useCallback(() => {
 if (soundEnabled && hasInteracted) {
 playSoftPop();
 }
 }, [soundEnabled, hasInteracted]);

 const addNotification = useCallback((notif: Omit<NotificationItem, "id" | "timestamp" | "read">) => {
 const newItem: NotificationItem = {
 ...notif,
 id: Math.random().toString(36).substring(7),
 timestamp: Date.now(),
 read: false,
 };
 
 setNotifications((prev) => {
 const updated = [newItem, ...prev].slice(0, 20); // Keep last 20
 localStorage.setItem("kk_notifications", JSON.stringify(updated));
 return updated;
 });

 playNotificationSound();
 }, [playNotificationSound]);

 const markAllAsRead = () => {
 setNotifications((prev) => {
 const updated = prev.map(n => ({ ...n, read: true }));
 localStorage.setItem("kk_notifications", JSON.stringify(updated));
 return updated;
 });
 };

 const unreadCount = notifications.filter((n) => !n.read).length;

 return (
 <VisitorExperienceContext.Provider
 value={{
 notifications,
 unreadCount,
 soundEnabled,
 toggleSound,
 markAllAsRead,
 addNotification,
 playNotificationSound,
 showIntro,
 setShowIntro,
 }}
 >
 {children}
 </VisitorExperienceContext.Provider>
 );
};

export const useVisitorExperience = () => {
 const context = useContext(VisitorExperienceContext);
 if (context === undefined) {
 throw new Error("useVisitorExperience must be used within a VisitorExperienceProvider");
 }
 return context;
};
