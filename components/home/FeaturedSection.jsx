import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const FeaturedSection = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-8 lg:gap-20">
        <div className="flex flex-col lg:flex-row items-center justify-center  gap-16">
          <div className="w-full">
            <ScrollMotionEffect
              effect="fade-right"
              duration="2000"
              className="w-full"
            >
              <Image
                src="/assets/homepage/dog-bite.png"
                alt="Dog Bite"
                width={560}
                height={590}
                className=" mx-auto"
              />
            </ScrollMotionEffect>
          </div>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="flex flex-col gap-4 w-full ">
              <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-3  uppercase ">
                Dog bite and need a personal injury layer
              </h2>
              <p className="text-lg text-[#55545A]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh
                tristique nascetur nostra convallis, senectus maximus odio. Nam
                dapibus gravida praesent dui tincidunt nulla sem. Dictum
                maecenas nam leo morbi scelerisque eros?
              </p>
              <p className="text-lg text-[#55545A]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh
                tristique nascetur nostra convallis, senectus
              </p>
              <div className="inline-block mt-5">
                <Link
                  href="#"
                  className="text-white bg-[#EC1D21] hover:bg-[#E40004]  font-semibold rounded-lg text-sm lg:text-lg  px-4 md:px-10 py-2.5 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]"
                >
                  CLICK FOR FREE CASE EVALUATION
                </Link>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center  gap-16">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="flex flex-col gap-4 w-full ">
              <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-3  uppercase ">
                Car accident and need a personal injury layer
              </h2>
              <p className="text-lg text-[#55545A]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh
                tristique nascetur nostra convallis, senectus maximus odio. Nam
                dapibus gravida praesent dui tincidunt nulla sem. Dictum
                maecenas nam leo morbi scelerisque eros?
              </p>
              <p className="text-lg text-[#55545A]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh
                tristique nascetur nostra convallis, senectus
              </p>
              <div className="inline-block mt-5">
                <Link
                  href="#"
                  className="text-white bg-[#EC1D21] hover:bg-[#E40004]  font-semibold rounded-lg text-sm lg:text-lg  px-4 md:px-10 py-2.5 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]"
                >
                  CLICK FOR FREE CASE EVALUATION
                </Link>
              </div>
            </div>
          </ScrollMotionEffect>
          <div className="w-full">
            <ScrollMotionEffect
              effect="fade-left"
              duration="2000"
              className="w-full"
            >
              <Image
                src="/assets/homepage/car-accident.png"
                alt="Dog Bite"
                width={560}
                height={590}
                className=" mx-auto"
              />
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturedSection;
