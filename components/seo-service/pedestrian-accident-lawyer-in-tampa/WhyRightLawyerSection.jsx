"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Clock, Layers, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: ShieldAlert,
      title: "Insurance Companies Looking for Shared Fault",
      description: "Florida runs on a modified comparative negligence system. That means if the insurer can pin any portion of blame on you, your compensation drops by that amount. Adjusters are trained specifically to find those openings. A single sentence in a recorded call can be enough to shift part of the fault your way without you ever realizing it happened.",
    },
    {
      icon: Clock,
      title: "Important Evidence Can Disappear Quickly",
      description: "Surveillance footage from a nearby shop gets overwritten, sometimes within 48 hours. Witnesses stop being reachable. Physical marks on the road disappear after rain. Once that evidence is gone, it does not come back. Calling an attorney quickly is often the only way to make sure the right people get notified before the footage is lost.",
    },
    {
      icon: Layers,
      title: "Serious Injuries Often Receive Lower Settlement Offers",
      description: "Insurance companies know that injured people are under pressure to pay their bills. That pressure is exactly why early offers are usually low. The insurer is counting on the victim saying yes before they understand what the case is actually worth. Signing that release closes the door permanently on any additional recovery.",
    },
    {
      icon: Scale,
      title: "Delayed Legal Action Can Reduce the Strength of a Claim",
      description: "Every week that passes makes the case a little harder to build. Witnesses forget what they saw. Records become harder to pull. The accident fades from the memories of everyone who was there. Getting an attorney involved early keeps the investigation moving while the details are still fresh and the evidence still exists.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-gray-100"
            >
              <div className="relative w-full h-[400px] sm:h-[480px]">
                <Image
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "pedestrian-accident-lawyer-in-tampa").filePath}
                  alt="Why Injured Pedestrians Lose Out on Compensation Without Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protection For Injury Victims
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Insurance adjusters move quickly to minimize claims. Representation protects your financial recovery.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
                Protection For Pedestrian Victims
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Injured Pedestrians Lose Out on Compensation Without Legal Representation After an Accident
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                After a pedestrian accident, insurance companies may look for ways to reduce what they have to pay. One common strategy is to argue that the injured pedestrian shares responsibility for the accident.
              </p>
            </motion.div>

            <div className="space-y-6">
              {points.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyRightLawyerSection;
