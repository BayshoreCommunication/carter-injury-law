"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { MapPin, MessageSquare, DollarSign, HelpCircle, Award, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "Local Knowledge of North Tampa and Hillsborough County Roads",
      description: "We intimately understand dangerous local traffic patterns along I-75 and congested Hillsborough County commercial intersections perfectly. This deep geographic familiarity helps us recreate the accident scenario accurately for the judge and jury later.",
    },
    {
      icon: MessageSquare,
      title: "Direct Access to Your Attorney",
      description: "You will always communicate directly with your dedicated attorney regarding important case updates and strategic legal decisions. We genuinely pride ourselves on returning client phone calls and messages incredibly fast during the legal process.",
    },
    {
      icon: DollarSign,
      title: "No Fees Unless We Recover Compensation",
      description: "You pay absolutely nothing upfront to retain our premium legal representation services for your commercial truck collision. We only collect standard attorney fees if we successfully secure substantial financial compensation for your severe injuries.",
    },
    {
      icon: HelpCircle,
      title: "Clear Communication From Consultation Through Resolution",
      description: "We carefully break down complex legal concepts into easily understandable terms for every single injured client. You will never feel confused about the overall strategy or current status of your personal injury claim.",
    },
    {
      icon: Award,
      title: "Experience Handling Serious Injury and Truck Accident Claims",
      description: "Our law firm brings well over a decade of focused personal injury litigation experience to the courtroom. We completely understand the specific legal issues separating commercial truck crashes from standard passenger auto accidents.",
    },
    {
      icon: Scale,
      title: "A Case Strategy Built Around the Evidence",
      description: "We confidently build legal claims entirely on undeniable physical facts rather than mere speculation or raw emotion. Strong physical evidence effectively forces stubborn insurance companies to acknowledge the harsh reality of your severe damages.",
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
            Why North Tampa Truck Accident Victims Choose Our Law Firm
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Your choice of law firm directly impacts the outcome of your personal injury claim. Clients choose Carter Injury Law for our local knowledge, legal experience and trial preparation.
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
                src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "best-truck-accident-lawyer-north-tampa").filePath}
                alt={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "best-truck-accident-lawyer-north-tampa").altText || "Attorney David J. Carter - Dedicated Legal Counsel in North Tampa"}
                title={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "best-truck-accident-lawyer-north-tampa").title}
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

