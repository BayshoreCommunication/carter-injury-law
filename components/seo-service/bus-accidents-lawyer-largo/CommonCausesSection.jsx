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
      title: "Driver Inattention Behind the Wheel",
      image: getSeoImage("distraction", "bus-accidents-lawyer-largo").filePath,
      description: "Distracted driving remains a primary cause of major bus collisions across the busy local road network. Operators often fail to observe traffic patterns while focusing on personal devices or internal bus communications. This creates hazards for passengers and nearby motorists sharing these congested local streets. Our team thoroughly reviews electronic logs to verify if the driver engaged in any prohibited activity. Proving such negligence ensures we establish a solid foundation for your personal injury claim process.",
    },
    {
      number: "02",
      title: "Failure to Inspect and Maintain Buses",
      image: getSeoImage("impaired", "bus-accidents-lawyer-largo").filePath,
      description: "Transit agencies operate on strict preventive maintenance schedules to keep their fleet vehicles running safely. When they skip routine inspections, they breach their legal duty of care to all bus passengers. This oversight creates liability for mechanical failures like brake malfunctions or critical steering defects. Such failures are often identifiable issues that should be addressed before the bus leaves the depot. We obtain internal service logs to demonstrate a clear pattern of corporate neglect regarding vehicle safety.",
    },
    {
      number: "03",
      title: "Unsafe Passenger Loading and Unloading Practices",
      image: getSeoImage("weather", "bus-accidents-lawyer-largo").filePath,
      description: "Drivers must strictly adhere to safety protocols before passengers board or exit the transit vehicle. Rushing this process often results in slip and fall injuries at the bus curb stops. We analyze transit security footage to document these unsafe operational habits that lead to serious injuries. These preventable accidents place vulnerable commuters at immediate risk during their daily trips through local neighborhoods. Proper training would ensure drivers maintain a secure environment for every rider on the bus.",
    },
    {
      number: "04",
      title: "Traffic Congestion Along Largo's Major Roadways",
      image: getSeoImage("traffic-congestion", "bus-accidents-lawyer-largo").filePath,
      description: "Dense traffic requires drivers to maintain wider following distances to account for the bus's increased mass. When drivers fail to adjust their driving habits for local congestion, the risk of accidents increases. Heavy traffic on major corridors like West Bay Drive complicates the safe operation of large buses. We analyze local traffic density data to establish how current congestion patterns contributed to your crash. Identifying these environmental factors helps build a compelling case against the responsible transit company operators.",
    },
    {
      number: "05",
      title: "Bus Driver Fatigue During Long Shifts",
      image: getSeoImage("driver-fatigue", "bus-accidents-lawyer-largo").filePath,
      description: "Operating a commercial transit vehicle demands high levels of sustained mental alertness throughout the entire shift. When operators exceed mandated federal hours-of-service limits, their reaction times degrade substantially during long routes. This fatigue places every passenger and surrounding motorist in immediate danger on the public roadways. Our firm audits driver logbooks to verify strict compliance with all applicable safety and rest regulations. Holding companies accountable for scheduling practices remains vital to preventing these entirely avoidable driver accidents.",
    },
    {
      number: "06",
      title: "Negligent Actions by Other Motorists",
      image: getSeoImage("negligent-motorists", "bus-accidents-lawyer-largo").filePath,
      description: "Not every accident on the road is caused by the bus driver or the transit company. Reckless third-party drivers who speed or ignore traffic signals often trigger severe collisions with buses. We investigate every vehicle involved in the crash to identify all possible sources of legal liability. Other motorists must be held fully accountable for their role in causing your specific collision event. Securing evidence of external driver negligence strengthens your overall claim against all involved insurance entities.",
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
            <span className="text-primary block mt-1">Bus Accidents in Largo</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Accidents happen for many reasons that require a thorough, professional investigation. Understanding the specific cause helps us build a strong, successful claim for you.
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
                Federal and state regulations govern commercial transit operations. When a carrier violates safety protocols, we pull logs, records, and telemetry data to prove it.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
