import React from "react";

import GetAllPostData from "@/lib/GetAllPostData";

import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogMainSection from "@/components/blog/BlogMainSection";
import CallToAction from "@/components/shared/CallToAction";

// metadata
export const metadata = {
  title: "Blog - Carter Injury Law",
  description: `At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. `,
  alternates: {
    canonical: "/blog",
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
      <BlogHeroSection />
      <BlogMainSection />
      <CallToAction />
    </>
  );
};

export default page;
