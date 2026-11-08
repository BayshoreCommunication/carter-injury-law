"use client";
import React from "react";
import { Clock, AlertTriangle, Calendar, Smartphone, Building, Layers } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Calculating the Deadline From the Relevant Legal Event",
      description: "Florida law establishes strict statutory timelines for personal injury lawsuits, with the countdown starting on the exact date of the crash. Failing to file court documents before this statutory cutoff permanently waives your right to seek financial recovery. We calculate these deadlines immediately during your initial legal evaluation.",
    },
    {
      icon: Smartphone,
      title: "Retaining Electronic Trip Information and Vehicle Records",
      description: "Crucial digital evidence located on rideshare servers or vehicle black boxes gets overwritten rapidly. App companies routinely delete server records after standard retention windows expire unless legally compelled to hold them. We issue formal spoliation letters to preserve vital digital proof before it disappears forever.",
    },
    {
      icon: Building,
      title: "Additional Procedures for Claims Against Public Entities",
      description: "If your rideshare crash involved a government vehicle or damaged public infrastructure, special administrative rules apply. Florida law mandates strict sovereign immunity notice procedures and shortened notice windows under Section 768.28. We manage these complex administrative filings to keep your claim valid.",
    },
    {
      icon: Layers,
      title: "Avoiding Filing Delays While Fault Remains Disputed",
      description: "Insurance adjusters often prolong liability reviews to push your claim uncomfortably close to statutory deadlines. Stalling tactics give insurance companies undue leverage during settlement talks. We file a formal court complaint promptly when adjusters refuse to negotiate fairly, forcing them to address your claim under court supervision.",
    },
    {
      icon: Clock,
      title: "Circumstances That May Affect the Ordinary Deadline",
      description: "Certain specific legal factors can alter standard filing windows under Florida law. Cases involving incapacitated victims, minor children, or out-of-state defendants operate under distinct statutory tolling rules. We evaluate all applicable legal exceptions to ensure your lawsuit meets every filing requirement.",
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
            The legal window to file a lawsuit in Florida is strictly enforced. A missed deadline permanently bars you from recovering any compensation.
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
            Florida generally imposes a two-year limitation period for negligence-based injury lawsuits. Exceptions exist under Florida Statutes Sections 95.11 and 768.28. You should always consult directly with an attorney to confirm the exact deadlines for your specific situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatuteOfLimitationsSection;

