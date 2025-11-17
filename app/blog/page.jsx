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
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = async ({ searchParams }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = 9;

  const blogData = await GetAllPostData(currentPage, limit);

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <BlogHeroSection />
      <BlogMainSection
        blogPostData={blogData?.data}
        pagination={blogData?.pagination}
      />
      <CallToAction />
    </>
  );
};

export default page;
