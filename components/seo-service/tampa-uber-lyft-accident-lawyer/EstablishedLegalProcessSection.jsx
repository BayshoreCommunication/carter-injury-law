"use client";
import React from "react";
import { FileText, Smartphone, Layers, FileSpreadsheet, Gavel, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Reviewing the Crash Report and Initial Ride Information",
      description: "Police reports provide a baseline understanding of the crash. We check the responding officer's notes for factual inaccuracies. We map out the timeline using initial ride data. Early error detection prevents defense lawyers from exploiting them.",
    },
    {
      step: "02",
      icon: Smartphone,
      title: "Securing App Activity, GPS Data, and Electronic Records",
      description: "Electronic logs prove exactly what the driver was doing. We demand this data directly from the tech companies. GPS pings show vehicle speed and braking patterns. This digital footprint reveals exactly when the driver reacted.",
    },
    {
      step: "03",
      icon: Layers,
      title: "Examining Applicable Insurance Policies and Coverage Periods",
      description: "We read every line of the overlapping insurance policies. This reveals every possible source of financial recovery. A missed policy leaves money on the table. We identify contingent coverage that kicks in when others fail.",
    },
    {
      step: "04",
      icon: FileSpreadsheet,
      title: "Coordinating Medical Evidence and Financial Loss Records",
      description: "We talk to your doctors to understand your injuries. Our staff gathers all medical bills and payroll records. This documentation proves exactly how much money you lost. We prove lost future earning capacity with expert financial testimony.",
    },
    {
      step: "05",
      icon: Gavel,
      title: "Negotiating with Insurance Companies and Preparing for Court",
      description: "We submit a comprehensive demand package to the insurance company. If they refuse a fair deal we prepare for court. Our thorough trial preparation often forces better settlement offers. Insurance adjusters respect law firms willing to litigate cases.",
    },
    {
      step: "06",
      icon: MessageSquare,
      title: "Providing Case Updates and Clear Next-Step Guidance",
      description: "Legal battles take time and patience. We keep you updated at every major milestone. You will always know what happens next in your case. Consistent communication reduces the anxiety of the legal process.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Disciplined Legal Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Established Legal Process for Handling Tampa Uber and Lyft Accident Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            We follow a structured path to build strong claims. This proven approach leaves nothing to chance.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50/80 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-3xl font-extrabold text-primary">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-secondary mb-2">
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

export default EstablishedLegalProcessSection;

