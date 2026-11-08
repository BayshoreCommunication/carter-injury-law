"use client";
import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

const ExpertValuationSection = () => {
  const tableData = [
    {
      concern: "Insurance policy identification",
      individual: "You must investigate coverage and policy conditions",
      carter: "We review relevant policies and driver app status",
    },
    {
      concern: "Evidence preservation",
      individual: "Digital records and video footage may be overlooked",
      carter: "Our team identifies and seeks all relevant evidence quickly",
    },
    {
      concern: "Injury loss evaluation",
      individual: "Future treatment and lost earning capacity are underestimated",
      carter: "Medical and financial records support a fuller case assessment",
    },
    {
      concern: "Insurance companies responses",
      individual: "You must manage endless requests and difficult discussions",
      carter: "Our firm manages all claim communications and aggressive negotiations",
    },
    {
      concern: "Litigation preparation",
      individual: "Court procedures and filing requirements are incredibly difficult",
      carter: "We evaluate litigation options and prepare cases for trial",
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
            Client Concern &amp; Claim Management Comparison
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
        </div>

        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider">
                    Client concern
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-gray-300">
                    Individual claim management
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-primary">
                    Legal assistance from Carter Injury Law
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-secondary">
                      {row.concern}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{row.individual}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-800 font-bold bg-red-50/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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

