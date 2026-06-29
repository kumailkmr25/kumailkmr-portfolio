import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedDiv } from "@/components/shared/AnimatedDiv";

const items = [
 { icon: "⚡", title: "Fast Delivery", description: "Projects delivered 2x faster using AI-powered workflow and modern tools." },
 { icon: "🎯", title: "Business Focused", description: "I solve business problems. Every decision is focused on ROI and growth." },
 { icon: "🤖", title: "AI Automation Expert", description: "I automate operations so you can scale without hiring more staff." },
 { icon: "📞", title: "Always Reachable", description: "WhatsApp, email, or call. Fast responses and clear updates.", sub: "Available 24/7" },
];

export function WhyHireMe() {
 return (
 <section className="premium-section py-8">
 <div className="container mx-auto px-4">
 <SectionHeading title="Why Clients Choose Kumail" center />
 <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
 {items.map((item, i) => (
 <AnimatedDiv key={item.title} delay={i * 0.08}>
 <Card className="group p-6 h-full flex flex-col items-start relative overflow-hidden z-10">
 <div className="absolute inset-0 bg-linear-to-tr from-[rgba(212,175,55,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
 <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-500">
 <p className="text-2xl">{item.icon}</p>
 </div>
 <h3 className="text-lg font-semibold tracking-wide text-white">{item.title}</h3>
 <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed grow">{item.description}</p>
 {item.sub ? <p className="mt-4 text-sm text-[rgba(212,175,55,0.9)] font-medium bg-[rgba(212,175,55,0.1)] px-3 py-1 rounded-full border border-[rgba(212,175,55,0.2)]">{item.sub}</p> : null}
 </Card>
 </AnimatedDiv>
 ))}
 </div>
 </div>
 </section>
 );
}
