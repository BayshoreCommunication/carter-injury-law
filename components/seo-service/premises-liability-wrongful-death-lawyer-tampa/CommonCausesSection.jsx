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
      title: "Apartment Complex Safety Failures",
      image: getSeoImage("distraction.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "Apartment properties in Tampa carry real obligations. Common areas, stairwells, parking lots and hallways should be free of reasonably foreseeable hazards which are known to, or should have been discovered by, the management. From broken handrails to burned exterior lighting, failed security gates and deteriorating walkways are no small matters. When a resident or visitor dies because a complex let a known problem sit unaddressed, the property management company faces serious legal exposure under Florida negligence law.",
      location: "Tampa Apartments",
    },
    {
      number: "02",
      title: "Fatal Accidents at Hotels, Resorts, and Vacation Rentals",
      image: getSeoImage("impaired.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "Guests at hotels, resorts, and short-term rentals arrive without any knowledge of the property's layout or its history of maintenance problems. A slick pool deck, an unmarked step, a balcony railing that shouldn't have passed inspection. Each of these has contributed to guest deaths at Tampa Bay properties. The Florida Building Code applies to commercial lodging throughout Hillsborough County, and operators who let those standards slip bear responsibility when a guest doesn't make it home.",
      location: "Lodging Properties",
    },
    {
      number: "03",
      title: "Inadequate Security Leading to Fatal Criminal Acts",
      image: getSeoImage("weather.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "If a property owner is aware that crime has taken place on his or her property at some time in the past, he or she has a legal responsibility to address the issue. If there is no adequate lighting, working cameras or proper access controls in the parking garage, common areas of apartment complexes and commercial strips are a risk to the tenants and visitors. Florida law does hold that negligent security is a valid cause of action when the negligent failure to secure contributes to a fatal attack.",
      location: "Negligent Security Sites",
    },
    {
      number: "04",
      title: "Unsafe Stairways, Walkways, and Balcony Collapses",
      image: getSeoImage("traffic-congestion.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "The Florida Building Code exists for a reason. Stairways need adequate railing height, proper load ratings, and surfaces that hold traction. Walkways need to be maintained. Balconies need to be inspected and structurally sound. When maintenance crews sign off on defective structures without making real repairs, or when inspections simply don't happen, the property owner takes on legal responsibility for any fatality that follows.",
      location: "Structural Hazards",
    },
    {
      number: "05",
      title: "Swimming Pool and Drowning Fatalities",
      image: getSeoImage("driver-fatigue.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "Florida law is specific about what pool operators owe to users. Barrier fencing, self-latching gates, compliant drain covers and depth marking are all mandatory by law. If a person owns a swimming pool (either a residential pool or commercial pool) and fails to comply with the above requirements, and their negligence was a contributing factor for the drowning, then they are liable under premises liability and wrongful death laws. They exist because people have died when operators treated them as optional.",
      location: "Residential & Commercial Pools",
    },
    {
      number: "06",
      title: "Building Fires, Electrical Hazards, and Carbon Monoxide Exposure",
      image: getSeoImage("evidence-timing.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "Defective wiring, smoke detectors that haven't worked in months, blocked fire exits, and absent carbon monoxide alarms have each caused deaths in Tampa residential and commercial buildings. OSHA requirements and the Florida Fire Prevention Code set out what occupied structures must have. When a property owner chooses to defer those repairs and someone inside dies, the family left behind has grounds to pursue a wrongful death claim.",
      location: "Commercial & Housing Structures",
    },
    {
      number: "07",
      title: "Construction and Maintenance Hazards on Private Property",
      image: getSeoImage("justice-family.png", "premises-liability-wrongful-death-lawyer-tampa").filePath,
      description: "Unmarked excavations, scaffolding that wasn't secured, exposed electrical lines, and hazardous materials left in walkways are all conditions that OSHA regulations and the Florida Building Code prohibit outright. Active construction sites and poorly maintained commercial properties create real danger for anyone nearby. When a contractor or property owner lets those conditions persist and a fatal accident happens, fault often doesn't stop at one party.",
      location: "Private Construction Sites",
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
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Florida law holds property owners to a clear standard. They must maintain reasonably safe premises for anyone who has a legal right to be there. When they don't, and someone dies as a result, the surviving family has a legal path forward. The Florida Building Code and OSHA set the floor for what safe looks like. Ignoring those standards while a known hazard goes unaddressed is exactly what gives rise to a wrongful death premises liability claim.
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
                Ignoring safety standards while a known hazard goes unaddressed is exactly what gives rise to a wrongful death premises liability claim. We investigate every detail to build your claim.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
