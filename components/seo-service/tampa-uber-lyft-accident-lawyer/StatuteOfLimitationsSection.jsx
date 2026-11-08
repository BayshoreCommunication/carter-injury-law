"use client";
import React from "react";
import { Clock, AlertTriangle, Smartphone, Layers, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Calculating the Applicable Filing Deadline Under Florida Law",
      description: "Florida negligence claims now have a strict 2 year limitation period. This rule changed significantly in March 2023. A missed date means you completely lose your legal rights. We file lawsuits quickly to protect your claim.",
    },
    {
      icon: Smartphone,
      title: "Preserving Digital Evidence Before App and Trip Records Become Difficult to Obtain",
      description: "Tech companies delete server data regularly to save space. We must request your trip records immediately. Quick action preserves the digital proof you need. Lost data makes it impossible to prove driver status.",
    },
    {
      icon: Layers,
      title: "Protecting Filing Rights While Insurance Negotiations Continue",
      description: "Insurance adjusters love to drag out settlement talks. They hope you forget about the court deadline. A lawsuit protects you if negotiations fail. We never let insurers stall past the legal expiration date.",
    },
    {
      icon: Building,
      title: "Special Notice Requirements for Claims Involving Government Entities",
      description: "Crashes involving city buses have unique legal rules. You must notify government agencies very quickly. These strict deadlines are much shorter than standard cases. Sovereign immunity laws require specialized legal notice documents.",
    },
    {
      icon: Clock,
      title: "Exceptions That May Change the Applicable Deadline",
      description: "Certain rare circumstances can pause the legal clock. Cases involving minors might have different time limits. Only a lawyer can confirm your exact filing deadline. It is a dangerous mistake to assume you have extra time.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Time-Sensitive Legal Deadlines</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Florida&apos;s Statute of Limitations, Why Timing Is Important in Your Case
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Delays in filing will destroy your legal rights. You must take action before the legal clock expires.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-[20px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-start gap-6 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <IconComp className="w-6 h-6" />
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

export default StatuteOfLimitationsSection;

