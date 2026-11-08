"use client";
import React from "react";
import { Route, Smartphone, FileSpreadsheet, Calculator, FileCheck, Gavel, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Route,
      title: "Establishing the Order of Events Before and During the Crash",
      description: "Reconstructing the exact mechanics of a collision requires detailed physical investigation. We evaluate skid marks, vehicle resting positions, impact points and traffic camera footage to establish how the crash unfolded. Building a clear sequence of events proves liability and shuts down false claims from the defense.",
    },
    {
      step: "02",
      icon: Smartphone,
      title: "Checking the Driver's Rideshare Activity Against Insurance Terms",
      description: "Rideshare insurance coverage hinges entirely on the driver’s digital footprint at the moment of impact. We subpoena GPS data and app activity records to confirm whether the driver was off-duty, waiting for a ride request, or actively carrying a passenger. This evidence determines whether a $50,000 or $1,000,000 insurance policy applies to your claim.",
    },
    {
      step: "03",
      icon: FileSpreadsheet,
      title: "Gathering Records From Medical Providers and Accident Investigators",
      description: "A claim's success is founded on total medical and official documentation. We get certified police reports, 911 audio recordings, paramedic logs and full length physician notes right away. This helps to avoid insurance companies claiming your injuries were pre-existing or unrelated to the wreck.",
    },
    {
      step: "04",
      icon: Calculator,
      title: "Examining the Financial Impact on the Injured Person's Household",
      description: "Severe injuries affect a family’s financial stability long before medical treatments conclude. We evaluate lost wage statements, missed bonuses, used paid time off and reduced earning capacity to demonstrate your full financial harm. This exhaustive review ensures our settlement demands cover the entire economic toll placed on your home.",
    },
    {
      step: "05",
      icon: FileCheck,
      title: "Reviewing Settlement Conditions Before Any Agreement Is Signed",
      description: "Insurance companies prepare settlement releases with a lot of general legal releases. If a defective release is signed, you will waive any future claims against other parties who may be responsible for your injuries, or you will have to reimburse health insurance liens out of your own pocket. All clauses are checked before you sign, to make sure your rights are not compromised.",
    },
    {
      step: "06",
      icon: Gavel,
      title: "Advancing the Claim Through the Appropriate Legal Channels",
      description: "We take the matter up to the next level of insurance company negotiations without delay if they are not willing to offer us a fair settlement during initial negotiations. A formal civil lawsuit for the county is prepared and filed with the appropriate Pinellas County court by our team. Filing of formal litigations will let the defense know that we are ready to take a case to a jury.",
    },
    {
      step: "07",
      icon: MessageSquare,
      title: "Explaining Important Decisions Before Each Major Case Step",
      description: "Going through a legal claim should not be a gamble. We simplify the legal terminology, court process, settlement offers and possible litigation issues.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Disciplined Legal Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Established Legal Process for Handling Largo Uber Accident Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A methodical approach prevents evidence from slipping through the cracks. We follow a strict framework to build a rock-solid injury claim.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50/80 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-3xl font-extrabold text-primary">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-secondary mb-2">
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

export default EstablishedLegalProcessSection;

