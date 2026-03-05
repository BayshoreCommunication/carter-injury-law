import React from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

export default function CarInjuryPage1() {
  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <div className="flex-1">
        <div className="space-y-12 text-lg text-slate-600 leading-relaxed">
          {/* ================= SECTION 6 ================= */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#0D3E8A]">
              How Injury Claims Are Handled Under Florida Law
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
              {/* <div className="relative w-full md:w-[420px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/car-accident/accident.png"
                  alt="Attorney Consultation"
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div> */}

              <div className="flex flex-col justify-center text-lg leading-[1.9] space-y-4 md:flex-1">
                <p>
                  Florida’s legal framework for motor vehicle injury claims is
                  shaped by mandated insurance coverages, statutory thresholds,
                  and recent tort reforms. Most policies include Personal Injury
                  Protection (PIP), designed to pay medical expenses quickly
                  regardless of fault.
                </p>
              </div>
            </div>

            <p>
              That PIP layer changes the early choreography of claims. Medical
              providers bill PIP first for emergency care and short-term
              treatment, but PIP limits are often insufficient for serious
              injuries.
            </p>

            <p>
              Two major statutory shifts in recent years have changed how fault
              and timing affect recovery. Florida moved to modified comparative
              negligence rules.
            </p>

            <p>
              The deadline for bringing negligence suits has also shortened,
              meaning claims must be filed faster than before.
            </p>

            <p>
              Coverage layering matters because claims may involve liability
              coverage, UM/UIM coverage, and other policies.
            </p>

            <p>
              Typical claims begin with medical evaluation and insurance
              notification, followed by negotiation or litigation if needed.
            </p>
          </div>

          {/* ================= SECTION 7 ================= */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#0D3E8A]">
              Compensation That May Be Available After a Crash
            </h2>

            <p>
              After a car accident the financial and personal impact can be
              significant and compensation addresses both economic and
              non-economic damages.
            </p>

            <p>
              Medical expenses often include hospital treatment, diagnostic
              testing, surgeries, therapy, medications and ongoing care.
            </p>

            <p>
              Lost wages may include both temporary income loss and long-term
              reduced earning capacity.
            </p>

            <p>
              Property damage may involve vehicle repairs and replacement costs.
            </p>

            <p>
              Pain and suffering compensation may cover emotional trauma,
              physical pain, and reduced quality of life.
            </p>

            <p>Severe injuries may require long-term care or rehabilitation.</p>

            <p>
              Wrongful death claims may allow surviving family members to pursue
              damages.
            </p>

            <p>
              Punitive damages may apply in rare cases involving reckless or
              intentional conduct.
            </p>
          </div>

          {/* ================= SECTION 8 ================= */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#0D3E8A]">
              Understanding Insurance Rules That Apply in Florida
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
              <div className="relative w-full md:w-[420px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/car-accident/insurance.png"
                  alt="Attorney Consultation"
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center text-lg leading-[1.9] space-y-4 md:flex-1">
                <p>
                  Personal Injury Protection provides initial coverage
                  regardless of fault but has limits.
                </p>

                <p>
                  Bodily injury liability insurance compensates victims when the
                  at-fault driver has coverage.
                </p>

                <p>
                  Florida’s system combines mandatory personal injury protection
                  with optional liability and uninsured motorist coverage.
                </p>
              </div>
            </div>

            <p>
              UM and UIM coverage helps when the responsible driver lacks
              insurance.
            </p>

            <p>
              Insurance companies may investigate claims and request records.
            </p>

            <p>
              Timing and notice requirements are critical to avoid claim denial.
            </p>

            <p>Coverage disputes may arise and require legal guidance.</p>

            <p>
              Coordination between PIP, health insurance, and other coverage is
              often necessary.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-6 bg-[#27355e] rounded-2xl p-8 text-center text-white">
        <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
          Contact Our Injury Attorneys in St. Petersburg, FL
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#ED1B24] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
          >
            FREE CASE CONSULTATION
          </Link>

          <a
            href="tel:+8139220228"
            className="inline-flex items-center justify-center gap-2 bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white"
          >
            <FiPhoneCall size={20} />
            (813) 922-0228
          </a>
        </div>
      </div>
    </div>
  );
}
