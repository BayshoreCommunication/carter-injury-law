"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SidebarBlogCard = ({ blogs }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      className="flex items-start gap-2 ps-3 py-3 drop-shadow-lg bg-white my-3"
      href={`/blog/${blogs?.slug}`}
    >
      <div
        className="relative w-[100px] bg-gray-200 flex-shrink-0"
        style={{ aspectRatio: "1/1" }}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 z-10" />
        )}
        <Image
          width={100}
          height={100}
          src={blogs?.featuredImage?.image?.url}
          alt={
            blogs?.featuredImage?.altText || blogs?.title || "Blog thumbnail"
          }
          className="w-full h-auto"
          loading="lazy"
          sizes="100px"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div>
        <div className="text-md font-bold text-black text-left line-clamp-2">
          {blogs?.title}
        </div>
      </div>
    </Link>
  );
};

export default SidebarBlogCard;
