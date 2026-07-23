import React from "react";
import HeroHeader from "@/components/seo-service/tampa-personal-injury-lawyers-firm/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/WhyRightLawyerSection";
import PersonalInjuryCasesSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/PersonalInjuryCasesSection";
import WhoCanFileSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/WhoCanFileSection";
import WhatYouMustProveSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/WhatYouMustProveSection";
import MistakesSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-personal-injury-lawyers-firm/FAQSection";

export const metadata = {
  title: "Tampa Personal Injury Lawyers Firm | Injury Claim Attorneys",
  description:
    "Recover compensation after an accident with help from a Tampa personal injury lawyers firm. We handle injury claims with dedication and care.",
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
    canonical: "/tampa-personal-injury-lawyers-firm",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function TampaPersonalInjuryPage() {
  return (
    <main className="w-full">
      <HeroHeader />
      <CommonCausesSection />
      <WhyRightLawyerSection />
      <PersonalInjuryCasesSection />
      <WhoCanFileSection />
      <WhatYouMustProveSection />
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
