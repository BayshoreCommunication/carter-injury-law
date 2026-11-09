"use client";
import React from "react";
import Link from "next/link";
import { Activity, DollarSign, TrendingDown, Car, Heart, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Emergency Treatment and Ongoing Medical Expenses",
      description: "Ambulance rides and emergency surgeries create incredibly massive initial hospital bills very quickly after a severe crash. Your final settlement must also cover necessary future physical therapy and specialized ongoing medical equipment costs entirely.",
    },
    {
      icon: DollarSign,
      title: "Lost Wages During Recovery",
      description: "Time away from work during your recovery can create immediate and severe financial stress for you and your entire family. We accurately calculate the exact income you lost while recovering from the devastating commercial truck collision.",
    },
    {
      icon: TrendingDown,
      title: "Reduced Earning Capacity After a Serious Injury",
      description: "Permanent physical disabilities might prevent you from returning to your previous chosen career path ever again altogether. Your final compensation must account for the lifetime of earnings you can no longer generate for yourself.",
    },
    {
      icon: Car,
      title: "Vehicle Repair or Replacement Costs",
      description: "Massive commercial trucks absolutely destroy smaller passenger vehicles upon impact due to incredibly massive vehicle weight differences. You certainly deserve full financial reimbursement for property damage or total vehicle replacement costs without any delay.",
    },
    {
      icon: Heart,
      title: "Physical Pain and Emotional Distress",
      description: "Catastrophic crash injuries cause daily physical agony and incredibly severe long term psychological trauma for innocent victims. We confidently ensure the insurance company financially acknowledges your hidden emotional suffering completely during settlement negotiations.",
    },
    {
      icon: Wrench,
      title: "Future Medical Care and Rehabilitation Needs",
      description: "A thorough assessment of the lifelong physical impact of an injury can help protect you from future medical financial hardship. We consult specialized medical experts to accurately project the massive cost of lifelong specialized rehabilitation care needs.",
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
            The True Value of Full Compensation After a North Tampa Truck Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Full financial compensation accounts for both immediate costs and long-term financial consequences caused by a crash. Our firm calculates every category of damages to pursue a recovery that fully protects your future. Cyclists injured in traffic accidents may face medical bills and lost income. A{" "}
            <Link href="/bicycle-accident-lawyer-tampa-fl" className="text-primary hover:underline font-semibold">
              bicycle accident injury lawyer Tampa FL
            </Link>{" "}
            can explain their options for seeking compensation.
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

