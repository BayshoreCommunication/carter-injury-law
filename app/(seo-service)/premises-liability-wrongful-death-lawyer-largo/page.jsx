import React from "react";
import HeroHeader from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/HeroHeader";
import CommonCausesSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/FinalCTASection";
import FAQSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-largo/FAQSection";

export const metadata = {
  title: "Premises Liability Wrongful Death Lawyer Largo | Legal Support",
  description:
    "Legal representation for premises liability wrongful death claims in Largo. Seek financial recovery while holding negligent property owners accountable.",
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
    canonical: "/premises-liability-wrongful-death-lawyer-largo",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function PremisesLiabilityWrongfulDeathLargoPage() {
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
