"use client";
import React from "react";
import { Clock, Wrench, FileText, Scale, FileSpreadsheet, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Clock,
      title: "Review of the Collision and Injury Timeline",
      description: "Legal teams gather detailed information regarding crash locations, weather conditions, involved parties and immediate emergency care. Establishment of a clear timeline helps link your specific bodily injuries directly to the golf cart incident. Precise timeline documentation prevents defense lawyers from claiming that your physical injuries stemmed from unrelated prior events. Comprehensive collision histories provide a solid foundation for calculating economic losses and filing formal insurance claims.",
    },
    {
      step: "02",
      icon: Wrench,
      title: "Inspection of the Golf Cart and Its Safety Features",
      description: "Mechanical experts examine vehicle braking mechanisms, tire conditions, steering linkages and available passenger restraint systems thoroughly. Detection of pre existing equipment defects or safety feature failures helps establish clear product or maintenance liability. Through vehicle inspections uncover hidden structural damage that proves the true severity of a low speed collision. Certified mechanics evaluate whether worn tires or loose steering components directly contributed to the loss of vehicle control.",
    },
    {
      step: "03",
      icon: FileText,
      title: "Collection of Ownership and Maintenance Documents",
      description: "Attorneys obtain rental agreements, ownership titles, official inspection logs and historical fleet repair invoices where applicable. Documentation of prior mechanical repairs proves whether owners knew about safety issues before the crash occurred. Title records clarify whether a vehicle meets legal definitions for standard golf carts or low speed motor vehicles. Complete maintenance records expose commercial operators who repeatedly fail to perform mandatory safety servicing on rental vehicles.",
    },
    {
      step: "04",
      icon: Scale,
      title: "Analysis of Operator Conduct and Florida Law",
      description: "Legal specialists evaluate driver actions alongside Florida motor vehicle statutes and municipal golf cart operating guidelines. Review of local roadway ordinances helps establish clear fault when drivers violate statutory right of way rules. Florida statutes outline specific age requirements and equipment standards for operating golf carts on public roadways. Operator speed, distraction levels and alcohol consumption undergo rigorous legal analysis to establish comparative fault percentages.",
    },
    {
      step: "05",
      icon: FileSpreadsheet,
      title: "Documentation of Treatment and Financial Losses",
      description: "Our legal staff compiles medical bills, wage statements, therapy records and expert future care cost estimates. Organization of complete financial records ensures all economic and non economic damages are accounted for during negotiations. Comprehensive documentation includes emergency room invoices, rehabilitation schedules and official wage loss verification forms from employers. Comprehensive financial accounting prevents insurance adjusters from underestimating the true economic impact of your collision injuries.",
    },
    {
      step: "06",
      icon: Gavel,
      title: "Preparation for Settlement Discussions or Litigation",
      description: "Attorneys prepare compelling demand packages to negotiate maximum out of court settlements with liability insurance providers. Legal teams file formal personal injury lawsuits when insurance companies refuse to offer fair financial compensation. Complete trial preparation demonstrates to insurance adjusters that our firm is fully prepared to present your case in court. Strategic negotiation power increases significantly when opposing parties realize that litigating in court remains a viable option.",
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
            Established Legal Process for Handling Tampa Golf Cart Accident Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Managing personal injury proceedings requires following an established legal procedure designed to protect your rights. Our firm guides injured clients through every systematic step from preliminary investigation to final case resolution.
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

