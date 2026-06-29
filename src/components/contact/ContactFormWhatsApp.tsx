"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const ContactFormWhatsApp: React.FC = () => {
 const [loading, setLoading] = useState(false);
 const [formData, setFormData] = useState({
 name: "",
 businessName: "",
 service: "",
 budget: "",
 message: "",
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 
 if (!formData.name || !formData.message || !formData.service) {
 alert("Please fill in all required fields (Name, Service, Message)");
 return;
 }

 setLoading(true);

 // Simulate loading for 1 second as requested
 setTimeout(() => {
 const message = `Hi Kumail, I am interested in your services.

Name: ${formData.name}
Business: ${formData.businessName || "N/A"}
Service Required: ${formData.service}
Budget: ${formData.budget || "N/A"}
Message: ${formData.message}

Please contact me.`;

 const encodedMessage = encodeURIComponent(message);
 const whatsappUrl = `https://wa.me/916006121193?text=${encodedMessage}`;
 
 window.open(whatsappUrl, "_blank");
 setLoading(false);
 }, 1000);
 };

 return (
 <motion.form 
 onSubmit={handleSubmit}
 className="space-y-6 max-w-2xl mx-auto p-8 glass-card border-[#d4af37]/20"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-sm font-semibold text-slate-200 tracking-wide">Full Name *</label>
 <input
 required
 name="name"
 value={formData.name}
 onChange={handleChange}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white placeholder:text-gray-500"
 placeholder="John Doe"
 />
 </div>
 <div className="space-y-2">
 <label className="text-sm font-semibold text-slate-200 tracking-wide">Business Name</label>
 <input
 name="businessName"
 value={formData.businessName}
 onChange={handleChange}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white placeholder:text-gray-500"
 placeholder="Your Company"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-sm font-semibold text-slate-200 tracking-wide">Service Required *</label>
 <div className="relative">
 <select
 required
 name="service"
 value={formData.service}
 onChange={handleChange}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white appearance-none cursor-pointer"
 >
 <option value="" disabled className="bg-[#0d0d0d]">Select a service</option>
 <option value="Web Development" className="bg-[#0d0d0d]">Web Development</option>
 <option value="AI Automation" className="bg-[#0d0d0d]">AI Automation</option>
 <option value="SaaS Building" className="bg-[#0d0d0d]">SaaS Building</option>
 <option value="E-commerce" className="bg-[#0d0d0d]">E-commerce</option>
 </select>
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d4af37]">
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
 </div>
 </div>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-semibold text-slate-200 tracking-wide">Budget Range</label>
 <input
 name="budget"
 value={formData.budget}
 onChange={handleChange}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white placeholder:text-gray-500"
 placeholder="e.g. $1000 - $5000"
 />
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-semibold text-slate-200 tracking-wide">Project Details *</label>
 <textarea
 required
 name="message"
 rows={5}
 value={formData.message}
 onChange={handleChange}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-white resize-none placeholder:text-gray-500"
 placeholder="Tell me about your project..."
 />
 </div>

 <MagneticButton 
 type="submit" 
 disabled={loading}
 className="w-full py-4.5 flex items-center justify-center gap-3 text-base font-bold shadow-[0_8px_30px_rgb(212,175,55,0.1)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.25)]"
 >
 {loading ? (
 <>
 <Loader2 className="w-5 h-5 animate-spin" />
 Preparing WhatsApp...
 </>
 ) : (
 <>
 <Send className="w-5 h-5" />
 Send to WhatsApp
 </>
 )}
 </MagneticButton>
 </motion.form>
 );
};

export default ContactFormWhatsApp;
