"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { MapPin, Search, Scale } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CommonCausesSection = () => {
  const causes = [
    {
      number: "01",
      title: "Fatal Falls at Shopping Centers and Retail Stores",
      image: getSeoImage("distraction", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "Retail floors that are mopped and left wet, product pallets that spill into walkways, broken handrails that nobody bothered to flag. These are the result of decisions, or the absence of them, made by property owners and retail operators who had a duty to do better. When conditions like these at Largo shopping centers and stores cause a death, the Florida Building Code makes the standard of care clear. Ignoring it has legal consequences.",
      location: "Largo Retail & Malls",
    },
    {
      number: "02",
      title: "Nursing Home and Assisted Living Facility Negligence",
      image: getSeoImage("impaired", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "People placed in the care of Largo nursing homes and assisted living facilities trust those facilities with everything. They cannot independently assess whether the environment is safe. When a facility cuts corners on staffing levels, fall prevention, or basic hazard control to protect its margins, residents pay with their lives. Florida imposes strict regulatory standards on these facilities, and those standards exist precisely because the population they serve cannot protect itself.",
      location: "Pinellas Care Facilities",
    },
    {
      number: "03",
      title: "Dangerous Conditions at Restaurants and Entertainment Venues",
      image: getSeoImage("weather", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "Someone who walks into a Largo restaurant or entertainment venue to enjoy an evening should not leave in an ambulance. Slippery surfaces near service areas, structurally compromised seating, broken barriers near elevated sections, and electrical hazards in dimly lit entertainment spaces are all conditions that operators are legally required to prevent. Patrons are owed the highest duty of care under Florida premises liability law, and that duty does not come with an asterisk.",
      location: "Dining & Venues",
    },
    {
      number: "04",
      title: "Unsafe Parking Lots and Poor Exterior Lighting",
      image: getSeoImage("traffic-congestion", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "The parking lot outside a Largo business is part of the premises, and the duty to maintain it safely does not end at the front door. Uneven asphalt, absent wheel stops, burned-out lighting across a full section of a lot, and missing pedestrian markings are all violations of Florida property maintenance codes that create real physical risk. When someone dies in a parking lot because a property owner refused to address these conditions, the owner's liability does not disappear because the accident happened outside.",
      location: "Commercial Parking Lots",
    },
    {
      number: "05",
      title: "Fatal Accidents Caused by Falling Objects",
      image: getSeoImage("driver-fatigue", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "A warehouse shelf that was never properly anchored, a ceiling tile compromised by a roof leak that sat uninspected for months, construction materials stored above a public walkway without adequate protection. Falling objects at Largo commercial locations cause traumatic, often fatal head injuries. Property management companies and business operators who allow these conditions to persist bear direct legal responsibility when someone is killed.",
      location: "Commercial Warehouses & Sites",
    },
    {
      number: "06",
      title: "Hazardous Electrical Systems and Fire Safety Failures",
      image: getSeoImage("evidence-timing", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "Damaged wiring, fire suppression systems that have not been serviced in years, and emergency exits that cannot be opened from the inside create serious safety risks. Fire extinguishers with long-expired inspection tags are also more than technical violations in an abstract sense. They are active dangers, and every one of them is a violation of the Florida Building Code that a property owner is responsible for correcting. When a resident or guest dies because of one of these failures, the liability belongs to the property owner who ignored the obligation.",
      location: "Largo Commercial Buildings",
    },
    {
      number: "07",
      title: "Unsafe Rental Properties and Landlord Negligence",
      image: getSeoImage("justice-family", "premises-liability-wrongful-death-lawyer-largo").filePath,
      description: "Every residential tenant in Pinellas County has a legal right to housing that is structurally sound and free of known hazards. That is not optional for landlords and it is not negotiable through the lease agreement. Rotting stair supports, wiring that throws sparks, missing smoke alarms in units that burn, and mold accumulations that cause fatal respiratory complications are all evidence of landlord negligence. When a tenant dies in conditions the landlord had the power and the obligation to fix, the Florida Wrongful Death Act gives the family a path to financial recovery.",
      location: "Pinellas Housing & Rentals",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 
            className="text-3xl md:text-[44px] font-extrabold text-secondary tracking-tight leading-[1.15]"
          >
            Common Causes of Fatal Premises Liability Accidents <br />
            <span className="text-primary block mt-1">in Largo</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Property owners across Largo have a legal obligation to keep the people who enter their premises reasonably safe. When that obligation gets ignored, the consequences are sometimes fatal. These are the most common situations Carter Injury Law sees when Largo families come in after losing someone on another person's property.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {causes.map((cause, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-[20px] border border-gray-100/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 items-start mb-6">
                    <span className="text-4xl md:text-[46px] font-extrabold text-primary leading-none tracking-tight">
                      {cause.number}
                    </span>
                    <div className="w-px h-10 bg-gray-200 self-center" />
                    <h3 
                      className="text-base md:text-[17px] font-extrabold text-secondary leading-snug self-center tracking-tight"
                      style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                    >
                      {cause.title}
                    </h3>
                  </div>

                  <div className="w-full h-px bg-gray-100 mb-6" />

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {cause.description}
                  </p>
                </div>

                {cause.location && (
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-secondary mt-auto">
                    <MapPin className="w-4.5 h-4.5 text-primary shrink-0 animate-bounce" />
                    <span className="text-[13px] font-extrabold tracking-wide uppercase">
                      {cause.location}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-secondary rounded-[20px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg z-10"
        >
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-20">
            <div className="w-16 h-16 rounded-full border-[3px] border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm bg-white/5">
              <Search className="w-8 h-8" strokeWidth={2.5} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-[22px] font-bold text-white tracking-wide uppercase">
                Holding Negligent Property Owners Accountable
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed max-w-4xl font-medium">
                Property owners across Largo have a legal obligation to keep visitors reasonably safe. When that duty is neglected, we investigate to hold them accountable.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
