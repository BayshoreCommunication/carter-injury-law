"use client";
import React from "react";
import {
  ClipboardList, HeartHandshake, Home, Landmark,
  CircleCheck, ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Economic Damages Incurred by the Estate",
    body: "A sudden fatal car accident in Tampa brings immediate, devastating bills. This part of your claim covers medical expenses incurred before your loved one passed away. It also pays for the funeral and burial costs. Finally, it replaces the lifetime income they would have provided to support you.",
    bullets: [
      "Medical expenses before passing",
      "Funeral and burial costs",
      "Lost lifetime income and support",
    ],
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Non-Economic Damages for Emotional Loss",
    body: "Florida law recognizes that your emotional trauma deserves true accountability. Surviving family members can seek compensation for the loss of companionship, guidance, and daily protection. This also addresses the deep mental anguish felt by a spouse or children.",
    bullets: [
      "Loss of companionship and protection",
      "Loss of parental guidance & instruction",
      "Mental anguish and emotional suffering",
    ],
  },
  {
    number: "03",
    icon: Home,
    title: "Value of Lost Support and Services",
    body: "Families also lose the everyday help their loved one contributed to the household. This category covers the value of childcare, domestic tasks, and property maintenance. You may now have to pay outside providers to handle these chores.",
    bullets: [
      "Childcare and family guidance",
      "Domestic and household chores",
      "Property and vehicle maintenance",
    ],
  },
  {
    number: "04",
    icon: Landmark,
    title: "Prospective Net Accumulations of the Estate",
    body: "A wrongful death claim also evaluates the future financial growth of the estate. This calculation estimates the assets your loved one would have built through savings and investments. These funds would have eventually provided a secure inheritance for the family.",
    bullets: [
      "Lost future business or wage savings",
      "Prospective investment accumulations",
      "Secure inheritance for surviving heirs",
    ],
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

/* Horizontal connector shown between left & right cards on desktop */
const Connector = () => (
  <div className="hidden md:flex items-center justify-center px-1">
    <div className="w-3 h-3 rounded-full border-2 border-primary/40 bg-white" />
    <div className="w-6 h-px bg-primary/30" />
    <div className="w-3 h-3 rounded-full border-2 border-primary/40 bg-white" />
  </div>
);

const CompensationTypesSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
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

        {/* ── 2×2 Card Grid ── */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-6 md:gap-y-6"
        >

          {/* ── Row 1 ── */}
          {/* Card 01 */}
          <CompensationCard card={cards[0]} />
          <Connector />
          {/* Card 02 */}
          <CompensationCard card={cards[1]} />

          {/* Spacer between rows */}
          <div className="col-span-full h-6" />

          {/* ── Row 2 ── */}
          {/* Card 03 */}
          <CompensationCard card={cards[2]} />
          <Connector />
          {/* Card 04 */}
          <CompensationCard card={cards[3]} />

        </motion.div>

      </div>
    </section>
  );
};

/* ── Individual Card ── */
const CompensationCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-[20px] border border-gray-100/80 shadow-sm p-7 md:p-9 flex flex-col gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative justify-between min-h-[340px]"
    >
      
      <div>
        {/* Card Header: Number | Icon + Title */}
        <div className="flex items-center gap-4 mb-4">
          {/* Big number */}
          <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none shrink-0">
            {card.number}
          </span>
          {/* Vertical separator */}
          <div className="w-px h-10 bg-gray-200 shrink-0" />
          {/* Icon + Title */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
              {card.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium">
          {card.body}
        </p>

        {/* Bullet list */}
        <ul className="space-y-2">
          {card.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2.5 text-gray-700 text-sm font-semibold">
              <CircleCheck className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
              {b}
            </li>
          ))}
        </ul>
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
