"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Search, Scale } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  viewport: { once: true, margin: "-100px" }
};

const CommonCausesSection = () => {
  const causes = [
    {
      number: "01",
      title: "Dangerous Driver Distractions and Violations",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/distraction.png",
      description: "Too many fatal collisions stem from preventable choices. Drivers look away to text, call, or use screens. This danger increases when motorists speed through local neighborhoods. High-traffic commercial zones face the same threat. Running red lights and stop signs turns commutes deadly.",
    },
    {
      number: "02",
      title: "Impaired Driving Along High-Speed Corridors",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/impaired.png",
      description: "Drunk or drugged driving causes catastrophic local wrecks. Impaired motorists endanger lives on our busiest routes. This includes I-275, I-4, and Dale Mabry Highway. Intoxication severely slows down reaction times. On fast corridors, full-speed impacts are usually fatal.",
      location: "I-275  •  I-4  •  Dale Mabry Hwy",
    },
    {
      number: "03",
      title: "Commercial Truck Fatigue and Extreme Weather",
      image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/weather.png",
      description: "Risks multiply with massive commercial vehicles around. Truck drivers face tight delivery deadlines. Many push past safety limits, driving while exhausted. On top of that, sudden Florida rainstorms drop visibility instantly.",
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
            Common Causes of Fatal Car Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          {/* Brand primary horizontal divider line */}
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Tampa’s roads pose daily hazards for every driver. Crowded interstates and narrow side streets cause constant danger. Seasonal tourist traffic makes things even worse. After a fatal crash, understanding the cause helps determine if you have a claim.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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
                  {/* Number & Title Grid */}
                  <div className="flex gap-4 items-start mb-6">
                    {/* Brand Red Number */}
                    <span className="text-4xl md:text-[46px] font-extrabold text-primary leading-none tracking-tight">
                      {cause.number}
                    </span>
                    
                    {/* Vertical separator */}
                    <div className="w-px h-10 bg-gray-200 self-center" />

                    {/* Title */}
                    <h3 
                      className="text-base md:text-[17px] font-extrabold text-secondary leading-snug self-center tracking-tight"
                      style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                    >
                      {cause.title}
                    </h3>
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-gray-100 mb-6" />

                  {/* Description text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {cause.description}
                  </p>
                </div>

                {/* Optional Location Footer (Card 02 only) */}
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

        {/* Bottom Horizontal Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-secondary rounded-[20px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg z-10"
        >
          
          {/* Watermark Scale icon in right corner */}
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-20">
            {/* Brand White Magnifying Glass Icon Circle */}
            <div className="w-16 h-16 rounded-full border-[3px] border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm bg-white/5">
              <Search className="w-8 h-8" strokeWidth={2.5} />
            </div>

            {/* Banner Text Columns */}
            <div className="flex-1 text-center md:text-left">
              {/* Header Title */}
              <h4 
                className="text-lg md:text-[22px] font-bold text-white tracking-wide"
              >
                THE CRASH IS ONLY THE BEGINNING OF THE INVESTIGATION.
              </h4>
              
              {/* Description subtext */}
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
