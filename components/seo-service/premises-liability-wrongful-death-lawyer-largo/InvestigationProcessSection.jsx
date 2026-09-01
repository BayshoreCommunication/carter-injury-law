"use client";
import React from "react";
import { UserCheck, Users, HeartHandshake, FileText } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserCheck,
      title: "Appointment of the Personal Representative",
      description: "A wrongful death claim in Florida must be brought by the personal representative of the deceased person's estate. This person acts on behalf of all qualifying survivors. If estate proceedings have not yet begun or a personal representative has not been appointed, that step comes first and must be handled correctly before the wrongful death claim can move forward.",
    },
    {
      icon: Users,
      title: "Surviving Relatives Eligible for Compensation",
      description: "A surviving spouse, the deceased's children, and in some circumstances the deceased's parents are all eligible to recover compensation through a Florida wrongful death claim. Each of these survivors may have distinct categories of recoverable damages based on their relationship to the deceased and the losses the death has caused them individually.",
    },
    {
      icon: HeartHandshake,
      title: "Dependents With Financial Recovery Rights",
      description: "Blood relatives or adoptive siblings who relied financially on the deceased may also qualify for recovery. The strength of a dependency claim depends on the nature of the financial relationship and the extent to which the death disrupted it. These claims require documentation and careful presentation to survive challenges from commercial defence counsel.",
    },
    {
      icon: FileText,
      title: "Estate Administration and Wrongful Death Claims",
      description: "Pre-death medical expenses, funeral costs, and the income the deceased would have contributed to the estate in the future all form part of what the estate can pursue through a wrongful death claim. When this claim runs alongside active probate administration, both need to be managed in coordination. Carter Injury Law is experienced in handling exactly that situation without one process undermining the other.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Florida Wrongful Death Act Rules
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Who Is Legally Entitled to File a Premises Liability Wrongful Death Claim in Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The Florida Wrongful Death Act is specific about who may file and who may recover. Getting these distinctions right at the outset matters because procedural errors made early in a case can limit what the family ultimately receives, regardless of how valid the underlying claim is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
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

export default InvestigationProcessSection;
