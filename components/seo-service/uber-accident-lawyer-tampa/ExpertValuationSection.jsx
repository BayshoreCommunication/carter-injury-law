"use client";
import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ExpertValuationSection = () => {
  const tableData = [
    {
      consideration: "You need a strong grasp of complex state personal injury laws to resolve tricky insurance coverage.",
      independently: "The injured victim must interpret confusing policy terms and fight huge corporations without any professional help.",
      carter: "We review the confusing fine print and find the hidden coverage the adjuster ignored.",
    },
    {
      consideration: "You must act fast to secure digital evidence before the rideshare company deletes crucial trip data.",
      independently: "The unrepresented person must somehow figure out how to force a massive tech company to cooperate.",
      carter: "Our legal team sends formal preservation letters that force the corporate giant to save trip data.",
    },
    {
      consideration: "You must predict how much your medical care will cost years from now to calculate losses.",
      independently: "People who handle their own claims almost always forget to demand money for future doctor visits.",
      carter: "We use medical experts to calculate exactly how much money you will eventually need.",
    },
    {
      consideration: "You must review legal settlement contracts to ensure you do not accidentally lose your legal rights.",
      independently: "The unrepresented victim evaluates lowball cash offers without knowing if the amount is actually legally fair.",
      carter: "Our legal team breaks down the contract and tells you if the insurance offer is garbage.",
    },
    {
      consideration: "You must meet rigid filing deadlines and understand complicated local legal procedures to follow court rules.",
      independently: "The injured person must navigate a confusing court system designed for lawyers rather than normal people.",
      carter: "We handle all the stressful court filings and meets every single strict legal deadline",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Comparison Guide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Claim Consideration Comparison
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
        </motion.div>

        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider">
                    Claim consideration
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-gray-300">
                    Handling the claim Independently
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-primary">
                    Legal representation from Carter Injury Law
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-secondary">
                      {row.consideration}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.independently}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-800 font-bold bg-red-50/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.carter}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertValuationSection;

