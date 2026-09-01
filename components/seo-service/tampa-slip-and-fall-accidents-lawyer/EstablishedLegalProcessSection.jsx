"use client";
import React from "react";
import { Shield, FileSearch, Wrench, Handshake, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Reviewing the Facts and Evaluating Liability",
      description: "The case starts with a careful review of how the fall occurred, what conditions existed at the property, and what legal duties Florida premises liability law placed on the responsible parties. That review determines who may be liable and what legal theories apply.",
    },
    {
      step: "02",
      icon: FileSearch,
      title: "Gathering Evidence Before It Is Lost",
      description: "Preservation demands go out immediately for surveillance footage, maintenance records, and inspection logs. Material gathered in the first days of a case is almost always stronger and more complete than anything collected weeks after the incident.",
    },
    {
      step: "03",
      icon: Wrench,
      title: "Measuring the Full Impact of Your Injuries",
      description: "Medical records and physician input are used to calculate current losses and project future treatment needs. Every recoverable element gets factored in before a settlement figure is discussed, including long-term care costs and the impact on earning capacity.",
    },
    {
      step: "04",
      icon: Handshake,
      title: "Negotiating for Fair Financial Recovery",
      description: "Carter Injury Law doesn't negotiate from a weak position. Every offer gets measured against what the file actually supports. Lowball figures get pushed back on. The firm doesn't recommend accepting a settlement until it reflects the real value of what the client has been through.",
    },
    {
      step: "05",
      icon: Gavel,
      title: "Taking the Case to Court When Necessary",
      description: "Some insurance companies don't bargain fairly unless they know the other side will go to trial. Carter Injury Law will. Every file is built with litigation in mind, and when a fair settlement can't be reached, the firm is prepared to present the case before a jury.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Disciplined Legal Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Established Legal Process for Handling Tampa Slip and Fall Accident Claims
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Every case Carter Injury Law handles follows a disciplined process. Nothing is improvised or nothing gets cut short because it seems inconvenient.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50/80 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-3xl font-extrabold text-primary">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-secondary mb-2">
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

export default EstablishedLegalProcessSection;
