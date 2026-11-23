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
      title: "Drivers Who Turn Across a Cyclist Path",
      image: getSeoImage("driver-turning-across-cyclist-path-tampa-intersection.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
      imageObj: getSeoImage("driver-turning-across-cyclist-path-tampa-intersection.webp", "bicycle-accident-lawyer-tampa-fl"),
      description: (
        <>
          Drivers frequently fail to spot cyclists when executing turns. This oversight creates dangerous collisions at busy intersections and side streets.{" "}
          <Link href="/tampa-motorcycle-accidents-lawyer" className="text-primary hover:underline font-semibold">
            Motorcycles can face similar dangers
          </Link>{" "}
          when drivers make unsafe turns across their paths. Surveillance cameras and witness statements can help prove driver fault. The careless motorist can be held responsible for your resulting injuries. Bayshore Boulevard sees frequent accidents of this exact nature.
        </>
      ),
      location: "Bayshore Boulevard",
    },
    {
      number: "02",
      title: "Unsafe Passing and Violations of Florida Three Foot Rule",
      image: getSeoImage("unsafe-passing-florida-three-foot-rule-bicycle-tampa.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
      imageObj: getSeoImage("unsafe-passing-florida-three-foot-rule-bicycle-tampa.webp", "bicycle-accident-lawyer-tampa-fl"),
      description: "Florida law requires motorists to leave three feet of clearance. Drivers ignoring this rule endanger riders sharing the road. The Florida Highway Patrol investigates these unsafe passing incidents closely. Dashcam footage or accident reconstruction can prove a law violation. Dale Mabry Highway poses significant risks for unsafe passing maneuvers.",
      location: "Dale Mabry Highway",
    },
    {
      number: "03",
      title: "Dooring Accidents Near Parked Vehicles",
      image: getSeoImage("bicycle-dooring-accident-parked-vehicle-ybor-tampa.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
      imageObj: getSeoImage("bicycle-dooring-accident-parked-vehicle-ybor-tampa.webp", "bicycle-accident-lawyer-tampa-fl"),
      description: "Dooring happens when a careless driver opens a car door abruptly. A rider then crashes into this unexpected physical barrier. Drivers must check for oncoming traffic before exiting their parked vehicles. Photographs of the damaged door and bicycle can prove negligence. These painful incidents happen frequently near street parking in Ybor City.",
      location: "Ybor City Street Parking",
    },
    {
      number: "04",
      title: "Failure to Yield at Intersections and Driveways",
      image: getSeoImage("motorist-failure-to-yield-bicycle-tampa-intersection.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
      imageObj: getSeoImage("motorist-failure-to-yield-bicycle-tampa-intersection.webp", "bicycle-accident-lawyer-tampa-fl"),
      description: (
        <>
          Many crashes happen when motorists fail to yield the right of way, a common cause of{" "}
          <Link href="/tampa-wrongful-death-car-accident-lawyer" className="text-primary hover:underline font-semibold">
            car accidents
          </Link>
          . People pulling out of driveways often overlook approaching cyclists. Police crash reports usually document these intersection yield violations clearly. Negligent drivers must compensate victims for their careless driving errors. Intersections along Kennedy Boulevard are notorious for these dangerous yield failures.
        </>
      ),
      location: "Kennedy Boulevard Intersections",
    },
    {
      number: "05",
      title: "Distracted Driving and Failure to Check Blind Spots",
      image: getSeoImage("distracted-driver-blind-spot-bicycle-lane-tampa-fl.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
      imageObj: getSeoImage("distracted-driver-blind-spot-bicycle-lane-tampa-fl.webp", "bicycle-accident-lawyer-tampa-fl"),
      description: "Texting or checking navigation apps distracts drivers from the road. Distracted motorists frequently drift into bike lanes without any warning. Cell phone records can serve as powerful evidence of distraction. Motorists must always check blind spots before changing lanes safely. We hold distracted drivers fully accountable for the harm they cause.",
      location: "Designated Bike Lanes & City Roads",
    },
    {
      number: "06",
      title: "Hazardous Pavement Poor Road Maintenance and Unsafe Bike Lane Conditions",
      image: getSeoImage("hazardous-pavement-unsafe-bike-lane-tampa-riverwalk.webp", "bicycle-accident-lawyer-tampa-fl").filePath,
      imageObj: getSeoImage("hazardous-pavement-unsafe-bike-lane-tampa-riverwalk.webp", "bicycle-accident-lawyer-tampa-fl"),
      description: "Potholes and uneven pavement create severe hazards for any rider. The City of Tampa must maintain safe road conditions constantly. Poorly designed bike lanes also contribute to devastating cycling accidents. Government agencies might face liability for neglecting road maintenance duties. The Tampa Riverwalk area occasionally presents unpredictable path hazards.",
      location: "Tampa Riverwalk Area",
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
            Common Causes of Bicycle Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Negligent driving behaviors create severe hazards for riders throughout our city. A clear account of how the crash occurred helps establish who is legally responsible.
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
                    alt={item.imageObj?.altText || item.title}
                    title={item.imageObj?.title || item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;

