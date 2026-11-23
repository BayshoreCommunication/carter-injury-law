import React from "react";
import HeroHeader from "@/components/seo-service/golf-cart-accident-lawyer-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/golf-cart-accident-lawyer-tampa/FAQSection";

const canonicalUrl =
  "https://www.carterinjurylaw.com/golf-cart-accident-lawyer-tampa";

export const metadata = {
  title: "Golf Cart Accident Lawyer Tampa | Carter Injury Law",
  description:
    "Carter Injury Law represents golf cart accident victims in Tampa, handling injury claims and insurance negotiations. Schedule a free consultation.",
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
    title: "Golf Cart Accident Lawyer Tampa | Carter Injury Law",
    description:
      "Carter Injury Law represents golf cart accident victims in Tampa, handling injury claims and insurance negotiations. Schedule a free consultation.",
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
      name: "Golf Cart Accident Lawyer Tampa | Carter Injury Law",
      description:
        "Carter Injury Law represents golf cart accident victims in Tampa, handling injury claims and insurance negotiations. Schedule a free consultation.",
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
        url: "https://www.carterinjurylaw.com/assets/seo-service/golf-cart-accident-lawyer-tampa/tampa-golf-cart-accident-lawyer-client-consultation.webp",
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
          name: "Golf Cart Accident Lawyer in Tampa",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": ["LegalService", "Attorney"],
      "@id": `${canonicalUrl}#service`,
      name: "Carter Injury Law",
      url: "https://www.carterinjurylaw.com/",
      mainEntityOfPage: canonicalUrl,
      description:
        "Carter Injury Law represents golf cart accident victims in Tampa, handling injury claims and insurance negotiations. Schedule a free consultation.",
      telephone: "+1-813-922-0228",
      priceRange: "Contingency Fee",
      founder: {
        "@type": "Person",
        name: "David Carter",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "3114 N Boulevard",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33603",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Tampa, FL" },
        { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
      ],
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "John Doe" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Carter Injury Law communicated clearly and handled my serious accident claim with complete professional care.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Jane Smith" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "The legal staff provided exceptional support while guiding my family through a very difficult legal situation.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Michael Brown" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Their dedicated legal team organized my medical records efficiently and secured outstanding financial compensation for my injuries.",
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
          name: "Can I File a Claim if I Was Injured as a Passenger in a Golf Cart?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Injured passengers possess strong legal rights to pursue compensation against negligent cart operators or third party drivers. Available insurance coverage depends on driver liability policies, owner vehicle coverage and surrounding motor vehicle insurance. Passenger injury claims require proving that driver negligence or hazardous property conditions directly caused the collision.",
          },
        },
        {
          "@type": "Question",
          name: "Does Florida Require Golf Cart Insurance for Accidents on Public Roads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida law distinguishes standard golf carts from registered low speed vehicles with mandatory personal injury protection rules. Traditional golf carts operate under different liability guidelines unless designated as low speed vehicles by local authorities. Property damage liability and bodily injury coverage requirements vary based on specific vehicle registration and municipal laws.",
          },
        },
        {
          "@type": "Question",
          name: "Can a Golf Cart Rental Company Be Held Responsible for an Accident?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rental businesses face direct legal liability when failing to maintain fleet vehicles or renting unsafe carts to customers. Proving negligence requires showing the company knew or should have known about dangerous mechanical vehicle defects. Rental agreements cannot shield commercial vendors from liability when gross negligence or poor maintenance causes severe crashes.",
          },
        },
      ],
    },
  ],
};

export default function GolfCartAccidentLawyerTampaPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

