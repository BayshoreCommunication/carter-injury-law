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
    title: "Specialized Medical Expenses",
    body: "Motorcycle injuries often require orthopedic surgery, neurological care, or reconstructive procedures. All of these carry significant costs beyond initial emergency treatment. We account for these expenses in our demand, ensuring you are not responsible for the massive costs of specialized care. We coordinate with providers to verify the full scope of your medical needs before agreeing to any settlement.",
  },
  {
    number: "02",
    icon: Coins,
    title: "Reduced Earning Capacity",
    body: "Some injuries prevent a rider from returning to their previous job or working the same hours. This results in a loss of future income that must be factored into a claim. We calculate the difference between your previous earning potential and your current ability to work. We then present this as part of your damages to ensure you are compensated for the career path you have lost.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Loss of Independence",
    body: "Severe injuries can limit a person's ability to perform daily tasks without assistance. This is a loss that deserves recognition in any settlement or verdict. We emphasize the impact on your quality of life, including hobbies, personal care, and mobility. Quantifying this loss ensures that the final compensation acknowledges the reality of your changed lifestyle.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Long Term Rehabilitation",
    body: "Physical therapy, occupational therapy, and ongoing pain management can continue for months or years after a crash. These costs should be reflected in the value of a claim. We analyze your long term rehabilitation plans to create an accurate projection of ongoing expenses. By including these in our claim, we ensure you have the financial resources to continue your treatment without interruption.",
  },
  {
    number: "05",
    icon: Home,
    title: "Home Modification Costs",
    body: "Riders with permanent injuries may need ramps, modified bathrooms, or other home adjustments to live safely and independently. We include the cost of these necessary modifications as part of your damages. Your home should remain a safe space for you, and we fight to ensure the responsible party covers the expenses required to make it accessible.",
  },
  {
    number: "06",
    icon: BarChart4,
    title: "Expert Damage Assessments",
    body: "We work with medical and financial experts to calculate the full lifetime cost of an injury. We ensure no future need is left unaccounted for. These experts provide professional reports that substantiate our damage claims. This adds a layer of objective validity to our demand, making it difficult for the insurance company to dismiss your long term needs.",
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
            A fair settlement accounts for far more than emergency room bills. Full compensation reflects every way a crash has changed a rider's life.
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
