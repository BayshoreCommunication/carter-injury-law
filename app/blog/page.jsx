import React from "react";

import GetAllPostData from "@/lib/GetAllPostData";

import Head from "next/head";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogMainSection from "@/components/blog/BlogMainSection";
import CallToAction from "@/components/shared/CallToAction";

export const metadata = {
  title:
    "Insightful Personal Injury Blogs tampa,florida | Legal Tips & Case Studies",
  description:
    "Explore the Carter Injury Law Blog for expert insights, legal advice, and tips on personal injury topics, including auto accidents, slip & falls, and medical malpractice. Stay informed to make the best decisions for your injury claims.",
};

const page = async () => {
  const blogPostData = await GetAllPostData();

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
      <BlogMainSection blogPostData={blogPostData} />
      <CallToAction />
    </>
  );
};

export default page;
