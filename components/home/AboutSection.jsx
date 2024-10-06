import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutSection = () => {
  return (
    <SectionLayout bg="">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center md:justify-start gap-x-6 xl:gap-x-16 mt-[-50px]">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <div className="flex flex-col gap-y-6">
            <p className="text-lg text-[#55545A]">
              <strong>DON’T GO IT ALONE.</strong> IF YOU’VE BEEN INJURED DUE TO
              THE FAULT OF SOMEONE ELSE, HAVING AN EXPERIENCED AND COMPASSIONATE
              ATTORNEY IN YOUR CORNER IS CRUCIAL.
            </p>
            <p className="text-lg text-[#55545A]">
              CARTER INJURY LAW WAS FOUNDED UPON THE BELIEF THAT EVERY CASE
              MATTERS, NO MATTER HOW BIG OR SMALL. WE TREAT OUR CLIENTS LIKE
              FAMILY, PROVIDING OPEN LINES OF COMMUNICATION. YOU’RE NOT JUST A
              NUMBER, AND WE KNOW THAT.
            </p>
            <p className="text-lg text-[#55545A]">
              WHETHER YOU’VE BEEN INJURED IN AN AUTO ACCIDENT, A SLIP AND FALL,
              OR BY MEDICAL MALPRACTICE, WE OFFER A FREE CONSULTATION AND CASE
              EVALUATION SO YOU CAN FEEL CONFIDENT IN CONTACTING US WITHOUT THE
              RISK OF ANY UPFRONT FEES OR COSTS. YOU DON’T PAY US ANYTHING AT
              THE BEGINNING. CARTER INJURY LAW ONLY GETS PAID IF YOU WIN YOUR
              CASE.
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
          <div className="">
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
            <div className="flex mt-6 xl:hidden">
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
