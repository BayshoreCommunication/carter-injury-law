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
      title: "Driver Inattention at Intersections",
      image: getSeoImage("distraction.png", "tampa-motorcycle-accidents-lawyer").filePath,
      description: "Intersections are where many of the crashes involving motorcycles in Tampa occur. Often, a distracted driver checking their phone or failing to look creates a dangerous turn. You might ride responsibly but cars still pull into your path and cause severe accidents. Our Tampa motorcycle accidents lawyer investigates these crashes by reviewing all available traffic camera footage. We also gather statements from nearby witnesses to build the strongest possible case for you. Evidence confirms that the other driver had clear visibility and time to see your motorcycle approach. The duty of care is defined with precision and we establish a basis for proving their culpability at the exact time when they did not demonstrate the duty of care.",
    },
    {
      number: "02",
      title: "Unsafe Lane Changes",
      image: getSeoImage("impaired.png", "tampa-motorcycle-accidents-lawyer").filePath,
      description: "Motorcycles can be in an unseen blind spot within a split-second. Riders are given little time as the driver fails to signal for a turn and/or does not use the rearview mirror. The sharp turns call for fast thinking turns from the riders, which can lead to crashes or accidents. Our legal experts study traffic flow and vehicle positioning to prove the driver failed their duty. We use this evidence to hold the driver responsible for the sudden and dangerous change in their path.",
    },
    {
      number: "03",
      title: "Heavy Traffic Congestion",
      image: getSeoImage("weather.png", "tampa-motorcycle-accidents-lawyer").filePath,
      description: "The interstates, such as I 275 and I 4, are heavily traveled all day. Stopping and starting traffic can lead to rear end collisions and sudden unsafe driving around motorists. We evaluate your injury by looking at the traffic conditions surrounding your accident to identify specific hazards. Anger is the direct cause of many dangerous driving behaviors, especially during periods of congestion.When frustrated drivers are stuck in heavy traffic, they make poor choices that inevitably result in unsafe driving behavior.",
    },
    {
      number: "04",
      title: "Commercial Vehicle Negligence",
      image: getSeoImage("distraction.png", "tampa-motorcycle-accidents-lawyer").filePath,
      description: "Delivery trucks and commercial vehicles may need to cut corners on safety requirements when they need to get it done in a hurry.When time is of the essence, delivery trucks and commercial vehicles can be somewhat lax about safety. This occurs during the practice of driving while fatigued, making wide turns, or an inadequate warning for motorcycles sharing the roadway. We actively seek out businesses who have made speed before people's safety on the road their top priority. One part of our investigation is to consider the driver's log book and company training documentation, to ascertain if any trends of poor behaviour are present. The driver and the parent company are held liable.",
    },
    {
      number: "05",
      title: "Construction Zone Hazards",
      image: getSeoImage("impaired.png", "tampa-motorcycle-accidents-lawyer").filePath,
      description: "Construction in all areas of Tampa may result in patchy pavement, loose gravel, or lanes that are improperly marked, causing riders to lose their footing. This is particularly applicable in the nighttime or when you're in unfamiliar surroundings. We hold contractors and the government responsible for injuries that occur due to a failure of them to maintain a safe work zone. Our crew records the road hazards that have been identified at the scene prior to their removal. We then examine whether the correct warning signs were displayed or whether the construction design was a natural hazard to motorcyclists.",
    },
    {
      number: "06",
      title: "Hazardous Weather Conditions",
      image: getSeoImage("weather.png", "tampa-motorcycle-accidents-lawyer").filePath,
      description: "Florida sudden downpours reduce visibility and create slick roads within minutes. Riders are especially vulnerable when drivers fail to adjust their speed or following distance during a storm. We are determining if the driver failed to take enough precautions during the recent stormy weather. Even if rain caused the accident, the law still expects that drivers operate with necessary care. We gathered weather data and witness testimony to show that the other driver was operating recklessly given the environmental conditions at the time.",
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
            <span className="text-primary block mt-1">Motorcycle Accidents in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Whether it's a busy street in Tampa or any other location, motorcyclists are always at risk when on the road. The initial action to figuring out the cause of the crash is to know how crashes occur.
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
