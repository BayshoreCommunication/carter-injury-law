"use client";
import React from "react";
import { Clock, AlertTriangle, FileText, Camera, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const StatuteOfLimitationsSection = () => {
  const points = [
    {
      icon: Calendar,
      title: "Filing Deadlines That Apply to Pedestrian Injury Claims",
      description: "Most Pedestrian Accident personal injury claims must be filed within 2 years of the accident under statute 95.11. The Florida legislature has just made that change in the statute in 2023 and is now at 2 years. The majority of people who are injured in an accident, which involves a long period of treatment, do not realize how brief 2 years can be. It won't take long to go through the treatment process, or to prepare the personal injury claim.",
    },
    {
      icon: Building,
      title: "Additional Procedures for Government Liability Cases",
      description: "Suing a city or county in Florida is different from suing individuals. According to statute 768.28, a formal notice of the lawsuit must be given to the appropriate agency before taking any other legal steps. The notice also has its filing deadlines and requirements. Any claim that does not fulfill these requirements can be dismissed by the court.",
    },
    {
      icon: Camera,
      title: "Securing Video Footage Before It Is Lost",
      description: "Traffic cameras and business security systems and residential doorbell cameras might have recorded your accident. These systems usually erase what they recorded after a time like 48 to 72 hours. An attorney can send a written notice to the people who own these systems like the traffic cameras and the business security systems and the residential doorbell cameras. The attorney has to do it quickly because the traffic cameras and the business security systems and the residential doorbell cameras will erase what they recorded.",
    },
    {
      icon: FileText,
      title: "Maintaining Strong Medical Evidence Throughout the Claim",
      description: "Insurance adjusters look for gaps in your treatment records and they use those gaps against you. A medical timeline that shows consistent care from the accident forward is a much harder thing to attack than a record full of missed appointments and unexplained pauses. Your health and your legal case both benefit from staying on track with your doctors.",
    },
    {
      icon: Clock,
      title: "Limited Exceptions That May Affect Legal Deadlines",
      description: "Florida’s clock doesn't always stop when you think it does, but there are a few narrow ways to pause the countdown. If a child gets hurt, the law usually grants more time. Fraud can also extend the deadline, just like when someone uses it to hide what really happened or maybe the injury just wasn't discoverable right away. These exceptions are genuinely limited and shouldn't be counted on without a specific legal review of the facts.",
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
            There is a deadline for filing a personal injury lawsuit in Florida. After that time expires, even if the other driver was at fault, and the damage was significant, it&apos;s not important. There is no longer a legal claim for compensation.
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
