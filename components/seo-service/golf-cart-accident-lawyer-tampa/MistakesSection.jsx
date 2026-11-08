"use client";
import React from "react";
import { AlertTriangle, ShieldAlert, HardHat, Users, FileSearch, DollarSign, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: ShieldAlert,
      title: "Dismissing Injuries Because the Cart Looks Undamaged",
      description: "Damage to light-weight golf cart frames is not a good indicator of high physical forces to occupants of the vehicle. The most serious concussions, along with internal bleeding, spinal injury often occur hours after seemingly minor low speed impacts. Neck stiffness often goes unnoticed by victims right after an accident, but weeks later they experience chronic pain. Your timely medical evaluation sets a baseline documentation of your injuries directly related to the impact with the cart.",
    },
    {
      icon: HardHat,
      title: "Throwing Away Damaged Helmets or Safety Equipment",
      description: "Damaged safety gear serves as compelling physical proof showing the brutal impact force during your crash. Preservation of cracked helmets, torn clothing and scuffed eyewear helps reconstruct crash dynamics for legal claim proceedings. Insurance defense adjusters often argue that low collision speeds could not possibly cause severe bodily trauma. Retaining torn apparel provides visual proof that refutes false claims made by opposing insurance legal representatives.",
    },
    {
      icon: Users,
      title: "Leaving Passenger and Witness Details Uncollected",
      description: "Eyewitness accounts provide neutral support when opposing parties offer conflicting statements about how the collision happened. Uncollected contact information leaves your legal team without essential third party testimony during formal negotiation proceedings. Independent witnesses frequently confirm whether a cart operator acted recklessly or failed to yield proper right of way. Collection of names and telephone numbers on scene prevents critical witness testimony from disappearing over time.",
    },
    {
      icon: FileSearch,
      title: "Overlooking the Cart's Rental and Service History",
      description: "Rental contracts and mechanical maintenance logs contain essential details about prior vehicle safety issues and defects. Omission of past inspection records prevents your attorney from exposing systematic fleet maintenance neglect by rental operators. Rental companies must maintain strict equipment logs showing routine inspections and necessary mechanical repairs for fleet carts. Inspection records often prove that commercial operators ignored known brake problems prior to a serious collision.",
    },
    {
      icon: DollarSign,
      title: "Accepting an Early Settlement Before Treatment Ends",
      description: "Quick settlement offers from insurance companies deliberately underestimate future medical expenses and long term wage loss. Execution of a premature release prevents you from seeking additional financial recovery after learning full injury costs. Insurance claims adjusters push fast cash settlements before injured victims fully comprehend their true long term prognosis. Full financial recovery requires waiting until your treating physician establishes a clear maximum medical improvement assessment.",
    },
    {
      icon: Share2,
      title: "Posting Accident Details on Social Media",
      description: "Insurance claims adjusters regularly monitor social media accounts for photos or comments that undermine injury severity. Public posts regarding your activities after the crash can be twisted to dispute valid medical claims. Defense attorneys frequently use innocent online photos out of context to argue that injuries are exaggerated. Refraining from social media activity during ongoing legal proceedings protects your personal injury claim from defense strategies.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Avoid Costly Missteps</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Mistakes That Can Weaken Your Tampa Golf Cart Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Mistakes made immediately following a severe cart collision significantly threaten your legal rights and compensation. Proper understanding of common mistakes helps crash victims preserve fundamental evidence and build a stronger claim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mistakes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-[20px] bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/60 text-amber-800 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MistakesSection;

