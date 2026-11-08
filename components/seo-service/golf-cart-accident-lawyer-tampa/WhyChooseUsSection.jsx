"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { MapPin, MessageSquare, DollarSign, ShieldCheck, Scale, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "Knowledge of Tampa's Personal Injury Claims Process",
      description: "Extensive experience within local Hillsborough County courts helps our attorneys manage complex litigation procedures efficiently. If you understand regional court requirements,  it will  allow us to handle every legal filing without unnecessary procedural delays. Familiarity with local judicial systems provides important operational insights when handling aggressive defense strategies from insurance companies.",
    },
    {
      icon: MessageSquare,
      title: "Individual Attention to Each Injury Claim",
      description: "Every client receives personalized attention and regular updates regarding the ongoing status of their injury claim. Our legal team takes time to address your personal concerns and design strategies to your needs. Direct access to experienced attorneys ensures that your legal questions are answered clearly and promptly throughout litigation.",
    },
    {
      icon: DollarSign,
      title: "No Upfront Attorney Fee Under a Contingency Arrangement",
      description: "Clients do not need to pay legal fees when hiring our dedicated personal injury firm for representation. Attorney fees are collected strictly as an agreed percentage after successfully winning your financial settlement compensation. This fee structure eliminates all financial risks for injured victims while pursuing fair recovery against powerful insurers.",
    },
    {
      icon: ShieldCheck,
      title: "Investigation of Every Potentially Liable Party",
      description: "Investigation of driver conduct, vehicle maintenance, ownership records and path conditions reveals all potential recovery sources. Uncovering multiple liable parties increases total available insurance coverage to pay for your serious injury losses. Comprehensive fault analysis ensures that no responsible party escapes financial liability for your catastrophic collision losses.",
    },
    {
      icon: Scale,
      title: "Clear Guidance on Settlement and Court Options",
      description: "Legal specialists provide clear explanations regarding settlement offers and potential trial outcomes without making unrealistic guarantees. Empowering clients with straightforward legal guidance allows you to make informed decisions for your future. Transparent legal advice ensures you understand every strategic choice throughout negotiations and potential court proceedings.",
    },
    {
      icon: HelpCircle,
      title: "Evidence-Based Preparation for Each Claim",
      description: "Construction of claims on medical records, expert analysis and witness statements enhance negotiation positions against insurance companies. Thorough evidence collection forces insurance companies to evaluate your injury claim fairly and compensate you fully. Meticulous legal preparation eliminates weakness in your case before entering formal settlement discussions with opposing adjusters.",
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
            Why Tampa Golf Cart Accident Victims Choose Our Law Firm
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Selection of proper legal representation directly impacts the final financial outcome of your personal injury claim. Our legal firm offers specific advantages that help crash victims secure maximum compensation for their injuries.
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
                src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "golf-cart-accident-lawyer-tampa").filePath}
                alt={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "golf-cart-accident-lawyer-tampa").altText || "Attorney David J. Carter - Dedicated Legal Counsel in Tampa"}
                title={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "golf-cart-accident-lawyer-tampa").title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Local Tampa Advocacy
                </p>
                <p className="text-lg font-bold leading-snug">
                  Experienced golf cart accident representation in Tampa and throughout Hillsborough County.
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

