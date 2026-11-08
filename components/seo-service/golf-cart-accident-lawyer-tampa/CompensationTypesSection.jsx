"use client";
import React from "react";
import { Activity, Wrench, DollarSign, Package, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Emergency Care and Hospital Expenses",
      description: "Eligible compensation includes ambulance transportation fees, emergency department treatment costs, diagnostic scans and hospital stays. Reimbursement of emergency medical costs prevents sudden unpaid medical bills from destroying your personal financial stability. Immediate diagnostic testing records provide necessary evidence that connects severe traumatic injuries directly to the collision.",
    },
    {
      icon: Wrench,
      title: "Surgery, Rehabilitation and Future Medical Needs",
      description: "Severe injuries often require specialized surgical procedures, intensive physical therapy sessions and ongoing medical appointments. Documentation of future treatment costs ensures your financial settlement covers long term healthcare needs without out of pocket costs. Long term medical plans established by medical specialists protect crash victims from unexpected future healthcare bills.",
    },
    {
      icon: DollarSign,
      title: "Lost Wages and Reduced Earning Capacity",
      description: "Victims can recover income lost while missing work during initial emergency medical care and physical recovery periods. Lasting physical disabilities that limit future work capabilities justify substantial financial recovery for diminished earning capacity. Vocational experts analyze your career outlook to quantify total long term lost income resulting from permanent injuries.",
    },
    {
      icon: Package,
      title: "Replacement of Damaged Personal Property",
      description: "Financial claims cover physical property damaged during the collision including electronic devices, clothing and golf equipment. Replacement of destroyed personal items helps restore crash victims to their financial state prior to the crash. Accurate property damage estimates ensure that all secondary physical losses receive full reimbursement during insurance settlements.",
    },
    {
      icon: Heart,
      title: "Physical Pain and Emotional Distress",
      description: "Non economic damages compensate victims for severe physical pain, emotional trauma, anxiety and lost enjoyment of life. Legal claims evaluate the profound personal impact of severe injuries to secure fair non economic financial recovery. Detailed personal pain journals help quantify subjective suffering and emotional trauma for insurance adjusters and juries.",
    },
    {
      icon: Shield,
      title: "Long-Term Care for Lasting Injuries",
      description: "Permanent physical impairments may require home modification expenses, adaptive medical equipment and professional daily caregiving support. Inclusion of long term care costs in your claim provides essential financial security for lifelong medical assistance needs. Comprehensive care plans ensure that severely injured crash victims maintain dignity and independence throughout their lives.",
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
            The True Value of Full Compensation After a Tampa Golf Cart Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Securing full compensation involves calculating all current and future financial losses stemming from your crash injuries. Comprehensive injury claims account for both economic financial damages and non economic personal suffering endured by victims.
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

