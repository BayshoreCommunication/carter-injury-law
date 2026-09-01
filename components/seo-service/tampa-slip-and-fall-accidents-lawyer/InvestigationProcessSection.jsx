"use client";
import React from "react";
import { Building2, Home, Building, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: Building2,
      title: "Commercial Property Owners",
      description: "Businesses that invite the public onto their premises take on a legal duty to inspect regularly and keep the property reasonably safe. Failing to identify and address a known hazard before someone gets hurt is the kind of negligence that supports a premises liability claim under Florida law.",
    },
    {
      icon: Home,
      title: "Apartment Owners and Landlords",
      description: "Landlords are accountable for shared spaces throughout the property. Parking lots, stairwells, laundry rooms, common hallways. Neglected maintenance in any of those areas can make the landlord financially responsible for injuries that occur there.",
    },
    {
      icon: Building,
      title: "Property Management Companies",
      description: "Many commercial and residential properties in Hillsborough County are run by third-party management companies rather than the owners. When a management company controls day-to-day operations and ignores a condition it knows about, liability can attach to that company directly.",
    },
    {
      icon: Landmark,
      title: "Government Agencies Responsible for Public Property",
      description: "Falls on government property follow a different legal path than standard personal injury cases. The Florida Tort Claims Act imposes formal notice requirements and shorter filing windows. Miss those requirements and the right to bring a claim is forfeited, regardless of how serious the injury was.",
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
            Who May Be Legally Responsible for a Slip and Fall Accident in Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The property owner isn't always the only party that can be held liable. Florida premises liability law can reach property managers, landlords, and government entities depending on who controlled the conditions that led to the injury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
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

export default InvestigationProcessSection;
