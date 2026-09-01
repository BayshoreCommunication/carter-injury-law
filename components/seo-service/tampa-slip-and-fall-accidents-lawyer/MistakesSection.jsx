"use client";
import React from "react";
import { AlertTriangle, FileText, Stethoscope, Camera, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: FileText,
      title: "Leaving the Scene Without Reporting the Hazard",
      description: "Before leaving, find a manager or property supervisor and report what happened. Ask for a written incident report and get your own copy. Walking out without documentation gives the property owner room to dispute whether the fall took place at all.",
    },
    {
      icon: Stethoscope,
      title: "Ignoring Medical Care After the Accident",
      description: "Adrenaline masks pain. You might feel shaken but fine, only to realize 48 hours later that something is genuinely wrong. Any gap between the fall and your first medical visit hands the insurance companies ready-made argument that your injuries came from somewhere else entirely.",
    },
    {
      icon: Camera,
      title: "Failing to Preserve Evidence From the Scene",
      description: "Photograph the hazard before anyone cleans it up. Document any visible injuries. Collect contact information from anyone who witnessed the fall. This kind of first-hand documentation becomes far more valuable once the property owner starts denying knowledge of the condition.",
    },
    {
      icon: PhoneCall,
      title: "Speaking With Insurance Representatives Too Soon",
      description: "The property owner's insurance companies may reach out within hours. They aren't calling to help you. An offhand comment about feeling okay, or any statement about the sequence of events, can be used to chip away at your claim later. Let your attorney handle those calls from the beginning.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Avoid Costly Missteps</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Mistakes That Can Weaken Your Tampa Slip and Fall Injury Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The hours after a fall are disorienting. But decisions made in that window can have a direct impact on what happens in court or at the settlement table. Several common mistakes end up giving property owners and insurance companies the ammunition they need to reduce or deny compensation.
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
