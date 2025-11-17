"use client";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import SectionLayout from "../shared/SectionLayout";
import BlogLoader from "./BlogLoader";
import Pagination from "./Pagination";

const BlogCard = ({ blogs, postDate }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <ScrollMotionEffect effect="fade-up" duration="2000">
      <Link href={`/blog/${blogs?.slug}`}>
        <div className="bg-white h-full border rounded-md">
          <div className="relative w-full bg-gray-200 h-auto md:h-[245px]">
            {imageLoading && (
              <div className="absolute inset-0 animate-pulse bg-gray-300 z-10 rounded-t-md" />
            )}
            <Image
              width={600}
              height={400}
              src={blogs?.featuredImage?.image?.url}
              alt={
                blogs?.featuredImage?.altText ||
                blogs?.title ||
                "Blog post image"
              }
              className="w-full h-auto rounded-t-md"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onLoad={() => setImageLoading(false)}
            />
          </div>

          <div className="p-6 flex flex-col gap-1">
            <div className="text-sm text-gray-500 flex items-center justify-between">
              <span>{blogs?.category}</span>
              <span> {postDate(blogs?.createdAt)}</span>
            </div>
            <h4 className="text-base md:text-lg font-semibold text-start">
              {blogs?.title}
            </h4>
            <p className="text-gray-700 text-start line-clamp-2">
              {parse(blogs?.body)}
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

const BlogMainSection = ({ blogPostData, pagination }) => {
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
          <div className="w-full lg:max-w-[60%] me-auto">
            <h2
              className={`text-stone-950 font-semibold text-3xl md:text-5xl mb-5 lg:mb-8  text-center lg:text-start uppercase`}
            >
              Recent blog post
            </h2>
          </div>
          <div>
            {!blogPostData || blogPostData.length === 0 ? (
              <BlogLoader />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  justify-center text-center h-full">
                  {blogPostData
                    ?.filter((pub, no) => pub.published === true)
                    ?.map((blogs, index) => (
                      <BlogCard
                        key={`${blogs?.slug}-${index}`}
                        blogs={blogs}
                        postDate={postDate}
                      />
                    ))}
                </div>

                {/* Pagination Component */}
                {pagination && <Pagination pagination={pagination} />}
              </>
            )}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default BlogMainSection;
