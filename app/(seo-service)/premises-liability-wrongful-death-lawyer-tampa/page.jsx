import React from "react";
import HeroHeader from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/premises-liability-wrongful-death-lawyer-tampa/FAQSection";

export const metadata = {
  title: "Premises Liability Wrongful Death Lawyer Tampa | Free Consultation",
  description:
    "Premises liability wrongful death lawyer serving Tampa, helping families pursue compensation after fatal accidents caused by unsafe property conditions.",
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
    canonical: "/premises-liability-wrongful-death-lawyer-tampa",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

export default function PremisesLiabilityWrongfulDeathTampaPage() {
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
