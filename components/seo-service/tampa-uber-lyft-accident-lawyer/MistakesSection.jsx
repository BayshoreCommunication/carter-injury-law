"use client";
import React from "react";
import { AlertTriangle, Trash2, DollarSign, MicOff, CalendarX, Video } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Trash2,
      title: "Deleting Ride Receipts and Digital Trip Records",
      description: "Digital records prove you were in the vehicle. An uninstalled app destroys electronic evidence of your trip. Save all emails and screenshots related to your ride. These documents verify your exact status as a passenger. This data locks the corporate insurance policy in place.",
    },
    {
      icon: DollarSign,
      title: "Accepting Payment Before Understanding Future Medical Needs",
      description: "Fast settlements never account for future surgeries or therapy. A quick check closes your case forever. You need a doctor to assess your long-term prognosis first. A rushed settlement leaves you paying future hospital bills.",
    },
    {
      icon: MicOff,
      title: "Giving Recorded Statements Without Reviewing the Claim",
      description: "Adjusters use recorded statements to twist your words. The innocent comments can ruin your reputation later. Avoid discussion on the record without the assistance of an attorney. We do these communications for your legal rights. Adjusters undergo proper training to get out harmful admissions from the victims.",
    },
    {
      icon: CalendarX,
      title: "Missing Follow-Up Appointments and Treatment Recommendations",
      description: "Missed physical therapy looks bad to insurance companies. They will argue your injuries healed completely. Perfect attendance at appointments proves your pain is real. Medical compliance shows a judge you take recovery seriously.",
    },
    {
      icon: Video,
      title: "Overlooking Evidence From Other Vehicles and Nearby Cameras",
      description: "Nearby businesses often catch crashes on security cameras. Dashcams from passing cars offer unbiased visual perspectives. This footage gets deleted quickly if not requested immediately. We move fast to preserve this vital visual proof. Video evidence easily defeats dishonest driver testimony.",
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
            Mistakes That Can Weaken Your Tampa Uber and Lyft Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Simple errors can ruin your chances of financial recovery. Avoiding these common traps is important for your case.
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
                className={`p-8 rounded-[20px] bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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

