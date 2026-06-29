import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { VisitorExperienceProvider } from "@/components/experience/VisitorExperienceContext";
import { IntroAnimation } from "@/components/experience/IntroAnimation";
import { NotificationCenter } from "@/components/experience/NotificationCenter";
import { WelcomeBanner } from "@/components/experience/WelcomeBanner";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { FloatingDesktopCTA } from "@/components/layout/FloatingDesktopCTA";
import { SmartSectionNav } from "@/components/layout/SmartSectionNav";
import { AIAssistantWidget } from "@/components/experience/AIAssistantWidget";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumail Kmr | AI Automation & Business Systems Specialist",
  description:
    "I help businesses eliminate repetitive work, automate customer communication, and improve operations through AI-powered systems. Serving CA Firms, Hospitals, Coaching Institutes, Travel Agencies, Real Estate, and more.",
  keywords: [
    "AI automation",
    "business automation",
    "WhatsApp automation",
    "AI systems consultant",
    "business consultant India",
    "Kumail Kmr",
    "CA firm automation",
    "hospital appointment automation",
    "workflow automation",
    "AI business solutions",
    "lead management automation",
    "document collection automation",
  ],
  openGraph: {
    title: "Kumail Kmr | AI Automation & Business Systems Specialist",
    description:
      "Helping businesses eliminate repetitive work and build smarter operations through AI-powered systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} antialiased selection:bg-primary/20 selection:text-primary dark:selection:bg-primary/30 min-h-screen flex flex-col overflow-x-hidden`}>
        <ThemeProvider>
          <VisitorExperienceProvider>
            <IntroAnimation />
            <WelcomeBanner />
            <Navbar />
            <main className="flex-1 pt-20 pb-16 md:pb-0">{children}</main>
            <Footer />
            <MobileBottomNav />
            <StickyMobileCTA />
            <FloatingDesktopCTA />
            <SmartSectionNav />
            <AIAssistantWidget />
            <NotificationCenter />
            <Toaster position="top-center" />
          </VisitorExperienceProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
