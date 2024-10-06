"use client";
import React, { memo } from "react";
import SectionLayout from "../shared/SectionLayout";
import HeaderForm from "../shared/HeaderForm";
import Image from "next/image";

const HeroSection = () => {
  const text = "Hardam Tripathi, Esq.".split(" ");

  return (
    // <div
    //   className=" w-full"
    //   style={{
    //     backgroundImage: "url('/assets/shared/header-bg.png')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "100%",
    //     height: "auto",
    //   }}
    // >
    //   <SectionLayout bg="">
    //     <div className="h-[65vh] flex justify-end ">
    //       <HeaderForm />
    //     </div>
    //   </SectionLayout>
    // </div>
    <div className="bg-slate-200">
      <div
        className=" w-full"
        style={{
          backgroundImage: "url('/assets/homepage/header-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "auto", // Adjust height as needed
        }}
      >
        {/* <div className="relative h-[600px] md:h-[530px] lg:h-[65vh]"> */}
        {/* <Image
          src="/assets/homepage/header-bg.png"
          alt="home-banner-bg"
          layout="fill"
          objectFit="cover"
          priority
          className="z-10 object-center"
          rel="preload"
        /> */}

        <div className="container pt-4 pb-10 md:pb-0 md:pt-6 lg:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-end  justify-between gap-x-20">
            <div className="md:flex items-center justify-center  hidden">
              <Image
                src="/assets/homepage/carter.png"
                alt="robert-johnson-law"
                className=""
                height={600}
                width={600}
              />
            </div>

            <div className="md:relative top-0  md:top-[90px] ">
              <HeaderForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
