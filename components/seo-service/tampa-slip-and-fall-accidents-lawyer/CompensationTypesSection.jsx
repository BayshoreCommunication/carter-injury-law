"use client";
import React from "react";
import { Activity, TrendingUp, Heart, Wrench, Shield, Home } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Medical Treatment and Continuing Care",
      description: "Emergency care, surgery, imaging, prescriptions, and specialist appointments are all recoverable. Every medical expense tied to the injury gets factored in from the date of the fall through whatever ongoing treatment the evidence supports.",
    },
    {
      icon: TrendingUp,
      title: "Lost Income and Reduced Future Earning Ability",
      description: "Wages lost while recovering are a direct financial consequence of someone else's negligence. When the injury limits professional capacity over the long term, diminished future earning ability becomes part of the claim as well.",
    },
    {
      icon: Heart,
      title: "Physical Pain and Emotional Suffering",
      description: "Florida law recognizes harm that goes beyond the medical bills. Persistent pain, disrupted sleep, anxiety, and the loss of activities that defined your daily life before the fall are all compensable under Florida personal injury law.",
    },
    {
      icon: Wrench,
      title: "Rehabilitation and Future Medical Needs",
      description: "Physical therapy and occupational rehabilitation can stretch across months or years. Carter Injury Law works with medical professionals to project those costs accurately before any settlement figure gets put on the table, so future needs don't get traded away for short-term convenience.",
    },
    {
      icon: Shield,
      title: "Permanent Disabilities and Lasting Physical Limitations",
      description: "Some falls leave permanent marks. Spinal injuries, traumatic brain injuries, hip fractures that don't heal cleanly. When the injury alters what life looks like on a permanent basis, the long-term consequences are documented and argued as a central part of the compensation claim.",
    },
    {
      icon: Home,
      title: "Everyday Financial Costs Caused by Your Injury",
      description: "Transportation to appointments, home modification costs, assistive equipment, and help around the house that you now require but never needed before. These out-of-pocket expenses are real and they accumulate quickly after a serious fall.",
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
            The Full Value of Compensation Available After a Tampa Slip and Fall Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The financial impact of a serious fall extends well past the first hospital visit. Florida premises liability law allows injured victims to pursue compensation for every form of harm caused by the property owner&apos;s negligence, economic and non-economic alike.
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
