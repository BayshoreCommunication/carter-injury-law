"use client";
import React from "react";
import { UserCheck, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { motion } from "framer-motion";

const DedicatedCounselSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20 border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-primary font-bold text-xs uppercase tracking-wider mx-auto">
            <UserCheck className="w-4 h-4" />
            <span>Personalized Client Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Dedicated Legal Representation for Tampa Pedestrian Accident Victims
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            A lot of firms take on high volumes of cases and route clients through staff. Many people spend months without ever talking directly to the attorney whose name is on the door. Carter Injury Law works differently. David Carter handles his cases personally. He reviews the records, prepares the demand, and sits across from insurance representatives during negotiations. When a client calls with a question, they get David. That consistency matters when a case involves serious injuries and the details count for a lot. Every pedestrian accident lawyer in Tampa case at the firm is handled on contingency. There are no upfront costs. Fees are only collected when money is recovered. That structure means anyone who calls the firm after a pedestrian accident gets a real shot at legal representation, regardless of their financial situation.
          </p>

          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-sm font-extrabold text-secondary">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Direct Attorney Access</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-primary" />
              <span>No Upfront Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>100% Contingency Fee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DedicatedCounselSection;
