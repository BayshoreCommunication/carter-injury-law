"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Building, Calendar, Layers } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "The Applicable Deadline for Filing a Bicycle Injury Lawsuit",
      description: "Florida law strictly limits the time to file a lawsuit. For negligence actions on or after March 24 2023. The law generally applies a two year limitation period deadline. If you miss this deadline, you may lose your right to compensation. Contact a lawyer immediately to protect your legal filing rights.",
    },
    {
      icon: Building,
      title: "Special Filing Requirements for Claims Against Government Entities",
      description: "Claims against government agencies have much shorter notice deadlines. You must follow strict administrative procedures before filing a lawsuit. If you miss the required notice deadline, you may lose the right to pursue a claim against a municipality. We handle these complex government claims to ensure strict compliance. Do not let sovereign immunity rules ruin your financial recovery.",
    },
    {
      icon: FileText,
      title: "Evidence Preservation Before Video and Physical Records Disappear",
      description: "Physical evidence from your crash vanishes within a few days. Video surveillance systems often overwrite footage every forty eight hours. Skid marks wash away quickly with normal Tampa afternoon rain. Prompt legal action forces businesses to save critical video evidence. Time is your biggest enemy when proving a negligence claim.",
    },
    {
      icon: Layers,
      title: "Insurance Negotiations and the Court Filing Deadline",
      description: "Insurance negotiations do not automatically extend the court filing deadline. Adjusters often stall negotiations hoping you miss the legal deadline. We file lawsuits promptly when insurance companies refuse fair offers. A lawsuit can protect your legal rights while settlement negotiations continue. Never trust an insurance company to protect your legal deadlines.",
    },
    {
      icon: Clock,
      title: "Exceptions That May Change the Applicable Deadline",
      description: "Certain legal exceptions can change the statute of limitations deadline. Claims involving minor children might have different legal time limits. Section 95.11 of the Florida Statutes governs these complex deadlines. Only a qualified attorney can determine your exact filing deadline. Speak to our legal team to calculate your specific timeframe.",
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
            Florida Statute of Limitations: Why Timing Matters After a Bicycle Accident
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Delays in seeking legal advice can weaken your case. Important evidence disappears fast and strict legal filing deadlines apply.
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

