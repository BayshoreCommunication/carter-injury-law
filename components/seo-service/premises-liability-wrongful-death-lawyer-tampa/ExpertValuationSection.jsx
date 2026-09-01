"use client";
import React from "react";
import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const ExpertValuationSection = () => {
  const tableData = [
    {
      aspect: "Client Communication",
      carter: "Direct communication with your attorney",
      others: "Communication primarily handled by staff",
    },
    {
      aspect: "Investigating Unsafe Conditions",
      carter: "Independent investigation of unsafe property conditions",
      others: "Heavy reliance on insurance investigations",
    },
    {
      aspect: "Evidence Development",
      carter: "Thorough review of maintenance, inspection, and security records",
      others: "Limited evidence development",
    },
    {
      aspect: "Legal Strategy",
      carter: "Customized legal strategy for every family",
      others: "High-volume case handling",
    },
    {
      aspect: "Trial Preparation",
      carter: "Trial-ready preparation",
      others: "Greater emphasis on early settlements",
    },
    {
      aspect: "Local Experience",
      carter: "Strong local experience in Tampa premises liability litigation",
      others: "Less localized knowledge",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Side-By-Side Comparison
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The Best Law Firm for a Premises Liability Wrongful Death Claim
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Trusted by families across Tampa and Hillsborough County, Carter Injury Law has built a consistent record of five-star reviews centered on direct attorney access, honest communication, and real results. Carter Injury Law obtained a full policy-limit settlement on behalf of a client, covering all medical costs without exception.
          </p>
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
                    Typical High-Volume Law Firms
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
