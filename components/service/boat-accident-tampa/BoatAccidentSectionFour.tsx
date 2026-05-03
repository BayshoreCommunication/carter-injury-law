import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function BoatAccidentSectionFour() {
  return (
    <section className="px-4 md:px-8 py-6">
      <div className="text-sm md:text-lg leading-[1.9] text-slate-600 space-y-5">
        <h2 className="text-2xl font-bold text-black">
          Contact Carter Injury Law – Your Boat Accident Team in Tampa
        </h2>

        <p>
          If you or someone you care about has been hurt in a boating accident
          do not wait to get the help you need right away. The lawyers at Carter
          Injury Law are ready to help you. They will give you the caring
          representation that the boating accident victims need. You can contact
          Carter Injury Law today for a FREE consultation, about your boating
          accident.
        </p>

        <h3 className="text-xl font-semibold text-black mt-10">
          Available 24/7 – Call Us Anytime
        </h3>

        <p>
          Tampa: (813) 922-0228
          <br />
          Largo: (727) 955-1922
          <br />
          www.carterinjurylaw.com
          <br />
          Tampa Office: 3114 N. Boulevard, Tampa, FL 33603
          <br />
          Largo Office: 801 W. Bay Dr., Suite 229, Largo, FL 33770
        </p>

        <p>
          We are available 24/7, call, message us online, or stop by either
          office. Justice starts with a single conversation.
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
          Frequently Asked Questions
        </h2>

        <h3 className="text-xl font-semibold text-black mt-10">
          Q: How long do I have to file a boat accident lawsuit in Florida?
        </h3>

        <p>
          You have two years from the accident date to file, per the Statute of
          Limitations.
        </p>

        <h3 className="text-xl font-semibold text-black mt-10">
          Q: Can I file a claim if I was injured as a passenger on someone
          else&apos;s boat?
        </h3>

        <p>
          Yes, injured passengers on another&apos;s boat can sue the operator or
          owner.
        </p>

        <h3 className="text-xl font-semibold text-black mt-10">
          Q: What happens if the at-fault boater was uninsured or underinsured?
        </h3>

        <p>
          You might still be able to get money through your own uninsured boater
          coverage.
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

        <h3 className="text-xl font-semibold text-black mt-10">
          Q: Can I sue a boat rental company if their vessel caused my injury?
        </h3>

        <p>
          Rental companies can be liable for accidents due to poor boat
          maintenance, insufficient safety gear, or inadequate operator
          training.
        </p>

        <h3 className="text-xl font-semibold text-black mt-10">
          Q: How long does a typical boat accident settlement take in Florida?
        </h3>

        <p>
          Settlement duration varies based on injury severity, insurance
          cooperation, and case complexity. Most cases settle within a few
          months to two years.
        </p>

        <h3 className="text-xl font-semibold text-black mt-10">
          Q: What if the boat that hit me fled the scene without stopping?
        </h3>

        <p>
          If you&apos;re in an accident in Florida, you have to stop and help.
          Leaving the scene is a crime, and our lawyers have many ways to still
          get you your money.
        </p>
      </div>
    </section>
  );
}
