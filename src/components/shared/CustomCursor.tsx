"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
 const [pos, setPos] = useState({ x: 0, y: 0 });

 useEffect(() => {
 const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
 window.addEventListener("mousemove", move);
 return () => window.removeEventListener("mousemove", move);
 }, []);

 return (
 <div
 className="pointer-events-none fixed z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C63FF]/40 blur-md lg:block"
 style={{ left: pos.x, top: pos.y }}
 />
 );
}
