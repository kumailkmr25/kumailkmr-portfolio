import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { MediaShowcase, MediaItem } from "@/components/services/MediaShowcase";
import { Check, Target, Building2, Cpu, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Property Videos & Advertisement Creation | Kumail Kmr",
  description: "Transform ordinary property photos, products, and business ideas into premium cinematic AI videos and advertisements using advanced AI-powered creative workflows.",
  keywords: "AI Property Video, AI Real Estate Video, AI Advertisement Creation, AI Marketing Videos, Cinematic AI Videos, AI Commercial Production, AI Product Videos, AI Promotional Videos",
};

// Placeholder portfolio items for the showcase
const portfolioItems: MediaItem[] = [
  {
    id: "m1",
    type: "image",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    title: "Luxury Villa Showcase",
    category: "Real Estate",
  },
  {
    id: "m2",
    type: "image",
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    title: "Culinary Experience Promo",
    category: "Restaurant",
  },
  {
    id: "m3",
    type: "image",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    title: "Watch Product Commercial",
    category: "Product Ad",
  },
  {
    id: "m4",
    type: "image",
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    title: "Modern Apartment Tour",
    category: "Real Estate",
  },
  {
    id: "m5",
    type: "image",
    url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
    title: "Boutique Hotel Cinematic",
    category: "Travel & Hospitality",
  },
  {
    id: "m6",
    type: "image",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    title: "Sneaker Drop Teaser",
    category: "Social Media Reel",
  }
];

const industries = [
  "Real Estate Agencies", "Property Developers", "Builders", 
  "Interior Designers", "Restaurants & Cafés", "Hotels & Resorts", 
  "Travel Agencies", "Retail Stores", "E-commerce Brands", 
  "Fashion Brands", "Automobile Dealers", "Luxury Brands", "Healthcare & Clinics"
];

const outcomes = [
  "Premium brand presentation",
  "Higher engagement on social media",
  "Better-performing marketing campaigns",
  "Faster content production",
  "More professional property and product showcases",
  "Increased customer attention"
];

export default function AiVideoCreationPage() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] min-h-screen pt-32 pb-16">
      
      {/* Hero Section */}
      <section className="section-container relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold tracking-wide mb-6">
            <Cpu className="w-4 h-4" /> AI Creative Workflows
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#09090b] dark:text-white mb-6">
            AI Property Videos & Advertisement Creation
          </h1>
          <p className="text-lg md:text-xl text-[#71717a] leading-relaxed">
            Transform ordinary property photos, products, and business ideas into premium cinematic AI videos and advertisements using advanced AI-powered creative workflows. 
            Designed for businesses that want to capture attention, strengthen their brand image, and generate more inquiries through high-quality visual content.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="section-container mt-24">
        <SectionHeading
          title="Project Showcase"
          subtitle="Explore recent cinematic marketing videos, property showcases, and commercial ads."
        />
        <div className="mt-12">
          <MediaShowcase items={portfolioItems} />
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="section-container mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Problems & Tech */}
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] dark:bg-[#111111] flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-[#09090b] dark:text-white">The Business Problem</h2>
              </div>
              <p className="text-[#71717a] leading-relaxed">
                Many businesses struggle to create high-quality marketing videos because traditional production is expensive, time-consuming, and requires large teams. This service helps businesses create premium advertisements quickly, produce cinematic marketing videos at a lower cost, and improve brand perception instantly.
              </p>
            </div>

            <div className="premium-card p-8 bg-[#f4f4f5] dark:bg-[#111111]">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-[#09090b] dark:text-white">Business Outcomes</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-[#71717a]">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Industries */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] dark:bg-[#111111] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-[#09090b] dark:text-white">Ideal Industries</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-[#71717a] text-sm bg-white dark:bg-[#0a0a0a]">
                  {ind}
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-black/10 dark:border-white/10">
              <h3 className="text-xl font-bold text-[#09090b] dark:text-white mb-4">Under The Hood</h3>
              <p className="text-[#71717a] leading-relaxed text-sm">
                Powered by advanced AI creative workflows (including Higgsfield AI), combined with professional editing and commercial storytelling techniques. The technology stays invisible—our focus remains on delivering pure marketing value and driving inquiries for your business.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA */}
      <div className="mt-32">
        <CTA 
          title="Ready to Elevate Your Brand?"
          subtitle="Let's discuss how we can create cinematic marketing assets for your properties or products."
          buttonText="Discuss Your Project"
        />
      </div>

    </main>
  );
}
