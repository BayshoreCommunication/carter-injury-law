"use client";
import React from "react";
import { Scale, FileText, Activity, AlertTriangle, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const elements = [
  {
    number: "01",
    icon: Scale,
    title: "Duty of Care",
    body: "The first element requires showing that the defendant owed the injured party a legal duty today. Drivers owe road users a duty to operate vehicles safely and follow traffic laws daily. Medical professionals owe patients a duty to provide care that meets professional standards for them.",
  },
  {
    number: "02",
    icon: AlertTriangle,
    title: "Breach of Duty",
    body: "A duty becomes legally actionable only when it is violated by the other party involved daily. A driver who runs a red light breaches their duty to other motorists right now. We document the breach using accident reports and photographs and expert witness analysis for evidence.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Causation Between Negligence and Injury",
    body: "Proving that the defendant acted negligently is not sufficient on its own for legal case success. The negligence must be established as the direct cause of the injuries claimed by victims. Our attorneys establish a clear causal connection between the conduct and your injuries today.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Documenting Your Damages",
    body: "Every category of loss must be documented with specificity and supported by physical evidence today now. Medical records and employer wage documentation form the foundation for your damages award for compensation. We organize every element of this documentation systematically before a demand is made for payment.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhatYouMustProveSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Legal Elements
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            What You Must Prove in a <br />
            <span className="text-primary">Florida Personal Injury Claim</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Every personal injury claim under Florida law rests on four specific legal elements for success daily. Each must be established with evidence during the process of your specific case right now. Our attorneys build the case for each element from the very beginning investigation phase daily.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12"
        >
          {elements.map((elem, idx) => {
            const Icon = elem.icon;
            return (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-1">
                        Element {elem.number}
                      </span>
                      <h3 
                        className="text-xl md:text-2xl font-bold text-secondary leading-tight"
                        style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                      >
                        {elem.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-100 mb-6" />

                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                    {elem.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouMustProveSection;
