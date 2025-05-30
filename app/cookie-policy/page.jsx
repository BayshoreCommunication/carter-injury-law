import CookiePolicy from "@/components/cookie-policy/CookiePolicy";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import React from "react";

export const metadata = {
  title:
    "Experienced Personal Injury Attorney in Tampa, Florida | Carter Injury Law",
  description:
    "Need expert legal help after an accident? Our  Experienced personal injury attorney in Tampa, Florida, is here to fight for your rights and secure the compensation you deserve. Call today for a free consultation!",
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
      <HeroSection />
      <CookiePolicy />
      <CallToAction />
    </>
  );
};

export default page;
