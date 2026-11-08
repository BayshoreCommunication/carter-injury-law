"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users2, Smartphone, DollarSign, FileText, Layers } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: Users2,
      title: "Conflicting Statements From Rideshare Drivers and Other Motorists",
      description: "People naturally try to avoid blame after a crash. Opposing drivers will likely point fingers at each other. Insurance adjusters use this confusion to deny injury claims. Independent witness statements prove what really happened. Dashcam video also stops dishonest drivers from lying.",
    },
    {
      icon: Smartphone,
      title: "Insurance Disputes Over the Driver's App Status",
      description: "Florida Statute 627.748 dictates coverage based on app status. Insurance companies often argue the driver was offline. We need exact timestamp data to prove a driver was on duty. We demand these digital records from the rideshare corporation. This proves which policy applies to your claim.",
    },
    {
      icon: DollarSign,
      title: "Early Settlement Offers That Undervalue Long-Term Injuries",
      description: "Adjusters often offer fast cash right after an accident. These early checks rarely cover future medical needs. A signed release blocks you from seeking more money later. You must calculate long-term costs before accepting anything. Wait until doctors understand your permanent physical limitations.",
    },
    {
      icon: FileText,
      title: "Gaps Between Medical Documentation and Reported Symptoms",
      description: "A late visit to the doctor is not beneficial for your case. In Florida, the law stipulates that treatment must be sought within 14 days. Insurance companies say delays indicate that you were not seriously injured. You can find a direct connection between your injuries and the accident in your medical records. It is important to take your doctor's instructions to the letter.",
    },
    {
      icon: Layers,
      title: "Uncertainty Over Which Insurance Policy Should Pay First",
      description: "Multiple policies apply in rideshare accidents. A one million dollar corporate policy activates during active rides. A claim against the wrong policy delays your payout. We untangle these coverage layers to maximize your financial recovery. We speed up the process by identifying the priority of payments.",
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
                  src={getSeoImage("dedicated-legal-counsel-tampa-uber-lyft-accident.webp", "tampa-uber-lyft-accident-lawyer").filePath}
                  alt="Why Injured Tampa Rideshare Passengers and Drivers Risk Losing Compensation Without Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Rideshare Claim Protection
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Insurance companies prioritize their own profits over your recovery. Fighting them alone puts your rightful compensation in great danger.
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
                Rideshare Claim Protection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Injured Tampa Rideshare Passengers and Drivers Risk Losing Compensation Without Legal Representation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Insurance companies prioritize their own profits over your recovery. Fighting them alone puts your rightful compensation in great danger. Insurance disputes become more complicated when multiple vehicles, commercial policies or serious injuries are involved. Carter Injury Law also assists clients through its services for a{" "}
                <Link href="/tampa-personal-injury-lawyers-firm" className="text-primary hover:underline font-semibold">
                  Tampa personal injury lawyers firm
                </Link>{" "}
                and helps injured people understand their options after collisions involving commercial vehicles.
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

