"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/data";
import { Badge } from "@/components/shared/Badge";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    industry: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    toast.success("Message sent successfully! I will reply shortly.");
    setFormData({
      name: "",
      business: "",
      industry: "",
      email: "",
      whatsapp: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="bg-[#f4f4f5] dark:bg-[#111111] min-h-screen">
      <section className="section-py section-container pt-32">
        <SectionHeading
          badge="Get In Touch"
          title="Start a Conversation"
          subtitle="Have a business challenge you want to automate? Get in touch and I'll respond within 2 hours on WhatsApp."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {/* Left Column: Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Link
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-6 bg-primary-bg/50 dark:bg-primary-bg border-primary-border dark:border-primary-border hover:border-primary-light dark:hover:border-primary flex items-start gap-5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#09090b] dark:text-white mb-1">
                  WhatsApp (Fastest Response)
                </h3>
                <p className="text-primary dark:text-primary-light font-medium mb-1">
                  {personalInfo.phone}
                </p>
                <p className="text-sm text-[#71717a]">
                  Typically responds within 2 hours
                </p>
              </div>
            </Link>

            <Link
              href={`mailto:${personalInfo.email}`}
              className="premium-card p-6 bg-white dark:bg-[#0a0a0a] flex items-start gap-5 hover:border-[#09090b] dark:hover:border-white transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#f4f4f5] dark:bg-[#111111] text-[#09090b] dark:text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#09090b] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#09090b] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#09090b] dark:text-white mb-1">
                  Email
                </h3>
                <p className="text-[#09090b] dark:text-white font-medium mb-1">
                  {personalInfo.email}
                </p>
                <p className="text-sm text-[#71717a]">
                  For detailed project enquiries
                </p>
              </div>
            </Link>

            <Link
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-6 bg-white dark:bg-[#0a0a0a] flex items-start gap-5 hover:border-[#0077b5] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#f4f4f5] dark:bg-[#111111] text-[#0077b5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#09090b] dark:text-white mb-1">
                  LinkedIn
                </h3>
                <p className="text-[#09090b] dark:text-white font-medium mb-1">
                  Connect professionally
                </p>
                <p className="text-sm text-[#71717a]">
                  Latest insights and updates
                </p>
              </div>
            </Link>

            <div className="premium-card p-6 bg-white dark:bg-[#0a0a0a] flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#f4f4f5] dark:bg-[#111111] text-[#71717a] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#09090b] dark:text-white mb-1">
                  Location
                </h3>
                <p className="text-[#09090b] dark:text-white font-medium">
                  {personalInfo.location} {personalInfo.locationEmoji}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="premium-card p-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <Badge variant="emerald">Response inside 24h</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#09090b] dark:text-white">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-[#f4f4f5] dark:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#09090b] dark:text-white">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-[#f4f4f5] dark:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                    placeholder="Company Ltd"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#09090b] dark:text-white">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-[#f4f4f5] dark:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#09090b] dark:text-white">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-[#f4f4f5] dark:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#09090b] dark:text-white">Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-[#f4f4f5] dark:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm appearance-none"
                >
                  <option value="">Select Industry</option>
                  <option value="ca">CA Firm / Accounting</option>
                  <option value="hospital">Hospital / Clinic</option>
                  <option value="coaching">Coaching Institute</option>
                  <option value="travel">Travel Agency</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#09090b] dark:text-white">What is your biggest operational challenge? *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-[#f4f4f5] dark:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm resize-none"
                  placeholder="Describe your current manual processes..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center mt-2 py-3.5 text-base"
              >
                Send Message <Send className="w-4 h-4 ml-2" />
              </button>
              
              <div className="text-center mt-4">
                <Link
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  className="text-sm font-semibold emerald-text hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Or reach me directly on WhatsApp →
                </Link>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 text-center">
          <p className="text-xl md:text-2xl text-[#71717a] font-serif italic leading-relaxed">
            &quot;Most businesses I work with say the same thing after implementation: <span className="text-[#09090b] dark:text-white font-semibold">I wish I had done this sooner.</span>&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
