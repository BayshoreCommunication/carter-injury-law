"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Building, Calendar, Layers } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "The Filing Deadline for a Personal Injury Lawsuit",
      description: "Florida law limits personal injury negligence lawsuits to two years for accidents occurring after March 24, 2023. Expiration of this strict statutory deadline permanently bars your legal right to seek monetary recovery in court. Filing legal claims promptly ensures compliance with Florida statutory mandates while evidence remains fresh and accessible.",
    },
    {
      icon: Building,
      title: "Special Notice Rules for Claims Against Government Entities",
      description: "Accidents involving government owned vehicles require serving formal administrative notice within much shorter statutory timeframes. Sovereign immunity rules mandate strict procedural compliance before filing any formal injury lawsuit against municipal agencies. Failure to submit statutory notices within prescribed deadlines results in total forfeiture of your legal claim.",
    },
    {
      icon: FileText,
      title: "Evidence That May Disappear Over Time",
      description: "Delaying legal action often results in lost physical evidence, overwritten security camera footage and forgotten witness memories. Prompt investigation allows your legal team to secure essential maintenance records and photographic evidence before destruction. Immediate evidence preservation prevents negligent parties from concealing vital proof of liability or improper vehicle maintenance.",
    },
    {
      icon: Layers,
      title: "Insurance Negotiations Do Not Replace Court Deadlines",
      description: "Ongoing settlement discussions with insurance adjusters do not pause or extend the statutory personal injury filing deadline. Delays by insurance adjusters often push claims past the deadline to eliminate corporate financial liability completely. Filing a timely personal injury lawsuit protects your legal status while settlement negotiations continue with insurers.",
    },
    {
      icon: Clock,
      title: "Exceptions That May Change the Filing Period",
      description: "Specific legal circumstances such as minor victims or mental incapacity may toll or modify statutory time limits. Consultation with an experienced attorney helps determine the exact legal deadline applicable to your specific crash. Uncovering applicable legal exceptions requires detailed statutory analysis by knowledgeable personal injury legal counsel.",
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
            Florida&apos;s Statute of Limitations, Why Timing Matters After a Golf Cart Accident
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Strict statutory deadlines govern how much time injured victims have to file personal injury lawsuits in Florida. Prompt action following a severe collision protects your legal right to pursue full financial compensation in court.
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

