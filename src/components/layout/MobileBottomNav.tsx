"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Target, Waypoints, Calendar } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Cases", href: "/case-studies", icon: Target },
  { label: "Process", href: "/process", icon: Waypoints },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#ffffff]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-lg border-t border-black/10 dark:border-white/10 pb-safe">
      <nav className="flex items-center justify-around px-2 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                isActive 
                  ? "text-primary dark:text-primary-light" 
                  : "text-[#71717a] hover:text-[#09090b] dark:hover:text-white"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "fill-current/20")} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
        
        {/* Book Call Button */}
        <Link
          href={personalInfo.social.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full space-y-1 text-[#71717a] hover:text-primary-light transition-colors"
        >
          <div className="relative">
            <Calendar className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
          <span className="text-[10px] font-medium tracking-wide">Book</span>
        </Link>
      </nav>
    </div>
  );
}
