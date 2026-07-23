"use client";
import React from "react";
import Image from "next/image";

const JusticeSecuredSection = () => {
  return (
    <section className="w-full mt-0 py-8 md:py-8 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-[1320px] mx-auto">

        {/* ── Rounded Card Container ── */}
        <div className="relative bg-secondary rounded-[28px] overflow-hidden min-h-[500px] md:min-h-[560px]">

          {/* ── Background image — right 60% of the card ── */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
            <Image
              src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/justice-family.png"
              alt="Attorney consulting with a grieving family"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
              priority
            />
            {/* Left gradient — blends image into navy background */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/75 to-secondary/10" />
            {/* Top & Bottom dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40" />
          </div>

          {/* ── Text Content — left side over dark bg ── */}
          <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-16 py-14 md:py-20 max-w-[620px]">

            {/* Category label */}
            <span className="text-[12px] font-extrabold tracking-[0.2em] text-primary uppercase block mb-7">
              Justice With Purpose
            </span>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl xl:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight mb-5">
              Justice Secured for Tampa Families We Have Represented for Wrongful Death Claims
            </h2>

            {/* Short accent underline */}
            <div className="w-12 h-[3px] bg-primary mb-10" />

            {/* Quote block */}
            <div className="relative">
              {/* Large decorative open-quote */}
              <span
                className="absolute -top-6 -left-3 text-[100px] leading-none text-white/[0.07] font-serif select-none pointer-events-none"
                aria-hidden="true"
              >
                &#8220;
              </span>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed italic font-medium max-w-lg relative z-10 pl-2">
                No settlement brings a loved one back. What it can do is give a family the financial footing to get through an impossible stretch of time.
              </p>
            </div>

          </div>

          {/* Subtle radial red glow at top-left */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
};

export default JusticeSecuredSection;
