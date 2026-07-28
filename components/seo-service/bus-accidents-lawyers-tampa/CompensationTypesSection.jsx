"use client";
import React from "react";
import {
  ClipboardList, HeartHandshake, Home, Landmark,
  Scale, FileText, BarChart4, ArrowRight,
  ShieldCheck, CircleCheck, HeartCrack, Coins, Activity
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Emergency Medical Expenses",
    body: "Compensation must cover all immediate and future medical costs for your injuries sustained. This includes surgeries and extensive physical therapy sessions for your full recovery here. We account for every long-term rehabilitation requirement needed for health and wellbeing. Your settlement should fully fund your ongoing recovery path and medical needs today.",
  },
  {
    number: "02",
    icon: Coins,
    title: "Lost Wages & Reduced Earning Capacity",
    body: "Injuries may prevent you from working for extended periods after accidents occur in Tampa. We calculate both current losses and future earning potential accurately for your case. Vocational experts help us define your total financial impact and losses for compensation. You deserve reimbursement for all lost career opportunities due to your injuries sustained.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Pain, Suffering, & Emotional Distress",
    body: "Florida law recognizes compensation for physical and emotional trauma after crashes happen daily. Quantifying these damages requires documented evidence and personal accounts of pain from victims. We fight to ensure these figures remain fair and accurate for your recovery process. You deserve recognition for the pain you endured because of driver negligence here.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Permanent Disability & Rehabilitation",
    body: "Lasting disabilities require significant long-term financial support for your future recovery needs. Settlement funds should cover assistive devices and home modifications for you personally. We analyze how your independence changed after the accident occurred in the city. Securing your future care remains a top priority for our legal team today.",
  },
  {
    number: "05",
    icon: Home,
    title: "Property Damage & Other Losses",
    body: "Bus accidents often destroy vehicles and personal property items beyond repair for victims. You might face extra costs for childcare or transportation services needed after accidents. We include every legitimate financial loss in your claim for your full recovery. Comprehensive accounting ensures you recover your full losses from the accident here.",
  },
  {
    number: "06",
    icon: BarChart4,
    title: "Expert Analysis Support",
    body: "We bring in medical and financial experts as needed for all your cases. Their analysis provides documentation that insurers cannot easily dismiss or ignore later. Expert support builds a solid foundation for your case and fair compensation package. We leave no stone unturned when pursuing compensation for your future wellbeing.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const CompensationTypesSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Financial Recovery
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            The True Value of Full Compensation <br />
            <span className="text-primary block mt-1">Medical Bills, Lost Income, and Future Care</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Injured victims have the right to seek the complete value of their financial losses under Florida law. Here are the types of damages we recover for bus accident victims.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <CompensationCard key={i} card={card} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

/* Individual Card */
const CompensationCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-[20px] border border-gray-100/80 shadow-sm p-6 md:p-8 flex flex-col gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative justify-between min-h-[360px]"
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none shrink-0">
            {card.number}
          </span>
          <div className="w-px h-10 bg-gray-200 shrink-0" />
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
            </div>
            <h3 className="text-[13px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
              {card.title}
            </h3>
          </div>
        </div>

        <div className="w-full h-px bg-gray-100 mb-4" />

        <p className="text-gray-600 text-sm leading-relaxed font-medium">
          {card.body}
        </p>
      </div>

      <div className="flex justify-end mt-4 pt-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200"
          aria-label="Get started"
        >
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    </motion.div>
  );
};

export default CompensationTypesSection;
