import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, processSteps, businessProblems, personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { FAQAccordion } from "@/components/services/FAQAccordion";
import { WorkflowTimeline } from "@/components/services/WorkflowTimeline";
import { Check, Target, Rocket, ArrowLeft, Building2, Zap, Server, Shield, BrainCircuit, Users, Award, Briefcase, MessagesSquare } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all services that don't have custom pages
export function generateStaticParams() {
  const customPages = ["ai-creative-videos", "ai-support-chatbot", "personal-ai-assistant"];
  return services
    .filter((s) => !customPages.includes(s.id))
    .map((service) => ({
      id: service.id,
    }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = services.find((s) => s.id === params.id);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Business Automation & AI Consulting`,
    description: service.description,
    keywords: `${service.title}, AI Automation, Business Workflow Automation, AI Consulting, Enterprise AI Solutions`,
    openGraph: {
      title: `${service.title} | Premium AI Solutions`,
      description: service.description,
      type: "website",
    }
  };
}

// Fallback Data for sections if not provided in data.ts
const fallbackIndustries = [
  "Hospitals", "CA Firms", "Restaurants", "Travel Agencies", 
  "Real Estate", "Retail", "Hotels", "Educational Institutions", 
  "Professional Services", "Manufacturing"
];

const fallbackTech = [
  { name: "AI Models", desc: "For natural language processing and decision making." },
  { name: "Automation Platforms", desc: "To connect disparate systems seamlessly." },
  { name: "Cloud Infrastructure", desc: "For scalable, secure, and highly available hosting." },
  { name: "Databases", desc: "To safely store and quickly retrieve business knowledge." },
  { name: "API Integrations", desc: "To pull data from your existing CRM and internal tools." }
];

const fallbackFaqs = [
  { q: "How long does implementation take?", a: "Implementation typically takes 2-4 weeks depending on the complexity of the custom integrations required." },
  { q: "Can it integrate with existing software?", a: "Yes, our solutions are built to integrate seamlessly with your existing CRMs, databases, and communication channels." },
  { q: "Is training included?", a: "Absolutely. Every deployment includes comprehensive team training and standardized operating procedures (SOPs)." },
  { q: "Can workflows be customized?", a: "Yes, every solution is bespoke. We map your exact business logic before writing a single line of code." },
  { q: "Does it support multiple users?", a: "Our solutions are built for enterprise scalability and support unlimited internal users based on your infrastructure." },
  { q: "How secure is the solution?", a: "We employ enterprise-grade encryption and secure private cloud hosting to ensure your business data is never compromised." },
  { q: "How is maintenance handled?", a: "We offer ongoing retention and maintenance packages to ensure the AI models remain updated and workflows continue functioning flawlessly." },
  { q: "Can it scale as my business grows?", a: "Yes. The architecture is explicitly designed to scale up effortlessly as your traffic and team size increases." }
];

const genericWorkflow = [
  { step: "User Interaction", desc: "Customer engages via WhatsApp, Website, or Email.", icon: "💬" },
  { step: "AI Processing", desc: "The AI agent interprets intent, extracts data, and formulates a response.", icon: "🧠" },
  { step: "Business Logic", desc: "System checks your custom rules (e.g. inventory, availability, pricing).", icon: "⚙️" },
  { step: "Database Action", desc: "CRM or database is updated automatically.", icon: "🗄️" },
  { step: "Human Handoff", desc: "If complex, the issue is seamlessly escalated to your human team with full context.", icon: "👤" }
];

const genericBenefits = [
  "Reduced manual workload and administrative overhead",
  "Improved customer satisfaction with instant responses",
  "Faster operational turnaround times",
  "Better lead conversion rates",
  "True business scalability without proportional headcount",
  "Elimination of repetitive human errors"
];

export default async function GenericServicePage(props: PageProps) {
  const params = await props.params;
  const service = services.find((s) => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  // Pick 3 related services
  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  // Structured Data Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kumail Kmr Consulting"
    },
    "description": service.description
  };

  return (
    <main className="bg-white dark:bg-[#0a0a0a] min-h-screen pt-32 pb-16">
      
      {/* Schema Injection */}
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. HERO SECTION */}
      <section className="section-container relative border-b border-black/5 dark:border-white/5 pb-20">
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-[#71717a] hover:text-[#09090b] dark:hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold tracking-wide mb-6">
            <Zap className="w-4 h-4" /> Premium Automation Service
          </div>
          <h1 className="text-4xl md:text-6xl md:leading-tight font-bold tracking-tight text-[#09090b] dark:text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-[#71717a] leading-relaxed mb-10 max-w-3xl">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={personalInfo.social.calendly} target="_blank" className="btn-primary">
              Book a Free Strategy Session
            </Link>
            <Link href={personalInfo.whatsappUrl} target="_blank" className="btn-secondary flex items-center justify-center gap-2">
              <MessagesSquare className="w-5 h-5" /> Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* 2 & 3. BUSINESS OVERVIEW & CHALLENGES */}
      <section className="section-container mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Business Overview" badge="Context" subtitle="Why this solution matters for modern enterprises." />
            <div className="mt-8 prose dark:prose-invert text-[#71717a]">
              <p>
                In today&apos;s fast-paced digital economy, relying on manual processes for {service.title.toLowerCase()} limits growth. This solution is designed for forward-thinking organizations that want to eliminate bottlenecks, scale their operations efficiently, and deliver exceptional experiences without expanding their administrative headcount.
              </p>
              <p className="mt-4">
                We focus purely on the <strong>business value</strong>—implementing invisible, reliable technology that drives measurable outcomes.
              </p>
            </div>
          </div>
          <div className="premium-card p-8 bg-[#f4f4f5] dark:bg-[#111111]">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-red-500" />
              <h3 className="font-bold text-xl text-[#09090b] dark:text-white">Common Business Challenges</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {(service.challenges || businessProblems.slice(0,5).map(bp => bp.problem)).map((challenge, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span className="text-[#71717a]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 & 5 & 6. SOLUTION, FEATURES & BENEFITS */}
      <section className="section-container mt-32">
        <SectionHeading title="Solution Overview" badge="Capabilities" subtitle="How we solve these challenges efficiently." center />
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {service.features.map((feature, i) => (
            <div key={i} className="premium-card p-6 bg-white dark:bg-[#0a0a0a]">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#09090b] dark:text-white mb-2">{feature}</h4>
              <p className="text-sm text-[#71717a]">Engineered to seamlessly integrate into your workflow, enhancing productivity and accuracy.</p>
            </div>
          ))}
        </div>

        {/* Business Benefits */}
        <div className="mt-16 bg-[#f4f4f5] dark:bg-[#111111] rounded-3xl p-8 lg:p-12 border border-black/5 dark:border-white/5">
          <h3 className="text-2xl font-bold text-[#09090b] dark:text-white mb-8 text-center">Measurable Business Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {(service.benefits || genericBenefits).map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Rocket className="w-4 h-4 text-primary" />
                </div>
                <p className="text-[#09090b] dark:text-[#a1a1aa] font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS (Workflow Timeline) */}
      <section className="section-container mt-32">
        <SectionHeading title="How It Works" badge="Architecture" subtitle="The invisible flow powering your business." center />
        <div className="mt-16">
          <WorkflowTimeline steps={service.workflow || genericWorkflow} />
        </div>
      </section>

      {/* 8 & 9. INDUSTRIES & TECH ECOSYSTEM */}
      <section className="section-container mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] dark:bg-[#111111] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-[#09090b] dark:text-white">Ideal Industries</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {fallbackIndustries.map((ind, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-[#71717a] text-sm bg-white dark:bg-[#0a0a0a]">
                  {ind}
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-8 bg-[#f4f4f5] dark:bg-[#111111]">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-xl text-[#09090b] dark:text-white">Technology Ecosystem</h3>
            </div>
            <p className="text-sm text-[#71717a] mb-6">We choose technology based strictly on business value, stability, and scale.</p>
            <ul className="flex flex-col gap-4">
              {fallbackTech.map((tech, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#09090b] dark:text-white">{tech.name}</span>
                    <p className="text-xs text-[#71717a] mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11 & 12. PROCESS & WHY CHOOSE ME */}
      <section className="section-container mt-32 bg-[#09090b] text-white rounded-3xl p-8 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Implementation Process</h2>
            <div className="flex flex-col gap-6">
              {processSteps.slice(0,5).map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary text-xl mt-1 flex-shrink-0">{step.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Choose Me</h2>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Business-First Approach</h4>
                  <p className="text-[#a1a1aa] text-sm mt-1">I don&apos;t just write code; I solve operational bottlenecks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <BrainCircuit className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Custom-Built Solutions</h4>
                  <p className="text-[#a1a1aa] text-sm mt-1">No generic cookie-cutter templates. Everything is tailored to your workflow.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Scalable Architecture</h4>
                  <p className="text-[#a1a1aa] text-sm mt-1">Built to handle 10x your current volume without breaking a sweat.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Transparent Communication</h4>
                  <p className="text-[#a1a1aa] text-sm mt-1">Clear timelines, no technical jargon, and absolute transparency.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Long-Term Support</h4>
                  <p className="text-[#a1a1aa] text-sm mt-1">I stick around to ensure the system evolves alongside your business.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section-container mt-32">
        <SectionHeading title="Frequently Asked Questions" badge="Clarity" center subtitle="Common questions regarding implementation and capability." />
        <div className="max-w-3xl mx-auto mt-16">
          <FAQAccordion faqs={service.faqs || fallbackFaqs} />
        </div>
      </section>

      {/* 13. RELATED SERVICES */}
      <section className="section-container mt-32 border-t border-black/5 dark:border-white/5 pt-32">
        <SectionHeading title="Related Services" subtitle="Explore other ways to automate your business." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {relatedServices.map((rs, i) => (
            <Link key={i} href={rs.href || `/services/${rs.id}`} className="premium-card p-6 bg-[#f4f4f5] dark:bg-[#111111] hover:border-primary/50 transition-colors group">
              <div className="text-3xl mb-4">{rs.icon}</div>
              <h4 className="font-bold text-[#09090b] dark:text-white mb-2 flex items-center justify-between">
                {rs.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">&rarr;</span>
              </h4>
              <p className="text-sm text-[#71717a] line-clamp-2">{rs.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 14. CTA */}
      <div className="mt-32">
        <CTA 
          title="Ready to Streamline Your Business Operations?"
          subtitle="Let's discuss your business challenges and explore how a tailored AI solution can improve efficiency, reduce manual work, and enhance customer experience."
          buttonText="Book a Free Strategy Session"
        />
      </div>

    </main>
  );
}
