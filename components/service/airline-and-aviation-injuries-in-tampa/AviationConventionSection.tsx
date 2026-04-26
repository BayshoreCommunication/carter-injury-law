import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function AviationConventionSection() {
  return (
    <section className="px-4 md:px-8 py-6">
      <div className="text-sm md:text-lg leading-[1.9] text-slate-600 space-y-5">
        <h2 className="text-2xl font-bold text-black">
          The Montreal Convention
        </h2>

        <p>
          If your flight was traveling internationally, your case might fall
          under the Montreal Convention. This is a treaty that sets rules for
          passenger injuries on international flights. It can actually make it
          easier to recover money because you do not always have to prove the
          airline was negligent for certain levels of damage. However, the rules
          for bodily injury are very specific. You need a plane accident lawyers
          team that understands these treaties to make sure you are not leaving
          money on the table.
        </p>

        {/* CTA */}
        <div className="mt-8 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in 3114 N. BOULEVARD TAMPA, FL 33603
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#CE2523] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
            >
              FREE CASE CONSULTATION
            </Link>

            <a
              href="tel:+7279551922"
              className="inline-flex items-center justify-center gap-2 bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white"
            >
              <FiPhoneCall size={20} />
              (727) 955-1922
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-black">
          The Role of the Federal Aviation Administration and National
          Transportation Safety Board
        </h2>

        <p>
          After a major incident, federal agencies like the Federal Aviation
          Administration or the National Transportation Safety Board will
          conduct an investigation. While their reports are helpful, they do not
          always focus on getting you paid. They focus on safety for the future.
          We use their findings as a starting point but do our own investigation
          to find the evidence that matters for your specific injury. If you
          hire an airplane accident attorney, you have someone looking out for
          your wallet, not just the industry rules.
        </p>

        {/* CTA */}
        <div className="mt-8 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in 3114 N. BOULEVARD TAMPA, FL 33603
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#CE2523] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
            >
              FREE CASE CONSULTATION
            </Link>

            <a
              href="tel:+7279551922"
              className="inline-flex items-center justify-center gap-2 bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white"
            >
              <FiPhoneCall size={20} />
              (727) 955-1922
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-black">
          Choose Carter Injury Law for Strong Aviation Injury Representation in
          Tampa
        </h2>

        <p>
          Do not let an airline convince you that your injury was "just an
          accident" that no one could prevent. Usually, someone made a mistake
          or skipped a safety check. Whether it was at the gate, on the tarmac,
          or in the air, you deserve a team that knows how to fight back. Reach
          out to Carter Injury Law, plane injury lawyer who knows the Tampa
          community and the aviation world. We are here to help you get the
          justice you deserve.
        </p>

        {/* CTA */}
        <div className="mt-8 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in 3114 N. BOULEVARD TAMPA, FL 33603
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#CE2523] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
            >
              FREE CASE CONSULTATION
            </Link>

            <a
              href="tel:+7279551922"
              className="inline-flex items-center justify-center gap-2 bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white"
            >
              <FiPhoneCall size={20} />
              (727) 955-1922
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
