"use client";
import React from "react";
import { AlertTriangle, Users, PackageX, CalendarX, MessageSquareX, Receipt } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Users,
      title: "Failing to Record the Names of Everyone Involved",
      description: "Failing to gather full contact details at the scene creates massive evidentiary hurdles later. Bystanders and passengers leave quickly once emergency crews clear the area. Obtaining full names, phone numbers, and driver’s license details ensures your legal team can secure unbiased witness statements before memories fade or stories change.",
    },
    {
      icon: PackageX,
      title: "Discarding Clothing or Personal Items Damaged in the Collision",
      description: "The impact causes damage to physical goods, which are clear and convincing proof in settlement negotiations. The violent kinetic force of the crash is visually represented by torn clothing, blood on clothing, broken smart phones and broken eye glasses. These items can easily be kept safely in a sealed box that will give evidence that adjusters cannot look the other way.",
    },
    {
      icon: CalendarX,
      title: "Forgetting to Document Changes in Daily Function",
      description: "Through the whole recovery process, there are times when pain and physical limitations will come and go. Having an accurate daily record allows you to see the particulars of your level of pain, events you missed, sleep disturbances, household difficulties etc. This is personal documentation that lasts over time and serves as evidence when seeking non-economic compensation in the event of pain, suffering and loss of quality of life.",
    },
    {
      icon: MessageSquareX,
      title: "Accepting Responsibility Before All Facts Are Known",
      description: "Apologizing out of polite habit at a crash scene is a dangerous error. An innocent statement like \"I didn't see you coming\" will be cited by insurance defense teams as an admission of fault. Always restrict your statements at the scene to basic facts when talking to law enforcement and let crash investigators determine legal fault.",
    },
    {
      icon: Receipt,
      title: "Overlooking Reimbursement for Necessary Accident-Related Expenses",
      description: "Many injury victims focus solely on hospital bills and forget about routine out-of-pocket costs. Prescription copays, medical equipment rentals, OTC pain medications and mileage driven to physical therapy add up to thousands of dollars. Keeping every itemized receipt allows your attorney to add these expenses directly to your total claim demand.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Avoid Costly Missteps</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Mistakes That Can Reduce the Value of Your Largo Uber Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A few early missteps can severely damage your chances of recovery. The right immediate actions will protect your rights from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mistakes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-8 rounded-[20px] bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/60 text-amber-800 flex items-center justify-center mb-6">
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

export default MistakesSection;

