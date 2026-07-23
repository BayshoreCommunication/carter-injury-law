import React from "react";
import HeroHeader from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-wrongful-death-car-accident-lawyer/FAQSection";


export const metadata = {
  title: "Tampa Wrongful Death & Car Accident Lawyer | Carter Injury Law",
  description:
    "Injured in a car accident or lost a loved one in Tampa? Our experienced personal injury and wrongful death lawyers are here to fight for the compensation you deserve. Get a free consultation today.",
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
    canonical: "/tampa-wrongful-death-car-accident-lawyer",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function TampaWrongfulDeathCarAccidentPage() {
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
