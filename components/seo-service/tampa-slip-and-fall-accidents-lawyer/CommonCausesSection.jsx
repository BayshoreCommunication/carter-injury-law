"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { MapPin, Search, Scale } from "lucide-react";
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
      title: "Wet Floors and Spilled Liquids",
      image: getSeoImage("distraction", "tampa-slip-and-fall-accidents-lawyer").filePath,
      description: "A puddle in a grocery aisle. A spill near a restaurant entrance that nobody wiped up. These situations happen daily across Tampa, and when staff skips the cleanup or forgets to put out a warning sign, customers get hurt. Injuries from wet floor falls are rarely minor and often require weeks of medical attention.",
      location: "Grocery Stores & Restaurants",
    },
    {
      number: "02",
      title: "Uneven Sidewalks and Damaged Walkways",
      image: getSeoImage("impaired", "tampa-slip-and-fall-accidents-lawyer").filePath,
      description: "There are lots of broken pavement and concrete edges that are lifted in older commercial corridors and residential blocks of Tampa. They can be hard to spot at night or when you're carrying something. If a sidewalk slab lifts up one-half inch, it could send a person to the emergency room.",
      location: "Commercial Corridors & Sidewalks",
    },
    {
      number: "03",
      title: "Unsafe Stairways and Missing Handrails",
      image: getSeoImage("weather", "tampa-slip-and-fall-accidents-lawyer").filePath,
      description: "Florida building codes make specific requirements for a stairway. Install handrails, proper lighting and slip-resistant steps on each step. If the apartment building, office complex or public facility does not meet those requirements, then falls are completely predictable and completely preventable.",
      location: "Apartments & Commercial Stairs",
    },
    {
      number: "04",
      title: "Poor Lighting in Public and Commercial Spaces",
      image: getSeoImage("traffic-congestion", "tampa-slip-and-fall-accidents-lawyer").filePath,
      description: "Dark parking lots, poorly lighted hallways, and poorly lit building entrances make it truly difficult to see hazards on the ground. The law in Florida considers poor lighting as being a condition of the property that the owner has a duty to fix and any injury caused by this is definitely included in the premises liability.",
      location: "Parking Lots & Entrances",
    },
    {
      number: "05",
      title: "Cluttered Walkways and Falling Merchandise",
      image: getSeoImage("driver-fatigue", "tampa-slip-and-fall-accidents-lawyer").filePath,
      description: "Aisle boxes left open, equipment in front of an opening, shelves too high. These conditions occur in retail stores and warehouses on a regular basis. If the customer stumbles over an object or is hit by a falling object, the company is responsible for what happens.",
      location: "Retail Stores & Warehouses",
    },
    {
      number: "06",
      title: "Hazardous Conditions at Hotels, Restaurants, and Retail Stores",
      image: getSeoImage("evidence-timing", "tampa-slip-and-fall-accidents-lawyer").filePath,
      description: "Tampa draws heavy visitor traffic year-round, and that volume doesn't reduce the obligation to maintain safe premises. Hotels, restaurants, and retail establishments that invite the public through their doors carry a legal duty to inspect, identify hazards, and fix them before someone gets hurt.",
      location: "Tampa Hospitality & Entertainment",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 
            className="text-3xl md:text-[44px] font-extrabold text-secondary tracking-tight leading-[1.15]"
          >
            Common Causes of Slip and Fall Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Falls don&apos;t happen in a vacuum. Behind almost every serious slip and fall is a property owner who knew, or should have known, that a dangerous condition existed and chose to do nothing about it.
          </p>
        </motion.div>

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

                {cause.location && (
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-secondary mt-auto">
                    <MapPin className="w-4.5 h-4.5 text-primary shrink-0 animate-bounce" />
                    <span className="text-[13px] font-extrabold tracking-wide uppercase">
                      {cause.location}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              <p className="text-lg md:text-[22px] font-bold text-white tracking-wide uppercase">
                Holding Negligent Property Owners Accountable
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed max-w-4xl font-medium">
                Property owners across Tampa have a legal duty to inspect and fix hazardous conditions. When they fail, we build the evidence to hold them accountable.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
