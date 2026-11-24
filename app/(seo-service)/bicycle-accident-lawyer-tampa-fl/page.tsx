import React from "react";
import HeroHeader from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/HeroHeader";
import CommonCausesSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/FinalCTASection";
import FAQSection from "@/components/seo-service/bicycle-accident-lawyer-tampa-fl/FAQSection";
import CallToAction from "@/components/shared/CallToAction";

const canonicalUrl =
  "https://www.carterinjurylaw.com/bicycle-accident-lawyer-tampa-fl";

export const metadata = {
  title: "Bicycle Accident Lawyer Tampa FL | Carter Injury Law",
  description:
    "Carter Injury Law represents injured cyclists in Tampa, handling bicycle accident claims and insurance negotiations. Schedule a free consultation.",
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
    title: "Bicycle Accident Lawyer Tampa FL | Carter Injury Law",
    description:
      "Carter Injury Law represents injured cyclists in Tampa, handling bicycle accident claims and insurance negotiations. Schedule a free consultation.",
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
      name: "Bicycle Accident Lawyer Tampa FL | Carter Injury Law",
      description:
        "Carter Injury Law represents injured cyclists in Tampa, handling bicycle accident claims and insurance negotiations. Schedule a free consultation.",
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
        url: "https://www.carterinjurylaw.com/assets/seo-service/bicycle-accident-lawyer-tampa-fl/tampa-bicycle-accident-attorney-evidence-consult-us.webp",
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
          name: "Bicycle Accident Lawyer Tampa FL",
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
        "Carter Injury Law represents injured cyclists in Tampa, handling bicycle accident claims and insurance negotiations. Schedule a free consultation.",
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
        "Downtown Tampa",
        "South Tampa",
        "Hyde Park",
        "Westshore",
        "Ybor City",
        "Seminole Heights",
        "Tampa Heights",
        "University",
        "New Tampa",
        "Carrollwood",
        "Temple Terrace",
        "Town N Country",
        "Brandon",
        "Riverview",
        "Lutz",
        "Seffner",
        "Plant City",
      ].map((place) => ({
        "@type": "Place",
        name: `${place}, FL`,
      })),
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Nicole Walcker" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "From day one, my experience with David Carter and everyone at Carter Injury Law was outstanding. After my car accident, they provided not only expert legal guidance but also genuine compassion and support.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Kira Butler" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "David Carter was amazing for my personal injury needs! He came highly recommended from a friend that worked for another lawyer. He took care of all of my needs and made the process so easy. You definitely want to hire him!!!! Thank you so much!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sara Ashby" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I had a great experience with David and the team at Carter Law. From the very beginning, he was compassionate, professional, and truly dedicated to fighting for my best interests.",
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
          name: "Can I Recover Compensation if a Driver Says the Bicycle Accident Was My Fault",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes you can still recover compensation under Florida comparative fault. Drivers often falsely blame cyclists to avoid paying legitimate claims. We use crash reconstruction and evidence to prove driver negligence. Your compensation is reduced only by your actual fault percentage. We fight to prove the driver caused the collision entirely.",
          },
        },
        {
          "@type": "Question",
          name: "Can I File a Bicycle Accident Claim if I Was Riding Outside a Designated Bike Lane",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes you have rights even outside a designated bike lane. Florida law permits cyclists to use regular traffic lanes legally. Drivers must share the road safely regardless of bike lanes. We prove the driver failed to exercise reasonable care around you. You deserve protection anywhere you ride a bicycle legally.",
          },
        },
        {
          "@type": "Question",
          name: "Who Pays for My Damaged Bicycle and Cycling Equipment After a Crash",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The at fault driver insurance pays for your damaged property. We demand compensation for bicycle repairs or full replacement value. This includes expensive helmets, special shoes and ruined cycling apparel. We provide purchase receipts and repair estimates to the insurance company. You should never pay for property damaged by careless drivers.",
          },
        },
      ],
    },
  ],
};

export default function BicycleAccidentLawyerTampaFlPage() {
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

