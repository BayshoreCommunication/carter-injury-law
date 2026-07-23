"use client";
import React from "react";
import Image from "next/image";
import { UserCheck, ShieldCheck, TrendingUp, Scale, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ExpertValuationSection = () => {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images & Visuals */}
          <div className="col-span-12 lg:col-span-6 relative h-[380px] sm:h-[460px] lg:h-[500px]">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[85%] rounded-[24px] overflow-hidden shadow-xl border border-gray-100"
            >
              <Image
                src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png"
                alt="Lawyer analyzing case evidence with expert documentation"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
            </motion.div>

            {/* Overlapping Badge Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-4 right-4 sm:right-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-2xl max-w-xs"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-extrabold text-secondary text-[15px] leading-tight">Credible Expert Reports</h4>
                  <p className="text-gray-500 text-xs mt-1 font-medium leading-relaxed">
                    Our economic and medical analysts build irrefutable loss documentation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-6 flex flex-col justify-center"
          >
            <div className="w-8 h-[3px] bg-primary mb-6" />

            <span className="text-[12px] font-extrabold tracking-[0.2em] text-primary uppercase block mb-4">
              Expert Valuation
            </span>

            <h2 
              className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Supporting Every Damage Claim With Expert Analysis
            </h2>

            <p className="text-gray-600 text-base md:text-[17px] leading-relaxed mb-8 font-medium">
              We use economic experts and medical professionals to verify every category of damage in your case. Credible expert reports give your claim the weight it needs to secure a maximum payout. We leave no doubt about the true financial value of your family loss today.
            </p>

            {/* Accent bullet details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-secondary font-bold text-sm">Economic Loss Analysis</p>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">Projecting future career earnings, benefits, and retirement values.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-secondary font-bold text-sm">Medical Expert Testimony</p>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">Verifying the medical care and suffering prior to the final moments.</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 mb-8" />

            {/* Signature Quote */}
            <div className="flex items-start gap-4 italic text-gray-700">
              <div className="text-primary text-4xl font-serif shrink-0 leading-none">“</div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                "We document the full emotional and financial reality of what was taken. The defense cannot simply dismiss our numbers."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExpertValuationSection;
