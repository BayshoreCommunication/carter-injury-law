import React from "react";
import HeroHeader from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/FAQSection";

export const metadata = {
  title: "Tampa Uber and Lyft Accident Lawyer | Carter Injury Law",
  description:
    "Act quickly after an Uber or Lyft accident in Tampa or Largo. Carter Injury Law helps victims pursue compensation for various damages.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "/tampa-uber-lyft-accident-lawyer",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function TampaUberLyftAccidentLawyerPage() {
  return (
    <main className="w-full">
      <HeroHeader />
      <CommonCausesSection />
      <WhyRightLawyerSection />
      <InvestigationProcessSection />
      <FiveStepProcessSection />
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

