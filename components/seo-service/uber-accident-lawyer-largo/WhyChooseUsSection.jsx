"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { HeartHandshake, MessageSquare, DollarSign, FileSpreadsheet, ShieldAlert, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: HeartHandshake,
      title: "Attention to the Circumstances Behind Each Client's Injuries",
      description: "Every client experiences a crash differently based on their health, career and family structure. We take the time to understand how your injuries specifically alter your daily life. Personalizing your narrative allows us to demand compensation that reflects the true human cost of the collision.",
    },
    {
      icon: MessageSquare,
      title: "Assistance With Insurance Questions That Delay Claim Progress",
      description: "Insurance adjusters use confusing terminology and slow response times to wear down injury victims. We take over all direct lines of communication, putting an immediate end to harassing calls and unreasonable demands for recorded statements. Our involvement forces adjusters to handle your claim professionally and promptly.",
    },
    {
      icon: DollarSign,
      title: "Fee Terms Discussed Before Representation Begins",
      description: "Transparency builds real trust between an attorney and a client. We review our written contingency fee agreement in full detail during your initial consultation so you know what to expect. You will never pay out-of-pocket retainer fees, upfront costs, or hidden administrative charges.",
    },
    {
      icon: FileSpreadsheet,
      title: "Help Organizing Medical Bills and Income Records",
      description: "Managing a stack of medical collection notices while recovering from physical trauma is exhausting. Our legal team compiles, organizes and verifies all hospital bills, doctor fees and wage loss statements into a master financial file. Proper document organization ensures no recoverable loss gets left off your settlement demand.",
    },
    {
      icon: ShieldAlert,
      title: "Legal Preparation for Cases Involving Disputed Responsibility",
      description: "When insurance companies deny fault, passive negotiation tactics fail. We approach every single case as if it is headed straight to trial from day one. Assembling expert witnesses, crash reconstructionists and clear visual exhibits ensures we are fully equipped to win contested liability battles in court.",
    },
    {
      icon: Scale,
      title: "Clear Communication About Available Options and Potential Risks",
      description: "We simplify the legal process and explain every detail of your case, helping you weigh settlement offers, understand potential litigation risks, and make informed choices for your recovery.",
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
            Why Largo Uber Accident Victims Choose Our Law Firm
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            People come to us when they need reliable support during an incredibly stressful period. We focus entirely on securing your immediate physical and long-term financial stability.
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
                src={getSeoImage("direct-attorney-communication-uber-claims-largo.webp", "uber-accident-lawyer-largo").filePath}
                alt="Direct attorney communication for Largo Uber accident claims"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Dedicated &amp; Responsive
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
