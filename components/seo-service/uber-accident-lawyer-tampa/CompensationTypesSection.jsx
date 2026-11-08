"use client";
import React from "react";
import { Activity, DollarSign, Dumbbell, HeartHandshake, Car, ShieldAlert, HeartCrack } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Hospital Charges and Specialist Treatment",
      description: "Ambulance rides and emergency room visits generate massive hospital bills before you even get safely home. Your final settlement must completely cover every single medical expense caused by the careless other driver.",
    },
    {
      icon: DollarSign,
      title: "Missed Workdays and Employment Disruptions",
      description: "You cannot go to work and earn your normal paycheck after you suffer a bad injury. You have every right to demand compensation for the valuable wages you lost while resting at home.",
    },
    {
      icon: Dumbbell,
      title: "Physical Therapy and Extended Recovery Periods",
      description: "Whiplash or broken bones require painful physical therapy sessions for many long months to heal properly. These necessary physical rehabilitation costs belong directly in your comprehensive personal injury auto accident legal claim.",
    },
    {
      icon: HeartHandshake,
      title: "Loss of Independence During Injury Rehabilitation",
      description: "Severe physical injuries might force you to hire someone just to help you bathe and dress. The at fault driver must pay for the home care assistance you now desperately need daily.",
    },
    {
      icon: Car,
      title: "Vehicle Replacement and Necessary Out of Pocket Expenses",
      description: "You still need a reliable way to get around while your wrecked car sits heavily damaged. We make sure the insurance company pays to fix your car and covers your rental fees.",
    },
    {
      icon: ShieldAlert,
      title: "Future Care Requirements Following Serious Trauma",
      description: "Brain injuries or spinal cord damage will require expensive medical care for the rest of life. We work with financial experts to calculate the massive cost of your permanent physical disability condition.",
    },
    {
      icon: HeartCrack,
      title: "Financial and Personal Losses Following a Fatal Collision",
      description: "A preventable crash that kills a family member leaves behind massive funeral bills and shattered hearts. Surviving relatives can file a wrongful death lawsuit to recover money for their terrible emotional loss.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Full Value Recovery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The True Value of Full Compensation Medical Bills Lost Income and Other Damages
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A fair settlement requires adding up every single dollar this awful crash stole from your pocket. We fight to ensure the insurance company pays for your past bills and future personal struggles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-gray-50/80 p-8 rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#faf9f6] border border-gray-100 max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
            You must prove liability and understand Florida insurance laws to get a fair accident settlement check. You usually must use your personal injury protection coverage before suing the careless driver for more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompensationTypesSection;

