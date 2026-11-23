import React from "react";
import HeroHeader from "@/components/seo-service/uber-accident-lawyer-tampa/HeroHeader";
import CommonCausesSection from "@/components/seo-service/uber-accident-lawyer-tampa/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/uber-accident-lawyer-tampa/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/uber-accident-lawyer-tampa/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/uber-accident-lawyer-tampa/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/uber-accident-lawyer-tampa/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/uber-accident-lawyer-tampa/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/uber-accident-lawyer-tampa/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/uber-accident-lawyer-tampa/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/uber-accident-lawyer-tampa/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/uber-accident-lawyer-tampa/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/uber-accident-lawyer-tampa/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/uber-accident-lawyer-tampa/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/uber-accident-lawyer-tampa/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/uber-accident-lawyer-tampa/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/uber-accident-lawyer-tampa/FinalCTASection";
import FAQSection from "@/components/seo-service/uber-accident-lawyer-tampa/FAQSection";

const canonicalUrl =
  "https://www.carterinjurylaw.com/uber-accident-lawyer-tampa";

export const metadata = {
  title: "Uber Accident Lawyer Tampa | Carter Injury Law",
  description:
    "Uber accidents can bring medical bills, lost wages and lasting injuries. Carter Injury Law helps Tampa victims pursue compensation for their losses.",
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
    title: "Uber Accident Lawyer Tampa | Carter Injury Law",
    description:
      "Uber accidents can bring medical bills, lost wages and lasting injuries. Carter Injury Law helps Tampa victims pursue compensation for their losses.",
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
      name: "Uber Accident Lawyer Tampa | Carter Injury Law",
      description:
        "Uber accidents can bring medical bills, lost wages and lasting injuries. Carter Injury Law helps Tampa victims pursue compensation for their losses.",
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
        url: "https://www.carterinjurylaw.com/assets/seo-service/uber-accident-lawyer-tampa/dedicated-uber-accident-lawyer-consultation-tampa-fl.webp",
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
          name: "Uber accident lawyer Tampa",
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
        "Uber accidents can bring medical bills, lost wages and lasting injuries. Carter Injury Law helps Tampa victims pursue compensation for their losses.",
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
          author: { "@type": "Person", name: "Colin Korber" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I had an amazing experience working with David Carter at Carter Injury Law. From start to finish, he was incredibly knowledgeable, supportive, and responsive throughout the entire case. His expertise and guidance made everything feel easy and straightforward, and I truly felt like I was in great hands the whole time. I couldn't be more thrilled with the outcome. If you're looking for someone who genuinely cares and delivers results, I highly recommend David. He's the best!",
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
            "David Carter Personal Injury Law is professional, responsive, and genuinely cares about their clients. They make the process easy to understand, communicate clearly, and take the time to make sure you feel supported throughout the entire experience. If you're looking for a personal injury attorney who is knowledgeable, dependable, and puts his clients first, I highly recommend David Carter.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Kathie Ann Wild" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "David and his team are invested in getting the best result for their clients. They are not afraid to go to court to fight for their clients versus just settling. Highly recommend Carter Injury Law!!",
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
          name: "Can I Recover Compensation if My Uber Driver Caused the Accident",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can definitely recover money if your hired driver caused the terrible vehicle wreck in Tampa. The payout depends on the app status and the total severity of your bodily physical injuries.",
          },
        },
        {
          "@type": "Question",
          name: "What Happens if Another Driver Hit the Uber I Was Riding In",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can absolutely demand money from the reckless driver who crashed into your hired rideshare car. The rideshare corporate insurance policy might also provide extra money if the careless driver lacks coverage.",
          },
        },
        {
          "@type": "Question",
          name: "Do I Need to Hire a Lawyer Before Speaking With Uber Insurance Representatives",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You do not technically have to hire a lawyer to talk to an insurance claims adjuster. An attorney stops the adjuster from tricking you into ruining your own personal injury civil case.",
          },
        },
      ],
    },
  ],
};

export default function UberAccidentLawyerTampaPage() {
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

