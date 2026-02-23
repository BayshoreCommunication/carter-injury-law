"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";

interface RightSidebarProps {
  practiceAreas?: {
    title: string;
    slug: string;
  }[];
  areasWeServe?: {
    name: string;
    slug: string;
  }[];
  relatedBlogs: {
    title: string;
    slug: string;
    featuredImage?: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
  };
}

export default function RightSidebar({
  practiceAreas = [],
  areasWeServe = [],
  relatedBlogs,
  testimonial,
}: RightSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-[750px]  space-y-8">

      {/* ---------------- PRACTICE AREAS ---------------- */}
      {practiceAreas.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 uppercase border-b pb-2">
            Practice Areas
          </h3>

          <ul className="space-y-3 text-sm">
            {practiceAreas.slice(0, 10).map((item, index) => {
              const active =
                pathname === `/areas-of-practice/${item.slug}`;

              return (
                <li key={index}>
                  <Link
                    href={`/areas-of-practice/${item.slug}`}
                    className={`flex items-center gap-2 transition ${
                      active
                        ? "text-red-600 font-semibold"
                        : "hover:text-red-600"
                    }`}
                  >
                    <span className="w-2 h-2 bg-red-600"></span>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* {practiceAreas.length > 10 && (
            <Link
              href="/areas-of-practice"
              className="text-sm text-red-600 font-medium hover:underline mt-4 inline-block"
            >
              View All Practice Areas →
            </Link>
          )} */}
        </div>
      )}

      {/* ---------------- RELATED BLOG POSTS ---------------- */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 uppercase border-b pb-2">
            Recent Posts
          </h3>

          <ul className="space-y-5">
            {relatedBlogs.slice(0, 10).map((item, index) => {
              const active = pathname === `/blog/${item.slug}`;

              return (
                <li key={index}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 group"
                  >
                    {item.featuredImage && (
                      <div className="w-16 h-16 relative shrink-0 rounded overflow-hidden">
                        <Image
                          src={item.featuredImage}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}

                    <p
                      className={`text-sm leading-5 transition ${
                        active
                          ? "text-red-600 font-semibold"
                          : "group-hover:text-red-600"
                      }`}
                    >
                      {item.title}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ---------------- LOCATION CARD ---------------- */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Location</h3>

        <div className="h-40 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.705238086085!2d-82.47275531347553!3d27.972312151968936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3b1208be12d%3A0x4cce7467aad41864!2sCarter%20Injury%20Law!5e0!3m2!1sen!2sbd!4v1771754150422!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">Carter Injury Law</p>

        <p className="text-sm text-gray-600 mt-1">
          3114 N. BOULEVARD TAMPA, FL 33603
        </p>

        <p className="text-blue-600 font-bold mt-3">
          (813) 922-0228
        </p>

        <button className="mt-3 bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          GET DIRECTIONS
        </button>
      </div>

      {/* ---------------- TESTIMONIAL ---------------- */}
      {testimonial && (
        <div className="bg-[#1f2a44] text-white rounded-2xl px-8 py-12 text-center shadow-xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold">
            “
          </div>

          <div className="flex justify-center gap-2 text-teal-400 mb-6 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" stroke="none" />
            ))}
          </div>

          <p className="text-lg leading-8 text-gray-200">
            {testimonial.text}
          </p>

          <div className="w-12 h-[3px] bg-red-600 mx-auto my-6 rounded"></div>

          <p className="text-lg font-medium text-gray-300">
            {testimonial.author}
          </p>
        </div>
      )}
    </aside>
  );
}