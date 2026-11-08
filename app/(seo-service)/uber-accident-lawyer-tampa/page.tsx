import React from "react";
import HeroHeader from "@/components/seo-service/uber-accident-lawyer-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/uber-accident-lawyer-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/uber-accident-lawyer-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/uber-accident-lawyer-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/uber-accident-lawyer-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/uber-accident-lawyer-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/uber-accident-lawyer-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/uber-accident-lawyer-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/uber-accident-lawyer-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/uber-accident-lawyer-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/uber-accident-lawyer-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/uber-accident-lawyer-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/uber-accident-lawyer-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/uber-accident-lawyer-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/uber-accident-lawyer-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/uber-accident-lawyer-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/uber-accident-lawyer-tampa/FAQSection";

export const metadata = {
  title: "Uber Accident Lawyer Tampa | Carter Injury Law",
  description:
    "Uber accidents can bring medical bills, lost wages and lasting injuries. Carter Injury Law helps Tampa victims pursue compensation for their losses.",
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
    canonical: "/uber-accident-lawyer-tampa",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function UberAccidentLawyerTampaPage() {
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

