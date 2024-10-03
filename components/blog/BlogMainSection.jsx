import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { AllBlogData } from "@/config/blogData";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const BlogMainSection = () => {
  return (
    <div className=" mt-0 lg:mt-40">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  justify-center text-center h-full">
              {AllBlogData?.map((blog, index) => (
                <ScrollMotionEffect effect="fade-up" duration="2000">
                  <Link href={`/blog/${blog?.slug}`} key={index}>
                    <div className=" drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)] bg-white h-full">
                      <Image
                        src={blog?.image}
                        alt={blog?.title}
                        width={500}
                        height={300}
                      />

                      <div className="p-6 flex flex-col gap-1">
                        <div className="text-sm text-gray-500 flex items-center justify-between">
                          <span>{blog?.category}</span>
                          <span>{blog?.date}</span>
                        </div>
                        <h4 className="text-base md:text-lg font-semibold text-start">
                          {blog?.title}
                        </h4>
                        <p className=" text-gray-700 text-start line-clamp-2">
                          {blog?.description}
                        </p>
                        <div className=" text-start mt-5">
                          <button
                            type="submit"
                            className="text-white bg-[#EC1D21] hover:bg-[#E40004] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-10 py-2 text-center uppercase space-x-4  "
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollMotionEffect>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default BlogMainSection;
