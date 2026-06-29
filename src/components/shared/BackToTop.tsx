"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
 const [show, setShow] = useState(false);
 useEffect(() => {
 const handler = () => setShow(window.scrollY > 500);
 window.addEventListener("scroll", handler);
 return () => window.removeEventListener("scroll", handler);
 }, []);
 if (!show) return null;
 return (
 <button
 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
 className="fixed bottom-5 left-5 z-50 rounded-full bg-[#6C63FF] p-3 text-white shadow-lg"
 aria-label="Back to top"
 >
 <ChevronUp className="h-5 w-5" />
 </button>
 );
}
