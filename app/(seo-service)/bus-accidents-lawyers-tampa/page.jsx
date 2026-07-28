import React from "react";
import HeroHeader from "@/components/seo-service/bus-accidents-lawyer-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/bus-accidents-lawyer-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/bus-accidents-lawyer-tampa/WhyRightLawyerSection";
import WhoCanFileSection from "@/components/seo-service/bus-accidents-lawyer-tampa/WhoCanFileSection";
import MistakesSection from "@/components/seo-service/bus-accidents-lawyer-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/bus-accidents-lawyer-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/bus-accidents-lawyer-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/bus-accidents-lawyer-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/bus-accidents-lawyer-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/bus-accidents-lawyer-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/bus-accidents-lawyer-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/bus-accidents-lawyer-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/bus-accidents-lawyer-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/bus-accidents-lawyer-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/bus-accidents-lawyer-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/bus-accidents-lawyer-tampa/FAQSection";

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
