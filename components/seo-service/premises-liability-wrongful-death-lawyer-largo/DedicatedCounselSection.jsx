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
            <span>Personalized Representation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Dedicated Legal Counsel for Largo Families Facing Premises Liability Wrongful Death Claims
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            There is a meaningful difference between a law firm that manages volume and one that manages cases. There is no intake team that hands a file to a junior associate, no paralegal relay system for client questions. The legal strategy your family receives is built around what happened to your loved one, who is legally responsible, and what the evidence supports. Representation is on a contingency fee basis, which means a family already dealing with the financial disruption of losing a parent, spouse, or provider does not carry legal fees on top of everything else. The Premises Liability Wrongful Death Lawyer Largo families work with at Carter Injury Law stays personally involved through every stage of the case. When the case is in negotiation, you hear from your attorney. When it goes to trial, your attorney is the one standing in front of the jury.
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
              <span>100% Contingency-Based</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DedicatedCounselSection;
