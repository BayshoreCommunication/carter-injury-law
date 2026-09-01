"use client";
import React from "react";
import { Shield, FileSearch, Wrench, Handshake, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Early Property Inspection and Documentation",
      description: "The Carter Injury Law team gets to the accident location as quickly as the law permits after being retained. Conditions are photographed and documented independently. The team identifies what has already changed since the fatal accident and what documentation exists to establish what the original condition looked like. That early visit often captures evidence that will not exist a week later.",
    },
    {
      step: "02",
      icon: FileSearch,
      title: "Collecting Safety Policies and Maintenance History",
      description: "Maintenance schedules, inspection logs, work orders, prior incident reports, and the property owner's written safety policies are all formally demanded and reviewed in full. A property with a history of ignored maintenance requests or unfixed safety complaints presents a very different case than one facing a genuinely isolated failure. These records establish the pattern that turns a single incident into evidence of systemic negligence.",
    },
    {
      step: "03",
      icon: Wrench,
      title: "Building a Strong Liability and Damages Claim",
      description: "Qualified experts are engaged to establish both how the property owner's negligence caused the death and what that death is worth in financial terms. Economic losses, the non-economic harm suffered by each surviving family member, and the long-term financial impact on the estate are all calculated with expert support and documented at the level of detail needed to withstand challenges from the property owner's defence counsel.",
    },
    {
      step: "04",
      icon: Handshake,
      title: "Settlement Negotiations Supported by Strong Evidence",
      description: "By the time Carter Injury Law enters settlement negotiations with a commercial insurer, the case is already built for trial. Florida Building Code violations, documented patterns of negligence, expert analysis of causation, and a detailed damages calculation are all part of the demand package. An insurer that understands the firm is prepared to take the case to a Pinellas County jury and negotiate from a different position than one that expects an early, discounted resolution.",
    },
    {
      step: "05",
      icon: Gavel,
      title: "Trial Advocacy When Accountability Is Contested",
      description: "Some commercial property owners and their carriers will not do right by a family no matter how strong the evidence is. Carter Injury Law is prepared for those cases. Attorney David Carter has tried cases in front of Florida juries and approaches every wrongful death matter as though a jury will ultimately decide it. That standard of readiness is what produces results, both in court and at the settlement table before it gets there.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Structured Legal Strategy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Established Legal Process for Handling Largo Premises Liability Wrongful Death Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Fatal premises liability cases require methodical work from the very beginning. The sequence in which evidence is gathered, experts are retained, and demands are framed can determine both the strength of the claim and the size of the ultimate recovery. Carter Injury Law follows a structured process built around getting that sequence right.
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
