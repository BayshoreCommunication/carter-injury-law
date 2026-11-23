"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FreeEvaluationCard from "./FreeEvaluationCard";

const HeroHeader = ({
  bgImage = getSeoImage("tampa-fl-bicycle-accident-injury-lawyer-skyline-bg.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
  lawyerLeft = getSeoImage("david-carter-tampa-fl-bicycle-accident-attorney-us.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
  titlePart1 = "Bicycle Accident Injury Lawyer Tampa FL :",
  titlePart2 = "Legal Help for Injured Cyclists",
  subtitle = "A collision with a motor vehicle can completely upend your life. Severe physical injuries often bring mounting medical bills and lost income. Bicycle repairs and unclear insurance coverage can add to the stress after an accident. You need an experienced bicycle accident injury lawyer Tampa FL by your side. Attorney David Carter truly understands the unique challenges that injured cyclists face today. We will review your claim details and outline your available legal options. Carter Injury Law is an established firm protecting the injured. We fight passionately for cyclists in our local community.",
}) => {
  const lawyerImg = getSeoImage("david-carter-tampa-fl-bicycle-accident-attorney-us.webp", "bicycle-accident-lawyer-tampa-fl");
  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat hero-section-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch min-h-[520px] lg:min-h-[580px]">
          
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center pt-2 pb-10 lg:py-20 pr-0 lg:pr-10 order-2 lg:order-1">
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-[48px] font-extrabold text-white lg:text-secondary leading-[1.1] tracking-tight animate-none break-words"
              >
                {titlePart1} <br />
                <span className="text-primary">{titlePart2}</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 lg:text-gray-600 text-base sm:text-[17px] leading-relaxed max-w-xl font-medium animate-none"
              >
                {subtitle}
              </motion.p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 relative flex items-end justify-center h-[280px] sm:h-[350px] lg:h-auto overflow-hidden lg:overflow-visible order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[95%] max-w-[500px] lg:max-w-none mx-auto flex items-end justify-center z-10 select-none pointer-events-none"
            >
              <div 
                className="absolute bottom-[-50px] left-0 w-full h-full z-10 lawyer-image-container"
                style={{ transformOrigin: "bottom center" }}
              >
                <Image
                  src={lawyerLeft}
                  alt={lawyerImg.altText || "Attorney David Carter"}
                  title={lawyerImg.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent z-20 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        .lawyer-image-container {
          transform: scale(1.22) translateY(-96px);
        }
        .custom-card-margin {
          margin-top: -64px !important;
        }
        .custom-bar-margin {
          margin-top: -80px !important;
          padding-top: 96px !important;
        }
        @media (max-width: 1023px) {
          .hero-section-bg {
            background-image: none !important;
            background-color: #1E2538 !important;
          }
          .custom-card-margin {
            margin-top: 24px !important;
          }
          .custom-bar-margin {
            margin-top: 0 !important;
            padding-top: 48px !important;
          }
          .lawyer-image-container {
            transform: scale(1.05) translateY(0) translateX(0) !important;
          }
        }
        @media (max-width: 639px) {
          .custom-card-margin {
            margin-top: 16px !important;
          }
          .custom-bar-margin {
            margin-top: 0 !important;
            padding-top: 36px !important;
          }
        }
      `}</style>

      <div id="case-evaluation" className="relative w-full z-30 custom-card-margin px-4 sm:px-6 md:px-8">
        <div className="max-w-[1520px] mx-auto w-full">
          <FreeEvaluationCard />
        </div>
      </div>

      <div className="w-full bg-secondary pb-12 px-4 sm:px-6 md:px-8 custom-bar-margin z-20 relative" />
    </section>
  );
};

export default HeroHeader;

