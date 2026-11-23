"use client";
import React from "react";
import { MapPin } from "lucide-react";

const tampaNeighborhoods = [
  "Downtown Tampa",
  "South Tampa",
  "Hyde Park",
  "Westshore",
  "Ybor City",
  "Seminole Heights",
  "Tampa Heights",
  "University",
  "New Tampa",
  "Carrollwood",
];

const surroundingCommunities = [
  "Temple Terrace",
  "Town N Country",
  "Brandon",
  "Riverview",
  "Lutz",
  "Seffner",
  "Plant City",
];

const AreasWeServeSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            Tampa Bicycle Accident Injury Lawyer{" "}
            <span className="block text-primary">Areas We Serve</span>
          </h2>
        </div>

        {/* ── Communities & Map Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-secondary mb-5">
              Tampa Neighborhoods We Serve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tampaNeighborhoods.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 bg-[#faf9f6] border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-secondary"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-secondary mb-5">
              Surrounding Hillsborough County Communities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {surroundingCommunities.map((community) => (
                <li
                  key={community}
                  className="flex items-center gap-2.5 bg-[#faf9f6] border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-secondary"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{community}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Tampa Google Map Embed ── */}
        <div className="rounded-[20px] overflow-hidden border border-gray-100 shadow-sm w-full h-[360px] sm:h-[420px]">
          <iframe
            title="Tampa Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.809177193109!2d-82.47045932387964!3d27.972312213754044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3b1208be12d%3A0x4cce7467aad41864!2sCarter%20Injury%20Law!5e1!3m2!1sen!2sbd!4v1784709237604!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "360px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default AreasWeServeSection;

