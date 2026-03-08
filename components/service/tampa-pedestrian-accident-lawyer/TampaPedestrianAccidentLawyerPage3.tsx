import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

export default function TampaPedestrianAccidentLawyerPage3() {
  return (
    <div className="min-h-screen pt-8 px-4 md:px-4 mb-6">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-800 pt-4">
            How Does the Law Assign Pedestrian Accident Liability in Florida?
          </h2>

          <p className="text-sm md:text-lg">
            Determining pedestrian accident liability involves a careful look at
            the actions of both the driver and the person on foot. Florida
            follows a "comparative fault" rule, which means your payout can be
            reduced if you were partially at fault.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Minimize your shared fault
          </h3>

          <p className="text-sm md:text-lg">
            The insurance company will try to say you were jaywalking or looking
            at your phone to avoid paying you. We counter these claims by
            showing that the driver still had the "last clear chance" to avoid
            the crash.
          </p>

          <p className="text-sm md:text-lg">
            We work to keep your percentage of fault as low as possible, as even
            a small change in percentage can mean thousands of dollars in your
            pocket. We protect your reputation and your financial interests from
            unfair accusations.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Hold all parties responsible
          </h3>

          <p className="text-sm md:text-lg">
            We look beyond the driver to see if anyone else contributed to the
            danger.
          </p>

          <p className="text-sm md:text-lg">
            If the car was a rental or owned by a company.
          </p>
          <p className="text-sm md:text-lg">
            If roadwork made the crossing dangerous.
          </p>
          <p className="text-sm md:text-lg">
            If a mechanical failure led to the crash.
          </p>
          <p className="text-sm md:text-lg">
            If the driver were served too much alcohol.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 pt-4">
            How Can You Locate the Best Pedestrian Accident Lawyer for Your
            Recovery?
          </h2>

          <p className="text-sm md:text-lg">
            Finding the best pedestrian accident lawyer for your specific needs
            is a personal decision that requires research and trust. You need a
            firm that has the experience, the resources, and the heart to fight
            for you.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Look for a proven record
          </h3>

          <p className="text-sm md:text-lg">
            Check for a history of winning similar cases and read what former
            clients have to say about their experience. A top firm will be
            transparent about their fees and will never ask for money upfront.
          </p>

          <p className="text-sm md:text-lg">
            We invite you to look at our results and see how we have helped our
            neighbors in Tampa rebuild their lives after a crash. We are proud
            of the work we do and the people we serve.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Schedule your free case review
          </h3>

          <p className="text-sm md:text-lg">
            The best way to know if a firm is right for you is to sit down and
            talk with them.
          </p>

          <p className="text-sm md:text-lg">
            You don't pay anything to hear your options.
          </p>
          <p className="text-sm md:text-lg">
            Get the truth about the value of your case.
          </p>
          <p className="text-sm md:text-lg">
            See how we treat you as a human, not a number.
          </p>
          <p className="text-sm md:text-lg">
            Learn about the laws that apply to your specific crash.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 pt-4">
            Carter Injury Law Is Ready to Start Your Case Today
          </h2>

          <p className="text-sm md:text-lg">
            We encourage you to get in touch with us for a free, professional
            review of your claim. We are proud to speak up for the injured in
            Tampa, St. Petersburg, Clearwater, and the nearby Greater Tampa Bay
            areas.
          </p>

          <p className="text-sm md:text-lg">
            Carter Injury Law 412 E Madison St, Suite 1206
            <br />
            Tampa, FL 33602
            <br />
            Direct Line:{" "}
            <a
              href="tel:+18139220228"
              className="text-blue-600 hover:underline"
            >
              (813) 922-0228
            </a>
            <br />
            Consultations: Available in-office, by phone, or at your location.
          </p>
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
