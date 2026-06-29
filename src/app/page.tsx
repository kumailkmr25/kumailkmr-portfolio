import { Hero } from "@/components/home/Hero";
import { ProblemSelector } from "@/components/home/ProblemSelector";
import { TrustBar } from "@/components/home/TrustBar";
import { BusinessOutcomes } from "@/components/home/BusinessOutcomes";
import { WhoIHelp } from "@/components/home/WhoIHelp";
import { BusinessProblems } from "@/components/home/BusinessProblems";
import { SolutionArchitecture } from "@/components/home/SolutionArchitecture";
import { ServicesSection } from "@/components/home/Services";
import { ROICalculator } from "@/components/home/ROICalculator";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { WorkflowVisualizer } from "@/components/home/WorkflowVisualizer";
import { Process } from "@/components/home/Process";
import { DemoCenter } from "@/components/home/DemoCenter";
import { ReadinessQuiz } from "@/components/home/ReadinessQuiz";
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
      <ProblemSelector />
      <TrustBar />
      <BusinessOutcomes />
      <WhoIHelp />
      <BusinessProblems />
      <BeforeAfter />
      <SolutionArchitecture />
      <ServicesSection />
      <WorkflowVisualizer />
      <ROICalculator />
      <CustomVsGeneric />
      <Process />
      <DemoCenter />
      <CaseStudiesPreview />
      <DemoVideos />
      <ReadinessQuiz />
      <SecurityPrivacy />
      <WhyWorkWithMeSection />
      <ArticlesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
