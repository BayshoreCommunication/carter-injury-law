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
    title: "Medical Expenses",
    body: "All reasonable medical costs related to your accident injuries are fully recoverable damages for you. This includes emergency room care, surgical procedures, physical therapy, and medications today. We document every medical cost from the date of the accident until resolution daily.",
  },
  {
    number: "02",
    icon: Coins,
    title: "Lost Income & Earning Capacity",
    body: "If your injuries kept you from working the income you lost is compensable for you. If your injuries produce permanent limitations the loss of future earning potential is recoverable. Tampa personal injury lawyers firm work with experts to calculate these forward looking losses accurately for you today.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Pain and Suffering",
    body: "Physical pain caused by accident injuries is recognized as a separate category of harm today. The recoverable amount depends on the nature of your injuries and the duration. Our attorneys document this element through medical records and physician and client testimony daily.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Emotional Distress",
    body: "Traumatic accidents produce psychological consequences alongside physical ones for the injured party here now. Anxiety and sleep disorders are all real and compensable harms under Florida law today. We present emotional distress damages to ensure these injuries receive appropriate recognition for victims.",
  },
  {
    number: "05",
    icon: Home,
    title: "Property Damage",
    body: "The cost of repairing or replacing your vehicle is recoverable as property damage for you. This includes personal property destroyed and the expense of substitute transportation while repairing daily. These costs are included in every complete personal injury claim we build today.",
  },
  {
    number: "06",
    icon: Activity,
    title: "Future Medical Care",
    body: "Injuries that require ongoing medical attention must be accounted for before you agree to settlement. Future surgical procedures and continued therapy carry real costs that extend into the future. We work with medical professionals to project these costs accurately for your claim today.",
  },
  {
    number: "07",
    icon: FileText,
    title: "Permanent Disability & Disfigurement",
    body: "When injuries produce lasting physical limitations, those consequences affect every dimension of life here. Personal independence and daily quality of life are often diminished by these serious injuries. Our attorneys present these damages in human terms that reflect the lasting impact daily.",
  },
  {
    number: "08",
    icon: HeartCrack,
    title: "Loss of Enjoyment of Life",
    body: "When injuries prevent you from participating in activities that give life meaning for you. This category of damages is separate from pain and suffering and is calculated today. It reflects the specific personal impact your injuries have had on your life here.",
  },
  {
    number: "09",
    icon: Landmark,
    title: "Loss of Consortium",
    body: "A spouse may bring a separate claim for the loss of companionship and intimacy. Loss of consortium claims are evaluated in cases involving serious and lasting injury daily. They form an important part of the complete damages picture for affected families today.",
  },
  {
    number: "10",
    icon: Scale,
    title: "Punitive Damages",
    body: "Florida courts have the authority to award punitive damages when conduct rises to egregious levels daily. These damages go beyond compensating the victim and are designed to punish parties. Cases involving egregious recklessness or intoxicated driving may qualify.",
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
            <span className="text-primary block mt-1">in a Tampa Personal Injury Claim</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Florida law entitles injured victims to recover the complete value of their financial losses now. Compensation is divided into economic damages and non economic damages for the victim today.
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
