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
    title: "Hospital Bills, Surgeries, and Rehabilitation Costs",
    body: "These are the immediate hard costs that must be recovered to prevent financial ruin later. We cover everything from emergency ambulance transport to complex, multi-stage surgeries required for recovery. Your settlement should address the total cost of all necessary medical interventions you received. We ensure no bill is overlooked when we calculate your financial needs and losses. Getting these costs covered is the first step in restoring your financial stability.",
  },
  {
    number: "02",
    icon: Coins,
    title: "Lost Income During Recovery",
    body: "Beyond current lost wages, we recover income lost due to missed shifts and limited hours. We also calculate the inability to advance in your career due to your injuries. Ensuring your family's financial stability remains intact is a primary goal of our team. We document your earnings history to prove the exact amount of money you lost. Recovering this income is vital for maintaining your standard of living during recovery.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Future Medical Treatment and Assistive Care",
    body: "We factor in the cost of long-term assistive technology and medication needed for recovery. Home modifications needed to accommodate permanent injuries are also included in our financial analysis. These costs allow you to maintain your independence after the accident has occurred today. We project these future requirements to ensure you have enough funds to cover them. Failing to plan for these expenses now would be a mistake for your future.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Emotional Trauma and Reduced Quality of Life",
    body: "Psychological damages, including anxiety and depression resulting from the trauma of a crash, are real. These are legitimate, recoverable losses that deserve as much compensation as your physical wounds. We present expert testimony regarding the emotional impact this event had on your life. Your mental well-being is a vital part of your overall recovery and settlement demand. We fight to ensure these non-physical damages are included in your final award amount.",
  },
  {
    number: "05",
    icon: Home,
    title: "Permanent Physical Impairments",
    body: "Where injuries lead to long-term disability, we fight for compensation that addresses your life. We account for the loss of functionality you experience daily due to your permanent injuries. This ensures your final settlement reflects your actual quality of life after the accident. We utilize medical experts to testify about your long-term physical limitations and needs. Your future security depends on getting full value for these permanent physical changes.",
  },
  {
    number: "06",
    icon: BarChart4,
    title: "Expert Documentation to Maximize Compensation",
    body: "We utilize vocational experts and economists to quantify the financial impact of your specific injuries. This process ensures the final demand reflects your total loss rather than immediate bills. Professional testimony provides the hard data needed to support a large settlement demand. Using experts shows the insurance company we are serious about proving your total economic damages. Every piece of documentation adds value to the potential recovery for your case.",
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
            Full compensation accounts for far more than your initial hospital bill after the collision.
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
