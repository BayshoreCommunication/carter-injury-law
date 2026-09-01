"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Camera, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Time Limits for Filing a Slip and Fall Claim",
      description: "Under Florida Statutes Section 95.11, most slip and fall victims have two years from the date of injury to file a civil lawsuit. That clock runs whether or not the injured person is aware of it. The deadline applies to falls on private and commercial property throughout Tampa and Hillsborough County.",
    },
    {
      icon: Building,
      title: "Different Rules for Public Property Claims",
      description: "Falls on government property involve the Florida Tort Claims Act rather than standard personal injury law. A formal notice of claim must be filed within three years of the incident, and that step must happen before any lawsuit can move forward. Skipping it or filing late ends the claim.",
    },
    {
      icon: Camera,
      title: "Preserving Surveillance Footage and Inspection Records",
      description: "A formal preservation demand sent by an attorney puts the property owner on notice that destroying or overwriting surveillance footage or maintenance records could constitute spoliation of evidence. Without that demand on file, there's nothing preventing the footage from disappearing on the system's regular overwrite schedule.",
    },
    {
      icon: FileText,
      title: "Maintaining Complete Medical Documentation",
      description: "Every visit, every diagnosis, every prescription filled after the fall should be documented and preserved. Gaps in treatment history give insurance companies an opening to argue that the injuries weren't serious, weren't connected to the fall, or had already resolved on their own.",
    },
    {
      icon: Clock,
      title: "Circumstances That May Affect the Filing Deadline",
      description: "Not every case runs on the standard two-year clock. Claims on behalf of a minor, injuries discovered after the fact, or situations involving deliberate concealment by the property owner can all affect the applicable deadline. An attorney can identify which timeline governs before the window closes.",
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
            Florida sets hard deadlines on personal injury claims. Missing them typically means losing the right to seek compensation entirely.
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
