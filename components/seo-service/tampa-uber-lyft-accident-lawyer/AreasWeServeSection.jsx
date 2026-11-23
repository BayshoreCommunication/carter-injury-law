"use client";
import React from "react";
import { MapPin } from "lucide-react";

const offices = [
  {
    label: "Main Office",
    name: "Carter Injury Law — Tampa",
    address: "3114 N. Boulevard",
    cityState: "Tampa, FL 33603",
    badge: null,
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.809177193109!2d-82.47045932387964!3d27.972312213754044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3b1208be12d%3A0x4cce7467aad41864!2sCarter%20Injury%20Law!5e1!3m2!1sen!2sbd!4v1784709237604!5m2!1sen!2sbd",
  },
  {
    label: "Satellite Office",
    name: "Carter Injury Law — Largo",
    address: "801 W. Bay Dr., Suite 229",
    cityState: "Largo, FL 33770",
    badge: "By Appointment Only",
    embedSrc: null,
  },
];

const AreasWeServeSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            Tampa Uber and Lyft Accident Lawyer,{" "}
            <span className="block text-primary">Areas We Serve</span>
          </h2>
        </div>

        {/* ── Left: Map | Right: Office Locations ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">

          {/* ── Left: Google Map Embed ── */}
          <div className="rounded-[20px] overflow-hidden border border-gray-100 shadow-sm w-full h-[380px] sm:h-[460px] lg:h-auto lg:min-h-[520px]">
            <iframe
              title="Carter Injury Law — Tampa Office Location"
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
              <div
                key={i}
                className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 flex flex-col gap-4 flex-1 justify-center"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase">
                    {office.label}
                  </span>
                </div>

                <div className="w-full h-px bg-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AreasWeServeSection;

