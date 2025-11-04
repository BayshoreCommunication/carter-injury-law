import CallToAction from "@/components/shared/CallToAction";
import TestimonialCardsSection from "@/components/shared/TestimonialCardsSection";
import TestimonialsHeader from "@/components/testimonials/TestimonialsHeader";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Client Testimonials | Carter Injury Law - Personal Injury Attorneys",
  description:
    "Read client testimonials to see why Carter Injury Law is a top choice for personal injury representation in Tampa, Florida. Hear from clients who received successful outcomes in auto accidents, slip and falls, and other injury cases.",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};
const page = () => {
  return (
    <>
      <TestimonialsHeader />
      <TestimonialCardsSection />
      <CallToAction />
      <TestimonialsSection />
    </>
  );
};

export default page;
