"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Camera, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Time Limits for Filing a Pedestrian Accident Lawsuit",
      description: "In most pedestrian accident cases in Florida, the filing window is two years from the date of the accident. That sounds like plenty of time until you realize how long it takes to gather records, identify defendants, and build a complete case. Starting early is not optional if you want the strongest possible outcome.",
    },
    {
      icon: Building,
      title: "Special Deadlines for Claims Against Government Entities",
      description: "An early and separate requirement for claims involving a government agency. A pre-suit notice needs to be filed in Florida for a lawsuit to move forward. This can impact your claim and might make it difficult to collect compensation. However, an attorney from Carter Injury Law ensures those requirements are identified early on, and that nothing is overlooked.",
    },
    {
      icon: Camera,
      title: "Protecting Traffic Camera Footage and Other Evidence",
      description: "Traffic camera footage is not kept indefinitely. Many systems overwrite recordings within two to four weeks. Carter Injury Law sends preservation notices to the agencies and businesses controlling that footage right after being retained. Waiting too long means that evidence may no longer exist when it is needed.",
    },
    {
      icon: FileText,
      title: "Maintaining Complete Medical Documentation",
      description: "The medical treatment that you receive after a pedestrian accident forms a chain of events that links your injuries to the crash. Lack of that information provides the insurer with something to go on. Their defense will be that there were no serious injuries, or there were other causes of the injury post the accident.",
    },
    {
      icon: Clock,
      title: "Circumstances That May Affect the Filing Deadline",
      description: "This is not always a two year period. There may be other timelines for cases involving a minor, cases in which injuries are not immediately apparent, or are against a government defendant. Carter Injury Law will determine which deadlines apply and keep the case moving.",
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
            Florida&apos;s Statute of Limitations Why Timing Is Important in Your Case
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Florida gives injured pedestrians a limited amount of time to file a lawsuit. Once that deadline passes, the right to seek compensation is gone. The strength of the case does not matter at that point.
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
