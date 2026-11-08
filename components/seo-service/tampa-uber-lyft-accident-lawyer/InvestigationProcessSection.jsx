"use client";
import React from "react";
import { UserX, Car, Building2, Key, Scale } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "Negligent Uber and Lyft Drivers",
      description: "A driver who breaks traffic laws is clearly at fault. Drivers run red lights or speed to create direct liability. We hold careless drivers accountable for their stupid actions. Their driving record often reveals past negligent behavior.",
    },
    {
      icon: Car,
      title: "Other Motorists Who Contribute to the Collision",
      description: "Sometimes another car hits your rideshare vehicle. We can pursue compensation from that third party. Their personal insurance should cover the damage they caused. We identify every driver involved in the chain reaction.",
    },
    {
      icon: Building2,
      title: "Rideshare Companies and Applicable Insurance Obligations",
      description: "Uber and Lyft classify drivers as independent contractors. State laws still force them to carry high insurance limits. These corporate policies activate during specific phases of a ride. Phase two provides a million dollars in liability coverage. This money pays for severe accident injuries.",
    },
    {
      icon: Key,
      title: "Vehicle Owners and Other Potentially Liable Parties",
      description: "Rideshare drivers sometimes borrow cars from friends or family. Florida law might hold the actual vehicle owner responsible too. We look at every angle to find responsible parties. A claim against the vehicle owner provides another source of recovery.",
    },
    {
      icon: Scale,
      title: "Shared Fault Under Florida's Comparative Negligence Rules",
      description: "Florida now uses a modified comparative negligence system. You cannot recover money if you are mostly at fault. This fifty one percent bar makes fighting blame essential. We defend you against unfair accusations of shared fault. Your recovery drops by your exact fault percentage.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Potentially Liable Parties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Who May Be Held Legally Responsible for an Uber or Lyft Accident in Tampa
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Multiple parties might share the blame for your crash. We investigate everyone involved to secure full accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InvestigationProcessSection;

