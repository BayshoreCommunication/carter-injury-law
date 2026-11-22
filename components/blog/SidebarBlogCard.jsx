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
      <div className="relative w-[112px] aspect-video overflow-hidden rounded bg-[#07172A] flex-shrink-0">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-[#0E243D] z-0" />
        )}
        {blogs?.featuredImage?.image?.url && (
          <Image
            fill
            src={blogs.featuredImage.image.url}
            alt={
              blogs?.featuredImage?.altText || blogs?.title || "Blog thumbnail"
            }
            className="relative z-10 object-contain object-center"
            loading="lazy"
            sizes="112px"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        )}
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
