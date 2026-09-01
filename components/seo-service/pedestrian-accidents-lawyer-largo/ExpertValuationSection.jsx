"use client";
import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const ExpertValuationSection = () => {
  const tableData = [
    {
      aspect: "Case Strategy",
      carter: "Builds a legal strategy around the specific facts of your accident",
      others: "Often applies the same approach to every injury file",
    },
    {
      aspect: "Financial Sources",
      carter: "Looks at every possible source of financial recovery",
      others: "May stop at the at fault driver’s insurance policy",
    },
    {
      aspect: "Direct Access",
      carter: "Clients speak directly with their attorney when they call",
      others: "Communication is often routed through support staff",
    },
    {
      aspect: "Long-term Impact",
      carter: "Documents how injuries affect your life long term before any settlement talk",
      others: "May focus the damages picture on current bills only",
    },
    {
      aspect: "Trial Preparation",
      carter: "Treats every case as if it is going to trial from day one",
      others: "May push toward an early settlement before full preparation",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Comparison Guide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Carter Injury Law vs. Other Personal Injury Firms
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
        </div>

        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-primary">
                    Carter Injury Law
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-gray-400">
                    Other Personal Injury Firms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-secondary">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-6 text-gray-800 font-bold bg-red-50/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.carter}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-500">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 shrink-0" />
                        <span>{row.others}</span>
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
