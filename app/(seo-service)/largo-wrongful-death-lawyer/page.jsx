import React from "react";
import HeroHeader from "@/components/seo-service/largo-wrongful-death-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/largo-wrongful-death-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/largo-wrongful-death-lawyer/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/largo-wrongful-death-lawyer/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/largo-wrongful-death-lawyer/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/largo-wrongful-death-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/largo-wrongful-death-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/largo-wrongful-death-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/largo-wrongful-death-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/largo-wrongful-death-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/largo-wrongful-death-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/largo-wrongful-death-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/largo-wrongful-death-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/largo-wrongful-death-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/largo-wrongful-death-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/largo-wrongful-death-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/largo-wrongful-death-lawyer/FAQSection";

export const metadata = {
  title: "Largo Wrongful Death Lawyer | Compassionate Legal Guidance",
  description:
    "A Largo wrongful death lawyer can help your family seek compensation and hold negligent parties accountable after the loss of a loved one.",
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
    canonical: "/largo-wrongful-death-lawyer",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function LargoWrongfulDeathPage() {
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
