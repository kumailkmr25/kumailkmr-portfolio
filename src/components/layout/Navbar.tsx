"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Palette } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useColor } from "./ColorProvider";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { NotificationCenter } from "@/components/experience/NotificationCenter";

const navItems = [
 { label: "Services", href: "/services" },
 { label: "Industries", href: "/industries" },
 { label: "Case Studies", href: "/case-studies" },
 { label: "Process", href: "/process" },
 { label: "About", href: "/about" },
 { label: "Articles", href: "/articles" },
];

export function Navbar() {
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const pathname = usePathname();
 const { resolvedTheme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const { color, cycleColor } = useColor();

 useEffect(() => {
 // eslint-disable-next-line react-hooks/set-state-in-effect
 setMounted(true);
 const onScroll = () => setScrolled(window.scrollY > 16);
 window.addEventListener("scroll", onScroll);
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 useEffect(() => {
 // eslint-disable-next-line react-hooks/set-state-in-effect
 setOpen(false);
 }, [pathname]);

 useEffect(() => {
 if (open) {
 document.body.style.overflow = "hidden";
 } else {
 document.body.style.overflow = "";
 }
 return () => {
 document.body.style.overflow = "";
 };
 }, [open]);

 return (
 <>
 <header
 className={cn(
 "fixed inset-x-0 top-0 z-50 transition-all duration-300",
 scrolled
 ? "bg-white/80 dark:bg-background/80 backdrop-blur-2xl border-b border-border shadow-md shadow-black/5 dark:shadow-white/5"
 : "bg-transparent"
 )}
 >
 <div className="section-container flex h-20 items-center justify-between">
 {/* Logo */}
 <Link href="/" className="flex flex-col leading-tight group">
 <span
 className="text-lg font-bold text-foreground tracking-tight transition-colors"
 style={{ fontFamily: "var(--font-sora), sans-serif" }}
 >
 Kumail Kmr
 </span>
 <span className="text-[11px] text-foreground-muted font-medium tracking-wide">
 AI Automation & Business Systems
 </span>
 </Link>

 {/* Desktop Nav */}
 <nav className="hidden items-center gap-8 md:flex">
 {navItems.map((item) => {
 const isActive =
 pathname === item.href ||
 (item.href !== "/" && pathname.startsWith(item.href));
 return (
 <Link
 key={item.href}
 href={item.href}
 className={cn(
 "relative text-sm font-medium transition-colors duration-200 py-1",
 isActive
 ? "text-foreground "
 : "text-foreground-muted hover:text-foreground dark:hover:text-white"
 )}
 >
 {item.label}
 {isActive && (
 <motion.span
 layoutId="nav-active"
 className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-[#059669]"
 transition={{ type: "spring", stiffness: 380, damping: 30 }}
 />
 )}
 </Link>
 );
 })}
 </nav>

 {/* Right Side */}
 <div className="flex items-center gap-3">
 {mounted && <NotificationCenter />}

 {/* Desktop Right */}
 <div className="hidden items-center gap-3 md:flex">
 {/* Theme Toggle */}
 {mounted && (
 <div className="flex gap-2">
 <button
 onClick={cycleColor}
 className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-foreground-muted hover:text-foreground dark:hover:text-white hover:bg-surface dark:hover:bg-[#111111] transition-all"
 aria-label="Cycle theme color"
 >
 <Palette className="h-4 w-4" />
 </button>
 <button
 onClick={() =>
 setTheme(resolvedTheme === "dark" ? "light" : "dark")
 }
 className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-foreground-muted hover:text-foreground dark:hover:text-white hover:bg-surface dark:hover:bg-[#111111] transition-all"
 aria-label="Toggle theme"
 >
 {resolvedTheme === "dark" ? (
 <Sun className="h-4 w-4" />
 ) : (
 <Moon className="h-4 w-4" />
 )}
 </button>
 </div>
 )}

 {/* LinkedIn */}
 <Link
 href={personalInfo.social.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-foreground-muted hover:text-[#0077b5] dark:hover:text-[#0077b5] hover:bg-surface dark:hover:bg-[#111111] transition-all"
 aria-label="LinkedIn"
 >
 <FaLinkedin className="h-4 w-4" />
 </Link>

 {/* CTA */}
 <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"
 className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-[0_4px_16px_var(--primary-bg)] active:scale-95"
 >
 Book a Consultation
 </Link>
 </div>

 {/* Mobile Hamburger */}
 <button
 className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong md:hidden"
 onClick={() => setOpen((v) => !v)}
 aria-label="Toggle menu"
 >
 {open ? (
 <X className="h-4 w-4 text-foreground " />
 ) : (
 <Menu className="h-4 w-4 text-foreground " />
 )}
 </button>
 </div>
 </div>

 {/* Mobile Drawer */}
 <AnimatePresence>
 {open && (
 <motion.div
 initial={{ opacity: 0, y: -12 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -12 }}
 transition={{ duration: 0.2, ease: "easeOut" }}
 className="absolute inset-x-0 top-full border-b border-border bg-white dark:bg-background px-6 pb-8 pt-4 md:hidden shadow-xl"
 >
 <nav className="space-y-1">
 {navItems.map((item, i) => {
 const isActive =
 pathname === item.href ||
 (item.href !== "/" && pathname.startsWith(item.href));
 return (
 <motion.div
 key={item.href}
 initial={{ opacity: 0, x: -8 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: i * 0.04 }}
 >
 <Link
 href={item.href}
 onClick={() => setOpen(false)}
 className={cn(
 "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
 isActive
 ? "bg-surface text-foreground "
 : "text-foreground-muted hover:bg-surface dark:hover:bg-[#111111] hover:text-foreground dark:hover:text-white"
 )}
 >
 {item.label}
 {isActive && (
 <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
 )}
 </Link>
 </motion.div>
 );
 })}
 </nav>

 <div className="mt-6 space-y-3 border-t border-border pt-6">
 <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"
 onClick={() => setOpen(false)}
 className="btn-primary w-full justify-center"
 >
 Book a Free Consultation
 </Link>
 <div className="flex items-center justify-between gap-3">
 <Link
 href={personalInfo.whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong py-2.5 text-sm font-medium text-foreground-muted hover:text-[#25D366] hover:border-[#25D366]/30 transition-all"
 >
 WhatsApp
 </Link>
 <Link
 href={personalInfo.social.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong py-2.5 text-sm font-medium text-foreground-muted hover:text-[#0077b5] transition-all"
 >
 LinkedIn
 </Link>
 {mounted && (
 <button
 onClick={() =>
 setTheme(resolvedTheme === "dark" ? "light" : "dark")
 }
 className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-foreground-muted transition-all hover:bg-surface dark:hover:bg-[#111111]"
 aria-label="Toggle theme"
 >
 {resolvedTheme === "dark" ? (
 <Sun className="h-4 w-4" />
 ) : (
 <Moon className="h-4 w-4" />
 )}
 </button>
 )}
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 </>
 );
}
