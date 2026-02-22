import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="w-full lg:w-[350px] space-y-8 py-0 md:py-24">
      
      {/* Attorney Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <Image
          src="/assets/service/carter-img.png"
          alt="Attorney"
          width={120}
          height={120}
          className="mx-auto rounded-md"
        />

        <h2 className="text-2xl font-bold mt-4">
          WE FIGHT <br />
          <span className="text-gray-600 text-lg font-medium">
            FOR YOUR RIGHTS
          </span>
        </h2>

        <div className="bg-red-600 text-white text-sm font-semibold py-2 mt-3 rounded">
          CARTER INJURY LAW, PA
        </div>
      </div>

      {/* Practice Areas */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
        <ul className="space-y-2 text-sm">
          {[
            "Personal Injuries",
            "Car Accidents",
            "Motorcycle Accidents",
            "Truck Accidents",
            "Slip and Fall Accidents",
            "Brain Injuries",
            "Pedestrian Accidents",
            "Bicycle Accidents",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Areas We Serve */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
        <ul className="space-y-2 text-sm">
          {["Tampa", "Bradenton", "St. Petersburg", "Sarasota"].map(
            (item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Related Blog Posts */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Related Blog Posts</h3>
        <ul className="space-y-3 text-sm">
          {[
            "Understanding Florida Negligence Law",
            "How Much Does a Personal Injury Lawyer Cost?",
            "What Is the Average Settlement for a Tampa Personal Injury Case?",
            "What Are the 4 Elements of Negligence?",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-red-600 mt-1"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Location Card */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Location</h3>

        <div className="bg-gray-300 h-40 rounded mb-4 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.1873236976194!2d-82.63884892397685!3d27.773201722582762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19d22155555%3A0x9586a1e2adff70f2!2s146%202nd%20St%20N%20%23310%2C%20St.%20Petersburg%2C%20FL%2033701%2C%20USA!5e0!3m2!1sen!2sbd!4v1771740382473!5m2!1sen!2sbd"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        <p className="font-semibold">
          CATANIA AND CATANIA, PA
        </p>
        <p className="text-sm text-gray-600 mt-1">
          146 2nd St N Suite 310 <br />
          St. Petersburg, FL 33701
        </p>

        <p className="text-blue-600 font-bold mt-3">813-222-8656</p>

        <button className="mt-3 bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          GET DIRECTIONS
        </button>
      </div>
      <div className="flex justify-center items-center py-16">
      <div className="relative bg-[#1f2a44] text-white max-w-2xl rounded-2xl px-10 py-16 text-center shadow-xl">
        
        {/* Quote Icon */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold">
          “
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2 text-teal-400 mb-6 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={22} fill="currentColor" stroke="none" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-lg leading-8 text-gray-200">
          “Peter Catania Is A Great Lawyer. He’s Very Personable. Very
          Warm-Hearted. I Really Liked Him. This Is A Great Law Firm Leslie
          And Jazmine Great People Very Friendly And Professional. Peter
          Catania Made Sure That I Got The Most That I Could For My
          Settlement. I Appreciate The Hard Work And The Dedication”.
        </p>

        {/* Red Line */}
        <div className="w-12 h-[3px] bg-red-600 mx-auto my-6 rounded"></div>

        {/* Author */}
        <p className="text-lg font-medium text-gray-300">
          Shukura Tiabah
        </p>
      </div>
    </div>
    </aside>
  );
}