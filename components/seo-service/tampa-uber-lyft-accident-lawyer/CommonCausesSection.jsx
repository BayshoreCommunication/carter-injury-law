"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
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
      title: "Distracted Driving During App Navigation and Ride Requests",
      image: getSeoImage("distracted-driving-app-navigation-ride-requests-tampa.webp", "tampa-uber-lyft-accident-lawyer").filePath,
      description: "App alerts constantly demand driver attention. The Uber app pings loudly when new ride requests arrive. A quick glance at a phone screen takes eyes off the road. A split second of inattention easily causes severe accidents. This distraction violates basic traffic safety rules.",
      location: "Mobile App & GPS Navigation",
    },
    {
      number: "02",
      title: "Unsafe Passenger Pickups and Drop-Offs Near Busy Tampa Streets",
      image: getSeoImage("unsafe-passenger-pickups-dropoffs-busy-tampa-streets.webp", "tampa-uber-lyft-accident-lawyer").filePath,
      description: "Drivers often pull over in dangerous spots. Vehicles blocking bike lanes or active traffic lanes create massive hazards. Sudden stops on Kennedy Boulevard put everyone at risk. Other cars might not stop in time. These abrupt maneuvers put pedestrians and passengers in danger.",
      location: "Kennedy Boulevard & City Streets",
    },
    {
      number: "03",
      title: "Speeding and Aggressive Driving to Complete More Trips",
      image: getSeoImage("speeding-aggressive-driving-rideshare-trips-tampa.webp", "tampa-uber-lyft-accident-lawyer").filePath,
      description: "Gig workers earn money based on completed trips. This payment structure encourages rushing through city streets. High speeds drastically reduce reaction times. Speed also increases the severity of any resulting impact. Faster speeds mean harder collisions and worse physical injuries.",
      location: "Tampa City Corridors",
    },
    {
      number: "04",
      title: "Fatigue From Extended Rideshare Driving Hours",
      image: getSeoImage("fatigue-extended-rideshare-driving-hours-tampa.webp", "tampa-uber-lyft-accident-lawyer").filePath,
      description: "Many gig workers drive long after finishing a day job. Exhaustion dulls the senses and slows reflexes. Drowsy driving is just as dangerous as drunk driving. Weary drivers easily miss red lights or stop signs. Florida heat makes this tiredness even worse during afternoon shifts.",
      location: "Late-Night & Afternoon Shifts",
    },
    {
      number: "05",
      title: "Rear-End Collisions and Sudden Stops in Heavy Traffic",
      image: getSeoImage("rear-end-collisions-sudden-stops-heavy-traffic-tampa.webp", "tampa-uber-lyft-accident-lawyer").filePath,
      description: "Tampa traffic can change rapidly. There are many irregular slowdowns on Interstate 275. By driving too close, drivers are unable to brake quickly. Often these jerks result in whiplash and injury to the spinal cord. Rear-ending crashes can cause quite a bit of damage.",
      location: "Interstate 275 & Highway Corridors",
    },
    {
      number: "06",
      title: "Unsafe Lane Changes Around Tampa International Airport and Downtown",
      image: getSeoImage("unsafe-lane-changes-tampa-airport-downtown.webp", "tampa-uber-lyft-accident-lawyer").filePath,
      description: "The airport terminals are extremely busy and can be confusing even for locals. Drivers jockey for exits which they miss. Drivers can often fail to scan their own blind spots. Sideswipe collisions are common in these areas with heavy commercial traffic. You need all your attention when you have to cross traffic lanes.",
      location: "Tampa International Airport & Downtown",
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
            Common Causes of Uber and Lyft Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Rideshare crashes happen for many specific reasons. We build a stronger claim by disclosing the exact cause.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {causes.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Cause {item.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
                <span>{item.location}</span>
                <span className="text-primary font-extrabold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;

