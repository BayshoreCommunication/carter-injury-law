import React from "react";
import HeroHeader from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/HeroHeader";
import CommonCausesSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/FinalCTASection";
import FAQSection from "@/components/seo-service/tampa-uber-lyft-accident-lawyer/FAQSection";
import CallToAction from "@/components/shared/CallToAction";

const canonicalUrl =
  "https://www.carterinjurylaw.com/tampa-uber-lyft-accident-lawyer";

export const metadata = {
  title: "Tampa Uber and Lyft Accident Lawyer | Carter Injury Law",
  description:
    "Act quickly after an Uber or Lyft accident in Tampa or Largo. Carter Injury Law helps victims pursue compensation for various damages.",
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
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Tampa Uber and Lyft Accident Lawyer | Carter Injury Law",
    description:
      "Act quickly after an Uber or Lyft accident in Tampa or Largo. Carter Injury Law helps victims pursue compensation for various damages.",
    url: canonicalUrl,
    type: "website",
    siteName: "Carter Injury Law",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Tampa Uber and Lyft Accident Lawyer | Carter Injury Law",
      description:
        "Act quickly after an Uber or Lyft accident in Tampa or Largo. Carter Injury Law helps victims pursue compensation for various damages.",
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.carterinjurylaw.com/#website",
        name: "Carter Injury Law",
        url: "https://www.carterinjurylaw.com/",
      },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      about: { "@id": `${canonicalUrl}#service` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.carterinjurylaw.com/assets/seo-service/tampa-uber-lyft-accident-lawyer/dedicated-legal-counsel-tampa-uber-lyft-accident-fl.webp",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.carterinjurylaw.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tampa Uber and Lyft Accident Lawyer",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": ["LegalService", "Attorney"],
      "@id": `${canonicalUrl}#service`,
      name: "Carter Injury Law P.A.",
      url: "https://www.carterinjurylaw.com/",
      mainEntityOfPage: canonicalUrl,
      description:
        "Act quickly after an Uber or Lyft accident in Tampa or Largo. Carter Injury Law helps victims pursue compensation for various damages.",
      telephone: "+1-813-922-0228",
      priceRange: "Contingency Fee",
      founder: {
        "@type": "Person",
        name: "David Carter",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "3114 N. Boulevard",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33603",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Tampa, FL" },
        { "@type": "City", name: "Largo, FL" },
        { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      ],
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Jasmine Sisanh" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Rob and Dave gave so much support through a traumatic and stressful time. They were willing to meet in person or take phone calls. They did whatever was needed to make things run smoothly. I highly recommend them.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Matthew Sarli" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "David and his team were great to work with. They walked me through the whole legal process step by step. I would highly recommend this firm.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Joseph Haubrich" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "This firm is professional, responsive, and genuinely cares about clients. They made the process easy to understand and communicated clearly. I felt supported throughout the entire experience. I highly recommend David Carter to anyone seeking a knowledgeable attorney.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      url: canonicalUrl,
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I Sue Uber or Lyft After an Accident in Tampa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Potential claims depend heavily on the driver's actions. The specific circumstances of the crash matter immensely. We must determine if the company holds legal responsibility. Independent contractor laws make it difficult to sue the corporate entity.",
          },
        },
        {
          "@type": "Question",
          name: "Which Insurance Company Pays for Injuries After an Uber or Lyft Accident in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Coverage depends on the driver's exact app status. The presence of a passenger changes the coverage. Florida Statute 627.748 outlines this specific insurance framework. A million dollar policy applies during active passenger trips.",
          },
        },
        {
          "@type": "Question",
          name: "How Much Does It Cost to Hire a Tampa Uber and Lyft Accident Lawyer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our firm offers a completely free case evaluation. We use a standard contingency fee arrangement. We will clearly confirm specific fee terms in writing. You pay nothing upfront to start your legal case.",
          },
        },
      ],
    },
  ],
};

export default function TampaUberLyftAccidentLawyerPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroHeader />
      <CommonCausesSection />
      <WhyRightLawyerSection />
      <CallToAction />
      <InvestigationProcessSection />
      <FiveStepProcessSection />
      <MistakesSection />
      <CallToAction />
      <DedicatedCounselSection />
      <EstablishedLegalProcessSection />
      <JusticeSecuredSection />
      <CallToAction />
      <WhyChooseUsSection />
      <CompensationTypesSection />
      <ExpertValuationSection />
      <CallToAction />
      <AreasWeServeSection />
      <TestimonialsSection />
      <StatuteOfLimitationsSection />
      <CallToAction />
      <FinalCTASection />
      <FAQSection />
    </main>
  );
}

