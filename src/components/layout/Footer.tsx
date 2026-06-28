"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] text-white pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className="text-2xl font-bold tracking-tight text-white mb-1"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Kumail Kmr
              </h2>
              <p className="text-[#059669] text-xs font-semibold uppercase tracking-widest">
                AI Automation & Business Systems
              </p>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-sm">
              Helping businesses eliminate repetitive work and build smarter operations through AI-powered systems.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#a1a1aa] mt-2">
              <span>{personalInfo.locationEmoji}</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Solutions</h3>
            <ul className="flex flex-col gap-3">
              {[
                "AI Customer Support",
                "WhatsApp Automation",
                "Lead Capture System",
                "Appointment Booking",
                "Document Collection",
                "Business Dashboard",
              ].map((solution) => (
                <li key={solution}>
                  <Link
                    href="/services"
                    className="text-[#a1a1aa] text-sm hover:text-white transition-all hover:translate-x-1 inline-block"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Industries</h3>
            <ul className="flex flex-col gap-3">
              {[
                "CA Firms",
                "Hospitals & Clinics",
                "Coaching Institutes",
                "Travel Agencies",
                "Real Estate",
                "Restaurants & Cafés",
              ].map((industry) => (
                <li key={industry}>
                  <Link
                    href="/industries"
                    className="text-[#a1a1aa] text-sm hover:text-white transition-all hover:translate-x-1 inline-block"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] text-sm hover:text-[#25D366] transition-colors"
              >
                WhatsApp (Fastest Response)
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#a1a1aa] text-sm hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] text-sm flex items-center gap-2 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <Link href={personalInfo.social.calendly} target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#059669] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#047857] hover:shadow-[0_4px_16px_rgba(5,150,105,0.2)] w-fit"
            >
              Book a Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#52525b] text-sm">
            © {currentYear} Kumail Kmr. All rights reserved.
          </p>
          <p className="text-[#52525b] text-sm">
            Building smarter business systems with AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
