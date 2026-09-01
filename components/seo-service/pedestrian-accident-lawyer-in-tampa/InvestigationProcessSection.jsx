"use client";
import React from "react";
import { UserX, Briefcase, Landmark, Home } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "Negligent Drivers",
      description: "A driver who was speeding, texting, or impaired violated Florida traffic law. That violation is evidence of negligence and is where most pedestrian accident claims begin. However, the accident can also be caused by the driver’s violation.",
    },
    {
      icon: Briefcase,
      title: "Employers of Commercial Vehicle Drivers",
      description: "When the driver was operating a delivery truck, rideshare vehicle, or company car on the job at the time of the accident, the employer may share responsibility. That can mean a larger insurance policy and more total compensation available for the injured pedestrian.",
    },
    {
      icon: Landmark,
      title: "Government Agencies Responsible for Roadway Safety",
      description: "A missing crosswalk, broken signal, or poorly lit pedestrian crossing can create serious safety concerns for people walking nearby. When a government agency fails to maintain required roadway infrastructure, the agency may share responsibility for resulting injuries.",
    },
    {
      icon: Home,
      title: "Property Owners Who Create Unsafe Walking Conditions",
      description: "A broken sidewalk that forces a pedestrian into the street, or landscaping that blocks the only safe path, can shift liability to the property owner. These are premises liability claims, and they are worth examining when the conditions near the accident were clearly unsafe.",
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
            Who May Be Legally Responsible for a Pedestrian Accident in Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The driver might not be the only one who can be held responsible for a pedestrian accident. A property owner, an employer, or even the government agency could also be a responsible party. Depending on the facts, several parties may share legal liability for what happened.
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
