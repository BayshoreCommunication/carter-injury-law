import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function PedestrianAccidentLawyerContent() {
  return (
    <div className="min-h-screen py-4 mt-4 px-4 md:px-8 text-sm md:text-lg">
      <div className="max-w-5xl mx-auto space-y-10 text-slate-600 leading-relaxed">
        <h1 className="text-3xl md:text-5xl font-semibold text-black">
          Pedestrian Accident Lawyer
        </h1>
        {/* Image + Intro Content */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
          {/* Left Image */}
          <div className="relative w-full md:w-[420px] rounded-xl overflow-hidden">
            <Image
              src="/assets/pedestrian-accident/pedestrian-accident.png"
              alt="Florida Motorcycle Accident"
              width={1000}
              height={800}
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-start text-sm md:text-lg leading-[1.9] text-slate-600 space-y-4 md:flex-1">
            <p>
              Getting hit by a car while walking is a traumatic experience.
              Injuries are often severe and the recovery process lasts a long
              time. Managing the legal and insurance side of things while you
              try to heal feels like a heavy burden.
            </p>
          </div>
        </div>

        <p>
          Carter Injury Law represents injured pedestrians and their families in
          Largo, the Tampa Bay area, and throughout Florida. If a vehicle struck
          you or a loved one, this page explains your rights and your options.
          You can also learn what the legal process looks like from the
          beginning.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          How to Find a Pedestrian Accident Attorney Near Me
        </h2>

        <p>
          Selecting the right attorney after a crash begins with finding someone
          who knows your area and your courts. You need a person who understands
          the specific roads and intersections where your accident happened.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          The Value of Local Knowledge
        </h3>

        <p>
          A local pedestrian accident attorney provides more than just a short
          drive to a physical office. It means you have a representative who has
          investigated crashes on those exact streets.
        </p>

        <p>
          We argue cases in the same courts and deal with the same insurance
          adjusters involved in your claim. Our team operates in the communities
          we serve. That ground-level familiarity strengthens every case we take
          on.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Ask These Questions Before You Hire Anyone
        </h3>

        <p>
          Before you hire a legal representative, get honest answers to these
          questions.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Do you handle pedestrian injury cases specifically or is this
            outside your main focus?
          </li>
          <li>
            What results have you achieved for clients injured in pedestrian
            crashes?
          </li>
          <li>Will I have direct access to the attorney working my case?</li>
          <li>
            Do you work on contingency? This means you pay no fees unless you
            win.
          </li>
        </ul>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Why a Local Pedestrian Accident Lawyer Responds Faster
        </h2>

        <p>
          Speed matters more than most people realize in a pedestrian crash
          case. A local lawyer who responds immediately gives your claim a
          stronger foundation from the very first day.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Evidence Does Not Wait for Recovery
        </h3>

        <p>
          When you search for a pedestrian accident lawyer near you, you make
          the right call. Crash scene evidence fades fast. Skid marks wash away
          and security footage gets overwritten. Witnesses move on or forget
          details.
        </p>

        <p>
          A nearby legal team reaches the scene quickly to request footage
          preservation. We lock down evidence before it disappears entirely. We
          move fast because the timeline of a case starts the moment the crash
          happens. We do not wait until you feel well enough to make calls.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          No Cost to Determine Your Standing
        </h3>

        <p>
          We offer free consultations for injured pedestrians and their
          families. You can visit the office or call to get a clear assessment
          of your case and your options.
        </p>

        <p>
          This process provides a look at what to expect from the legal system.
          There is no obligation and no pressure. You receive straight answers
          from attorneys who handle these cases every day.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Why a Largo Pedestrian Accident Lawyer Understands Pinellas County
          Road Risks
        </h2>

        <p>
          Largo has unique road conditions, traffic patterns, and liability
          factors. A lawyer who knows Pinellas County brings specific advantages
          to your pedestrian crash case. A distant firm simply cannot match this
          local insight.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          High-Risk Areas in and Around Largo
        </h3>

        <p>
          A Largo pedestrian accident lawyer understands the specific
          intersections and commercial corridors where crashes happen most
          frequently. Our team has handled cases on East Bay Drive, Ulmerton
          Road, and throughout the Largo area.
        </p>

        <p>
          We bring that location-specific knowledge to every investigation. This
          helps us build a stronger case on behalf of injured clients.
        </p>
        {/* CTA */}
        <div className="mt-10 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in St. Petersburg, FL
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#CE2523] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
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
        <h3 className="text-xl font-semibold text-slate-800">
          Pinellas County Courts and Your Case
        </h3>

        <p>
          Moving through the Pinellas County court system requires familiarity
          with local procedures and judges. You need to know how local officials
          evaluate pedestrian cases in this jurisdiction.
        </p>

        <p>
          Our experience in Pinellas County gives clients a clear strategic
          advantage. This impacts everything from how we structure a demand to
          how we argue a case if it reaches litigation.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          What a Pedestrian Accident Attorney in Largo Does to Protect Your
          Recovery
        </h2>

        <p>
          A pedestrian accident attorney in Largo does more than just file
          documents. Our team builds a complete legal case designed to hold the
          responsible party accountable. We work to recover everything you are
          entitled to under Florida law.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Start the Case Before You Leave the Hospital
        </h3>

        <p>
          A pedestrian accident attorney in Largo begins working on your behalf
          the moment you make contact. This applies even if you are still in the
          hospital.
        </p>

        <p>
          We send preservation letters and request police reports immediately.
          We also contact witnesses and put the insurance company for the
          at-fault party on formal notice right away. Early action protects your
          claim before the other side has time to build a defense.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Manage the Details So You Can Focus on Health
        </h3>

        <p>
          One practical benefit of legal representation is that you do not have
          to manage the legal process while you try to recover physically. We
          handle all communications with insurance companies and coordinates
          with your medical providers. We keep the case moving forward. This is
          your energy to go toward healing instead of filing documents.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          How a Pedestrian Accident Lawyer in Largo Builds a Case From the
          Ground Up
        </h2>

        <p>
          Building a winning pedestrian case requires more than just pointing to
          an accident report. It requires a thorough and evidence-driven
          investigation. We answer every question the insurance company will
          eventually raise.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          What a Full Investigation Actually Involves
        </h3>

        <p>
          A pedestrian accident lawyer in Largo starts the case at the crash
          site. We examine road conditions, lighting, signage, and intersection
          design. We request traffic camera footage and review police reports
          for inaccuracies.
        </p>

        <p>
          Our team speaks directly with every available witness. This depth of
          investigation separates a strong claim from a weak one when
          negotiations begin.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Build a Damage Picture That Reflects Your Full Loss
        </h3>

        <p>
          A solid investigation does not stop at determining fault. It also
          builds a comprehensive picture of your damages. This includes current
          medical costs and projected future treatment. We account for lost
          wages and reduced earning capacity.
        </p>

        <p>
          Our team also looks at the non-economic impact of the injury on your
          daily life. Carter Injury Law quantifies every layer of your loss.
          This ensures nothing gets left off the table when we present the
          demand.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          What a Pedestrian Accident Lawyer Does From the First Call to Final
          Resolution
        </h2>

        <p>
          Most people do not realize how much a pedestrian accident lawyer
          handles on their behalf. Understanding the full scope of this work
          explains why professional help makes a significant difference in case
          outcomes.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          The Scope of Legal Representation in a Pedestrian Case
        </h3>

        <p>
          A pedestrian accident lawyer serves as your full advocate from the
          moment they take your case. We handle all communication with the
          insurance company and coordinate with your medical team.
        </p>

        <p>
          Our staff requests and reviews all case documentation while retaining
          expert witnesses as needed. We build a complete legal strategy
          tailored to the specific facts of your crash. You do not have to face
          any of this alone.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          How the Case Moves From Investigation to Resolution
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Free case evaluation and legal strategy session</li>
          <li>Full crash investigation and evidence preservation</li>
          <li>Medical record collection and expert consultation</li>
          <li>
            Formal demand letter sent to the insurance company of the at-fault
            party
          </li>
          <li>Negotiation with the goal of a maximum fair settlement</li>
          <li>
            Litigation filing and trial preparation if settlement talks fail
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-[#27355e] rounded-2xl p-8 text-center text-white">
        <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
          Contact Our Injury Attorneys in St. Petersburg, FL
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#CE2523] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
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
