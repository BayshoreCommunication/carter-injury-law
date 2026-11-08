"use client";
import React from "react";
import { CheckCircle2, MinusCircle, XCircle } from "lucide-react";

const ExpertValuationSection = () => {
  const tableData = [
    {
      aspect: "Representation",
      carter: "Client advocacy for full injury compensation",
      general: "Standard legal services based on firm terms",
      insurance: "Defends corporate profitability and shareholder assets",
    },
    {
      aspect: "Investigation",
      carter: "Evaluation of crash evidence and injuries",
      general: "Investigation scope depends on firm practices",
      insurance: "Evaluates facts to minimize overall payout liabilities",
    },
    {
      aspect: "Fault Assessment",
      carter: "Identifies operator negligence and liable third parties",
      general: "Fault analysis varies by legal team experience",
      insurance: "Assesses liability under policy limits and rules",
    },
    {
      aspect: "Record Collection",
      carter: "Subpoenas maintenance logs and safety agreements",
      general: "Document gathering varies by attorney preference",
      insurance: "Reviews limited documents provided during claim filings",
    },
    {
      aspect: "Loss Evaluation",
      carter: "Calculates current medical bills and future losses",
      general: "Loss evaluation depends on available resources",
      insurance: "Determines minimal covered loss amounts under policy",
    },
    {
      aspect: "Negotiation",
      carter: "Negotiates aggressively on behalf of injured clients",
      general: "Settlement strategies vary across individual law practices",
      insurance: "Offers minimal early settlement payouts to claimants",
    },
    {
      aspect: "Litigation",
      carter: "Prepares court filings when negotiations fail",
      general: "Trial capabilities depend on firm litigation practice",
      insurance: "Defends corporate interests during formal court disputes",
    },
    {
      aspect: "Legal Fees",
      carter: "Charges zero upfront fees on contingency basis",
      general: "Fee schedules vary across different law offices",
      insurance: "Does not offer legal representation to claimants",
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
            Why Carter Injury Law May Be the Better Choice for Your Case
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
        </div>

        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider">
                    What Matters in a Golf Cart Accident Case
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
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
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

