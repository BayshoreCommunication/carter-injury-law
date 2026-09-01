"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldCheck, MessageSquare, Clock, Gavel, Compass } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Focused Experience With Serious Injury Claims",
      description: "David Carter has spent his career on personal injury cases. That focus means he knows how insurers evaluate pedestrian accident claims, what arguments they make, and how to build a case that holds up against those tactics before they surface.",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication With Your Attorney",
      description: "Clients at Carter Injury Law talk to David. He picks up, responds, and he stays involved in every case from intake to resolution. That is rarer than most people expect from a law firm.",
    },
    {
      icon: Clock,
      title: "Detailed Preparation for Every Case",
      description: "Carter Injury Law approaches every pedestrian accident case as though it is headed to trial. That discipline shows up in stronger demand letters, better leverage in negotiation, and final outcomes that actually reflect what the case is worth.",
    },
    {
      icon: Gavel,
      title: "No Fees Unless We Recover Compensation",
      description: "The firm works on contingency. No money is owed upfront, and no fees are collected unless a recovery is made. Being hurt should not come with a price tag just for getting legal help.",
    },
    {
      icon: Compass,
      title: "Clear Guidance From Beginning to Resolution",
      description: "Clients always know where their case stands. David explains what is happening, why each decision is being made, and what to expect next. People navigating a legal claim for the first time find that kind of clarity genuinely valuable.",
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
            Why Tampa Injury Victims Choose Our Law Firm After a Pedestrian Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            There are other options in Tampa. The people who come to Carter Injury Law tend to stay, and they send others. Here is what makes the difference.
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
                src={getSeoImage("local-representation", "pedestrian-accident-lawyer-in-tampa").filePath}
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
