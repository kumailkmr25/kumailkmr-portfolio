"use client";

import { cn } from "@/lib/utils";

export type BadgeVariant =
 | "emerald"
 | "gray"
 | "black"
 | "blue"
 | "amber"
 | "purple";

interface BadgeProps {
 children: React.ReactNode;
 variant?: BadgeVariant;
 className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
 emerald:
 "bg-primary-bg dark:bg-primary-bg text-primary dark:text-primary-light border border-primary-border dark:border-emerald-800",
 gray: "bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 ",
 black: "bg-black text-white dark:bg-white dark:text-black border border-transparent",
 blue: "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
 amber:
 "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
 purple:
 "bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
 return (
 <span
 className={cn(
 "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
 variantClasses[variant],
 className
 )}
 >
 {children}
 </span>
 );
}
