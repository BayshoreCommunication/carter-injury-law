"use client";
import React from "react";
import { Activity, DollarSign, Accessibility, Home, Receipt, HeartCrack, Users } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Costs of Diagnostic Imaging and Follow-Up Assessments",
      description: "Accurate diagnosis of soft tissue damage, spinal injuries and traumatic brain trauma requires advanced testing. MRIs, CT scans, and nerve conduction studies can quickly add to a patient's medical expenses.We demand full reimbursement for past diagnostic procedures and secure funds for future specialist consultations.",
    },
    {
      icon: DollarSign,
      title: "Income Lost From Reduced Shifts or Missed Workdays",
      description: "A sudden physical injury often forces you to miss critical time at work or accept light-duty tasks at reduced pay. We calculate every dollar of lost hourly wages, missed overtime, lost sales commissions and used sick leave to demand total reimbursement for your compromised income.",
    },
    {
      icon: Accessibility,
      title: "Expenses for Mobility Aids and Temporary Household Support",
      description: "Severe injuries often require sudden lifestyle modifications during recovery. Buying crutches, wheelchairs, hospital beds, or paying for home assistance services creates heavy financial stress. Your personal injury claim should cover these necessary practical modifications completely.",
    },
    {
      icon: Home,
      title: "Lasting Limitations Affecting Personal and Family Responsibilities",
      description: "Permanent mobility issues or chronic pain diminish your capacity to care for dependents or manage basic household duties. We work alongside life-care planners to quantify these permanent personal disruptions, ensuring your long-term settlement covers the cost of ongoing domestic support.",
    },
    {
      icon: Receipt,
      title: "Out-of-Pocket Costs Directly Connected to the Collision",
      description: "Small, everyday expenses resulting from a crash add up to substantial financial losses over time. Prescription medications, medical braces, bandages and travel mileage driven to medical treatments qualify for compensation. We track every single receipt so these hidden costs are repaid in full.",
    },
    {
      icon: HeartCrack,
      title: "Non-Economic Harm From Pain and Disrupted Daily Life",
      description: "Physical trauma causes severe emotional distress, anxiety, depression and physical agony that far outlast initial medical care. Florida law allows victims to seek financial recovery for these non-economic losses. We build compelling cases that clearly demonstrate the full extent of your physical and emotional suffering.",
    },
    {
      icon: Users,
      title: "Recoverable Losses Following a Fatal Rideshare Collision",
      description: "Losing a family member in a rideshare crash causes catastrophic emotional and financial devastation. Under Florida’s Wrongful Death Act, surviving family members can recover compensation for funeral expenses, lost financial support and the loss of companionship. We pursue these sensitive claims with care and determination.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Full Value Recovery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The True Value of Full Compensation, Medical Expenses, Lost Earnings and Other Damages
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Serious wrecks create a lifetime of hidden expenses. We pursue a recovery that addresses your complete financial picture today and tomorrow.
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
                className={`bg-gray-50/80 p-8 rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#faf9f6] border border-gray-100 max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
            Potential compensation relies heavily on liability, available insurance limits and Florida law. Personal injury protection covers immediate medical needs. A victim must meet specific legal thresholds to demand additional compensation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompensationTypesSection;

