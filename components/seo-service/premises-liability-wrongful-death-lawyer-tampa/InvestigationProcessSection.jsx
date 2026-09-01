"use client";
import React from "react";
import { UserCheck, Users, HeartHandshake, FileText } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserCheck,
      title: "The Estate's Role in Filing the Claim",
      description: "Florida's Wrongful Death Act, found at Chapter 768 of the Florida Statutes, requires that the lawsuit be filed by the personal representative of the deceased's estate. That representative acts on behalf of the estate and all eligible survivors. If no one has been appointed yet, the court can handle that appointment so the claim can move forward. Carter Injury Law works with families to navigate this from the earliest stage, so the procedural side doesn't hold up the legal side.",
    },
    {
      icon: Users,
      title: "Family Members Eligible to Recover Damages",
      description: "Florida law is specific about who qualifies. The surviving spouse, the deceased's children, and in some cases the parents of a deceased minor are all recognized survivors who may recover damages. Blood relatives and adoptive siblings who were financially dependent on the deceased can also qualify in certain circumstances. What each survivor is entitled to recover depends on their individual relationship with the person who died.",
    },
    {
      icon: HeartHandshake,
      title: "Financial Dependence and Survivor Benefits",
      description: "Survivors who relied on the deceased's income don't lose that claim just because the source of that income is gone. They can recover the value of the financial support the deceased would have provided over a reasonable working life, along with the value of household contributions and the parental guidance and companionship their children have lost. Florida courts work with actuarial and economic experts to put real numbers on these losses.",
    },
    {
      icon: FileText,
      title: "Probate Issues That Can Affect the Claim",
      description: "When there's no will or when the estate is actively in probate, those proceedings can intersect with the wrongful death litigation in ways that slow things down and create procedural friction. An attorney handling both sides of that picture can keep the probate process and the claim moving in parallel, so the family isn't waiting on one to resolve before the other can progress.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Florida Wrongful Death Act
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Who Is Legally Entitled to File a Premises Liability Wrongful Death Claim in Florida
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Not everyone can file a wrongful death claim in Florida, and the rules around who can recover what are more specific than most people expect. Getting this right from the beginning matters, because procedural missteps early in a case can create complications that are difficult to undo.
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
