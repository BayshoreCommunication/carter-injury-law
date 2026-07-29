import React from "react";
import HeroHeader from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/HeroHeader";
import CommonCausesSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/WhyRightLawyerSection";
import WhoCanFileSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/WhoCanFileSection";
import MistakesSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/FinalCTASection";
import FAQSection from "@/components/seo-service/motorcycle-accident-lawyer-largo-fl/FAQSection";

export const metadata = {
  title: "Motorcycle Accident Lawyer Largo, FL | Free Consultation",
  description:
    "A motorcycle accident lawyer in Largo, FL helps injured riders pursue compensation for medical expenses, lost wages, and other accident-related losses.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "/motorcycle-accident-lawyer-largo-fl",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function MotorcycleAccidentLawyerLargoPage() {
  return (
    <main className="w-full">
      <HeroHeader />
      <CommonCausesSection />
      <WhyRightLawyerSection />
      <WhoCanFileSection />
      <MistakesSection />
      <DedicatedCounselSection />
      <EstablishedLegalProcessSection />
      <JusticeSecuredSection />
      <WhyChooseUsSection />
      <CompensationTypesSection />
      <ExpertValuationSection />
      <AreasWeServeSection />
      <TestimonialsSection />
      <StatuteOfLimitationsSection />
      <FinalCTASection />
      <FAQSection />
    </main>
  );
}
