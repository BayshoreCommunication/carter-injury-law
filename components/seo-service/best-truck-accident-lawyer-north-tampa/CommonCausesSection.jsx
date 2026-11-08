"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      title: "Driver Fatigue and Hours of Service Violations",
      image: getSeoImage("driver-fatigue.png", "best-truck-accident-lawyer-north-tampa").filePath,
      imageObj: getSeoImage("driver-fatigue.png", "best-truck-accident-lawyer-north-tampa"),
      description: (
        <>
          The Federal Government has strict rules that determine how long a commercial truck driver can have a vehicle on for in total. When commercial drivers get extremely fatigued, they can cause deadly accidents on heavily-traveled local highways, such as I-4 and I-275. Victims injured in these collisions may also need guidance from our{" "}
          <Link href="/tampa-wrongful-death-car-accident-lawyer" className="text-primary hover:underline font-semibold">
            Tampa wrongful death car accident lawyer
          </Link>
          .
        </>
      ),
      location: "I-4 and I-275 Highway Corridors",
    },
    {
      number: "02",
      title: "Distracted, Aggressive, or Impaired Truck Drivers",
      image: getSeoImage("distracted-fatigued-bus-drivers-tampa-accidents.webp", "best-truck-accident-lawyer-north-tampa").filePath,
      imageObj: getSeoImage("distracted-fatigued-bus-drivers-tampa-accidents.webp", "best-truck-accident-lawyer-north-tampa"),
      description: "Safely operating a massive commercial delivery vehicle requires absolute mental focus and complete undivided attention always. Distracted or highly aggressive driving on congested Hillsborough Avenue frequently leads to catastrophic and deadly roadway pileups.",
      location: "Hillsborough Avenue Corridors",
    },
    {
      number: "03",
      title: "Improperly Loaded or Unsecured Cargo",
      image: getSeoImage("speeding-reckless-passenger-bus-operation-tampa.webp", "best-truck-accident-lawyer-north-tampa").filePath,
      imageObj: getSeoImage("speeding-reckless-passenger-bus-operation-tampa.webp", "best-truck-accident-lawyer-north-tampa"),
      description: "Professional freight loaders must secure heavy cargo properly to prevent incredibly dangerous weight shifts during highway transit. Falling commercial cargo on busy roads like US 41 creates absolutely deadly hazards for surrounding passenger vehicles.",
      location: "US 41 Corridors",
    },
    {
      number: "04",
      title: "Poor Truck Maintenance and Mechanical Failures",
      image: getSeoImage("poor-bus-maintenance-mechanical-failures-tampa.webp", "best-truck-accident-lawyer-north-tampa").filePath,
      imageObj: getSeoImage("poor-bus-maintenance-mechanical-failures-tampa.webp", "best-truck-accident-lawyer-north-tampa"),
      description: "All commercial fleet vehicles should be subject to periodical safety checks and appropriate maintenance by trucking companies. Multi vehicle accidents are often severe in North Tampa commercial corridors as a result of a sudden brake failure and tire blowout.",
      location: "North Tampa Commercial Corridors",
    },
    {
      number: "05",
      title: "Unsafe Lane Changes and Large Truck Blind Spots",
      image: getSeoImage("unsafe-lane-changes-blind-spot-bus-collisions.webp", "best-truck-accident-lawyer-north-tampa").filePath,
      imageObj: getSeoImage("unsafe-lane-changes-blind-spot-bus-collisions.webp", "best-truck-accident-lawyer-north-tampa"),
      description: "Commercial trucks possess massive blind spots requiring extreme driver caution during every single highway passing maneuver. Careless high speed lane changes on Fowler Avenue often trap smaller passenger vehicles under heavy moving trailers.",
      location: "Fowler Avenue Corridors",
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
            Common Causes of Truck Accidents <br />
            <span className="text-primary block mt-1">in North Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Commercial truck crashes in North Tampa stem from various operational failures and driver errors. When we isolate the root cause of an accident, we can establish clear legal liability against responsible parties.
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
