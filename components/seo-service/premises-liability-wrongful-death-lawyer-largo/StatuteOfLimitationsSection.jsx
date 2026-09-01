"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Camera, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: FileText,
      title: "Preserving Property Maintenance Documentation",
      description: "Maintenance records, inspection logs, and work orders are held according to each business's internal retention schedule. Documents from the months before a fatal accident can be legally discarded under routine administrative procedures. Carter Injury Law issues formal preservation demands for all relevant records immediately after being retained, before the retention clock runs out on material the family may need.",
    },
    {
      icon: Camera,
      title: "Obtaining Security and Surveillance Footage",
      description: "Surveillance systems at most commercial properties in Largo operate on automated overwrite cycles. Footage from the day of the fatal accident may be gone within 30 days or less without a legal preservation hold in place. This happens in real cases routinely. It is one of the clearest examples of why contacting an attorney within days of a fatal property accident, rather than weeks, produces fundamentally different outcomes for the family.",
    },
    {
      icon: Building,
      title: "Notice Requirements for Public Property Claims",
      description: "When a fatal accident occurs on property that is owned or maintained by a government entity in Pinellas County, the family must satisfy pre-suit notice requirements that operate on a separate and often shorter timeline than the standard wrongful death statute of limitations. Missing the notice deadline does not just weaken the claim. In many cases it eliminates it.",
    },
    {
      icon: Clock,
      title: "Evidence Preservation Before Repairs Are Made",
      description: "Commercial property owners have the legal right to repair hazardous conditions after a fatal accident. The obligation they do not shed is the duty to preserve evidence of the condition that existed before the repair. Carter Injury Law moves immediately to document what exists, issue legal preservation orders, and establish a factual record of the property's condition at the time of the death before any repair work erases the proof.",
    },
    {
      icon: Calendar,
      title: "Legal Deadlines That Affect Wrongful Death Recovery",
      description: "Florida's wrongful death statute of limitations sets a firm window within which a claim must be filed. Families who wait too long to consult a lawyer sometimes learn that the deadline has already passed by the time they reach out. Speaking with a premises liability wrongful death lawyer Largo as early as possible after a fatal accident is the most direct way to protect every legal right the family holds.",
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
            Florida's Statute of Limitations, Why Timing Is Important in Your Case
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Florida law places firm deadlines on wrongful death claims. Miss the filing window and the family's right to recover is cut off permanently, no matter how clear the negligence was. But the statute of limitations is only one of several timing pressures that make early action critical after a fatal property accident in Largo.
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
