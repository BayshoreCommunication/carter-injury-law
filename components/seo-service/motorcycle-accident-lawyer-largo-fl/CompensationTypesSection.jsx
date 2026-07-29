"use client";
import React from "react";
import {
  ClipboardList, HeartHandshake, Home, Landmark,
  Scale, FileText, BarChart4, ArrowRight,
  ShieldCheck, CircleCheck, HeartCrack, Coins, Activity, Bike
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Emergency Medical Treatment and Hospital Expenses",
    body: "Accidents require transport and surgery and extended hospital stays for the victims of the crash. These costs total tens of thousands of dollars before rehabilitation even begins for your injuries. We ensure these bills are fully covered soon so your recovery is not interrupted here. Your recovery depends on getting this quality care so we fight for full reimbursement.",
  },
  {
    number: "02",
    icon: Coins,
    title: "Lost Wages and Loss of Future Earning Capacity",
    body: "Injuries keep riders out of work for months and some prevent return to prior employment. Compensation must account for past and future income caused by your injuries from the crash. We calculate the total impact on your career to ensure your financial security is protected. Your financial security is our primary legal focus while we handle your injury case.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Pain, Suffering, and Emotional Trauma",
    body: "Physical pain and emotional trauma deserve financial compensation alongside your medical bills and other costs. Florida law allows recovery for life quality changes after your serious motorcycle accident crash today. We document the toll of this daily struggle to prove your need for these damages. You deserve payment for your suffering and pain alongside your medical bills and expenses.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Permanent Disabilities and Long-Term Rehabilitation",
    body: "Some accidents leave riders with permanent physical disabilities that require ongoing therapy and daily care. These long term costs must enter your settlement to protect your future quality of life. We factor these needs into our total claim to ensure you receive full financial protection. You deserve security for your future life ahead after suffering such a serious accident.",
  },
  {
    number: "05",
    icon: Bike,
    title: "Motorcycle Repair or Replacement Costs",
    body: "Riders are entitled to compensation for damaged gear including repairs or full value for bikes. We pursue these costs as part of damages to ensure you get back on road. Your property should be restored after the accident and we ensure you get replacement value. We ensure you get back on the road with the compensation for your bike.",
  },
  {
    number: "06",
    icon: BarChart4,
    title: "Future Medical Care Supported by Expert Testimony",
    body: "Serious injuries require surgeries and specialized medical equipment that we account for in your claim. We use experts to project these future costs to ensure your settlement covers all expenses. This establishes the need for long term care to protect your physical health forever. Your settlement must cover these anticipated medical expenses to secure your future health needs.",
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
            A fair settlement accounts for more than bills because we calculate every category of loss. Our firm calculates every category of your loss to pursue the compensation you truly deserve. We pursue the compensation you truly deserve today to cover all of your accident expenses. We ensure you are fully covered for all financial impacts caused by the accident.
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
