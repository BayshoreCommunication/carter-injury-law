"use client";
import React from "react";
import { Shield, FileText, Camera, FileSearch, Layers, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Initial Consultation and Review of the Collision",
      description: "We begin with a free comprehensive review of your crash. We listen to your story and evaluate the basic facts. Our team explains the legal process and your potential options. We determine if another party is legally responsible for damages. This meeting gives you clarity during a very confusing time.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Collection of Police Reports and Independent Witness Accounts",
      description: "We obtained the official Florida Highway Patrol crash report immediately. Our investigators interview witnesses to secure their independent factual accounts. Witness memories fade quickly so early interviews are very important. The police report provides the foundational facts for your claim. Strong witness support often forces insurance companies to settle fairly.",
    },
    {
      step: "03",
      icon: Camera,
      title: "Preservation of Video Footage and Physical Evidence",
      description: "We send preservation letters to businesses with security camera footage. This prevents the deletion of crucial video evidence of the crash. We document roadway regulations and applicable Florida Statutes thoroughly. We assess the physical bicycle damage to support impact theories. Evidence of the crash helps establish the driver's negligence and support your claim.",
    },
    {
      step: "04",
      icon: FileSearch,
      title: "Medical Documentation and Assessment of Recovery Needs",
      description: "We gather all your hospital records and physical therapy notes. Our team works with your doctors to understand your prognosis. We document how your injuries impact your daily life routine. This medical evidence is required to prove your physical suffering. Thorough medical documentation supports demands for maximum financial recovery.",
    },
    {
      step: "05",
      icon: Layers,
      title: "Insurance Coverage Review and Liability Analysis",
      description: "We identify every driver insurance policy that covers your crash. Our team analyzes liability under Florida comparative fault laws. We find overlapping coverage to maximize your potential financial recovery. Insurance companies try to hide available policy limits from unrepresented victims. We force complete transparency regarding all available insurance compensation funds.",
    },
    {
      step: "06",
      icon: Gavel,
      title: "Settlement Negotiations and Trial Preparation",
      description: "We present a comprehensive settlement demand to the insurance company. We negotiate aggressively to cover all your past and future losses. Many personal injury cases settle before reaching a courtroom trial. However we prepare every single case for trial from day one. This aggressive preparation often results in better settlement offers overall.",
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
            Established Legal Process for Handling Tampa Bicycle Accident Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A structured legal process ensures no detail is overlooked in your claim. Every client deserves to know exactly what to expect. We guide you through each stage while preparing for potential challenges.
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

