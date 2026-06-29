"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
 return (
 <div className="fixed bottom-5 right-5 z-[9999] hidden sm:block">
 <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
 <Link
 href="https://wa.me/916006121193"
 target="_blank"
 rel="noreferrer"
 aria-label="Chat on WhatsApp"
 className="group relative flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
 >
 <MessageCircle className="h-7 w-7" />
 <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 transition group-hover:opacity-100">
 💬 Chat on WhatsApp
 </span>
 </Link>
 <p className="mt-2 text-center text-xs font-semibold text-[#25D366]">Let&apos;s Talk</p>
 </div>
 );
}
