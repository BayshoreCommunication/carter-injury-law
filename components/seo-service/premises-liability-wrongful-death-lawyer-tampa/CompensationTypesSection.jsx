"use client";
import React from "react";
import { DollarSign, Heart, Home, TrendingUp, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Medical Expenses Before Death",
      description: "When a loved one doesn't die immediately, the bills that arrive before the death are part of what the estate can recover. Emergency room treatment, surgery, ICU care, and anything else provided between the accident and the death can all be documented and pursued under the Florida Wrongful Death Act. Carter Injury Law works with medical billing experts to account for every dollar.",
    },
    {
      icon: DollarSign,
      title: "Funeral and Memorial Expenses",
      description: "Funeral costs, burial expenses, and memorial service costs are compensable under Florida law. These aren't large numbers in the context of a wrongful death case, but they're real expenses that grieving families shouldn't have to absorb because someone else's negligence created the loss.",
    },
    {
      icon: TrendingUp,
      title: "Lost Financial Support for Surviving Family Members",
      description: "A surviving spouse or child who depended on the deceased's income doesn't stop having financial needs because the income stopped. Florida law entitles them to recover the full value of the financial support the deceased would have provided over a reasonable working life. Economic experts calculate that figure using actual earnings history, age, profession, and projected career trajectory.",
    },
    {
      icon: Home,
      title: "Loss of Household Services and Daily Contributions",
      description: "The day-to-day contributions a person makes to a household is managing childcare, handling home maintenance, running errands, cooking meals have real monetary value when they're gone. Florida law allows surviving family members to recover the replacement cost of those services. It's an area that often gets undervalued without expert input.",
    },
    {
      icon: Heart,
      title: "Emotional Losses Recognized Under Florida Law",
      description: "Florida's Wrongful Death Act expressly recognizes that some losses aren't financial. Surviving spouses and minor children can recover for mental pain and anguish, for the loss of companionship, and for the guidance they've lost access to. These are real damages under Florida law, not secondary considerations.",
    },
    {
      icon: Shield,
      title: "Future Estate Losses and Financial Projections",
      description: "The estate has its own recoverable losses. The savings, investments, and retirement assets the deceased would have accumulated over a reasonable life expectancy represent a concrete financial loss. Forensic accountants and financial experts work with Carter Injury Law to build the projections that put an accurate number on what the estate, and by extension the family, has lost.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Recoverable Damages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The True Value of Full Compensation, Medical Bills, Funeral Costs, and Lost Support
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A wrongful death claim isn't only about what happened. It's about everything that comes after. Florida law recognizes a broad range of losses, and pursuing the full measure of what your family is entitled to recover requires understanding each category and building the evidence to support it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-50/80 p-8 rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
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

export default CompensationTypesSection;
