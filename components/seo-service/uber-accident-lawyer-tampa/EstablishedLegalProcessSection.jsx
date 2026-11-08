"use client";
import React from "react";
import { Clock, Users, Stethoscope, Calculator, FileCheck, Gavel, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Clock,
      title: "Mapping the Timeline From Ride Acceptance to Collision",
      description: "The exact minute the crash happened determines which massive corporate insurance policy covers your physical injuries. We use digital data to establish a timeline that forces the right insurance company to pay.",
    },
    {
      step: "02",
      icon: Users,
      title: "Matching Each Potential Defendant to the Available Evidence",
      description: "Our team tracks down security camera footage and interviews eyewitnesses who saw the terrible car wreck. We use this solid proof to hold every single careless driver financially responsible for your pain.",
    },
    {
      step: "03",
      icon: Stethoscope,
      title: "Comparing Medical Findings With the Reported Crash Mechanics",
      description: "We work with medical doctors to prove your broken bones match the physical force of impact. This stops insurance lawyers from claiming you got hurt doing something else entirely unrelated to driving.",
    },
    {
      step: "04",
      icon: Calculator,
      title: "Calculating Current Expenses and Anticipated Financial Losses",
      description: "A fair settlement must pay your current hospital bills and cover any future lost work paychecks. We accurately calculate how this devastating crash hurts your specific ability to earn a living later.",
    },
    {
      step: "05",
      icon: FileCheck,
      title: "Evaluating Settlement Terms Before Recommending a Response",
      description: "Our lawyers tear apart every single settlement offer the insurance company sends to our local office. We explain all the hidden traps in their proposed contract before you sign your rights away.",
    },
    {
      step: "06",
      icon: Gavel,
      title: "Preparing Court Filings When a Dispute Cannot Be Resolved",
      description: "We never hesitate to file a formal lawsuit if the insurance adjuster refuses to pay fairly. A trial ready legal case shows the other side that we refuse to back down easily.",
    },
    {
      step: "07",
      icon: MessageSquare,
      title: "Explaining Case Developments and Decisions in Plain Language",
      description: "The legal system uses confusing words that frustrate people who just want to pay their bills. We break down the complicated court procedures into normal terms you can actually understand without trouble.",
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
            Established Legal Process for Handling Tampa Uber Accident Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            You must follow a strict and highly organized legal action plan to build a winning claim. We examine every single detail to ensure the insurance company respects your demand for financial compensation.
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

