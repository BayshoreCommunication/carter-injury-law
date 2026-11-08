"use client";
import React from "react";
import { AlertTriangle, Smartphone, Wrench, Fuel, FileSignature, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Smartphone,
      title: "Failing to Save the Original Uber Trip Confirmation",
      description: "You need actual digital proof of your specific rideshare trip request to establish the app status. You must take screenshots of your trip receipt and save them immediately after the collision happens.",
    },
    {
      icon: Wrench,
      title: "Repairing a Damaged Vehicle Before Documenting Its Condition",
      description: "Photos of crushed metal help our crash experts prove exactly how hard the two cars collided. You destroy vital visual evidence needed to win your case by fixing your damaged bumper early.",
    },
    {
      icon: Fuel,
      title: "Overlooking Transportation Costs During Medical Recovery",
      description: "Victims almost always forget to keep receipts for the gas used driving to physical therapy sessions. These annoying out of pocket travel expenses add up and belong in your final settlement demand.",
    },
    {
      icon: FileSignature,
      title: "Signing Broad Medical Authorizations Without Understanding Their Scope",
      description: "Adjusters will ask you to sign release forms letting them dig through your entire medical history. This dirty trick lets them find old injuries to use against your current auto accident claim.",
    },
    {
      icon: ShieldAlert,
      title: "Assuming the Police Report Settles Every Liability Dispute",
      description: "Police reports provide a helpful starting point but they never have the absolute final legal word. Our independent investigators often uncover crucial physical evidence that busy patrol officers completely missed on scene.",
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
            Mistakes That Can Weaken Your Tampa Uber Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            One simple mistake after a crash gives the greedy insurance company an excuse to deny payment. You can keep your legal claim strong from the very first day by avoiding common errors.
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

