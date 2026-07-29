"use client";
import React from "react";
import { MapPin, ArrowRight, Scale, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    label: "Largo Office",
    name: "Carter Injury Law — Largo",
    address: "801 W. Bay Dr., Suite 229",
    cityState: "Largo, FL 33770",
    badge: "By Appointment Only",
    mapsUrl: "https://maps.google.com/?q=801+W+Bay+Dr+Suite+229+Largo+FL+33770",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.234567890123!2d-82.79876543210987!3d27.91543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1e2d3c4b5a6%3A0x7b8a9c0d1e2f3a4b!2s801%20W%20Bay%20Dr%20%23229%2C%20Largo%2C%20FL%2033770!5e0!3m2!1sen!2sus!4v1784709237604!5m2!1sen!2sus",
  },
  {
    label: "Main Office",
    name: "Carter Injury Law — Tampa",
    address: "3114 N. Boulevard",
    cityState: "Tampa, FL 33603",
    badge: null,
    mapsUrl: "https://maps.google.com/?q=3114+N+Boulevard+Tampa+FL+33603",
    embedSrc: null,
  },
];

const neighborhoods = [
  "Downtown Largo",
  "Ridgecrest",
  "Bardmoor",
  "Whitney Ranch",
  "Ponderosa Park",
  "Eagle Lake",
];

const surroundingCommunities = [
  "Clearwater",
  "Seminole",
  "Pinellas Park",
  "Belleair",
  "Dunedin",
  "St. Petersburg",
];

const AreasWeServeSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Areas We Serve
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            Motorcycle Accident Lawyer Largo FL,{" "}
            <span className="block text-primary">Areas We Serve</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Carter Injury Law represents riders throughout local communities. We help victims across the entire region to ensure you have the best legal help. We are the motorcycle accident lawyer Largo FL choice for riders in your local area. You can count on us to serve your neighborhood and surrounding communities in Florida.
          </p>
        </div>

        {/* ── Neighborhoods & Surrounding Communities List ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Largo Neighborhoods We Serve
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-medium">
              {neighborhoods.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[20px] border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Surrounding Pinellas County Communities
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-medium">
              {surroundingCommunities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mb-6">

          {/* ── Left: Google Map Embed ── */}
          <div className="rounded-[20px] overflow-hidden border border-gray-100 shadow-sm w-full h-[380px] sm:h-[460px] lg:h-auto lg:min-h-[320px]">
            <iframe
              title="Carter Injury Law — Largo Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.234567890123!2d-82.79876543210987!3d27.91543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1e2d3c4b5a6%3A0x7b8a9c0d1e2f3a4b!2s801%20W%20Bay%20Dr%20%23229%2C%20Largo%2C%20FL%2033770!5e0!3m2!1sen!2sus!4v1784709237604!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ── Right: Office Location Cards ── */}
          <div className="flex flex-col gap-5 justify-between">
            {offices.map((office, i) => (
              <a
                key={i}
                href={office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer flex-1 justify-center animate-none"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase">
                    {office.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors duration-200" strokeWidth={2} />
                </div>

                <div className="w-full h-px bg-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-extrabold text-secondary text-base leading-snug mb-0.5">
                      {office.address}
                    </p>
                    <p className="font-semibold text-secondary text-sm">
                      {office.cityState}
                    </p>
                    {office.badge && (
                      <span className="inline-block mt-2 text-[11px] font-extrabold tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 uppercase">
                        {office.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary text-xs font-extrabold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
                  <span>View on Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA Bar ── */}
        <div className="bg-secondary rounded-[20px] p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg mt-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center shrink-0">
              <Scale className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-white font-bold text-sm md:text-base leading-snug max-w-lg">
              Wherever in Largo or Pinellas County you are located, we are ready to sit down and start your claim.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 bg-transparent border-2 border-primary text-white font-extrabold text-sm px-7 py-4 rounded-xl hover:bg-primary transition-all duration-200 active:scale-95 uppercase tracking-wider shrink-0 whitespace-nowrap"
          >
            Start Your Free Consultation
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AreasWeServeSection;
