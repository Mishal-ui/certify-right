import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SystemsSection from "@/components/home/SystemsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Certify Right | Professional Bookkeeping & Accounting",
  description:
    "Professional bookkeeping, accounting and financial support for your business. 20+ years experience. Flexible hourly and monthly plans. Oracle, SAP, QuickBooks, Xero and more.",
  alternates: {
    canonical: "https://certifyright.com.au",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <SystemsSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
