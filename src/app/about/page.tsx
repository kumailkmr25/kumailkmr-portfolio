import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MyApproach } from "@/components/about/MyApproach";
import { Outcomes } from "@/components/about/Outcomes";
import { IndustryGrid } from "@/components/about/IndustryGrid";
import { CoreExpertise } from "@/components/about/CoreExpertise";
import { ProcessTimeline } from "@/components/about/ProcessTimeline";
import { TechEcosystem } from "@/components/about/TechEcosystem";
import { WhyChooseMe } from "@/components/about/WhyChooseMe";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | Kumail Kmr - AI Automation Specialist",
  description: "Learn how I design and build custom AI-powered systems that reduce manual work and help businesses scale.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Introduction */}
      <AboutHero />
      
      {/* 2. My Approach */}
      <MyApproach />
      
      {/* 3. Outcomes */}
      <Outcomes />
      
      {/* 4. Industries */}
      <IndustryGrid />
      
      {/* 5. Core Expertise */}
      <CoreExpertise />
      
      {/* 6. Process Timeline */}
      <ProcessTimeline />
      
      {/* 7. Technology Ecosystem */}
      <TechEcosystem />
      
      {/* 8. Why Choose Me */}
      <WhyChooseMe />
      
      {/* 9. FAQs */}
      <AboutFAQ />
      
      {/* 10. CTA */}
      <AboutCTA />
    </main>
  );
}
