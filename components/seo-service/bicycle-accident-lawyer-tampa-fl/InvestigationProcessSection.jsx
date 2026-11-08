"use client";
import React from "react";
import Link from "next/link";
import { UserX, Briefcase, Landmark, Home, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "Negligent Motorists and Commercial Vehicle Drivers",
      description: "Careless drivers are the most common cause of bicycle crashes. Commercial truck drivers also cause severe accidents through reckless driving. We pursue claims against these negligent individuals directly. We use police reports and witness testimony to prove fault. When careless drivers are held accountable, local roads become safer for everyone.",
    },
    {
      icon: Briefcase,
      title: "Employers Responsible for Drivers on the Job",
      description: "Companies are legally responsible for the actions of their employees. If a delivery driver hits you the employer shares liability. We investigate whether the driver was working during the crash. Corporate insurance policies usually provide higher compensation limits for victims. We pursue these companies to secure your maximum financial recovery.",
    },
    {
      icon: Landmark,
      title: "Government Agencies Responsible for Roadway Maintenance",
      description: (
        <>
          Hillsborough County must keep local public roads safe for cyclists. If the government fails to address dangerous potholes, it may be held liable for crashes they cause. Claims against government entities involve very strict deadlines and rules. We handle these complex administrative procedures on your behalf. We hold negligent municipal agencies accountable for hazardous road conditions. Unsafe property conditions can lead to fatal accidents and devastating family losses. A{" "}
          <Link href="/premises-liability-wrongful-death-lawyer-tampa" className="text-primary hover:underline font-semibold">
            premises liability wrongful death lawyer Tampa
          </Link>{" "}
          represents families pursuing wrongful death claims involving hazardous properties.
        </>
      ),
    },
    {
      icon: Home,
      title: "Property Owners Responsible for Certain Hazardous Conditions",
      description: "Private property owners must maintain safe driveways and parking lots. Obscured vision due to overgrown landscaping can cause severe accidents. We investigate if poor property maintenance contributed to your crash. Property owners share blame when their negligence creates blind spots. We pursue compensation from their premises liability insurance coverage.",
    },
    {
      icon: Wrench,
      title: "Vehicle Manufacturers and Bicycle Component Manufacturers",
      description: "Defective car parts or bicycle components sometimes cause terrible crashes. A failed bicycle brake could make stopping entirely impossible. We investigate product liability claims when mechanical failures happen. Manufacturers must compensate victims injured by their unsafe defective products. We work with engineers to prove component failures caused harm.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Potentially Liable Parties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Who Can Be Held Liable for a Tampa Bicycle Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Liability depends heavily on the specific circumstances and available evidence. Not every accident involves multiple liable parties or straightforward negligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </div>
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

