"use client";
import React from "react";
import { Activity, TrendingUp, Heart, Wrench, Shield, Home } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Emergency Medical Treatment and Future Healthcare Costs",
      description: "The ER visit, surgery, hospital stay, and specialist follow-ups are all medical costs that may be recoverable. For people with serious injuries, the future medical costs often end up being much larger than what was spent in the first weeks after the accident. Both belong in the claim.",
    },
    {
      icon: TrendingUp,
      title: "Lost Income and Reduced Ability to Earn a Living",
      description: "Every week you cannot work because of the accident is a week of lost income. When the injuries change what you are physically able to do for a living going forward, the reduction in earning capacity is a separate category of loss that deserves its own documentation and demand.",
    },
    {
      icon: Heart,
      title: "Physical Pain and Emotional Suffering",
      description: "Florida law accounts for more than broken bones and medical bills. Chronic pain, anxiety, post-traumatic stress, and losing the things you once enjoyed are real losses. Carter Injury Law presents them as such and fights to make sure they are valued appropriately.",
    },
    {
      icon: Wrench,
      title: "Rehabilitation and Long-Term Recovery",
      description: "Getting back to normal function takes time and costs money. Physical therapy, occupational therapy, and other rehabilitative care after a pedestrian accident can run for months. Those costs are part of the claim, and they need to be documented and accounted for fully.",
    },
    {
      icon: Shield,
      title: "Permanent Disabilities and Loss of Independence",
      description: "Some injuries change a person's life permanently. When that is the case, home modifications, assistive equipment, and ongoing personal care become long-term financial realities. Carter Injury Law factors those needs into the compensation demand rather than treating the case as closed once the medical bills are calculated.",
    },
    {
      icon: Home,
      title: "Financial Challenges Created by the Accident",
      description: "Property damage, transportation during recovery, and the broader financial disruption from being unable to work are all part of the picture. Carter Injury Law does not stop at the obvious losses. The full financial impact of what happened to the client shapes the demand.",
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
            The Full Value of Compensation Available After a Tampa Pedestrian Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Most people think of the hospital bill first. That is usually just the beginning. Carter Injury Law makes sure no piece of what the client lost gets left out of the demand.
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
