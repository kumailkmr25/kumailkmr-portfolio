import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ReactNode } from "react";
import {
 SiClerk,
 SiFramer,
 SiGraphql,
 SiMongodb,
 SiNextdotjs,
 SiNextdotjs as SiNextauth,
 SiNodedotjs,
 SiOpenai,
 SiPostgresql,
 SiPrisma,
 SiRazorpay,
 SiReact,
 SiShadcnui,
 SiStripe,
 SiTailwindcss,
 SiTypescript,
 SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

type Tech = { name: string; icon: ReactNode };

const row1: Tech[] = [
 { name: "Next.js", icon: <SiNextdotjs /> },
 { name: "TypeScript", icon: <SiTypescript /> },
 { name: "React", icon: <SiReact /> },
 { name: "Node.js", icon: <SiNodedotjs /> },
 { name: "PostgreSQL", icon: <SiPostgresql /> },
 { name: "Prisma", icon: <SiPrisma /> },
 { name: "MongoDB", icon: <SiMongodb /> },
 { name: "GraphQL", icon: <SiGraphql /> },
 { name: "REST API", icon: <TbApi /> },
 { name: "OpenAI", icon: <SiOpenai /> },
];

const row2: Tech[] = [
 { name: "Tailwind CSS", icon: <SiTailwindcss /> },
 { name: "Shadcn UI", icon: <SiShadcnui /> },
 { name: "Framer Motion", icon: <SiFramer /> },
 { name: "Stripe", icon: <SiStripe /> },
 { name: "Razorpay", icon: <SiRazorpay /> },
 { name: "Clerk", icon: <SiClerk /> },
 { name: "NextAuth", icon: <SiNextauth /> },
 { name: "Vercel", icon: <SiVercel /> },
 { name: "Cursor AI", icon: <SiNextdotjs /> },
 { name: "n8n", icon: <SiNodedotjs /> },
];

function MarqueeRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
 return (
 <div className="marquee-mask">
 <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
 {[...items, ...items].map((item, idx) => (
 <span key={`${item.name}-${idx}`} className="tech-pill">
 <span className="mr-2 text-base text-[#00D4FF]">{item.icon}</span>
 {item.name}
 </span>
 ))}
 </div>
 </div>
 );
}

export function TechStack() {
 return (
 <section className="premium-section py-8">
 <div className="container mx-auto space-y-6 px-4">
 <SectionHeading title="Technologies I Work With" center />
 <MarqueeRow items={row1} />
 <MarqueeRow items={row2} reverse />
 </div>
 </section>
 );
}
