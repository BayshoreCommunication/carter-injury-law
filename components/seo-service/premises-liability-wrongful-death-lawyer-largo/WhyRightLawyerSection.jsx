"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Clock, Layers, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: Clock,
      title: "Lost Opportunities to Preserve Property Evidence",
      description: "The hazardous condition that caused your loved one's death does not have to stay in place. A commercial property owner can fix it legally and often does, within days of a fatal accident. Once that happens, the physical evidence confirming the negligence is altered or gone entirely. Carter Injury Law demands immediate evidence preservation the moment a family calls, before the opportunity closes.",
    },
    {
      icon: ShieldAlert,
      title: "Delays in Identifying Responsible Parties",
      description: "A wrongful death that occurs on commercial property in Largo may involve a building owner, a separate management company, a cleaning contractor, a landscaping vendor, and a security firm, all of whom had some duty related to the area where the death occurred. Pursuing only the most visible name means leaving significant accountability unclaimed. Correctly identifying every liable party requires the kind of investigative work that begins with knowing where to look.",
    },
    {
      icon: Layers,
      title: "Insurance Carriers Challenging Property Owner Liability",
      description: "Commercial insurance companies in Florida build their defence strategies around predictable arguments. The hazard was obvious. The visitor assumed the risk. The property was compliant with applicable codes. The deceased's own behaviour contributed to what happened. Families without legal counsel have no way to anticipate them, let alone answer them with the evidence and legal framework that makes those arguments fail.",
    },
    {
      icon: Scale,
      title: "Overlooked Sources of Financial Recovery",
      description: "Layers of insurance coverage sit behind most commercial property owners in Largo. Umbrella policies, additional named-insured provisions on vendor contracts, and contractual indemnification clauses embedded in leases can all represent additional recovery. They are discovered through legal investigation, and families without an attorney almost never find them.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-gray-100"
            >
              <div className="relative w-full h-[400px] sm:h-[480px]">
                <Image
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "premises-liability-wrongful-death-lawyer-largo").filePath}
                  alt="Why Injured Victims Need Legal Counsel After an Accident"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Immediate Protection Required
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Insurance carriers benefit from gaps in unrepresented claims. Representation matters.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
                Legal Representation Essential
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Grieving Largo Families Lose Out on Justice Without Legal Representation After a Fatal Premises Liability Accident
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Insurance carriers representing Largo commercial property owners are experienced. They know exactly what unrepresented families do not know, and they benefit from that gap every single time. Understanding where families go wrong without legal counsel makes it easier to see why representation matters so much in these cases.
              </p>
            </motion.div>

            <div className="space-y-6">
              {points.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyRightLawyerSection;
