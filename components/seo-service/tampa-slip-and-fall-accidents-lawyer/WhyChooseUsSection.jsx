"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, UserCheck, Gavel, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Strong Knowledge of Florida Premises Liability Law",
      description: "Florida's premises liability framework turns on fine distinctions. What the property owner knew, when they knew it, and how their response measures against what a reasonable owner would have done. David Carter knows how to work through those questions and build a case around the answers.",
    },
    {
      icon: UserCheck,
      title: "Direct Access to Your Attorney",
      description: "David Carter handles your case and he's the one you'll actually talk to when you have questions. That level of access isn't standard at most personal injury firms.",
    },
    {
      icon: Clock,
      title: "Careful Preparation From the Beginning",
      description: "Evidence disappears and witnesses forget. Firms that get strong results are the ones that move fast and build carefully from the first day. Carter Injury Law starts working the moment a case comes in.",
    },
    {
      icon: Gavel,
      title: "No Attorney Fees Unless We Recover Compensation",
      description: "No upfront costs and no hourly billing. The firm gets paid only when you do. That structure exists so that financial pressure during recovery doesn't prevent an injured person from getting the representation they need.",
    },
    {
      icon: MapPin,
      title: "Honest Advice You Can Count On",
      description: "David Carter won't overpromise to get you through the door. You'll hear an honest assessment of what the claim is worth, what obstacles exist, and what you can realistically expect. That candor is something clients consistently point to when describing their experience with the firm.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Why Choose Carter Injury Law
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Why Tampa Injury Victims Choose Our Law Firm After a Slip and Fall Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            There's no shortage of personal injury firms in Tampa. What separates Carter Injury Law is the way the firm actually handles cases and treats the people it represents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {reasons.map((item, idx) => {
              const IconComp = item.icon;
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
                    <IconComp className="w-5 h-5" />
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

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-gray-100 h-[500px]">
              <Image
                src={getSeoImage("local-representation", "tampa-slip-and-fall-accidents-lawyer").filePath}
                alt="Why Tampa Injury Victims Choose Our Law Firm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Dedicated & Responsive
                </p>
                <p className="text-lg font-bold leading-snug">
                  Direct Access to Your Attorney Throughout Your Case
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
