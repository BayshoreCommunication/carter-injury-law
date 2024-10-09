import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutSection = () => {
  return (
    <SectionLayout bg="">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center md:justify-start gap-x-6 xl:gap-x-16 md:mt-[-50px] mt-[16px]">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <div className="flex flex-col gap-y-6">
            <h1 className="font-semibold text-2xl text-[#55545A]">
              Carter Injury Law: Justice Assured by Your Tampa Personal Injury
              Attorney, Florida
            </h1>
            <p className="text-lg text-[#55545A]">
              {`Don't face injury alone. If someone else's negligence caused you
              harm, having an experienced and compassionate attorney on your
              side is crucial. Carter Injury Law, your diligent personal injury
              attorney in Tampa, Florida, was founded on the belief that every
              case matters, regardless of its magnitude. We treat our clients
              like family, advocating open communication. You're way more than
              just a case number to us.`}
            </p>
            <p className="text-lg text-[#55545A]">
              {`Whether you've been hurt in an auto accident, a slip and fall, or
              due to medical malpractice, we offer a free consultation and case
              evaluation. Contact us without worry about upfront fees or costs.
              You don’t pay us anything at the beginning. Carter Injury Law only
              gets paid if we win your case.`}
            </p>

            <div className="hidden xl:flex mt-6">
              <Link
                href="/contact"
                className="text-white bg-[#EC1D21] hover:bg-[#E40004]  font-semibold rounded-lg text-sm lg:text-lg  px-4 lg:px-6 xl:px-10  py-3 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]"
              >
                CLICK FOR FREE CASE EVALUATION
              </Link>
            </div>
          </div>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="mt-10 md:mt-0">
            <div className="video-container rounded-3xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/oK_kOb6GMMs?si=XWNUepxuo9bFbUOh`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="USA Immigration Attorney Hardam Tripathi, Esq."
                loading="lazy"
                className="w-full h-64 md:h-96"
              ></iframe>
            </div>
            <div className="flex md:justify-start justify-center mt-6 xl:hidden">
              <Link
                href="#"
                className="text-white bg-[#EC1D21] hover:bg-[#E40004]  font-semibold rounded-lg text-sm lg:text-lg  px-4 lg:px-6 xl:px-10  py-4 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]"
              >
                CLICK FOR FREE CASE EVALUATION
              </Link>
            </div>
          </div>
        </ScrollMotionEffect>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
