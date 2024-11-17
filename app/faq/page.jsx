import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Frequently Asked Questions | Carter Injury Law - Tampa Attorneys",
  description:
    "Get answers to your questions about personal injury claims, auto accidents, medical malpractice, and more at Carter Injury Law. Our FAQs provide valuable insights to help you understand your legal rights and the claims process.",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <FAQ />
      <CallToAction />
    </>
  );
};

export default page;
