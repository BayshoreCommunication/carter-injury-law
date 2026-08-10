import React from "react";
import HeroHeader from "@/components/seo-service/bus-accidents-lawyers-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/bus-accidents-lawyers-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/bus-accidents-lawyers-tampa/WhyRightLawyerSection";
import WhoCanFileSection from "@/components/seo-service/bus-accidents-lawyers-tampa/WhoCanFileSection";
import MistakesSection from "@/components/seo-service/bus-accidents-lawyers-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/bus-accidents-lawyers-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/bus-accidents-lawyers-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/bus-accidents-lawyers-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/bus-accidents-lawyers-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/bus-accidents-lawyers-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/bus-accidents-lawyers-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/bus-accidents-lawyers-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/bus-accidents-lawyers-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/bus-accidents-lawyers-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/bus-accidents-lawyers-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/bus-accidents-lawyers-tampa/FAQSection";

export const metadata = {
  title: "Tampa Bus Accident Lawyer | Commercial Transit Injury Claims",
  description:
    "Injured in a bus crash? An experienced Tampa bus accident lawyer at Carter Injury Law holds negligent transit authorities and companies accountable. Free evaluation.",
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
    canonical: "/bus-accidents-lawyers-tampa",
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
