import React from "react";
import HeroHeader from "@/components/seo-service/bus-accidents-lawyer-largo/HeroHeader";
import CommonCausesSection from "@/components/seo-service/bus-accidents-lawyer-largo/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/bus-accidents-lawyer-largo/WhyRightLawyerSection";
import WhoCanFileSection from "@/components/seo-service/bus-accidents-lawyer-largo/WhoCanFileSection";
import MistakesSection from "@/components/seo-service/bus-accidents-lawyer-largo/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/bus-accidents-lawyer-largo/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/bus-accidents-lawyer-largo/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/bus-accidents-lawyer-largo/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/bus-accidents-lawyer-largo/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/bus-accidents-lawyer-largo/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/bus-accidents-lawyer-largo/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/bus-accidents-lawyer-largo/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/bus-accidents-lawyer-largo/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/bus-accidents-lawyer-largo/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/bus-accidents-lawyer-largo/FinalCTASection";
import FAQSection from "@/components/seo-service/bus-accidents-lawyer-largo/FAQSection";

export const metadata = {
  title: "Bus Accidents Lawyer Largo | Free Case Evaluation",
  description:
    "Get legal help after a bus crash in Largo. A bus accidents lawyer can protect your rights and pursue the compensation you deserve.",
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
    canonical: "/bus-accidents-lawyer-largo",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function LargoBusAccidentPage() {
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
