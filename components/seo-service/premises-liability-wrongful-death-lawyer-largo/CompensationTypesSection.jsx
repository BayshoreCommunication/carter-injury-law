"use client";
import React from "react";
import { DollarSign, Heart, Home, TrendingUp, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Emergency Medical Expenses Before Death",
      description: "From the moment the 911 call goes out to the moment death is confirmed, the costs that accumulate, ambulance fees, emergency department charges, trauma surgery costs, intensive care billing, are all recoverable as part of the wrongful death claim. The period of survival after the accident does not need to be long for these costs to be substantial.",
    },
    {
      icon: DollarSign,
      title: "Funeral, Burial, and Memorial Costs",
      description: "The Florida Wrongful Death Act permits surviving family members to recover funeral and burial costs from the party whose negligence caused the death. A family should not be left paying out of pocket to bury someone who died because a property owner failed in their legal duty. These expenses are recoverable regardless of the estate's independent financial position.",
    },
    {
      icon: TrendingUp,
      title: "Lost Employment Benefits and Retirement Contributions",
      description: "Future wages, employer-contributed health coverage, pension accruals, and retirement account growth that the deceased would have continued to generate represent real financial losses that fall directly on the surviving family. Financial experts calculate these figures based on the deceased's documented earnings history, expected career path, and age at the time of death. This is often the largest single component of the economic damages claim.",
    },
    {
      icon: Home,
      title: "Loss of Family Support and Everyday Assistance",
      description: "Florida law gives surviving spouses and children the right to recover damages reflecting the practical contribution the deceased made to the household, cooking, transport, childcare, financial management, home upkeep, and the presence that structured daily life for the people left behind. These contributions have a measurable replacement cost, and the law treats them as recoverable economic losses.",
    },
    {
      icon: Heart,
      title: "Mental Pain and Emotional Suffering of Survivors",
      description: "Surviving spouses and minor children may recover damages for the mental pain and emotional suffering caused directly by the death. This is a distinct category that sits apart from economic losses and addresses the grief, disruption, and trauma that the wrongful death inflicts on the people closest to the deceased. Florida courts recognise it as real harm with recoverable value.",
    },
    {
      icon: Shield,
      title: "Long-Term Financial Impact on the Estate",
      description: "The estate's overall financial position changes when someone whose income and contributions supported its growth is gone. Lost investment income, reduced estate value at the time of settlement, and the ongoing cost of professional services the deceased provided without charge all represent recoverable elements of the claim that extend far beyond the immediate period following the accident. Carter Injury Law engages financial experts to make certain these longer-term losses are identified and quantified properly.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Recoverable Damages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The True Value of Full Compensation, Medical Bills, Funeral Costs, and Lost Support
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The financial impact of a fatal premises liability accident extends well past the immediate expenses. Florida law gives surviving family members the right to recover across multiple categories of loss, and Carter Injury Law makes certain every one of them is captured and pursued in full.
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
