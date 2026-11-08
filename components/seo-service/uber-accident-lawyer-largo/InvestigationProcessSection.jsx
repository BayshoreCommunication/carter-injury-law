"use client";
import React from "react";
import Link from "next/link";
import { UserX, Car, Building2, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "Drivers Whose Traffic Violations Cause Preventable Collisions",
      description: (
        <p>
          If rideshare drivers violate their duty of care by violating traffic regulations, they are directly liable for the civil consequences. Speeding, tailgating, failure to yield and driving while intoxicated are obvious forms of negligence. We hold at fault drivers legally responsible for all physical and financial damage which they cause due to their reckless acts while driving.
        </p>
      ),
    },
    {
      icon: Car,
      title: "Motorists Who Strike an Uber Vehicle From Another Lane",
      description: (
        <p>
          Your rideshare driver is not always the party responsible for a crash. Negligent third-party drivers who drift across lanes, run red lights, or rear-end an Uber vehicle share primary fault. In these scenarios, we file direct claims against the third party&apos;s auto insurance policy to recover maximum damages for your injuries. Collisions involving larger commercial vehicles can raise similar questions about driver negligence and insurance coverage. Injured people involved in these crashes may benefit from speaking with a{" "}
          <Link href="/bus-accidents-lawyer-largo" className="text-primary hover:underline font-semibold">
            bus accidents lawyer Largo
          </Link>
          .
        </p>
      ),
    },
    {
      icon: Building2,
      title: "Businesses or Property Owners in Claims Involving Dangerous Conditions",
      description: (
        <p>
          Hazardous conditions on driveways, poorly lit parking areas, hidden traffic signs and overgrown landscaping can conceal hazards from drivers. If property neglect is a cause of the wreck, the property owner may be a party that&apos;s liable for damages.
        </p>
      ),
    },
    {
      icon: Wrench,
      title: "Vehicle Maintenance Providers in Cases Involving Mechanical Defects",
      description: (
        <p>
          Mechanical issues such as losing power to the brakes or the tires blowing out indicate poor service of the vehicle. An auto repair shop is legally liable if they performed an unsafe repair job or allowed an unsafe car to pass through them on a routine inspection. Full service records are retrieved to determine if mechanical failure played a role or exacerbated, in a collision.
        </p>
      ),
    },
    {
      icon: ShieldCheck,
      title: "Parties Covered Under Applicable Rideshare Insurance Policies",
      description: (
        <p>
          The factors of your case, physical evidence and driver behavior are key in determining liability. Uber is a transportation network company, so this means there is a different landscape of potential corporate liability depending on whether the driver is an Uber app user or not and depending on the statutes under Florida law.
        </p>
      ),
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
            Who May Be Held Responsible for an Uber Accident in Largo, Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A single crash can involve multiple negligent parties. We look beyond the obvious answers to hold everyone at fault accountable.
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

