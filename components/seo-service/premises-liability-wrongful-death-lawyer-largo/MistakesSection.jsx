"use client";
import React from "react";
import { AlertTriangle, Wrench, FileText, ShieldAlert, FileSignature } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Wrench,
      title: "Waiting Until Property Conditions Are Changed",
      description: "There is no legal obligation on a commercial property owner to preserve the condition of a hazardous area after a fatal accident. Repairs can begin the same day. Once the condition that caused your loved one's death has been modified or removed, the physical evidence at the core of your claim is gone. The longer the gap between the accident and your first call to an attorney, the higher the probability that something irreplaceable has already been lost.",
    },
    {
      icon: FileText,
      title: "Discarding Important Medical and Expense Records",
      description: "Every document connected to your loved one's treatment between the accident and the death carries financial weight in a wrongful death claim. Ambulance trip reports, emergency department billing statements, itemised surgical invoices, and pharmacy records may each contribute to the economic damages calculation. Treating these as routine paperwork to be discarded or filed away without review is one of the most common and most costly mistakes families make early in this process.",
    },
    {
      icon: ShieldAlert,
      title: "Trusting Internal Business Investigations",
      description: "When someone dies on commercial property, the property owner's insurer almost immediately opens an internal investigation. The purpose of that investigation is to protect the policyholder. Families who read those findings and accept them at face value are starting from a position the opposing side constructed specifically to limit the family's recovery. An independent investigation by Carter Injury Law starts from the evidence.",
    },
    {
      icon: FileSignature,
      title: "Signing Insurance Documents Too Early",
      description: "An adjuster from the property owner's insurance carrier may contact a grieving family within days of a death, presenting paperwork in a way that feels routine or even helpful. Any release, recorded statement, or settlement agreement sent by that adjuster should be reviewed by an independent attorney before it is signed. Signing without review can permanently limit or eliminate the family's right to full compensation under the Florida Wrongful Death Act.",
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
            Mistakes That Can Weaken Your Largo Premises Liability Wrongful Death Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The most damaging decisions in a premises liability wrongful death case are often made in the first week, before a family has retained an attorney. Knowing what to avoid can change the outcome significantly.
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
