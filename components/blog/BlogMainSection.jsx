"use client";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { staticBlogPosts } from "../static-blogs";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import SectionLayout from "../shared/SectionLayout";
import BlogLoader from "./BlogLoader";

const BlogCard = ({ blogs, postDate }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <ScrollMotionEffect effect="fade-up" duration="2000">
      <Link href={`/blog/${blogs?.slug}`}>
        <div className="bg-white h-full border rounded-md">
          <div className="relative w-full aspect-video overflow-hidden rounded-t-md bg-gray-200">
            {imageLoading && (
              <div className="absolute inset-0 animate-pulse bg-gray-300 z-10 rounded-t-md" />
            )}
            {blogs?.featuredImage?.image?.url ? (
              <Image
                fill
                src={blogs.featuredImage.image.url}
                alt={
                  blogs?.featuredImage?.altText ||
                  blogs?.title ||
                  "Blog post image"
                }
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onLoad={() => setImageLoading(false)}
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          <div className="p-6 flex flex-col gap-1">
            <div className="text-sm text-gray-500 flex items-center justify-between">
              <span>
                {Array.isArray(blogs?.category)
                  ? blogs.category.join(", ")
                  : blogs?.category || ""}
              </span>
              <span> {postDate(blogs?.createdAt)}</span>
            </div>
            <h4 className="text-base md:text-lg font-semibold text-start">
              {blogs?.title}
            </h4>
            <p className="text-gray-700 text-start line-clamp-2">
              {blogs?.shortDescription ||
                blogs?.metaDescription ||
                (typeof blogs?.body === "string"
                  ? blogs.body.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
                  : "")}
            </p>
            <div className="text-start mt-5">
              <button
                type="submit"
                className="text-white bg-[#EC1D21] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2 text-center uppercase space-x-4 hover:scale-105 transition duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </ScrollMotionEffect>
  );
};

const BlogMainSection = ({ blogPostData = [] }) => {
  const [dynamicPosts, setDynamicPosts] = useState(blogPostData || []);
  const [loadingDynamic, setLoadingDynamic] = useState(false);
  const [dynamicLoaded, setDynamicLoaded] = useState(
    Array.isArray(blogPostData) && blogPostData.length > 0
  );
  const [secondsRemaining, setSecondsRemaining] = useState(30);

  const fetchDynamicPosts = async () => {
    try {
      setLoadingDynamic(true);
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch dynamic blogs");
      const result = await res.json();
      if (Array.isArray(result?.data)) {
        setDynamicPosts(result.data);
      }
      setDynamicLoaded(true);
    } catch (err) {
      console.error("Error loading dynamic blogs:", err);
    } finally {
      setLoadingDynamic(false);
    }
  };

  useEffect(() => {
    if (dynamicLoaded) return;

    // 30 seconds delay before loading dynamic blogs
    const timer = setTimeout(() => {
      fetchDynamicPosts();
    }, 30000);

    // 1-second countdown interval for the UI indicator
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [dynamicLoaded]);

  const handleLoadNow = () => {
    setSecondsRemaining(0);
    fetchDynamicPosts();
  };

  const posts = [
    ...staticBlogPosts,
    ...(dynamicPosts || []).filter(
      (post) =>
        !staticBlogPosts.some((staticPost) => staticPost.slug === post?.slug),
    ),
  ].sort(
    (a, b) =>
      new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime(),
  );

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className=" mt-6 md:mt-10 lg:mt-44">
      <SectionLayout>
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 lg:mb-8 gap-4">
            <h2
              className={`text-stone-950 font-semibold text-3xl md:text-5xl text-center lg:text-start uppercase`}
            >
              Recent blog post
            </h2>

            {!dynamicLoaded && (
              <div className="flex items-center justify-center gap-3 text-sm bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-gray-700 shadow-sm w-fit mx-auto md:mx-0">
                {loadingDynamic ? (
                  <span className="flex items-center gap-2 text-[#EC1D21] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#EC1D21] animate-ping" />
                    Loading dynamic blogs...
                  </span>
                ) : (
                  <>
                    <span className="text-xs md:text-sm text-gray-600">
                      Dynamic blogs loading in{" "}
                      <span className="font-bold text-[#1B2639] font-mono">
                        {secondsRemaining}s
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={handleLoadNow}
                      className="text-xs bg-[#EC1D21] text-white px-3 py-1 rounded-full font-semibold hover:bg-[#1B2639] transition-colors"
                    >
                      Load Now
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          <div>
            {!posts || posts.length === 0 ? (
              <BlogLoader />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  justify-center text-center h-full">
                {posts
                  ?.filter((pub) => pub.published === true)
                  ?.map((blogs, index) => (
                    <BlogCard
                      key={`${blogs?.slug}-${index}`}
                      blogs={blogs}
                      postDate={postDate}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default BlogMainSection;
