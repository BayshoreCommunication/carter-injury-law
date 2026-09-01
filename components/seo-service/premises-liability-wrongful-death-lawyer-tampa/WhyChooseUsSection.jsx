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
      title: "Extensive Experience Investigating Unsafe Property Conditions",
      description: "More than a decade of premises liability and wrongful death litigation means Carter Injury Law knows where to look, who to call, and how to build an argument that survives contact with a defense team funded by commercial insurance money. Experience in this area isn't interchangeable. The specific knowledge of how Tampa's property management landscape operates matters in every investigation the firm runs.",
    },
    {
      icon: Clock,
      title: "Thorough Preservation of Time-Sensitive Evidence",
      description: "The firm moves on evidence before property owners have had time to realize they should be worried about it. That early action has made the difference in cases where a few more days of delay would have permanently eliminated the most important proof available to the family.",
    },
    {
      icon: UserCheck,
      title: "Direct Attorney Representation From Start to Finish",
      description: "David Carter handles the case. Not a team of rotating associates. Not a case coordinator who relays messages. The attorney the family meets at the start is the attorney who negotiates, litigates, and, if necessary, stands up in court on their behalf. That's not the standard in a high-volume personal injury environment, but it's the standard at Carter Injury Law. David Carter secured a $400,000 settlement for a client following a complex litigation matter involving serious injuries and an insurer that refused to cooperate. The settlement covered all medical expenses in full.",
    },
    {
      icon: Gavel,
      title: "Trial Preparation Against Property Owners and Corporate Defendants",
      description: "Every case is prepared as if it will go before a Hillsborough County jury. That posture is what gives the firm genuine leverage in settlement negotiations. When a property insurer knows the opposing attorney is actually ready for trial, the conversation about fair compensation changes.",
    },
    {
      icon: MapPin,
      title: "Local Knowledge of Tampa Premises Liability Litigation",
      description: "Hillsborough County courts, local property management company practices, Tampa's commercial real estate landscape, the hospitality industry in the Tampa Bay area — Carter Injury Law's familiarity with all of it shapes how the firm investigates and how it argues. Local knowledge isn't a marketing line. It's an actual advantage when you're building a case in front of people who know this area.",
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
            Why Tampa Families Choose Our Law Firm During Their Darkest Hours
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Families dealing with a wrongful death aren't looking for a firm that processes cases. They're looking for one that actually cares what happens to them. These are the reasons families across Tampa consistently choose Carter Injury Law when the loss they've suffered demands real legal accountability.
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
                src={getSeoImage("local-representation", "premises-liability-wrongful-death-lawyer-tampa").filePath}
                alt="Why Tampa Families Choose Our Law Firm"
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
                  Direct Attorney Access From Start to Finish
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
