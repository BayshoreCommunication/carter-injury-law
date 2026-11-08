"use client";
import React from "react";
import Link from "next/link";
import { UserX, Car, Key, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "The Uber Driver Behind the Wheel at the Time of Impact",
      description: (
        <p>
          The person actively driving the rideshare car usually holds the majority of the legal crash blame. Their careless driving directly harms the paying passengers who simply trusted them for a safe ride.
        </p>
      ),
    },
    {
      icon: Car,
      title: "Third Party Drivers Whose Actions Triggered the Crash",
      description: (
        <p>
          A completely different reckless driver will sometimes slam into your hired rideshare car without any warning. We can hold that third party motorist fully accountable for all your resulting hospital medical bills. Carter Injury Law also assists people injured in rideshare collisions outside Tampa. If you were hurt in a crash in Largo, our{" "}
          <Link href="/uber-accident-lawyer-largo" className="text-primary hover:underline font-semibold">
            Uber accident lawyer largo service
          </Link>{" "}
          can help you explore the legal options available for pursuing compensation.
        </p>
      ),
    },
    {
      icon: Key,
      title: "Vehicle Owners Who May Bear Independent Legal Responsibility",
      description: (
        <p>
          Rideshare drivers do not always own the actual cars they use to transport paying civilian customers. Florida law can hold the vehicle owner legally responsible for letting a dangerous driver borrow it.
        </p>
      ),
    },
    {
      icon: Wrench,
      title: "Negligent Maintenance Providers in Applicable Cases",
      description: (
        <p>
          A local mechanic might install bad brakes on the rideshare car right before your scheduled trip. We use the formal auto shop repair records to prove the mechanic shares blame for injuries.
        </p>
      ),
    },
    {
      icon: ShieldCheck,
      title: "Rideshare Insurance Obligations Under Florida Statute",
      description: (
        <p>
          Florida law requires rideshare companies to maintain different levels of insurance coverage depending on the driver&apos;s app status and trip activity. The applicable policy depends on the circumstances of the crash and the driver&apos;s status at the time. These insurance requirements also apply to lyft accidents, which our{" "}
          <Link href="/tampa-uber-lyft-accident-lawyer" className="text-primary hover:underline font-semibold">
            Tampa uber and lyft accident lawyer service
          </Link>{" "}
          addresses.
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
            Who May Be Legally Responsible for an Uber Accident in Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The absolute most important part of any injury claim involves pinpointing exactly who caused your accident. We investigate everyone involved to maximize the available insurance money for your expensive physical recovery. Liability becomes more complicated when a collision involves a commercial vehicle or several motorists. People injured in truck crashes can explore our{" "}
            <Link href="/best-truck-accident-lawyer-north-tampa" className="text-primary hover:underline font-semibold">
              best truck accident lawyer in north tampa
            </Link>{" "}
            service to learn more about pursuing compensation for serious accident injuries.
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

