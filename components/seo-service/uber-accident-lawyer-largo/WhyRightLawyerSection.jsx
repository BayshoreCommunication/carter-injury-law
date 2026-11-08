"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, DoorOpen, Receipt, Activity, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: ShieldAlert,
      title: "Coverage Gaps Between Personal Auto Policies and Rideshare Insurance",
      description: "Uber's insurance structure changes dramatically across 3 distinct trip phases. The driver's personal auto insurance company is likely to deny coverage if the driver was logged into the app, while Uber's corporate insurance carrier might contend the app was simply in the background. Immediate legal review is needed to determine the primary policy in order to untangle the overlapping policies.",
    },
    {
      icon: DoorOpen,
      title: "Disputes Over Whether a Passenger Had Entered the Vehicle",
      description: "Insurance adjusters will search for “technical loopholes” in order to minimize the financial responsibility to pay out. If there is one foot in the car or if the passenger is trying to open the door a crash may not be considered a trip that had started. We secure digital ride logs and timestamped app data to establish exact passenger status and unlock higher policy limits.",
    },
    {
      icon: Receipt,
      title: "Medical Bills Arriving Before an Insurance Company Accepts Responsibility",
      description: "When a person goes to the emergency room and diagnostic centre, they require immediate payment, well before any insurance adjuster has finished an investigation of the fault. Medical bills can be put into collections very quickly, without the provider getting their payment and damage your credit while you contest the debt. We intervene directly with medical providers and send letters of protection to stop the collection process being pursued until your claim is handled.",
    },
    {
      icon: Activity,
      title: "Difficulty Valuing Injuries That Affect Everyday Activities",
      description: "Insurance adjusters rely on the inflexible algorithms of the computer software they employ which provide a predetermined dollar value for certain medical codes. These computer models do not take into account human factors like not being able to lift your child, keep your home, or have hobbies. We work with medical specialists and vocational experts to calculate the true, long-term impact of your physical limitations.",
    },
    {
      icon: Users,
      title: "Conflicting Accounts From Drivers, Passengers and Witnesses",
      description: "Human memory is affected by adrenaline and the shock of a crash right after the event. Insurers will note that at-fault drivers frequently switch their side of the story when they call them, to avoid any increase in their rates or being turned off the app. These conflicting statements are resolved through an examination of physical evidence, vehicle damage patterns, black box information and third-party witness statements.",
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
                  src={getSeoImage("dedicated-uber-accident-lawyer-largo.webp", "uber-accident-lawyer-largo").filePath}
                  alt="Why Injured Largo Uber Passengers and Other Road Users May Face Difficulties Obtaining Compensation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Largo Claim Protection
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  A fair settlement is rarely simple. Insurance carriers leverage complex policy language to delay processing or minimize payouts.
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
                Rideshare Claim Protection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Injured Largo Uber Passengers and Other Road Users May Face Difficulties Obtaining Compensation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                A fair settlement is rarely simple. Insurance carriers leverage complex policy language to delay processing or minimize payouts.
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
                    className="flex gap-4 p-5 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
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

