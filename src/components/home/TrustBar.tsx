"use client";

import { Badge } from "@/components/shared/Badge";

const industries = [
  { icon: "📊", name: "CA Firms" },
  { icon: "🏥", name: "Hospitals" },
  { icon: "🎓", name: "Coaching" },
  { icon: "✈️", name: "Travel" },
  { icon: "🏢", name: "Real Estate" },
  { icon: "🍽️", name: "Restaurants" },
  { icon: "⚙️", name: "Manufacturing" },
  { icon: "💼", name: "Professional Services" },
];

export function TrustBar() {
  return (
    <div className="bg-[#f4f4f5] dark:bg-[#111111] border-y border-black/5 dark:border-white/5 py-4 overflow-hidden">
      <div className="section-container flex items-center gap-6">
        <span className="text-sm font-semibold text-[#71717a] whitespace-nowrap hidden md:block">
          Serving businesses in:
        </span>
        <div className="marquee-mask flex-1 relative flex overflow-hidden">
          <div className="marquee flex gap-4 min-w-full">
            {industries.map((ind, i) => (
              <Badge key={i} variant="gray" className="px-4 py-2 text-sm whitespace-nowrap">
                <span className="text-lg">{ind.icon}</span> {ind.name}
              </Badge>
            ))}
            {industries.map((ind, i) => (
              <Badge key={`dup-${i}`} variant="gray" className="px-4 py-2 text-sm whitespace-nowrap">
                <span className="text-lg">{ind.icon}</span> {ind.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
