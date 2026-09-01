"use client";
import React from "react";
import { UserX, Briefcase, Landmark, Home } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "Drivers Who Fail to Follow Florida Traffic Laws",
      description: "A driver who was texting, speeding, impaired, or running a red light when they struck a pedestrian broke a duty of care that Florida law places on everyone behind the wheel. That breach forms the core of a personal injury claim. The driver doesn't get to externalize the cost of their own negligence onto the person they hit.",
    },
    {
      icon: Briefcase,
      title: "Businesses Responsible for Employee Drivers",
      description: "If the driver was working at the time of the accident, their employer may also be held responsible. Under the doctrine of respondeat superior, a business can be held liable when an employee causes harm while doing their job. That covers delivery drivers, rideshare drivers with active ride requests, service contractors, and similar workers. Employer liability often means much higher insurance limits than a personal policy provides.",
    },
    {
      icon: Landmark,
      title: "Government Entities Responsible for Unsafe Road Design",
      description: "A crosswalk with no signage, a busted pedestrian signal, a sidewalk section the county has ignored for years, these aren't just maintenance failures. They're potential sources of legal liability. Claims against Florida government entities come with additional procedural requirements under Florida Statute 768.28, including a pre-suit notice that has its own deadline. Miss that step and a legitimate claim can be barred permanently.",
    },
    {
      icon: Home,
      title: "Property Owners Who Create Unsafe Walking Conditions",
      description: "Florida premises liability law holds property owners accountable for keeping their premises reasonably safe for people on foot. A dark parking lot, crumbling pavement, or missing walkway markings on private property can give rise to a separate legal claim alongside any vehicle accident claim. When both apply, both should be pursued.",
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
            Who May Be Held Liable for a Pedestrian Accident in Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A lot of pedestrian accident claims start and stop with the driver who made contact. That&apos;s often a mistake. Florida law allows injured people to pursue every party whose negligence contributed to the harm, and limiting the claim to one source frequently leaves real compensation uncollected.
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
