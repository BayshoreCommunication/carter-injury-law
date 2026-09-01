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
      title: "Drivers Failing to Yield at Crosswalks",
      image: getSeoImage("distraction", "pedestrian-accident-lawyer-in-tampa").filePath,
      description: "Florida law is clear on this. A driver approaching a marked crosswalk has to stop. Many drivers in Tampa treat that rule as optional. They roll through without slowing and without looking. Someone crossing legally takes the full force of that decision. The injuries from these collisions are often serious because the pedestrian has nowhere to go.",
      location: "Marked Crosswalks & Intersections",
    },
    {
      number: "02",
      title: "Distracted Driving in Busy Urban Areas",
      image: getSeoImage("impaired", "pedestrian-accident-lawyer-in-tampa").filePath,
      description: "A driver going 35 miles per hour who looks at a phone for 2 seconds covers roughly 100 feet without watching the road. That is more than enough distance to hit someone stepping off a curb in downtown Tampa or near Westshore. Distracted driving has quietly become one of the top causes of pedestrian deaths in Hillsborough County.",
      location: "Downtown Tampa & Westshore Corridors",
    },
    {
      number: "03",
      title: "Speeding Through Residential Neighborhoods",
      image: getSeoImage("weather", "pedestrian-accident-lawyer-in-tampa").filePath,
      description: "Residential streets were built for low speeds. The posted limits exist for a reason. When someone blows through a neighborhood in Seminole Heights or Carrollwood, a pedestrian stepping into the road has almost no chance. Higher speed means less time to react and much worse injuries when contact is made.",
      location: "Seminole Heights & Carrollwood",
    },
    {
      number: "04",
      title: "Dangerous Left-Turn and Right-Turn Collisions",
      image: getSeoImage("traffic-congestion", "pedestrian-accident-lawyer-in-tampa").filePath,
      description: "Turning accidents catch pedestrians off guard because they often have the legal right to be there. The driver is watching for oncoming cars and never checks the crosswalk. By the time they see the person, it is already too late to do anything about it. These crashes happen across Tampa every week.",
      location: "Tampa Busy Intersection Crossings",
    },
    {
      number: "05",
      title: "Drunk and Drug-Impaired Driving",
      image: getSeoImage("driver-fatigue", "pedestrian-accident-lawyer-in-tampa").filePath,
      description: "Alcohol or drugs may cause loss of concentration, reduced reaction, and poor visibility of hazards. These issues are further compounded at night or in bad weather, when pedestrian traffic may be harder to see. Pedestrian accidents caused by drunk or impaired drivers tend to produce the worst injuries the firm sees.",
      location: "Late Night & High-Traffic Corridors",
    },
    {
      number: "06",
      title: "Poor Visibility During Nighttime and Severe Weather",
      image: getSeoImage("evidence-timing", "pedestrian-accident-lawyer-in-tampa").filePath,
      description: "Tampa gets a lot of rain and has stretches of road that are poorly lit after dark. Florida law expects drivers to slow down and pay more attention when conditions make seeing harder. When they do not do that and someone gets hurt, that failure can be the foundation of a negligence claim.",
      location: "Unlit Roads & Rainy Traffic Hazards",
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
            Common Causes of Pedestrian Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Tampa is one of the most dangerous cities in Florida for people walking. The reasons are not hard to find once you spend time on the roads here.
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
                Holding Negligent Drivers Accountable Across Tampa
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed max-w-4xl font-medium">
                Drivers in Tampa have a clear duty to yield and watch for pedestrians. When they fail, we gather the evidence to protect victims and hold negligent motorists responsible.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
