import React from "react";
import HeroHeader from "@/components/seo-service/uber-accident-lawyer-largo/HeroHeader";
import CommonCausesSection from "@/components/seo-service/uber-accident-lawyer-largo/CommonCausesSection";
import WhyRightLawyerSection from "@/components/seo-service/uber-accident-lawyer-largo/WhyRightLawyerSection";
import InvestigationProcessSection from "@/components/seo-service/uber-accident-lawyer-largo/InvestigationProcessSection";
import FiveStepProcessSection from "@/components/seo-service/uber-accident-lawyer-largo/FiveStepProcessSection";
import MistakesSection from "@/components/seo-service/uber-accident-lawyer-largo/MistakesSection";
import DedicatedCounselSection from "@/components/seo-service/uber-accident-lawyer-largo/DedicatedCounselSection";
import EstablishedLegalProcessSection from "@/components/seo-service/uber-accident-lawyer-largo/EstablishedLegalProcessSection";
import JusticeSecuredSection from "@/components/seo-service/uber-accident-lawyer-largo/JusticeSecuredSection";
import WhyChooseUsSection from "@/components/seo-service/uber-accident-lawyer-largo/WhyChooseUsSection";
import CompensationTypesSection from "@/components/seo-service/uber-accident-lawyer-largo/CompensationTypesSection";
import ExpertValuationSection from "@/components/seo-service/uber-accident-lawyer-largo/ExpertValuationSection";
import AreasWeServeSection from "@/components/seo-service/uber-accident-lawyer-largo/AreasWeServeSection";
import TestimonialsSection from "@/components/seo-service/uber-accident-lawyer-largo/TestimonialsSection";
import StatuteOfLimitationsSection from "@/components/seo-service/uber-accident-lawyer-largo/StatuteOfLimitationsSection";
import FinalCTASection from "@/components/seo-service/uber-accident-lawyer-largo/FinalCTASection";
import FAQSection from "@/components/seo-service/uber-accident-lawyer-largo/FAQSection";
import CallToAction from "@/components/shared/CallToAction";

const canonicalUrl =
  "https://www.carterinjurylaw.com/uber-accident-lawyer-largo";

export const metadata = {
  title: "Uber Accident Lawyer Largo | Carter Injury Law",
  description:
    "Disputed liability can complicate Uber accident claims in Largo. Carter Injury Law helps injured victims pursue fair compensation for their losses.",
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
    title: "Uber Accident Lawyer Largo | Carter Injury Law",
    description:
      "Disputed liability can complicate Uber accident claims in Largo. Carter Injury Law helps injured victims pursue fair compensation for their losses.",
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
      name: "Uber Accident Lawyer Largo | Carter Injury Law",
      description:
        "Disputed liability can complicate Uber accident claims in Largo. Carter Injury Law helps injured victims pursue fair compensation for their losses.",
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
        url: "https://www.carterinjurylaw.com/assets/seo-service/uber-accident-lawyer-largo/dedicated-uber-accident-lawyer-largo-claims-review.webp",
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
          name: "Uber accident lawyer Largo",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": ["LegalService", "Attorney"],
      "@id": `${canonicalUrl}#service`,
      name: "Carter Injury Law, P.A.",
      url: "https://www.carterinjurylaw.com/",
      mainEntityOfPage: canonicalUrl,
      description:
        "Disputed liability can complicate Uber accident claims in Largo. Carter Injury Law helps injured victims pursue fair compensation for their losses.",
      telephone: ["+1-727-955-1922", "+1-813-922-0228"],
      priceRange: "Contingency Fee",
      founder: {
        "@type": "Person",
        name: "David Carter",
      },
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "801 W. Bay Dr., Suite 229",
          addressLocality: "Largo",
          addressRegion: "FL",
          postalCode: "33770",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "3114 N. Boulevard",
          addressLocality: "Tampa",
          addressRegion: "FL",
          postalCode: "33603",
          addressCountry: "US",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Largo, FL" },
        { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
      ],
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Gina Hogan" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "We used David when my husband was hit head on by a driver. The insurance company first offered a laughable amount and tried to get that signed and done a few days in. David explained that many injuries don't appear the first few days and he was right and if we would not have talked to him and hired him we would have been out a lot of money for injuries out of pocket. This was our first experience in a situation like this and he made something so unpleasant and stressful easy and manageable instead. From helping coordinate the auto repairs to the medical bills. He was so knowledgeable with the whole process. So glad we used him and would recommend him in a heartbeat to any family or friends!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Joshua Kearns" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "David is genuine, smart, and knows what he’s talking about. Highly recommend David and the Carter Injury Law firm!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Tony Martinez" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "David Carter is an aggressive litigator and will get you the most on your claim!",
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
          name: "Can I Make an Uber Accident Claim if I Was Injured While Entering or Exiting the Vehicle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, entering or exiting an Uber falls directly within the scope of a rideshare trip. If a driver accelerates prematurely, stops in an unsafe location, or fails to assist with doors in a hazardous area, they breach their duty of care. You can seek compensation through applicable auto insurance policies for injuries sustained during boarding or alighting.",
          },
        },
        {
          "@type": "Question",
          name: "Will Uber's Insurance Pay for My Medical Bills Before My Case Is Settled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, rideshare liability insurance companies do not pay medical invoices on an ongoing basis as treatments occur. Florida is a no-fault insurance state, meaning your own Personal Injury Protection (PIP) policy pays initial medical expenses up to policy limits. Uber’s commercial liability coverage pays out in a single, lump-sum financial settlement or jury verdict at the conclusion of your claim.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Pursue an Uber Accident Claim if I Already Gave a Statement to an Insurance Adjuster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Giving an early statement to an adjuster does not destroy your legal right to file a claim. However, adjusters frequently use recorded answers to argue that your injuries were pre-existing or that you shared fault for the crash.",
          },
        },
      ],
    },
  ],
};

export default function UberAccidentLawyerLargoPage() {
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

