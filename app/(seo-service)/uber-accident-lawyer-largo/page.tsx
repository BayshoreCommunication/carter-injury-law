import React from "react";
import HeroHeader from "@/components/seo-service/uber-accident-lawyer-largo/HeroHeader";
import CommonCausesSection from "@/components/seo-service/uber-accident-lawyer-largo/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/uber-accident-lawyer-largo/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/uber-accident-lawyer-largo/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/uber-accident-lawyer-largo/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/uber-accident-lawyer-largo/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/uber-accident-lawyer-largo/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/uber-accident-lawyer-largo/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/uber-accident-lawyer-largo/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/uber-accident-lawyer-largo/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/uber-accident-lawyer-largo/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/uber-accident-lawyer-largo/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/uber-accident-lawyer-largo/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/uber-accident-lawyer-largo/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/uber-accident-lawyer-largo/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/uber-accident-lawyer-largo/FinalCTASection";
import FAQSection from "@/components/seo-service/uber-accident-lawyer-largo/FAQSection";

export const metadata = {
  title: "Uber Accident Lawyer Largo | Carter Injury Law",
  description:
    "Disputed liability can complicate Uber accident claims in Largo. Carter Injury Law helps injured victims pursue fair compensation for their losses.",
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
    canonical: "/uber-accident-lawyer-largo",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function UberAccidentLawyerLargoPage() {
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

