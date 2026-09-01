"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React from "react";
import Image from "next/image";
import { UserCog, BadgeDollarSign, ShieldX, TrendingDown, EyeOff, Clock, Calendar, ArrowDown, Scale, ShieldCheck, Lock, User, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhyRightLawyerSection = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#faf9f6]">
      
      {/* Left Column: Light Background */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="col-span-12 lg:col-span-5 py-12 px-6 md:px-12 flex flex-col justify-between split-left-padding relative"
      >
        <div className="space-y-6 max-w-lg lg:max-w-none">
          <span className="text-[13px] font-extrabold tracking-widest text-primary uppercase block">
            Why Having the Right Lawyer
          </span>

          <h2 
            className="text-3xl md:text-4xl font-extrabold text-secondary leading-[1.2] tracking-tight"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Why Injured Motorcycle Riders in Largo Lose Out on Compensation Without Legal Representation
          </h2>

          <div className="w-16 h-[3px] bg-primary mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Insurance companies do not make it easy for injured riders to recover fair compensation for losses. Without an experienced advocate many victims settle for far less. We work to ensure you receive the full settlement you deserve for your specific accident injuries.
          </p>
        </div>

        <div className="mt-12 relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
          <Image
            src={getSeoImage("Tampa Families Need Legal Help After Car Accidents.webp", "motorcycle-accident-lawyer-largo-fl").filePath} alt={getSeoImage("Tampa Families Need Legal Help After Car Accidents.webp", "motorcycle-accident-lawyer-largo-fl").altText} title={getSeoImage("Tampa Families Need Legal Help After Car Accidents.webp", "motorcycle-accident-lawyer-largo-fl").title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Right Column: Step Flowchart & Actions */}
      <div className="col-span-12 lg:col-span-7 text-secondary py-16 px-6 md:px-12 flex flex-col justify-between split-right-padding border-l border-gray-100 bg-white">
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-1 max-w-2xl mb-12"
        >
          
          {/* Step 01 */}
          <motion.div variants={fadeInUp} className="flex gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white shadow-md border border-white/10">
              <UserCog className="w-8 h-8 text-white" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#faf9f6]">
                <TrendingDown className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2 pt-1 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-primary leading-none">01</span>
                <div className="w-px h-4 bg-gray-300" />
                <h3 
                  className="text-lg md:text-xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Unfair Bias Against Motorcycle Riders
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Insurance adjusters and jurors sometimes assume riders are reckless simply because they choose to ride motorcycles. This bias can unfairly reduce a settlement offer before the facts of the crash are considered. Our firm works to counter these assumptions with solid evidence and a clear presentation of facts. We ensure you are treated with fairness throughout your entire personal injury claim process today.
              </p>
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div variants={fadeInUp} className="flex pl-8 justify-start">
            <div className="w-0.5 h-10 bg-gray-200 relative flex items-center justify-center">
              <div className="absolute w-6 h-6 rounded-full bg-secondary border border-gray-100 flex items-center justify-center shadow-sm">
                <ArrowDown className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
            </div>
          </motion.div>

          {/* Step 02 */}
          <motion.div variants={fadeInUp} className="flex gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white shadow-md border border-white/10">
              <BadgeDollarSign className="w-8 h-8 text-white" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#faf9f6]">
                <EyeOff className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2 pt-1 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-primary leading-none">02</span>
                <div className="w-px h-4 bg-gray-300" />
                <h3 
                  className="text-lg md:text-xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Insurance Companies Often Dispute Injury Severity
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Insurers frequently argue that a rider's injuries are less serious than medical records show for them. They hope to minimize payout amounts by pointing to gaps in treatment or pre existing conditions. A skilled attorney knows how to counter these tactics with strong documentation and expert medical opinions. We provide the evidence needed to support your recovery and maximize your final settlement amount.
              </p>
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div variants={fadeInUp} className="flex pl-8 justify-start">
            <div className="w-0.5 h-10 bg-gray-200 relative flex items-center justify-center">
              <div className="absolute w-6 h-6 rounded-full bg-secondary border border-gray-100 flex items-center justify-center shadow-sm">
                <ArrowDown className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
            </div>
          </motion.div>

          {/* Step 03 */}
          <motion.div variants={fadeInUp} className="flex gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white shadow-md border border-white/10">
              <ShieldX className="w-8 h-8 text-white" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#faf9f6]">
                <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2 pt-1 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-primary leading-none">03</span>
                <div className="w-px h-4 bg-gray-300" />
                <h3 
                  className="text-lg md:text-xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Critical Crash Evidence Can Quickly Be Lost
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Skid marks fade and surveillance footage gets overwritten and witnesses become harder to locate after time. Acting quickly preserves the evidence needed to prove fault and damages for your injury claim. Our team moves fast to secure this evidence before it disappears for good for you. We stop the loss of important crash data that could prove your case in court.
              </p>
            </div>
          </motion.div>

          {/* Arrow 3 */}
          <motion.div variants={fadeInUp} className="flex pl-8 justify-start">
            <div className="w-0.5 h-10 bg-gray-200 relative flex items-center justify-center">
              <div className="absolute w-6 h-6 rounded-full bg-secondary border border-gray-100 flex items-center justify-center shadow-sm">
                <ArrowDown className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
            </div>
          </motion.div>

          {/* Step 04 */}
          <motion.div variants={fadeInUp} className="flex gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white shadow-md border border-white/10">
              <RefreshCw className="w-8 h-8 text-white" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#faf9f6]">
                <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2 pt-1 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-primary leading-none">04</span>
                <div className="w-px h-4 bg-gray-300" />
                <h3 
                  className="text-lg md:text-xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Comparative Negligence Can Reduce Your Recovery
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Florida follows a comparative negligence rule meaning your compensation can shrink if you are partly at fault. Insurance companies often try to shift blame onto riders to lower what they owe you. Skilled legal representation from the motorcycle accident lawyer Largo FL helps limit unfair fault allegations and protects the full value of your claim. We prevent insurers from minimizing your settlement amount by fighting their blame shifting tactics today.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-2xl"
        >
          
          <div className="w-full bg-primary rounded-[16px] text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-primary/20">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <Scale className="w-10 h-10 shrink-0 hidden sm:block text-white" strokeWidth={1.5} />
              <div>
                <p className="font-extrabold text-[15px] tracking-wide">Secure your recovery and your rights today.</p>
                <p className="text-white/80 text-xs mt-1 font-semibold">Let our legal team build the foundation of your claim.</p>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-secondary hover:bg-secondary/90 border border-white/10 text-white font-bold text-xs px-5 py-3 rounded-lg flex items-center gap-2 shadow-sm transition-all shrink-0 active:scale-95 uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-white" strokeWidth={2.5} />
              Get Case Evaluation
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-y-2 border-t border-gray-200/60 pt-6 px-2 text-secondary font-bold text-xs tracking-wider">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-primary" />
              <span>No Fee Unless We Win</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Lock className="w-4.5 h-4.5 text-primary" />
              <span>100% Confidential</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <User className="w-4.5 h-4.5 text-primary" />
              <span>You Pay Nothing Upfront</span>
            </div>
          </div>

        </motion.div>

      </div>

      <style>{`
        @media (min-width: 1320px) {
          .split-left-padding {
            padding-left: calc((100vw - 1320px) / 2 + 2rem) !important;
          }
          .split-right-padding {
            padding-right: calc((100vw - 1320px) / 2 + 2rem) !important;
          }
        }
      `}</style>

    </section>
  );
};

export default WhyRightLawyerSection;
