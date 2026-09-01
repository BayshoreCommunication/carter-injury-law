"use client";
import React from "react";
import { AlertTriangle, Clock, Stethoscope, FileText, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Clock,
      title: "Waiting Too Long to Preserve Evidence",
      description: "Surveillance footage is often the most compelling evidence available in a pedestrian accident case. A camera at a nearby business or traffic intersection may have captured the entire collision clearly. But most systems overwrite recordings within 48 to 72 hours automatically. An attorney can send a legal preservation demand the same day you call. Waiting even a few days to reach out can mean that footage is already gone.",
    },
    {
      icon: Stethoscope,
      title: "Ignoring Follow-Up Medical Care",
      description: "Missing a follow-up appointment looks bad in a claim file. An adjuster will point to that gap and argue your injuries weren't serious enough for you to keep the appointment. Gaps also allow the insurance company to argue a separate incident caused your ongoing symptoms, not the accident. Staying consistent with treatment protects you medically and legally at the same time.",
    },
    {
      icon: FileText,
      title: "Signing Insurance Documents Without Legal Review",
      description: "Insurance documents after an accident rarely look alarming. It often reads like a standard procedural form. But buried in that language may be a release that ends your right to pursue additional compensation. Before you sign anything an insurance adjuster sends over, have an attorney read it. That one step can protect thousands of dollars in future recovery.",
    },
    {
      icon: DollarSign,
      title: "Failing to Track Financial Losses",
      description: "Your total damages include more than hospital bills. Gas to therapy appointments, over-the-counter medications, meals you couldn't prepare because of your injuries, days of work missed, hired help around the house while you recovered, all of it counts. Save receipts from day one. Reconstructing those records 6 months after the accident is difficult, and gaps in documentation give adjusters room to dispute what you're owed.",
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
            Mistakes That Can Weaken Your Largo Pedestrian Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Some of the most damaging things that happen to pedestrian accident claims aren&apos;t caused by the other side. They&apos;re caused by decisions made in the days and weeks after the accident, before anyone has legal guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
