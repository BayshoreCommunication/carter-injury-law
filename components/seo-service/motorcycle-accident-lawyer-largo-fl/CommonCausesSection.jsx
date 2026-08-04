"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React from "react";
import Image from "next/image";
import { Search, Scale } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CommonCausesSection = () => {
  const causes = [
    {
      number: "01",
      title: "Drivers Failing to Yield to Motorcyclists",
      image: getSeoImage("distraction.png", "motorcycle-accident-lawyer-largo-fl").filePath,
      description: "Many Largo motorcycle accidents happen because drivers fail to yield the right of way to riders. Motorcycles appear smaller and harder to spot than cars when pulling out of busy side streets. Drivers often misjudge the speed and distance of oncoming bikes when making their turns in traffic. This split second error causes devastating collisions that leave riders with serious injuries needing intensive care.",
    },
    {
      number: "02",
      title: "Unsafe Left-Turn Collisions at Busy Intersections",
      image: getSeoImage("impaired.png", "motorcycle-accident-lawyer-largo-fl").filePath,
      description: "Left turn crashes rank among the most common and dangerous types of motorcycle accidents for riders. Drivers turning left across traffic frequently fail to notice an oncoming motorcycle until it is late. These intersection collisions produce high speed impacts and catastrophic injuries for the unprotected motorcycle rider involved. We investigate the intersection conditions to prove the driver was clearly at fault for your accident.",
    },
    {
      number: "03",
      title: "Distracted Driving Around Motorcycles",
      image: getSeoImage("weather.png", "motorcycle-accident-lawyer-largo-fl").filePath,
      description: "A driver glancing at a phone for a few seconds can miss a motorcycle entirely in view. Distracted driving remains one of the leading causes of crashes across Pinellas County for many riders. Riders have little protection when an inattentive driver drifts into their lane or skips blind spots. Drivers skipping these checks put our clients at serious and unnecessary risk of severe bodily harm.",
    },
    {
      number: "04",
      title: "Speeding and Aggressive Driving Behavior",
      image: getSeoImage("distraction.png", "motorcycle-accident-lawyer-largo-fl").filePath,
      description: "Speeding reduces a driver's ability to react when a motorcycle merges or changes lanes nearby daily. Aggressive habits like tailgating and weaving through traffic put riders at serious risk on roads. When speed is a factor the force of impact leads to life altering injuries for victims. We fight to hold these aggressive drivers accountable for their reckless behavior on our local roads.",
    },
    {
      number: "05",
      title: "Hazardous Road Conditions That Endanger Riders",
      image: getSeoImage("impaired.png", "motorcycle-accident-lawyer-largo-fl").filePath,
      description: "Potholes and uneven pavement create hazards that affect motorcyclists more severely than they affect other drivers. A road defect that a car barely notices can throw a rider off balance very instantly. Local governments and contractors may share liability when unsafe road conditions cause an accident for you. We identify these road hazards to prove negligence in your specific injury case for damages.",
    },
    {
      number: "06",
      title: "Impaired Drivers Causing Serious Motorcycle Crashes",
      image: getSeoImage("weather.png", "motorcycle-accident-lawyer-largo-fl").filePath,
      description: "Alcohol and drug impairment slow reaction times and cloud driver judgment behind the wheel of cars. Impaired drivers often fail to see motorcycles until a collision becomes completely unavoidable for the rider. These crashes produce severe injuries and may also support a claim for punitive damages in court. We gather evidence of impairment to ensure your claim reflects the driver's negligence for you.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-[44px] font-extrabold text-secondary tracking-tight leading-[1.15]">
            Common Causes of <br />
            <span className="text-primary block mt-1">Motorcycle Accidents in Largo</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Motorcycle accidents in Largo occur for many reasons and understanding the cause helps establish who bears responsibility. Motorcycle accident lawyer Largo FL investigates every contributing factor to build the strongest possible claim on your behalf daily. We analyze the crash circumstances to hold the negligent parties fully accountable for your serious injuries. Our investigation focuses on uncovering the truth to support your claim for full and fair damages.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {causes.map((cause, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-[20px] border border-gray-100/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 items-start mb-6">
                    <span className="text-4xl md:text-[46px] font-extrabold text-primary leading-none tracking-tight">
                      {cause.number}
                    </span>
                    <div className="w-px h-10 bg-gray-200 self-center" />
                    <h3 
                      className="text-base md:text-[17px] font-extrabold text-secondary leading-snug self-center tracking-tight"
                      style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                    >
                      {cause.title}
                    </h3>
                  </div>

                  <div className="w-full h-px bg-gray-100 mb-6" />

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {cause.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-secondary rounded-[20px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg z-10"
        >
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-20">
            <div className="w-16 h-16 rounded-full border-[3px] border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm bg-white/5">
              <Search className="w-8 h-8" strokeWidth={2.5} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-[22px] font-bold text-white tracking-wide">
                ACCIDENT SCRUTINY AND COMPREHENSIVE INVESTIGATION
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed max-w-4xl font-medium">
                Federal and state regulations govern commercial and personal liability. When a negligent driver causes harm, we collect every piece of evidence to build the strongest possible claim for full compensation.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
