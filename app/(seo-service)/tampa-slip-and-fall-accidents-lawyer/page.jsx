import React from "react";
import HeroHeader from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-slip-and-fall-accidents-lawyer/FAQSection";

export const metadata = {
  title: "Tampa Slip and Fall Accidents Lawyer | Injury Compensation",
  description:
    "Slip and fall accidents lawyer in Tampa for injury claims involving unsafe property conditions and negligent property owners.",
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
    canonical: "/tampa-slip-and-fall-accidents-lawyer",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function TampaSlipAndFallAccidentsPage() {
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
