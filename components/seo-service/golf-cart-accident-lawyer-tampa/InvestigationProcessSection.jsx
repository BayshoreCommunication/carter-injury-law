"use client";
import React from "react";
import Link from "next/link";
import { UserX, Car, Home, Building2, Wrench, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const InvestigationProcessSection = () => {
  const points = [
    {
      icon: UserX,
      title: "Drivers Whose Negligence Causes a Collision",
      description: "Reckless driving habits, distracted driving  and improper turns establish clear operator liability under Florida personal injury laws. Drivers who fail to yield right of way must pay for injuries caused by their careless driving. High speeds through crowded pedestrian areas demonstrate clear driver negligence during a personal injury legal investigation. Impaired drivers face substantial financial liability for operating golf carts while under the influence of alcohol.",
    },
    {
      icon: Car,
      title: "Rental Companies With Unsafe or Defective Carts",
      description: "Rental companies face direct legal responsibility when renting out improperly maintained or known defective fleet vehicles. Failure to conduct routine safety inspections makes rental businesses financially liable for sudden mechanical failures on pathways. Commercial vendors must verify that every cart meets local safety guidelines prior to customer rental transactions. Defective rental equipment that causes severe rollover crashes creates clear grounds for personal injury claims.",
    },
    {
      icon: Home,
      title: "Property Owners Who Allow Hazardous Conditions",
      description: (
        <>
          Property owners face legal claims when failing to repair dangerous pathway cracks, unaligned curbs, or hidden potholes. Inadequate warning signs near steep dropoffs or hazardous intersection points create clear premises liability for property managers. Neglected lines of sight at path intersections create hazardous conditions for all drivers on the property. Property owners must routinely inspect cart paths to eliminate dangerous surface defects that cause serious accidents. Families affected by fatal accidents involving hazardous property conditions in Largo can also turn to a{" "}
          <Link href="/premises-liability-wrongful-death-lawyer-largo" className="text-primary hover:underline font-semibold">
            premises liability wrongful death lawyer Largo
          </Link>{" "}
          for legal help.
        </>
      ),
    },
    {
      icon: Building2,
      title: "Golf Course or Community Management",
      description: "Facility management must maintain safe course grounds and establish proper safety regulations for all cart paths. Inadequate path markings and unmaintained course trails create substantial liability risks for resort and residential communities. Management entities hold a legal duty to warn guests about known environmental dangers along public pathways. Lax enforcement of safety rules across private communities makes management companies liable for predictable traffic collisions.",
    },
    {
      icon: Wrench,
      title: "Manufacturers of Faulty Golf Cart Parts",
      description: "Defective braking mechanisms, faulty steering columns and prone battery units trigger product liability claims against manufacturers. Flawed components that cause unexpected vehicle rollover accidents hold part makers strictly liable for bodily injuries. Defective steering mechanisms create severe hazards for operators handling routine sharp turns on paved public surfaces. Product liability claims require technical engineering analysis to prove that manufacturing defects directly caused vehicle crashes.",
    },
    {
      icon: Briefcase,
      title: "Employers That Authorize Unsafe Golf Cart Use",
      description: "Employers remain financially responsible when employees cause crashes during assigned work duties or commercial operations. Permission granted to untrained workers to operate unsafe utility carts creates direct vicarious liability for business owners. Commercial enterprises must enforce safety standards for all staff members operating utility vehicles on company grounds. Negligent entrustment claims arise when employers permit dangerous or unlicensed workers to drive company carts.",
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
            Who Can Be Held Liable for a Tampa Golf Cart Accident
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Identification of liability after a severe golf cart crash requires examining all negligent parties involved in the incident. Multiple individuals, business entities, or property owners might share legal responsibility for your resulting financial losses.
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
                className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
