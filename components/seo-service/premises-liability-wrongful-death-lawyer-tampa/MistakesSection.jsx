"use client";
import React from "react";
import { AlertTriangle, Video, FileText, SearchX, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Video,
      title: "Allowing Surveillance Footage to Be Lost",
      description: "Commercial surveillance systems don't hold footage indefinitely. Most overwrite recordings on cycles that run anywhere from 24 hours to 30 days. Once that window closes, the footage of the incident and the period leading up to it is permanently gone. That footage often shows the exact condition that caused the death and who on staff knew about it. Without a preservation demand delivered in time, it simply doesn't exist anymore.",
    },
    {
      icon: FileText,
      title: "Failing to Preserve Property Inspection Records",
      description: "Inspection and maintenance logs from the months or years before the accident can be the most damaging evidence a property owner faces. They show actual knowledge of the hazard and a decision not to address it. Property management companies are permitted to follow routine document retention schedules, which means those records can be legally destroyed on a schedule. A litigation hold demand from an attorney stops that process cold.",
    },
    {
      icon: SearchX,
      title: "Relying Solely on the Property Owner's Investigation",
      description: "The property owner's internal investigation was not conducted to help your family. It was conducted to protect the property owner. Families who take that investigation at face value end up with a picture of events that was assembled by the other side. Independent investigation isn't optional in these cases. It's the only way to know what the evidence actually shows.",
    },
    {
      icon: AlertCircle,
      title: "Accepting Liability Decisions Without Independent Review",
      description: "An early determination by a commercial insurer that their insured bears no liability isn't a legal finding. It's a claims decision made by people whose job is to pay out as little as possible. Accepting that conclusion without an attorney's review of the actual facts and applicable law is how families walk away from compensation they were entitled to recover.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Critical Legal Pitfalls</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Mistakes That Can Weaken Your Tampa Premises Liability Wrongful Death Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A few early missteps can do more damage to a wrongful death claim than any defense attorney. Most of these mistakes happen not out of carelessness, but because families don't yet know what they're dealing with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mistakes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-[20px] bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/60 text-amber-800 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
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

export default MistakesSection;
