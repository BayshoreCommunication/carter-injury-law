import React from "react";
import HeroHeader from "@/components/seo-service/pedestrian-accidents-lawyer-largo/HeroHeader";
import CommonCausesSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/FinalCTASection";
import FAQSection from "@/components/seo-service/pedestrian-accidents-lawyer-largo/FAQSection";

export const metadata = {
  title: "Pedestrian Accidents Lawyer Largo | Recover After a Serious Injury",
  description:
    "Pedestrian accidents lawyer in Largo providing legal representation for victims seeking compensation after crashes caused by negligent drivers.",
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
    canonical: "/pedestrian-accidents-lawyer-largo",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function PedestrianAccidentsLawyerLargoPage() {
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
