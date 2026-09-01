"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Clock, Layers, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: Clock,
      title: "Critical Evidence Can Disappear Within Days",
      description: "Most commercial surveillance systems overwrite footage automatically, sometimes within 24 hours. Warning signs get taken in. Damaged conditions get patched. By the time an unrepresented victim starts gathering evidence, the physical proof may already be gone.",
    },
    {
      icon: ShieldAlert,
      title: "Property Owners Often Deny They Knew About the Hazard",
      description: "Under Florida premises liability law, the property owner's knowledge of the condition matters. Denying prior knowledge is a standard defense. An attorney knows how to pull inspection logs, maintenance complaints, and prior incident reports to show that the owner knew about the problem long before the fall occurred.",
    },
    {
      icon: Layers,
      title: "Insurance Companies Challenge the Cause of Your Injuries",
      description: "Adjusters dig through prior medical records looking for old injuries to blame. They ask for recorded statements and use your own words against you later. Getting legal representation before you speak with anyone from the insurance company is one of the most protective steps you can take after a fall.",
    },
    {
      icon: Scale,
      title: "Early Settlements Rarely Reflect the Full Impact of a Serious Injury",
      description: "A fast offer sounds like relief but it rarely reflects what the case is actually worth. Insurance companies move quickly because early settlement is cheap. Accepting it closes the claim permanently, even if your condition gets significantly worse in the months that follow.",
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
                  src={getSeoImage("review", "tampa-slip-and-fall-accidents-lawyer").filePath}
                  alt="Why Injured Tampa Victims Need Legal Representation After a Slip and Fall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Immediate Legal Action Needed
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Insurance adjusters move quickly to minimize claims. Representation protects your recovery.
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
                Protection For Injury Victims
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Injured Tampa Victims Lose Out on Compensation Without Legal Representation After a Slip and Fall Accident
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                After a slip and fall, injured victims face more than medical bills and physical pain. Without legal representation, they may lose critical evidence, overlook liable parties, or accept less compensation than their claim deserves.
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
