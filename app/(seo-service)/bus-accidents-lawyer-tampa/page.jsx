import React from "react";
import HeroHeader from "@/components/seo-service/tampa-bus-accident-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-bus-accident-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-bus-accident-lawyer/WhyRightLawyerSection";
import WhoCanFileSection from "@/components/seo-service/tampa-bus-accident-lawyer/WhoCanFileSection";
import MistakesSection from "@/components/seo-service/tampa-bus-accident-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-bus-accident-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-bus-accident-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-bus-accident-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-bus-accident-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-bus-accident-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-bus-accident-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-bus-accident-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-bus-accident-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-bus-accident-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-bus-accident-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-bus-accident-lawyer/FAQSection";

export const metadata = {
  title: "Tampa Bus Accident Lawyer | Commercial Transit Injury Claims",
  description:
    "Injured in a bus crash? An experienced Tampa bus accident lawyer at Carter Injury Law holds negligent transit authorities and companies accountable. Free evaluation.",
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
    canonical: "/tampa-bus-accident-lawyer",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function TampaBusAccidentPage() {
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
