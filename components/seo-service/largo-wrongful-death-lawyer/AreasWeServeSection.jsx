"use client";
import React from "react";
import { MapPin, ArrowRight, Scale, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    label: "Main Largo Office",
    name: "Carter Injury Law",
    address: "801 W. Bay Dr., Suite 229",
    cityState: "Largo, FL 33770",
    badge: null,
    mapsUrl: "https://maps.google.com/?q=801+W+Bay+Dr+Suite+229+Largo+FL+33770",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5693099386745!2d-82.7995663239731!3d27.915187216292992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fa72fe14cedf%3A0x6af59f2dc2dfe3b4!2s801%20W%20Bay%20Dr%20Ste.%20229%2C%20Largo%2C%20FL%2033770%2C%20USA!5e0!3m2!1sen!2sbd!4v1771997309287!5m2!1sen!2sbd",
  },
  {
    label: "Tampa Office",
    name: "Carter Injury Law",
    address: "3114 N. Boulevard",
    cityState: "Tampa, FL 33603",
    badge: null,
    mapsUrl: "https://maps.google.com/?q=3114+N+Boulevard+Tampa+FL+33603",
    embedSrc: null,
  },
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
            Largo Wrongful Death Lawyer —{" "}
            <span className="block text-primary">Areas of Practice and Neighborhoods We Serve</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Carter Injury Law represents families across Largo and the surrounding Pinellas County communities. Doesn't matter where the accident happened.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mb-8">

          {/* ── Left: Google Map Embed ── */}
          <div className="rounded-[20px] overflow-hidden border border-gray-100 shadow-sm w-full h-[380px] sm:h-[460px] lg:h-auto lg:min-h-[380px]">
            <iframe
              title="Carter Injury Law — Largo Office Location"
              src={offices[0].embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "380px" }}
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
                className="group bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer flex-1 justify-center"
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
              Wherever in Tampa Bay your family is, we're ready to sit down with you and get your claim started.
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
