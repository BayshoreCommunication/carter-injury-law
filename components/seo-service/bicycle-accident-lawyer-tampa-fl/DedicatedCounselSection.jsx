"use client";
import React from "react";
import { UserCheck, ShieldCheck, HeartHandshake, Award } from "lucide-react";

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
            Dedicated Legal Counsel for Tampa Bicycle Accident Victims
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            Bicycle accidents can result in severe physical trauma that requires an extensive recovery. Having committed and personalized legal representation helps protect your rights every step of the way. Carter Injury Law treats every client with the personal care and attention they deserve. Attorney David Carter handles your bicycle collision claim with focused attention. We handle all insurance company communications and settlement negotiations directly. We answer your questions quickly so you never feel confused about your case. We manage the complex legal claims process so you can focus entirely on healing. Our contingency fee model means you pay nothing unless we recover compensation for you. We provide accessible and passionate legal representation for injured cyclists throughout Tampa.
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

