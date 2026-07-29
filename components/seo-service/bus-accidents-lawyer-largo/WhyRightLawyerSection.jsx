"use client";
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
            Why Injured Bus Accident Victims in Largo Lose Out on Compensation Without Legal Representation
          </h2>

          <div className="w-16 h-[3px] bg-primary mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Bus accident claims are rarely simple, so a bus accidents lawyer Largo protects you from accepting less.
          </p>
        </div>

        <div className="mt-12 relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
          <Image
            src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/review.png"
            alt="Lawyer reviewing documents with clients"
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
                  Determining Liability Can Be More Complex Than Expected
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                In commercial transit, liability may be split between the driver, the company, or even the manufacturer. Without a thorough investigation to untangle these relationships, you may miss the actual at-fault party. We sort through these complex legal relationships to ensure full accountability for all of your damages. Professional guidance is essential to ensure that key defendants cannot escape their responsibility for the crash. Missing an investigation step can significantly reduce the potential financial recovery for your serious injuries.
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
                  Insurance Adjusters Look for Reasons to Minimize Claims
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Insurance carriers employ adjusters specifically trained to limit payouts for all accident-related injury claims. They use recorded statements and early settlement offers to lock victims into low payment amounts. Retaining an attorney prevents these companies from taking unfair advantage of you during the claim process. Skilled lawyers can counter these manipulative tactics by protecting your statements from being misused by insurers. Protecting your rights early is crucial to securing the fair compensation that you legitimately deserve.
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
                  Medical Records Alone May Not Prove the Full Extent of Your Injuries
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Clinical billing records verify the cost of treatment, but they do not capture your personal suffering. We provide the additional context required to quantify these intangible damages for your legal claim. This proof is essential for obtaining the total compensation you need for a full recovery. We compile comprehensive documentation that translates medical data into a clear financial impact on life. This expert documentation helps clarify the long-term consequences of your injuries for the insurance adjusters.
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
                  Missing Deadlines Can Endanger Your Right to Compensation
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Statutes of limitations and specific notice deadlines for government entities are extremely strict and unforgiving. Missing these critical dates serves as a permanent bar to recovery for your accident claim. We manage all procedural schedules so you never lose your right to seek legal justice. Strict compliance with these legal timelines remains critical for a successful outcome in your case. Relying on our firm ensures that every filing happens within the required window of time.
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
