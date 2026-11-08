"use client";
import React from "react";
import { UserCheck, Building2, Truck, Package, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserCheck,
      title: "Truck Drivers and Commercial Vehicle Operators",
      description: "Commercial drivers face direct personal liability when their incredibly negligent actions cause a catastrophic highway collision. Operating a massive truck under the influence or ignoring speed limits demonstrates clear and dangerous driver negligence.",
    },
    {
      icon: Building2,
      title: "Trucking Companies and Motor Carriers",
      description: "Corporate employers remain fully responsible for questionable hiring practices and the dangerous actions of their commercial drivers. Pressuring exhausted drivers to ignore mandatory safety rules makes the entire trucking company legally and financially liable.",
    },
    {
      icon: Truck,
      title: "Truck Owners, Leasing Companies and Fleet Operators",
      description: "The corporate entity owning the commercial truck might differ completely from the actual operating motor carrier. Vehicle owners hold strict responsibility for maintaining the truck safely regardless of who actually drives it.",
    },
    {
      icon: Package,
      title: "Cargo Loaders and Shipping Companies",
      description: "Third party loading companies must balance heavy commercial cargo weight according to incredibly strict federal safety guidelines. Overloaded heavy trailers increase stopping distance and rollover risks significantly during high speed interstate highway travel.",
    },
    {
      icon: Wrench,
      title: "Manufacturers and Maintenance Providers",
      description: "Defective commercial truck parts or improper mechanical repairs can cause sudden vehicle failures mid journey unexpectedly. Negligent mechanics and parts manufacturers share financial liability when equipment failures cause severe roadway accidents directly. Responsibility ultimately depends upon the specific facts and properly preserved physical evidence of each unique commercial collision.",
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
            Who Can Be Held Liable for a North Tampa Truck Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Liability determinations in a commercial vehicle accident often involve multiple corporate entities and contractors. A thorough investigation pinpoints every party whose negligence contributed to the crash.
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
