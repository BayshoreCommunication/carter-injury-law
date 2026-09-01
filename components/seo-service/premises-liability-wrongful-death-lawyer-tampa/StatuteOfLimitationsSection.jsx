"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Camera, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Camera,
      title: "Evidence That Can Disappear Within Days",
      description: "Surveillance footage from commercial properties gets overwritten on automated cycles. Once the spicific window closes, a preservation demand is meaningless because there's nothing left to preserve. Contacting an attorney within hours or days of the accident is what gives the family a fighting chance at the most direct evidence available.",
    },
    {
      icon: FileText,
      title: "Property Maintenance Records and Inspection Logs",
      description: "Florida courts have been clear: property owners and management companies are legally permitted to follow their own document retention schedules unless a litigation hold is in place. Once the retention period on a maintenance log or inspection report passes, that record can be lawfully destroyed. A written preservation demand from an attorney stops that immediately. Without it, records that would show the property owner knew about the hazard months earlier simply cease to exist.",
    },
    {
      icon: Clock,
      title: "Security Camera Footage Retention Policies",
      description: "Retention policies across commercial properties are wildly inconsistent. A hotel might hold footage for 90 days. An apartment complex might reuse tapes every 48 hours. A parking garage might fall somewhere in between. There's no uniform standard. The only way to ensure footage is preserved is to act before the system overwrites it.",
    },
    {
      icon: Building,
      title: "Government-Owned Property Claim Requirements",
      description: "If the fatal accident happened on property owned or operated by a government entity in Tampa or Hillsborough County, the rules are different and the timeline is tighter. Under Section 768.28 of the Florida Statutes, the family must serve a written notice of claim on the appropriate agency within three years of the death and must wait at least six months before filing suit. Skipping that notice requirement doesn't create a fixable procedural problem. It ends the claim.",
    },
    {
      icon: Calendar,
      title: "Filing Deadlines Under Florida Wrongful Death Law",
      description: "Florida's Wrongful Death Act gives families two years from the date of death to file a wrongful death lawsuit. 2 years sounds like enough time, but between the grief, the probate proceedings, and the practical demands of rebuilding a household, it moves faster than most families expect. The filing deadline doesn't pause while life is in chaos.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Time-Sensitive Legal Rules</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Florida's Statute of Limitations, Why Timing Is Important in Your Case
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            There are legal deadlines in Florida wrongful death cases that cannot be extended once they've passed. But the problem most families face isn't the final filing deadline. It's the evidence that disappears in the days immediately after the accident, long before any lawsuit is filed.
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
