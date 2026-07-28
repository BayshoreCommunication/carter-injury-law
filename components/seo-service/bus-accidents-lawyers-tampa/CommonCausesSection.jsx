"use client";
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
      title: "Distracted or Fatigued Bus Drivers",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/distraction.png",
      description: "Long work shifts wear drivers down quickly and reduce their ability to react to sudden road hazards. A quick glance at a radio or phone often causes a serious highway collision for passengers. Fatigue slows human reflexes right when a split-second reaction matters the absolute most for safety. Companies ignoring strict hours of service rules are asking for trouble on the public roadway daily.",
    },
    {
      number: "02",
      title: "Speeding and Reckless Operation of Passenger Buses",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/impaired.png",
      description: "A fully loaded bus requires significant distance to stop safely in emergency traffic situations on highways. Excessive speeding erases that vital safety margin in a single heartbeat while traveling the road. Reckless driving on major highways like the Selmon Expressway turns routine rides into absolute disasters. We investigate speed data to prove the driver operated the bus without necessary caution for passengers.",
    },
    {
      number: "03",
      title: "Poor Bus Maintenance and Mechanical Failures",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/weather.png",
      description: "Critical systems like brakes and steering require regular upkeep to ensure passenger safety on the road. Skipped inspections and delayed repairs appear often in our bus accidents lawyer tampa litigation cases. Companies cutting maintenance corners put every single passenger at risk of serious physical injury and trauma. Maintenance logs become key evidence to prove negligence once the legal process begins for clients.",
    },
    {
      number: "04",
      title: "Unsafe Lane Changes and Blind Spot Collisions",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/distraction.png",
      description: "Buses carry massive blind spots that make changing lanes an extremely dangerous maneuver for other motorists. A driver failing to check mirrors can sideswipe smaller cars without any warning to passengers. These collisions happen in an instant right in the middle of heavy Tampa traffic patterns. Careful observation remains the only way for drivers to prevent these common accidents from occurring.",
    },
    {
      number: "05",
      title: "Dangerous Intersections and Heavy Tampa Traffic",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/impaired.png",
      description: "Specific Tampa intersections frequently see bus accidents due to poor sightlines and confusing signage for drivers. Constant gridlock and traffic volume add significant risk to every turn on the local road. We study the history of locations because past incidents strengthen your negligence claim for compensation. Prior accidents prove the location was unsafe long before your specific crash occurred in Tampa.",
    },
    {
      number: "06",
      title: "Negligent School Bus, Transit Bus, and Charter Bus Operations",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/weather.png",
      description: "School buses and transit buses answer to very different sets of safety regulations in Florida law. A company that skips driver training or ignores safety complaints invites serious accidents for passengers. We identify which specific local or state regulations applied to your unique bus crash event. Proving a violation of these standards builds the strongest possible case for your rightful compensation.",
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
            <span className="text-primary block mt-1">Bus Accidents in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Tampa roads are unpredictable and become dangerous when a heavy bus enters the local traffic mix. Tight schedules and constant tourist traffic significantly raise the danger levels for every single local driver. We know exactly where to investigate for liability once we identify the cause of your crash. Federal safety rules govern these commercial operators and violations often form the backbone of your claim.
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
              <h4 className="text-lg md:text-[22px] font-bold text-white tracking-wide">
                ACCIDENT SCRUTINY AND COMPREHENSIVE INVESTIGATION
              </h4>
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
