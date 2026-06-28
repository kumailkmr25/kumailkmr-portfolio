import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { BusinessOutcomes } from "@/components/home/BusinessOutcomes";
import { WhoIHelp } from "@/components/home/WhoIHelp";
import { BusinessProblems } from "@/components/home/BusinessProblems";
import { SolutionArchitecture } from "@/components/home/SolutionArchitecture";
import { ServicesSection } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { CustomVsGeneric } from "@/components/home/CustomVsGeneric";
import { SecurityPrivacy } from "@/components/home/SecurityPrivacy";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { DemoVideos } from "@/components/home/DemoVideos";
import { WhyWorkWithMeSection } from "@/components/home/WhyWorkWithMe";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BusinessOutcomes />
      <WhoIHelp />
      <BusinessProblems />
      <SolutionArchitecture />
      <ServicesSection />
      <CustomVsGeneric />
      <Process />
      <CaseStudiesPreview />
      <DemoVideos />
      <SecurityPrivacy />
      <WhyWorkWithMeSection />
      <ArticlesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
