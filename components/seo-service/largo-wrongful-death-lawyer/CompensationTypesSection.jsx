"use client";
import React from "react";
import {
  ClipboardList, HeartHandshake, Home, Landmark,
  Scale, FileText, BarChart4, ArrowRight,
  ShieldCheck, CircleCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Financial Losses Experienced by Surviving Family Members",
    body: "We seek recovery for all the out of pocket expenses resulting from the fatal accident today. This includes the medical bills from the final care provided to your loved one before death. We ensure that every penny you spend is part of the final claim for compensation.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Funeral and Burial Expenses",
    body: "The cost of a funeral creates a massive financial burden for families during an emotional time. We include these necessary costs in our demand to ensure your family is fully reimbursed. You should not bear the financial strain of these expenses when the death was preventable.",
  },
  {
    number: "03",
    icon: Home,
    title: "Loss of Household Income and Future Financial Security",
    body: "We calculate the total wages and benefits your loved one would have provided for your family. This estimation includes potential raises and career advancement over the expected working life of the victim. We protect your future financial stability by fighting for the full value of this support.",
  },
  {
    number: "04",
    icon: Landmark,
    title: "Loss of Guidance, Care, and Companionship",
    body: "The emotional loss of a loved one is profound and we place a value on that pain. We present evidence of the relationship you held to demonstrate the depth of your loss. This compensation acknowledges the irreplaceable role your loved one played in your daily family life.",
  },
  {
    number: "05",
    icon: FileText,
    title: "Future Financial Growth Lost to the Estate",
    body: "We estimate the value of the assets the estate would have grown to over the years. This loss represents the inheritance and the security you should have had for your family. Our experts prove this projection to ensure the responsible party pays for the financial growth.",
  },
  {
    number: "06",
    icon: BarChart4,
    title: "Supporting Every Damage Claim With Expert Analysis",
    body: "We use economic experts and medical professionals to verify every category of damage in your case. Credible expert reports give your claim the weight it needs to secure a maximum payout. We leave no doubt about the true financial value of your family loss today.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
            The True Value of Full Compensation: <br />
            <span className="text-primary block mt-1">Medical Bills, Funeral Costs, and Lost Support</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Florida law allows grieving families to recover a wide range of damages after a fatal crash. These legal categories reveal the true financial impact of your loss.
          </p>
        </motion.div>

        {/* 3 Columns Card Grid */}
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
        {/* Card Header: Number | Icon + Title */}
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

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-4" />

        {/* Body */}
        <p className="text-gray-600 text-sm leading-relaxed font-medium">
          {card.body}
        </p>
      </div>

      {/* Bottom-right arrow button */}
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
