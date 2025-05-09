"use client";
import Image from "next/image";
import { memo } from "react";
import HeaderForm from "../shared/HeaderForm";
import SectionLayout from "../shared/SectionLayout";

const HeroSection = () => {
  return (
    <div className="">
      <div
        className=" w-full bg-heroBg"
        // style={{
        //   backgroundImage: "url('/assets/homepage/header-bg.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   width: "100%",
        //   height: "auto",
        // }}
      >
        <div className="container pt-4 md:pb-0 md:pt-6 lg:pt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-end  justify-between gap-x-20">
            <div className="flex items-end justify-center">
              <Image
                src="/assets/homepage/carter.png"
                alt="robert-johnson-law"
                className=""
                height={600}
                width={600}
              />
            </div>

            <div className="md:relative top-0  md:top-[90px]  hidden lg:block">
              <HeaderForm />
            </div>
          </div>
        </div>
      </div>
      <SectionLayout>
        <div className="lg:hidden block relative z-30">
          <HeaderForm />
        </div>
      </SectionLayout>
    </div>
  );
};

export default memo(HeroSection);
