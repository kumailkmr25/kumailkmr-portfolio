"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

// Inline SVG components for Social Icons since lucide-react version might not include them
const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
 const [showScroll, setShowScroll] = useState(false);

 useEffect(() => {
 const checkScroll = () => {
 setShowScroll(window.scrollY > 400);
 };
 window.addEventListener('scroll', checkScroll);
 return () => window.removeEventListener('scroll', checkScroll);
 }, []);

 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
 <footer className="bg-surface relative border-t border-border overflow-hidden transition-colors duration-500">
 {/* Decorative Glow */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

 <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
 
 {/* Column 1: Brand */}
 <div className="lg:pr-8">
 <Link href="/" className="inline-block text-2xl font-bold font-sora tracking-tight text-foreground mb-4 hover:text-primary transition-colors">
 Kumail Kmr<span className="text-primary">.</span>
 </Link>
 <p className="text-foreground-muted text-sm leading-relaxed mb-6 font-light">
 Helping businesses streamline operations through custom AI solutions, automation, and intelligent business systems.
 </p>
 <div className="flex items-center gap-4">
 <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-foreground-muted hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_var(--color-primary-bg)] hover:-translate-y-1">
 <Linkedin className="w-4 h-4" />
 </a>
 <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-foreground-muted hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_var(--color-primary-bg)] hover:-translate-y-1">
 <Github className="w-4 h-4" />
 </a>
 <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-foreground-muted hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_var(--color-primary-bg)] hover:-translate-y-1">
 <Mail className="w-4 h-4" />
 </a>
 <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-foreground-muted hover:bg-green-500 hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
 <MessageCircle className="w-4 h-4" />
 </a>
 </div>
 </div>

 {/* Column 2: Services */}
 <div>
 <h4 className="font-semibold text-foreground mb-6">Services</h4>
 <ul className="space-y-4">
 <li><Link href="/services/ai-support-chatbot" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />AI Customer Support</Link></li>
 <li><Link href="/services/ai-voice" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />AI Voice Agents</Link></li>
 <li><Link href="/services/whatsapp-auto" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Business Automation</Link></li>
 <li><Link href="/services/personal-ai-assistant" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Personal AI Assistant</Link></li>
 <li><Link href="/services#other" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Prompt Engineering</Link></li>
 </ul>
 </div>

 {/* Column 3: Industries */}
 <div>
 <h4 className="font-semibold text-foreground mb-6">Industries</h4>
 <ul className="space-y-4">
 <li><Link href="/industries#hospitals" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Hospitals & Clinics</Link></li>
 <li><Link href="/industries#ca-firms" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />CA Firms</Link></li>
 <li><Link href="/industries#restaurants" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Restaurants</Link></li>
 <li><Link href="/industries#real-estate" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Real Estate</Link></li>
 <li><Link href="/industries#travel" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Travel Agencies</Link></li>
 <li><Link href="/industries#professional-services" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Professional Services</Link></li>
 </ul>
 </div>

 {/* Column 4: Quick Links */}
 <div>
 <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
 <ul className="space-y-4">
 <li><Link href="/about" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />About the Consultant</Link></li>
 <li><Link href="/case-studies" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Portfolio & Case Studies</Link></li>
 <li><Link href="/articles" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Articles & Insights</Link></li>
 <li><Link href="/contact" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Contact Me</Link></li>
 <li><a href={personalInfo.social.calendly} target="_blank" rel="noreferrer" className="text-foreground-muted text-sm hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />Book Consultation</a></li>
 </ul>
 </div>

 </div>

 {/* Bottom Bar */}
 <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="text-center md:text-left">
 <p className="text-foreground-muted text-sm">
 &copy; {new Date().getFullYear()} Kumail Kmr. Designed for Business Problem Solving.
 </p>
 </div>
 
 <div className="flex items-center gap-6">
 <Link href="#" className="text-foreground-muted text-sm hover:text-foreground transition-colors">Privacy Policy</Link>
 <Link href="#" className="text-foreground-muted text-sm hover:text-foreground transition-colors">Terms of Service</Link>
 </div>
 </div>

 </div>

 {/* Back to Top Button */}
 <button 
 onClick={scrollToTop}
 className={`fixed bottom-24 left-6 md:bottom-8 md:left-8 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary shadow-lg transition-all duration-300 z-50 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
 aria-label="Back to top"
 >
 <ArrowUp className="w-5 h-5" />
 </button>

 </footer>
 );
}
