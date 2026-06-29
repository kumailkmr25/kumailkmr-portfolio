import * as React from "react";
import { cn } from "@/lib/utils";

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
 return (
 <select
 {...props}
 className={cn(
 "h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#6C63FF]",
 props.className,
 )}
 />
 );
}
