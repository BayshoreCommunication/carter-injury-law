"use client";
import React from "react";
import { CheckCircle2, MinusCircle, XCircle } from "lucide-react";

const ExpertValuationSection = () => {
  const tableData = [
    {
      aspect: "Representation focused on the injured cyclist",
      carter: "We investigate bicycle damage and specific rider injuries thoroughly.",
      general: "Varies by firm",
      insurance: "Represents its insured or policyholder",
    },
    {
      aspect: "Bicycle specific evidence review",
      carter: "We preserve helmet damage and specialized cycling equipment evidence.",
      general: "Varies by firm",
      insurance: "Evaluates evidence relevant to the claim",
    },
    {
      aspect: "Review of applicable insurance coverage",
      carter: "We analyze all auto and health policies for maximum recovery.",
      general: "Varies by firm",
      insurance: "Reviews policies relevant to its interests",
    },
    {
      aspect: "Assessment of medical expenses and lost income",
      carter: "We consult experts to calculate future long term care needs.",
      general: "Varies by firm",
      insurance: "Evaluates claimed losses",
    },
    {
      aspect: "Settlement negotiation",
      carter: "We negotiate aggressively on a strict contingency fee basis.",
      general: "Varies by firm",
      insurance: "Negotiates claims on behalf of the insurance company",
    },
    {
      aspect: "Litigation capability",
      carter: "Attorney David Carter has over ten years of legal experience.",
      general: "Varies by firm",
      insurance: "May defend against the claim",
    },
    {
      aspect: "Fee structure",
      carter: "No upfront costs and fees are strictly contingency based.",
      general: "Varies by firm",
      insurance: "Not applicable as claimant legal counsel",
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
            What to Look for When Choosing a Tampa Bicycle Accident Lawyer
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
        </div>

        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider">
                    Consideration
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-primary">
                    Carter Injury Law
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-gray-300">
                    General Personal Injury Firm
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-gray-400">
                    Insurance Company
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
                    <td className="py-4 px-6 text-gray-600 font-semibold">
                      <div className="flex items-center gap-2">
                        <MinusCircle className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{row.general}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-500">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 shrink-0" />
                        <span>{row.insurance}</span>
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

