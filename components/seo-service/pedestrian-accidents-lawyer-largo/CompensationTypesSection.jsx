"use client";
import React from "react";
import { Activity, TrendingUp, Heart, Wrench, Shield, Home } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Medical Care and Ongoing Treatment Costs",
      description: "Emergency care, hospitalization, surgery, physical therapy, specialist consultations, and prescription costs are recoverable damages. Carter Injury Law documents every medical expense starting from the date of the accident, so nothing gets left off the claim.",
    },
    {
      icon: TrendingUp,
      title: "Income Loss During Recovery",
      description: "A serious pedestrian accident can pull someone out of work for weeks or months. Lost wages during that time are recoverable, and so is lost business income for self-employed individuals who can document what they missed.",
    },
    {
      icon: Heart,
      title: "Reduced Future Earning Potential",
      description: "If the injuries you sustained limit what you can do professionally from this point forward, that reduction in earning capacity belongs in your damages calculation. Vocational and economic experts put concrete numbers to what permanent impairment actually costs over a career.",
    },
    {
      icon: Wrench,
      title: "Physical Pain and Emotional Hardship",
      description: "Florida law recognizes that not all losses show up on a medical bill. Pain, anxiety, disrupted sleep, and the inability to do things you did before the accident are compensable under non-economic damages. Those losses are real, and they matter.",
    },
    {
      icon: Shield,
      title: "Permanent Disabilities and Lifestyle Adjustments",
      description: "Traumatic brain injuries, spinal injuries, nerve damage, and fractures that don't fully heal can permanently change what daily life looks like. Compensation for permanent impairment is meant to reflect those lasting consequences, not just the cost of initial treatment.",
    },
    {
      icon: Home,
      title: "Future Care and Rehabilitation Expenses",
      description: "Physical therapy that continues for years, future surgeries, ongoing medication, and in-home care assistance are all legitimate components of a damages claim. Life care planning professionals project these costs so they're documented and included before any settlement is reached.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Full Value Recovery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The Full Value of Compensation Available After a Largo Pedestrian Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Most injured pedestrians don&apos;t know the full scope of what they&apos;re entitled to pursue. Settling too early, before the picture is complete, means giving up compensation you were legally owed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-50/80 p-8 rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CompensationTypesSection;
