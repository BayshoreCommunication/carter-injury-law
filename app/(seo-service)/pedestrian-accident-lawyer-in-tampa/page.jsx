import React from "react";
import HeroHeader from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/pedestrian-accident-lawyer-in-tampa/FAQSection";

export const metadata = {
  title: "Pedestrian Accident Lawyer in Tampa | Protect Your Rights",
  description:
    "Pedestrian accident lawyer serving Tampa, helping injured victims pursue compensation for medical expenses, lost wages, and long-term recovery.",
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
    canonical: "/pedestrian-accident-lawyer-in-tampa",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function PedestrianAccidentLawyerInTampaPage() {
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
