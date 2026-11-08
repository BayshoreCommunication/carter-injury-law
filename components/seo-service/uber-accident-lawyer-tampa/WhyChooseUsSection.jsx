"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { FileSearch, MessageSquare, DollarSign, FileCheck, ShieldAlert, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: FileSearch,
      title: "An Individual Review of the Circumstances Behind Each Crash",
      description: "Every single rideshare accident features unique details that require a completely customized legal court battle plan. We carefully evaluate your specific crash to figure out the absolute best way to secure money.",
    },
    {
      icon: MessageSquare,
      title: "Assistance With Complicated Insurance Communications",
      description: "Our office handles all stressful phone calls and emails from the annoying insurance company claims adjusters. We protect you from accidentally saying something harmless that they later twist to ruin your case.",
    },
    {
      icon: DollarSign,
      title: "A Contingency Fee Arrangement With Terms Explained in Advance",
      description: "You deserve elite legal representation without draining your savings account to pay an hourly attorney fee. We explain our simple no win no fee payment structure before we ever start working together.",
    },
    {
      icon: FileCheck,
      title: "Practical Guidance on Medical and Financial Documentation",
      description: "You must keep perfect records of your physical pain and missed work hours to win big. We show you exactly how to organize your medical receipts to build a rock solid claim.",
    },
    {
      icon: ShieldAlert,
      title: "A Legal Approach That Accounts for Disputed Liability",
      description: "We always assume the other driver will lie and try to blame you for the crash. Our team gathers overwhelming physical evidence early to shut down their dishonest defense arguments right away.",
    },
    {
      icon: Gavel,
      title: "Preparation for Negotiation and Courtroom Proceedings",
      description: "We push hard at the negotiation table to settle your injury case quickly and very quietly. Our trial lawyers always stay fully prepared to fight your civil case in a public courtroom.",
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
            Why Tampa Uber Accident Victims Choose Our Law Firm
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Our dedicated team builds a customized legal strategy based on the specific facts of your crash. We offer aggressive advocacy designed to maximize your final check and completely protect your financial future.
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
                src={getSeoImage("direct-attorney-communication-uber-claims-tampa.webp", "uber-accident-lawyer-tampa").filePath}
                alt="Why Tampa Uber Accident Victims Choose Our Law Firm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                  Direct Attorney Access
                </span>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Our dedicated team builds a customized legal strategy based on the specific facts of your crash.
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

