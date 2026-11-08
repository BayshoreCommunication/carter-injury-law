"use client";
import React from "react";
import { Clock, AlertTriangle, Smartphone, Building, Calendar, Layers } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Establishing the Deadline Based on the Date of the Collision",
      description: "Florida law strictly dictates how many days you have to formally sue the at fault driver. You destroy your entire personal injury case completely if you let this important legal clock expire.",
    },
    {
      icon: Smartphone,
      title: "Preserving Records Before Digital Evidence Becomes Unavailable",
      description: "Tech companies routinely delete their driver tracking data after a very short period of time passes. We must act quickly to force the corporation to save the data proving your driver is active.",
    },
    {
      icon: Building,
      title: "Notice Requirements for Certain Public Entity Claims",
      description: "The rules completely change if a city bus or a badly designed public road causes crashes. You must file specific legal notices much faster than a normal car crash against government agencies.",
    },
    {
      icon: Layers,
      title: "The Effect of Ongoing Negotiations on Court Filing Deadlines",
      description: "A settlement conversation with the insurance adjuster does not magically pause your legal court filing deadline. We often file a lawsuit just to protect your rights while we continue arguing over money.",
    },
    {
      icon: Clock,
      title: "Legal Exceptions That May Change the Standard Limitation Period",
      description: "Most car crash victims have exactly two years to file a lawsuit under current Florida law. The state statutes contain tricky exceptions that can drastically shorten your specific legal claim time limit. We will check the calendar and tell you exactly how long you have left to sue.",
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
            Florida Statute of Limitations Why Timing Is Important in Your Case
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The state gives you a very strict window of time to file your personal injury lawsuit. You lose your right to collect any settlement money forever if you miss this crucial deadline.
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

