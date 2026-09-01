"use client";
import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const ExpertValuationSection = () => {
  const tableData = [
    {
      aspect: "Investigation Scope",
      carter: "Reviews inspection records, maintenance logs, and cleaning schedules",
      others: "Relies mainly on the incident report",
    },
    {
      aspect: "Evidence Collection",
      carter: "Moves quickly to secure surveillance footage before it is erased",
      others: "Evidence collection often starts later",
    },
    {
      aspect: "Party Accountability",
      carter: "Investigates every business or individual who may share responsibility",
      others: "Often focuses on only one responsible party",
    },
    {
      aspect: "Expert Analysis",
      carter: "Works with safety and medical professionals when additional analysis is needed",
      others: "Outside experts are used less frequently",
    },
    {
      aspect: "Future Damages",
      carter: "Calculates future treatment needs before discussing settlement",
      others: "Focuses mainly on current medical expenses",
    },
    {
      aspect: "Trial Readiness",
      carter: "Builds every case with trial preparation in mind",
      others: "Encourages early settlement whenever possible",
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
            What Makes Carter Injury Law Different for Slip and Fall Cases
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
                    Many Personal Injury Firms
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
