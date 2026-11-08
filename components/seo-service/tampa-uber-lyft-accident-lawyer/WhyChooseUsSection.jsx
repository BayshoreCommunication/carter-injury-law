"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { UserCheck, MessageSquare, DollarSign, HelpCircle, Scale, Car } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: UserCheck,
      title: "Personalized Attention From an Experienced Injury Law Team",
      description: "You are a person facing a serious crisis. We treat you with respect and genuine compassion. You will never feel like just another file folder. Our staff learns the specific facts of your life.",
    },
    {
      icon: MessageSquare,
      title: "Direct Attorney Communication Throughout Your Claim",
      description: "Paralegals do not run your entire case here. You will speak directly with your attorney often. We answer your questions quickly and honestly. Direct access helps you feel secure during a difficult time.",
    },
    {
      icon: DollarSign,
      title: "No Attorney Fees Unless We Recover Compensation",
      description: "Legal fees should never prevent you from seeking justice. We work strictly on a contingency fee basis. You pay nothing unless we win your case. This structure aligns our financial interests directly with yours.",
    },
    {
      icon: HelpCircle,
      title: "Clear Explanations of Insurance and Legal Options",
      description: "The legal system uses confusing and outdated language. We translate legal jargon into plain English. You need clear facts to make good decisions. We explain the exact meaning of every legal document.",
    },
    {
      icon: Scale,
      title: "Preparation for Settlement Discussions and Litigation",
      description: "Insurance companies respect lawyers who are willing to fight. We prepare every claim as if trial is inevitable. This intense preparation maximizes your settlement value. Strong cases settle faster when defendants know they will lose.",
    },
    {
      icon: Car,
      title: "Experience Handling Auto Accident and Complex Injury Claims",
      description: "Rideshare laws change frequently in Florida. We study these specific statutes to stay ahead. Our background helps us untangle messy insurance disputes easily. We know how corporate lawyers defend these exact claims.",
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
            Why Tampa Rideshare Accident Victims Choose Our Law Firm
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The right legal team changes everything. Our approach puts your physical and financial needs first.
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
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-gray-100 h-[520px]">
              <Image
                src={getSeoImage("direct-attorney-access-tampa-uber-lyft-claims.webp", "tampa-uber-lyft-accident-lawyer").filePath}
                alt={getSeoImage("direct-attorney-access-tampa-uber-lyft-claims.webp", "tampa-uber-lyft-accident-lawyer").altText || "Attorney David J. Carter - Dedicated Rideshare Counsel in Tampa"}
                title={getSeoImage("direct-attorney-access-tampa-uber-lyft-claims.webp", "tampa-uber-lyft-accident-lawyer").title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Direct Attorney Access
                </p>
                <p className="text-lg font-bold leading-snug">
                  Experienced Uber and Lyft accident representation in Tampa and throughout Hillsborough County.
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

