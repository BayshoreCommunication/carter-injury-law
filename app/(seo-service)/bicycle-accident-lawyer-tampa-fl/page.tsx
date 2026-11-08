import React from "react";
import HeroHeader from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/HeroHeader";
import CommonCausesSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/FinalCTASection";
import FAQSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/FAQSection";

export const metadata = {
  title: "Bicycle Accident Lawyer Tampa FL | Carter Injury Law",
  description:
    "Carter Injury Law represents injured cyclists in Tampa, handling bicycle accident claims and insurance negotiations. Schedule a free consultation.",
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
    canonical: "/bicycle-accident-lawyer-tampa-fl",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function BicycleAccidentLawyerTampaFlPage() {
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

