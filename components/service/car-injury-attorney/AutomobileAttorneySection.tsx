import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function AutomobileAttorneySection() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="">
        {/* Main Heading */}
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-black mb-8">
          WHAT AN AUTOMOBILE ACCIDENT ATTORNEY NEAR ME CAN DO FOR YOUR CASE
        </h2>
        {/* Image + Intro Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Image */}
          <div className="relative w-full md:w-[420px] rounded-xl overflow-hidden">
            <Image
              src="/assets/car-injury-law/automobile.png"
              alt="Attorney Consultation"
              width={1000}
              height={800}
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col text-sm md:text-lg leading-[1.9] text-slate-600 space-y-4 md:flex-1">
            <p>
              Local representation brings practical advantages that shape how a
              case develops and how effectively it resolves. Most people search
              for “an automobile accident attorney near me” for more than just
              convenience.Accident claims are governed by a mix of statutory
              rules, insurance frameworks, and court practices that vary by
              jurisdiction.
            </p>
          </div>
        </div>
        {/* Paragraph Content */}
        <div className="text-sm md:text-lg leading-[1.9] text-slate-600  space-y-6">
          <p>
            {" "}
            An attorney who works regularly in the same region understands these
            dynamics and uses them to your benefit.
          </p>
          <p>
            The work begins with analysis. An automobile accident attorney
            reviews the circumstances of the crash, identifies all potentially
            responsible parties, and evaluates available insurance coverage.
            Many collisions involve more than one policy, including bodily
            injury coverage, uninsured or underinsured motorist benefits, and
            commercial policies. Identifying every source of recovery early
            prevents missed opportunities and strengthens the overall claim.
          </p>

          <p>
            Case development is strategic, not reactive. A skilled attorney
            determines what evidence will matter most to insurers or a jury and
            builds the case around those facts. This includes examining vehicle
            damage, traffic patterns, and driver behavior. In complex crashes,
            expert analysis may be necessary to explain speed, point of impact,
            or visibility. An automobile accident attorney coordinates these
            efforts so that technical details support a clear legal narrative.
          </p>

          <p>
            Litigation readiness also changes outcomes, even when a case
            settles. Insurers evaluate risk, and they assess whether a law firm
            is prepared to proceed through discovery and trial if necessary. A
            local automobile accident attorney who has handled cases in nearby
            courts brings credibility to that assessment. The case is treated
            with greater seriousness, and negotiations reflect that reality.
          </p>

          <p>
            Through the process, your attorney acts as an advocate and a filter.
            Legal filings, procedural deadlines, and opposing counsel
            communications are handled professionally and promptly. This
            structure allows clients to focus on recovery while knowing their
            case is progressing with purpose.
          </p>
        </div>

        {/* Subheading 1 */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-black">
          How Liability Is Determined in Serious Collisions
        </h3>

        <div className="text-sm md:text-lg leading-[1.9] text-slate-600 space-y-6">
          <p>
            Liability is the foundation of every automobile accident claim.
            Determining who is at fault requires careful evaluation of conduct
            before and during the crash. An automobile accident attorney
            examines whether a driver violated traffic laws, failed to maintain
            a proper lookout, drove distracted, or operated a vehicle unsafely
            given road conditions.
          </p>

          <p>
            In serious collisions, liability is rarely admitted outright.
            Insurers may argue shared fault or attempt to shift blame. Florida’s
            comparative fault system makes this analysis especially important,
            because fault percentages can affect recovery. An attorney builds a
            liability case using witness testimony, physical evidence, expert
            opinions, and, when available, electronic data from vehicles.
          </p>
        </div>

        {/* Subheading 2 */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-black">
          The Role of Police Reports and Evidence
        </h3>

        <div className="text-sm md:text-lg leading-[1.9] text-slate-600 space-y-6">
          <p>
            Police reports often serve as the starting point for an accident
            investigation. They document the scene, identify involved parties,
            and may note citations or preliminary fault assessments. While not
            always decisive, these reports influence how insurers and courts
            view a claim. An automobile accident attorney reviews reports
            carefully, addressing errors or omissions when necessary.
          </p>

          <p>
            Beyond reports, evidence tells the deeper story. Photographs, video
            footage, vehicle damage, and roadway conditions can confirm or
            contradict written accounts. Timely collection matters, because
            evidence can be lost or altered. A local attorney understands where
            to look for traffic cameras, nearby businesses with surveillance,
            and other sources that may not be obvious.
          </p>

          <p>
            By assembling and preserving evidence early, an automobile accident
            attorney creates a factual record that supports liability and
            damages. This preparation reduces uncertainty, strengthens
            negotiations, and positions the case for success if courtroom
            presentation becomes necessary.
          </p>
        </div>

        {/* CTA Section  */}
        <div className="mt-6 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in St. Petersburg, FL
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Contact Page Button */}
            <Link
              href="/contact"
              className="bg-[#CE2523 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
            >
              FREE CASE CONSULTATION
            </Link>

            {/* Phone Call Button */}
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
    </section>
  );
}
