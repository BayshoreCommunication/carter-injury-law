import Image from "next/image";
import React from "react";
import HeaderForm from "../shared/HeaderForm";
import SectionLayout from "../shared/SectionLayout";

const BlogHeroSectionforDetails = () => {
  return (
    <div>
      {" "}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[750px]">
        <Image
          src="/assets/shared/practice-area-bg.png"
          alt="testimonials Bg"
          layout="fill"
          objectFit="cover"
          className="z-0 object-bottom object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h2 className="text-white font-semibold text-3xl md:text-5xl lg:text-[80px] text-center uppercase drop-shadow-[1px_0_10px_#000000]">
            blog
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSectionforDetails;
