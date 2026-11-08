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
      title: "Drivers Rushing Between Passenger Requests",
      image: getSeoImage("drivers-rushing-passenger-requests-tampa.webp", "uber-accident-lawyer-tampa").filePath,
      description: "The application payment model forces many drivers to rush recklessly to grab their next fare. This constant financial pressure creates dangerous driving habits that put trusting passengers at serious physical risk.",
      location: "Tampa Roadways & Commute Routes",
    },
    {
      number: "02",
      title: "Unsafe U Turns and Last Minute Route Changes",
      image: getSeoImage("unsafe-u-turns-route-changes-tampa.webp", "uber-accident-lawyer-tampa").filePath,
      description: "GPS navigation programs frequently direct drivers to make sudden lane changes or highly illegal turns. These totally unpredictable maneuvers catch other motorists off guard and cause devastating broadside vehicle collisions.",
      location: "City Intersections & Side Streets",
    },
    {
      number: "03",
      title: "Passenger Door Collisions Along Tampa Busy Streets",
      image: getSeoImage("passenger-door-collisions-tampa-streets.webp", "uber-accident-lawyer-tampa").filePath,
      description: "Safe drop off zones in crowded urban areas prove difficult for many rideshare drivers to find. Fares who exit the vehicle in active traffic lanes face a huge risk of getting hit.",
      location: "Urban Drop-Off Zones & Bike Lanes",
    },
    {
      number: "04",
      title: "Distracted Driving at Traffic Signals and Intersections",
      image: getSeoImage("distracted-driving-traffic-signals-intersections-tampa.webp", "uber-accident-lawyer-tampa").filePath,
      description: "A quick glance at a phone screen completely blinds a driver to changing traffic lights. Rideshare operators who constantly check new ride requests often blow through intersections and cause massive wrecks.",
      location: "Traffic Signals & Intersections",
    },
    {
      number: "05",
      title: "Crashes Near Hotels Restaurants and Entertainment Venues",
      image: getSeoImage("crashes-near-hotels-restaurants-venues-tampa.webp", "uber-accident-lawyer-tampa").filePath,
      description: "Tourist hot spots always attract large crowds of pedestrians and unpredictable rideshare vehicle traffic patterns locally. Drivers who stop abruptly to load passengers block active traffic and trigger severe rear end crashes.",
      location: "Hotels, Restaurants & Entertainment Venues",
    },
    {
      number: "06",
      title: "Rear End Impacts During Congested Commutes",
      image: getSeoImage("rear-end-impacts-congested-commutes-tampa.webp", "uber-accident-lawyer-tampa").filePath,
      description: "Rush hour traffic requires all drivers to maintain a safe distance and always pay close attention. Rideshare operators who follow too closely simply cannot stop in time when the cars ahead brake.",
      location: "Congested Commute Corridors",
    },
    {
      number: "07",
      title: "Accidents Caused by Poor Vehicle Maintenance",
      image: getSeoImage("poor-vehicle-maintenance-accidents-tampa.webp", "uber-accident-lawyer-tampa").filePath,
      description: "Rideshare vehicles rack up thousands of miles quickly and require constant brake and tire replacements. Owners who skip basic car maintenance directly cause blown tires and catastrophic highway brake failures.",
      location: "High-Mileage Highway Driving",
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
            Common Causes of Uber Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Rideshare collisions happen daily across our local highways for a variety of completely preventable reasons. We figure out exactly what went wrong to hold the right people accountable for your injuries.
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
              className={`bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
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

