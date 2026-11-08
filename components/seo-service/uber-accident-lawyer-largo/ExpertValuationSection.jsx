"use client";
import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ExpertValuationSection = () => {
  const tableData = [
    {
      need: "Clarity about coverage",
      obstacle: "Different policies may apply at different stages of an Uber trip",
      support: "Review of relevant coverage provisions and insurance correspondence",
    },
    {
      need: "A reliable account of the crash",
      obstacle: "Parties may disagree about how the collision occurred",
      support: "Collection and assessment of available reports, witness accounts, and other evidence",
    },
    {
      need: "An accurate picture of financial losses",
      obstacle: "Medical expenses and missed work can extend beyond the first few weeks",
      support: "Organization of records documenting expenses, income loss, and other potential damages",
    },
    {
      need: "Time to focus on recovery",
      obstacle: "Claim-related calls and documents can become burdensome",
      support: "Assistance managing legal communications and required documentation",
    },
    {
      need: "A clear decision about settlement",
      obstacle: "An offer may contain terms the claimant does not fully understand",
      support: "Review of the proposed agreement and explanation of potential legal consequences",
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
            Clear Communication About Available Options and Potential Risks
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
        </motion.div>

        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider">
                    What injured clients need
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-gray-300">
                    Common obstacle
                  </th>
                  <th className="py-5 px-6 font-extrabold text-sm uppercase tracking-wider text-primary">
                    Support Carter Injury Law may provide
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-secondary">
                      {row.need}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.obstacle}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-800 font-bold bg-red-50/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.support}</span>
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

