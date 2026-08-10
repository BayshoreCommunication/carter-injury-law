import React from "react";
import HeroHeader from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/WhyRightLawyerSection";
import WhoCanFileSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/WhoCanFileSection";
import MistakesSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-motorcycle-accidents-lawyer/FAQSection";

export const metadata = {
  title: "Tampa Motorcycle Accidents Lawyer | Protect Your Rights",
  description:
    "Recover compensation after a motorcycle crash with help from a Tampa motorcycle accidents lawyer focused on protecting injured riders.",
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
    canonical: "/tampa-motorcycle-accidents-lawyer",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function TampaMotorcycleAccidentsLawyerPage() {
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
