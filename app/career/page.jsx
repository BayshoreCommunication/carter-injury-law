import Career from "@/components/career/Career";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "",
  description: "",
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
      <Career />
    </>
  );
};

export default page;
