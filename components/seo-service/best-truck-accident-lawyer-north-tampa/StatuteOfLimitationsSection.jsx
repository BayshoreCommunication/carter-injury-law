"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Building, Calendar, Layers } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Calculating the Filing Deadline for a Truck Accident Claim",
      description: "Florida recently passed House Bill 837 reducing the personal injury filing deadline significantly for all negligence cases. You now have only two incredibly short years from the exact crash date to file your lawsuit. Missing this strict 2 year deadline permanently destroys your legal right to seek any financial compensation completely.",
    },
    {
      icon: Building,
      title: "Special Rules for Claims Involving Government Entities",
      description: "Highway collisions involving municipal vehicles require much faster legal notice and highly specific bureaucratic administrative procedures immediately. Failing to notify the responsible government agency quickly can ruin your valid injury claim completely and permanently.",
    },
    {
      icon: FileText,
      title: "Preserving Trucking Records Before They Are Lost",
      description: "Federal transportation rules allow motor carriers to legally destroy vital driver logbooks after six incredibly short months. Waiting too long to hire a lawyer means this critical evidence might legally vanish forever without trace.",
    },
    {
      icon: Layers,
      title: "Settlement Negotiations and the Filing Deadline",
      description: "Corporate insurance companies often drag out settlement talks intentionally to let the legal filing clock expire fully. Filing a formal lawsuit protects your rights while forcing the stubborn insurer to negotiate fairly and quickly.",
    },
    {
      icon: Clock,
      title: "Circumstances That Can Affect the Applicable Deadline",
      description: "Certain incredibly narrow legal exceptions exist for minors or victims experiencing delayed physical injury discovery after crashes. A skilled attorney must evaluate your unique case immediately to determine the exact legal filing deadline accurately.",
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
            Florida&apos;s Statute of Limitations, Why Timing Matters After a Truck Accident
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Florida law sets strict deadlines for filing a personal injury claim, making it difficult to act within the applicable statute of limitations to preserve your right to compensation.
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
