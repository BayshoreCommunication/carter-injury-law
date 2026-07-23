"use client";
import React from "react";
import Image from "next/image";
import { Search, Scale } from "lucide-react";
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
      title: "Distracted and Reckless Drivers",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/distraction.png",
      description: "Distracted driving remains one of the leading causes of traffic accidents in the Tampa area now. Drivers who use devices while driving put every other road user at significant risk daily. Our tampa personal injury lawyers firm use cell phone records and traffic camera footage to establish liability for your accident.",
    },
    {
      number: "02",
      title: "Speeding and Aggressive Driving",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/impaired.png",
      description: "Excessive speed reduces reaction time and increases the force of impact in a serious collision event. Aggressive behaviors like tailgating and unsafe lane changes are common on our congested Tampa highways. These behaviors represent clear violations of the duty of care owed to other drivers daily.",
    },
    {
      number: "03",
      title: "Drunk and Drug Impaired Driving",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/weather.png",
      description: "Impaired driving crashes produce some of the most severe injuries in our personal injury litigation today. A driver operating under the influence faces criminal prosecution and full civil liability for injuries. Florida law also allows claims against establishments that served alcohol to a visibly intoxicated person.",
    },
    {
      number: "04",
      title: "Unsafe Property Conditions",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/distraction.png",
      description: "Property owners in Tampa have a legal obligation to keep premises safe for every visitor daily. Wet floors and broken walkways or inadequate lighting lead to serious fall injuries for people. When an owner knows about a hazard and fails to act they bear legal responsibility.",
    },
    {
      number: "05",
      title: "Commercial Vehicle Negligence",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/impaired.png",
      description: "Delivery trucks and commercial fleet vehicles operate throughout Tampa in large numbers every single day now. When a driver violates traffic laws or operates an inadequately maintained vehicle they are liable. These cases involve corporate defendants with significant insurance coverage and experienced legal defense teams involved.",
    },
    {
      number: "06",
      title: "Defective Products and Equipment",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/weather.png",
      description: "Some accidents occur because a product failed rather than because of driver or property neglect today. Defective auto parts and dangerous medications can cause serious injuries that change your entire life. Product liability claims are brought against manufacturers when a design defect is responsible for harm.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
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
            Common Causes of Serious Personal Injuries <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Tampa road networks and commercial activity create consistent conditions for serious accidents in our community today. Hillsborough County ranks among the highest in Florida for traffic fatalities and slip accidents yearly. Understanding the cause of your injury is the foundation of every successful claim here.
          </p>
        </motion.div>

        {/* 6 Columns Grid */}
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
              {/* Card Image Container */}
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Horizontal Banner */}
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
              <h4 
                className="text-lg md:text-[22px] font-bold text-white tracking-wide"
              >
                THE ACCIDENT IS ONLY THE BEGINNING OF THE INVESTIGATION.
              </h4>
              <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed max-w-4xl font-medium">
                Whatever the cause, a close look almost always turns up negligence somebody would rather keep buried. We go digging for that evidence. It's what we use to build your claim.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
