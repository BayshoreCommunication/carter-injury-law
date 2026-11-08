"use client";
import React from "react";
import { Shield, Camera, FileSearch, FileText, Handshake, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Initial Case Review and Legal Strategy",
      description: "We thoroughly evaluate the specific circumstances of your commercial crash during a completely confidential initial meeting. Our legal team develops a highly customized legal strategy focused entirely on your specific financial recovery goals.",
    },
    {
      step: "02",
      icon: Camera,
      title: "Accident Scene and Vehicle Evidence Preservation",
      description: "We quickly dispatch investigators to photograph roadway skid marks and document the actual physical collision scene accurately. The exact physical damage on both vehicles can help prove the precise impact angles for the jury.",
    },
    {
      step: "03",
      icon: FileSearch,
      title: "Driver Logs, Electronic Data, and Trucking Records",
      description: "Commercial trucks contain electronic black box data recorders detailing specific speed metrics and sudden braking patterns. We legally demand these vital electronic records alongside mandatory driver qualification files and federal medical clearance records.",
    },
    {
      step: "04",
      icon: FileText,
      title: "Medical Records and Long Term Injury Documentation",
      description: "Our dedicated legal team gathers comprehensive medical records from every doctor treating your severe crash injuries. We carefully calculate future medical costs based on detailed physician prognosis reports and specialized medical expert evaluations.",
    },
    {
      step: "05",
      icon: Handshake,
      title: "Insurance Claim Preparation and Settlement Negotiations",
      description: "We carefully submit a rigorous demand package outlining your absolute right to maximum financial compensation immediately. Our law firm challenges every single attempt the commercial insurer makes to devalue your entirely legitimate claim.",
    },
    {
      step: "06",
      icon: Gavel,
      title: "Litigation When a Fair Settlement Is Not Offered",
      description: "We will never hesitate to file a formal civil lawsuit if corporate settlement negotiations fail completely. Our experienced trial attorneys present incredibly compelling evidence before a judge and jury to secure proper justice.",
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
            Established Legal Process for Handling North Tampa Truck Accident Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Commercial truck injury claims require a structured legal strategy designed to protect your interests at every phase. We guide you through each stage of the process to secure maximum financial compensation.
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

