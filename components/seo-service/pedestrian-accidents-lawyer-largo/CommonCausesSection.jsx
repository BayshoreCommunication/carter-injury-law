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
      title: "Crosswalk Collisions Near Busy Retail Centers",
      image: getSeoImage("distraction", "pedestrian-accidents-lawyer-largo").filePath,
      description: "East Bay Drive and Ulmerton Road stay busy from morning through evening with shoppers, delivery drivers, and people running errands. Drivers turning into or out of parking lots frequently cut across crosswalks without slowing down. They're watching for other vehicles, not the person stepping off the curb. A marked crosswalk offers legal protection, but it doesn't stop a two-ton vehicle driven by someone who isn't paying attention.",
      location: "East Bay Dr & Ulmerton Rd Corridors",
    },
    {
      number: "02",
      title: "Drivers Overlooking Pedestrians at Signalized Intersections",
      image: getSeoImage("impaired", "pedestrian-accidents-lawyer-largo").filePath,
      description: "Florida Statute 316.130 puts the obligation on drivers to yield when a pedestrian has the walk signal. That law gets broken dozens of times a day across Largo. A driver running a light that just turned red, glancing at a phone while rolling through a turn, or accelerating too early can hit someone in a crosswalk before they ever hit the brakes. Such accidents are frequently preventable, but occur when drivers are distracted.",
      location: "Largo Signalized Intersections",
    },
    {
      number: "03",
      title: "School Zone and Neighborhood Traffic Hazards",
      image: getSeoImage("weather", "pedestrian-accidents-lawyer-largo").filePath,
      description: "Posted school zone speed limits near Pinellas County schools exist because children cross those streets. Drivers who ignore those limits are gambling with other people's kids. Neighborhood roads present their own problems, where parked cars block sightlines and crossings aren't always marked. Anyone struck while walking in a school zone or a residential block deserves to know whether the driver's violation played a role.",
      location: "Pinellas County School Zones",
    },
    {
      number: "04",
      title: "Parking Lot and Private Property Incidents",
      image: getSeoImage("traffic-congestion", "pedestrian-accidents-lawyer-largo").filePath,
      description: "Plenty of serious pedestrian accidents happen nowhere near a public intersection. Hospital parking areas, apartment complex lots, and big-box store parking fields all see regular foot traffic alongside moving vehicles. Drivers backing out without looking, or cutting through a lot at speed, create genuine danger. When the property owner has failed to mark pedestrian paths or keep lighting adequate, they may owe a share of the damages too.",
      location: "Commercial Lots & Apartment Fields",
    },
    {
      number: "05",
      title: "Pedestrian Crashes Involving Commercial Vehicles",
      image: getSeoImage("driver-fatigue", "pedestrian-accidents-lawyer-largo").filePath,
      description: "Box trucks, cargo vans, and delivery vehicles work Largo routes all day. Their drivers carry federal and state safety obligations that private drivers do not. When one of those drivers strikes a pedestrian while on the job, the employer doesn't get to simply watch from the sidelines. Corporate liability in those cases can mean access to commercial insurance coverage far exceeding a personal auto policy.",
      location: "Commercial Delivery Routes in Largo",
    },
    {
      number: "06",
      title: "Reduced Visibility During Evening Hours",
      image: getSeoImage("evidence-timing", "pedestrian-accidents-lawyer-largo").filePath,
      description: "After dark, pedestrian accidents get more dangerous and more common. Stretches of Largo with minimal street lighting leave walkers nearly invisible to approaching drivers. Florida evenings are warm and people stay outside late, which means foot traffic continues well after sunset. A driver who claims they never saw someone walking is not automatically off the hook. The duty to watch for pedestrians does not go away when it gets dark.",
      location: "Unlit Largo Roadways & Evening Corridors",
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
            Common Causes of Pedestrian Accidents <br />
            <span className="text-primary block mt-1">in Largo</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Largo moves a lot of traffic through a mix of residential blocks, shopping corridors, and coastal roads. When drivers lose focus, pedestrians suffer devastating physical consequences. We routinely represent individuals who have experienced the most common high-risk situations sending pedestrians to the hospital.
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
                Holding Negligent Drivers Accountable in Largo
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-3 leading-relaxed max-w-4xl font-medium">
                Drivers across Largo have a clear duty to yield and watch for pedestrians. When they fail, we gather the evidence to protect victims and hold negligent motorists responsible.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;
