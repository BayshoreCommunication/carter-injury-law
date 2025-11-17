import React from "react";

const BlogLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center text-center h-full">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)] bg-white h-full animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="bg-gray-300 h-[200px] w-full"></div>

          {/* Content Skeleton */}
          <div className="p-6 flex flex-col gap-3">
            {/* Category and Date Skeleton */}
            <div className="flex items-center justify-between">
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="h-4 bg-gray-300 rounded w-24"></div>
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2">
              <div className="h-5 bg-gray-300 rounded w-full"></div>
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>

            {/* Button Skeleton */}
            <div className="mt-5 text-start">
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogLoader;
