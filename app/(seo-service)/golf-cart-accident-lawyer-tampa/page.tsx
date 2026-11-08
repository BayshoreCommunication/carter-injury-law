import React from "react";
import HeroHeader from "@/components/seo-service/golf-cart-accident-lawyer-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/FAQSection";

export const metadata = {
  title: "Golf Cart Accident Lawyer Tampa | Carter Injury Law",
  description:
    "Carter Injury Law represents golf cart accident victims in Tampa, handling injury claims and insurance negotiations. Schedule a free consultation.",
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
    canonical: "/golf-cart-accident-lawyer-tampa",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function GolfCartAccidentLawyerTampaPage() {
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

