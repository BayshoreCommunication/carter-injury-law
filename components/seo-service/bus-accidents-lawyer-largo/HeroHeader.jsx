"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Award, Star, MessageSquare, ShieldCheck, User, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import FreeEvaluationCard from "./FreeEvaluationCard";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(end);

  useEffect(() => {
    const endNum = typeof end === "number" ? end : parseInt(end.toString().replace(/,/g, ""), 10);
    if (isNaN(endNum)) return;

    setCount(0);

    const totalFrames = 60;
    const frameDuration = duration / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(easeProgress * endNum);
      
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(endNum);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HeroHeader = ({
  bgImage = getSeoImage("hero-bg", "bus-accidents-lawyer-largo").filePath,
  lawyerLeft = getSeoImage("carter-attorney", "bus-accidents-lawyer-largo").filePath,
  
  titlePart1 = "Bus Accidents Lawyer Largo,",
  titlePart2 = "Compassionate Legal Support After a Bus Accident",
  subtitle = "A bus collision in Largo creates a crisis that demands immediate action from our legal team. These crashes cause severe injuries requiring months or years of expensive and ongoing medical care. Victims face daunting claims against transit operators, so we help protect your rights effectively. Our bus accidents lawyer Largo team stands ready to pursue full compensation from day one.",
}) => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat hero-section-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Side */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center pt-2 pb-10 lg:py-20 pr-0 lg:pr-10 order-2 lg:order-1">
            <div className="space-y-6">
              
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[13px] font-extrabold tracking-widest text-primary uppercase block"
              >
                Bus Accidents Lawyer Largo
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-[52px] font-extrabold text-white lg:text-secondary leading-[1.1] tracking-tight animate-none break-words"
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

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-1 sm:gap-4 divide-x divide-white/10 lg:divide-gray-200/60 pt-8 border-t border-white/10 lg:border-gray-200/60 max-w-md sm:max-w-xl"
              >
                
                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 lg:bg-red-50 flex items-center justify-center text-white lg:text-primary mb-2 sm:mb-3 shadow-sm hover:scale-110 transition-transform duration-300">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base md:text-md font-extrabold text-white lg:text-secondary block leading-none">
                    <CountUp end={10000} suffix="+" />
                  </span>
                  <span className="text-[9px] sm:text-xs text-gray-400 lg:text-gray-500 font-bold uppercase tracking-wider mt-1.5 leading-tight">
                    Clients Helped
                  </span>
                </div>

                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 lg:bg-red-50 flex items-center justify-center text-white lg:text-primary mb-2 sm:mb-3 shadow-sm hover:scale-110 transition-transform duration-300">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base md:text-md font-extrabold text-white lg:text-secondary block leading-none">
                    Millions Won
                  </span>
                  <span className="text-[9px] sm:text-xs text-gray-400 lg:text-gray-500 font-bold uppercase tracking-wider mt-1.5 leading-tight">
                    for Our Clients
                  </span>
                </div>

                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 lg:bg-red-50 flex items-center justify-center text-white lg:text-primary mb-2 sm:mb-3 shadow-sm hover:scale-110 transition-transform duration-300">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white lg:text-primary fill-white lg:fill-primary" />
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base md:text-md font-extrabold text-white lg:text-secondary block leading-none">
                    <CountUp end={5} /> Star Rated
                  </span>
                  <span className="text-[9px] sm:text-xs text-gray-400 lg:text-gray-500 font-bold uppercase tracking-wider mt-1.5 leading-tight">
                    by Our Clients
                  </span>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Right Side */}
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
                  alt="Attorney David Carter"
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

      <div className="relative w-full z-30 custom-card-margin px-4 sm:px-6 md:px-8">
        <div className="max-w-[1520px] mx-auto w-full">
          <FreeEvaluationCard />
        </div>
      </div>

      <div className="w-full bg-secondary text-white pb-12 px-4 sm:px-6 md:px-8 custom-bar-margin z-20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[1320px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-8 lg:gap-x-0 lg:divide-x lg:divide-white/15 pt-8 border-t border-white/5"
        >
          <div className="flex items-start gap-4 lg:px-6 hover:translate-x-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/90 shrink-0">
              <MessageSquare className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-[13px] font-extrabold tracking-wider uppercase text-white">
                Free Consultation
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-normal">
                No obligation. Ever.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 lg:px-6 hover:translate-x-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/90 shrink-0">
              <ShieldCheck className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-[13px] font-extrabold tracking-wider uppercase text-white">
                No Fee Unless We Win
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-normal">
                You don't pay unless we win.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 lg:px-6 hover:translate-x-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/90 shrink-0">
              <User className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-[13px] font-extrabold tracking-wider uppercase text-white">
                Direct Attorney Access
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-normal">
                Talk to your lawyer, not a case manager.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 lg:px-6 hover:translate-x-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/90 shrink-0">
              <MapPin className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-[13px] font-extrabold tracking-wider uppercase text-white">
                Largo-Based Representation
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-normal">
                Local lawyers. Local results. Proudly serving Pinellas County.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHeader;
