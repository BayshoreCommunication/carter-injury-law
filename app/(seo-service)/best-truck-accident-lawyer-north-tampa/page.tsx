import React from "react";
import HeroHeader from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/best-truck-accident-lawyer-north-tampa/FAQSection";
import CallToAction from "@/components/shared/CallToAction";

const canonicalUrl =
  "https://www.carterinjurylaw.com/best-truck-accident-lawyer-north-tampa";

export const metadata = {
  title: "North Tampa Truck Accident Lawyer | Carter Injury Law",
  description:
    "Carter Injury Law represents North Tampa truck accident victims, investigates crash evidence, handles insurance claims and pursues full compensation.",
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
    title: "North Tampa Truck Accident Lawyer | Carter Injury Law",
    description:
      "Carter Injury Law represents North Tampa truck accident victims, investigates crash evidence, handles insurance claims and pursues full compensation.",
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
      name: "North Tampa Truck Accident Lawyer | Carter Injury Law",
      description:
        "Carter Injury Law represents North Tampa truck accident victims, investigates crash evidence, handles insurance claims and pursues full compensation.",
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
        url: "https://www.carterinjurylaw.com/assets/seo-service/best-truck-accident-lawyer-north-tampa/north-tampa-truck-crash-lawyer-client-consultation.webp",
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
          name: "Best Truck Accident Lawyer in North Tampa",
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
        "Carter Injury Law represents North Tampa truck accident victims, investigates crash evidence, handles insurance claims and pursues full compensation.",
      telephone: ["+1-813-922-0228", "+1-727-955-1922"],
      priceRange: "Contingency Fee (No Fee Unless We Win)",
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        "North Tampa",
        "University",
        "Forest Hills",
        "Sulphur Springs",
        "Temple Terrace",
        "Carrollwood",
        "New Tampa",
        "Tampa Palms",
        "Wesley Chapel",
        "Lutz",
        "Brandon",
        "Riverview",
        "Town 'N' Country",
        "Seffner",
        "Plant City",
      ].map((place) => ({
        "@type": "Place",
        name: `${place}, FL`,
      })),
      review: [
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
          author: { "@type": "Person", name: "Summer Vasseur" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "As a chiropractor who regularly works with personal injury patients, I can't say enough great things about Rob. He is incredibly personable and genuinely cares about the well-being of his clients both physically and legally.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Marleina R. Taylor" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "After a recent multi-car collision, I found myself needing legal support and I'm truly grateful I chose Carter Injury.",
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
          name: "What Should I Do if the Trucking Company's Insurance Company Contacts Me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Politely decline to answer their tricky questions or provide any recorded audio statements regarding your truck accident. Direct the corporate insurance adjuster to speak exclusively with your retained personal injury attorney about the crash.",
          },
        },
        {
          "@type": "Question",
          name: "Can a Truck's Black Box or Electronic Logging Data Help Prove My Case?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes these advanced electronic devices record crucial data including speed braking patterns and exact engine performance metrics. This undeniable electronic evidence routinely proves truck driver negligence during a highly complex commercial trucking injury claim.",
          },
        },
        {
          "@type": "Question",
          name: "How Much Is My North Tampa Truck Accident Case Worth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Total case value depends entirely on injury severity, medical costs and clearly proven liability factors involved legally. We carefully calculate current medical bills alongside future damages to determine the absolute maximum fair case value.",
          },
        },
      ],
    },
  ],
};

export default function BestTruckAccidentLawyerNorthTampaPage() {
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

