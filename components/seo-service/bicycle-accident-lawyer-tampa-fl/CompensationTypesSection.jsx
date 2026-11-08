"use client";
import React from "react";
import { Activity, Wrench, DollarSign, Bike, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Emergency Care Surgery and Follow Up Medical Treatment",
      description: "Ambulance rides and emergency room visits create massive unexpected debts. Surgeries to repair broken bones add to this financial burden. You can recover these immediate medical expenses through an injury claim. We ensure all your hospital bills are documented and claimed. Your settlement must cover the full cost of initial survival.",
    },
    {
      icon: Wrench,
      title: "Rehabilitation Physical Therapy and Assistive Equipment",
      description: "Patients may need months of intensive physical therapy to regain mobility. You might need wheelchairs or crutches during your long recovery. These assistive devices and therapy costs are fully compensable damages. We include all prescribed rehabilitation costs in your settlement demand. You deserve access to the best physical recovery tools available.",
    },
    {
      icon: DollarSign,
      title: "Lost Earnings and Reduced Future Earning Capacity",
      description: "Time away from work during recovery can quickly deplete your family's savings. Severe injuries might permanently reduce your ability to work normally. We calculate your exact lost wages since the crash occurred. Vocational experts help us prove your reduced future earning capacity. You deserve compensation for every missed paycheck and lost opportunity.",
    },
    {
      icon: Bike,
      title: "Bicycle Replacement and Damaged Cycling Equipment",
      description: "High end bicycles cost thousands of dollars to replace today. Helmets and specialized cycling apparel are also very expensive items. You are entitled to the replacement value of damaged property. We demand compensation for your ruined bicycle and riding gear. You should not pay out of pocket for property damage.",
    },
    {
      icon: Heart,
      title: "Physical Pain Emotional Distress and Reduced Quality of Life",
      description: "Bicycle crashes cause immense physical pain and emotional trauma daily. Trauma can make riding a bicycle terrifying after an accident. These non economic damages compensate for your invisible mental suffering. We document how the crash destroyed your overall life quality. Your pain deserves significant financial recognition under the law.",
    },
    {
      icon: Shield,
      title: "Long Term Care Needs After Permanent or Disabling Injuries",
      description: "Spinal cord injuries require lifelong medical care and home modifications. Traumatic brain injuries can necessitate full time assisted living support. We fight for compensation that covers these devastating permanent changes. Life care planners help us calculate decades of future costs. We secure the funds needed for your long term survival.",
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
            The True Value of Full Compensation After a Tampa Bicycle Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Recoverable losses depend strictly on facts and available evidence. We fight to secure funds for both current and future hardships.
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
                className="bg-gray-50/80 p-8 rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

export default CompensationTypesSection;

