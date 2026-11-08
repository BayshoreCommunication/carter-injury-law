import React from "react";
import HeroHeader from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/FAQSection";

export const metadata = {
  title: "North Tampa Truck Accident Lawyer | Carter Injury Law",
  description:
    "Carter Injury Law represents North Tampa truck accident victims, investigates crash evidence, handles insurance claims and pursues full compensation.",
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
    canonical: "/best-truck-accident-lawyer-north-tampa",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function BestTruckAccidentLawyerNorthTampaPage() {
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

