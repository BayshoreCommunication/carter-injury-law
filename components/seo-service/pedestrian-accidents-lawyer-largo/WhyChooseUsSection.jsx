"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldCheck, MessageSquare, Clock, Gavel, Award } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Personal Attention Throughout Every Stage of the Case",
      description: "David Carter stayed personally involved in every case from the first call to the final resolution. You are never handed off to someone you have never met. The attorney who sits down with you during your initial consultation is the same one managing your case through every stage of your claim.",
    },
    {
      icon: MessageSquare,
      title: "Direct Access to Your Attorney",
      description: "Call our firm and you will connect straight to the lawyer handling your case, without being passed around to intermediaries. Questions get answered directly and promptly. Clients repeatedly describe this as one of the most valuable differences between Carter Injury Law and firms they'd worked with before.",
    },
    {
      icon: Clock,
      title: "Careful Preparation Before Settlement Discussions",
      description: "Carter Injury Law builds the case file completely before any demand goes out. Settlement discussions happen from a position of documented strength. Insurance companies who know a case is trial-ready make different decisions than those who sense they're dealing with someone who wants to settle quickly.",
    },
    {
      icon: Gavel,
      title: "No Attorney Fees Unless Compensation Is Recovered",
      description: "Contingency representation ties the firm's outcome to yours. If Carter Injury Law doesn't win compensation for you, you don't owe attorney fees. That model exists to make real legal advocacy available to people who need it, regardless of what they have in the bank when they call.",
    },
    {
      icon: Award,
      title: "Representation Backed by Experience and Results",
      description: "Over a decade of handling Florida personal injury claims has given David Carter deep experience with disputed liability, underinsured drivers, permanent injuries, and complex multi-party cases. The results he's secured are not a website highlight reel. They're a record of what happens when cases are prepared seriously.",
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
            Why Largo Injury Victims Choose Carter Injury Law
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Carter Injury Law takes a hands-on approach to each case, with personal attention guiding the legal process from the outset.
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
                src={getSeoImage("local-representation", "pedestrian-accidents-lawyer-largo").filePath}
                alt="Why Largo Injury Victims Choose Carter Injury Law"
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
