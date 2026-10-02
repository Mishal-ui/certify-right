import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import WhoWeHelpSection from "@/components/home/WhoWeHelpSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutFadiSection from "@/components/home/AboutFadiSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQPreviewSection from "@/components/home/FAQPreviewSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Certify Right | NSW Building Certification",
  description:
    "NSW Building Certification — Fast, Clear, Responsive and Done Right. CDC, Construction Certificates, Occupation Certificates, BCA compliance and building inspections across Greater Sydney and NSW. Fadi Habbouche — Registered Building Surveyor Class A3, BDC2868.",
  alternates: {
    canonical: "https://certifyright.com.au",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <AboutFadiSection />
      <HowItWorksSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CTASection />
      <FAQPreviewSection />
    </>
  );
}
