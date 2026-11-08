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
      title: "Drivers Cutting Across Traffic to Reach Pickup Points",
      image: getSeoImage("drivers-cutting-across-traffic-largo.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          Rideshare drivers often make sudden lane changes for a ride. Many drivers are found by breaking the rules of the road by crossing several lanes without signaling for a ride. Such reckless maneuvers push oncoming traffic to slam on their brakes, resulting in &ldquo;rear-end&rdquo; and &ldquo;side-swipe&rdquo; crashes at high speeds, before anyone can react safely.
        </p>
      ),
      location: "Largo Roadways & Intersections",
    },
    {
      number: "02",
      title: "Collisions Near Largo Central Park and Surrounding Streets",
      image: getSeoImage("collisions-near-largo-central-park.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          The area around Largo Central Park is a high-risk driving area due to the volume of pedestrian traffic and vehicles. Distracted rideshare drivers frequently fail to stop at a sudden halt, yield to crosswalks or yield to pedestrians who are making their way across crowded parts of Seminole Boulevard. This lapse in attention leads directly to severe, preventable crashes near popular community landmarks. Pedestrians struck by inattentive drivers near crosswalks or busy intersections may also need guidance from a{" "}
          <Link href="/pedestrian-accidents-lawyer-largo" className="text-primary hover:underline font-semibold">
            pedestrian accidents lawyer Largo
          </Link>{" "}
          when pursuing compensation for their injuries.
        </p>
      ),
      location: "Largo Central Park & Seminole Blvd",
    },
    {
      number: "03",
      title: "Unsafe Reversing in Shopping Center Parking Areas",
      image: getSeoImage("unsafe-reversing-shopping-center-largo.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          At busy parks such as the Largo Mall, the rideshare community can be seen often turning over throughout the day. Often drivers look for someone to park or load and unload, backing out of parking spaces or loading and unloading without looking for blind spots. At low speeds a reversing vehicle can cause devastating orthopedic and spinal injuries to a pedestrian, or a smaller car.
        </p>
      ),
      location: "Largo Mall & Commercial Centers",
    },
    {
      number: "04",
      title: "Passenger Injuries During Abrupt Curbside Stops",
      image: getSeoImage("abrupt-curbside-stops-passenger-injuries-largo.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          Rideshare drivers frequently stop in an unplanned way on a busy curbside to pick up and drop off passengers. When drivers in active traffic stop their cars without warning, passengers inside don&apos;t have enough time to slow down. The resulting whip-like motion sends occupants into seats and door panels, resulting in immediate whiplash, concussion and facial trauma.
        </p>
      ),
      location: "Active Traffic Pickup Corridors",
    },
    {
      number: "05",
      title: "Drivers Missing Traffic Signals While Following Navigation Prompts",
      image: getSeoImage("distracted-driving-navigation-prompts-largo.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          A driver’s eyes leave the roadway every time they glance down at a smartphone screen to check GPS routes. This split-second visual distraction causes drivers to run red lights, blow through stop signs, or make illegal turns at busy intersections. These navigation-induced errors frequently result in violent, high-impact crashes.
        </p>
      ),
      location: "Largo Signalized Intersections",
    },
    {
      number: "06",
      title: "Side-Impact Crashes at Busy Commercial Entrances",
      image: getSeoImage("side-impact-t-bone-crashes-commercial-entrances-largo.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          When exiting from a busy commercial plaza to an arterial road such as East Bay Drive, there is a great need for caution. Rideshare drivers will sometimes underestimate the speed of oncoming traffic when turning left onto them. The consequences include catastrophic T-bone collisions, in which only one side of the car is struck and the passengers inside are protected by the contents of the other.
        </p>
      ),
      location: "East Bay Drive Corridor",
    },
    {
      number: "07",
      title: "Wet Pavement and Reduced Stopping Distance During Heavy Rain",
      image: getSeoImage("wet-pavement-stopping-distance-rain-largo.webp", "uber-accident-lawyer-largo").filePath,
      description: (
        <p>
          Florida’s sudden afternoon downpours turn Largo roads slick in a matter of seconds. Rideshare vehicles operating with worn tire treads lose traction rapidly on flooded asphalt, causing stopping distances to double or triple. When drivers follow too closely in torrential rain, massive multi-vehicle pileups become almost inevitable.
        </p>
      ),
      location: "Pinellas County Arterials & Highway Routes",
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
          <h2 className="text-3xl md:text-[44px] font-extrabold text-secondary tracking-tight leading-[1.15]">
            Common Causes of Uber Accidents <br />
            <span className="text-primary block mt-1">in Largo</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Rideshare crashes around Pinellas County stem from a few predictable driving behaviors. We identify exactly what went wrong to build a stronger claim.
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
