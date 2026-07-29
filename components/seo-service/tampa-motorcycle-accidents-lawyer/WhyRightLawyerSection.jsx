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
            Why Injured Motorcycle Riders in Tampa Lose Out on Compensation Without Legal Representation
          </h2>

          <div className="w-16 h-[3px] bg-primary mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Insurance companies count on unrepresented riders accepting less than their case is worth. Without legal guidance, many victims face obstacles they never anticipated.
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
                  Complex Liability Issues
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Figuring out who is to blame in a motorcycle crash could be made difficult by disagreements, prejudiced views against riders, and understanding which traffic laws apply. Few people can handle this process on their own. A reliable Tampa motorcycle accidents lawyer can help riders decide who is to blame making sure they aren't being taken advantage of. Insurance companies could try to make a rider seem like an aggressive driver. We counter these narratives with objective evidence and expert testimony to protect your reputation and your claim.
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
                  Multiple Insurance Policies
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                A single crash can involve several insurance policies. This includes the at fault driver liability coverage, uninsured or underinsured motorist protection, and sometimes a commercial policy. Sorting out which policy applies and how much it covers requires experience most riders simply do not have. We handle these complexities to maximize your recovery. We audit all available coverage options to ensure that you are not settling for a lower amount because you were unaware of a secondary policy that should have contributed to your compensation.
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
                  Lack of Critical Evidence
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Physical evidence, such as skid marks, video footage of the accident, and vehicle damage might vanish in days following an accident. If action is not taken promptly, riders are at risk of losing proof of fault. We secure and preserve this evidence before it is lost. Our Tampa motorcycle accidents lawyer sends immediate preservation letters to businesses and municipalities. This ensures that vital data from surveillance cameras or black box recorders is saved for your case, preventing the destruction of key information that could prove the other party was at fault.
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
                  Challenging Settlement Negotiations
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                Insurance companies train their adjusters to keep financial payouts as low as possible for every single claim. They frequently push for a fast settlement before a rider realizes the true severity of their injuries. Riders who lack legal representation may unknowingly sign away their future rights to seek necessary additional compensation. We fight to prevent you from being undervalued. We evaluate all offers against the long term costs of your medical treatment and lost wages. If the offer is insufficient, we reject it and continue the fight, ensuring that you do not accept a payout that leaves you financially vulnerable in the future.
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
