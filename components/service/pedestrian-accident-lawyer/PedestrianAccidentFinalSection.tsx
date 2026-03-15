import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function PedestrianAccidentFinalSection() {
  return (
    <div className="min-h-screen py-8 px-4 md:px-8 text-sm md:text-lg">
      <div className="max-w-5xl mx-auto space-y-10 text-slate-600 leading-relaxed">
        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          What a Professional Lawyer Does in Practice
        </h2>

        <p>
          The best lawyer is the one who invests fully in your case and fights
          until the outcome reflects your losses.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Real Commitment to Clients
        </h3>

        <p>
          We define our success by how we treat people and the results we
          produce. Every client receives the attention they deserve. Every case
          gets the preparation required to win.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          The Value of a Track Record
        </h3>

        <p>
          Past results matter. A firm that consistently achieves strong outcomes
          has built processes that work. We bring that accumulated knowledge to
          every person we represent.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          The Journey From First Contact to Payout
        </h2>

        <p>
          Understanding how a claim moves from start to finish removes the
          mystery from the process.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Your First Step
        </h3>

        <p>
          After you contact us, we provide a free case evaluation. We review the
          facts and give an honest assessment. If we take the case, work begins
          immediately. We secure evidence and request medical records. The
          insurance company then learns you have professional representation.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          From Demand to Resolution
        </h3>

        <p>
          Once we document your damages, we prepare a comprehensive demand
          letter. We negotiate firmly and refuse any settlement that falls below
          a fair floor. If the insurance company resists, we litigate. We do not
          abandon claims at the first sign of resistance.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Your Legal Rights After a Strike
        </h2>

        <p>
          When a vehicle strikes a pedestrian, the legal consequences are
          immediate. The window to protect your rights starts closing right
          away.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Rights From Impact
        </h3>

        <p>
          You have the right to seek compensation for every loss, including
          medical and financial costs. This right exists regardless of your own
          insurance status or the driver's coverage. We identify every available
          source of funds and pursue them all.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          More Than Just Basic Insurance
        </h3>

        <p>
          The at-fault driver's policy is often just the beginning. Uninsured
          motorist coverage and employer liability can supplement these funds.
          We map out every option to produce the best possible result.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Support for Families After a Fatal Crash
        </h2>
        {/* Image + Intro Content */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
          {/* Left Image */}
          <div className="relative w-full md:w-[420px] rounded-xl overflow-hidden">
            <Image
              src="/assets/pedestrian-accident/support.png"
              alt="Florida Motorcycle Accident"
              width={1000}
              height={800}
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-start text-sm md:text-lg leading-[1.9] text-slate-600 space-y-4 md:flex-1">
            <p>
              When a crash takes a life, no legal outcome can fix the grief.
              However, accountability and financial stability provide a
              meaningful form of justice.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-800">
          What Wrongful Death Claims Cover
        </h3>

        <p>
          Florida's Wrongful Death Act allows survivors to seek compensation. We
          handle these cases with legal rigor and genuine human care.
          Compensation can include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Funeral and burial expenses</li>
          <li>Loss of future income</li>
          <li>Loss of companionship and guidance</li>
          <li>Medical expenses prior to death</li>
          <li>Emotional pain and suffering</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800">
          Filing the Claim
        </h3>

        <p>
          The personal representative of the estate files the lawsuit for
          eligible survivors. We guide families through this process. We handle
          the complexity so you can focus on each other.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          How Injury Changes Your Life and Claim
        </h2>

        <p>
          An injury does more than produce a bill. It can alter the entire
          trajectory of your life. Your claim must reflect that impact.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Physical and Financial Reality
        </h3>

        <p>
          Serious injuries affect every dimension of your life. Victims face
          long recoveries and possible disability. Emotionally, anxiety and
          trauma are common. Financially, bills and lost income can destabilize
          a household. We build claims that account for all three areas.
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
          Documenting Future Impact
        </h3>

        <p>
          Damages do not end when immediate treatment stops. Future surgeries
          and reduced ability to work carry real value. We work with economic
          experts to document these costs. This ensures your final claim
          reflects the lifetime impact of the crash.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Maximize Your Recovery
        </h2>

        <p>
          We fight to ensure every dimension of your injury is quantified and
          compensated.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Connecting the Crash to the Injury
        </h3>

        <p>
          We work with your medical team to build an evidentiary chain. Carter
          Injury Law does not just list injuries. We present a medically
          supported narrative that shows the full impact on your life.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Fight Back Against Record Attacks
        </h3>

        <p>
          Insurance companies often argue that injuries are pre-existing or
          exaggerated. We anticipate these moves. Our team prepares rebuttals
          backed by specialist testimony and imaging results. When insurance
          companies attack your record, they find us ready to defend it.
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Put the Experience of Carter Injury Law on Your Side
        </h2>

        <p>
          If a vehicle struck you or a loved one in Largo, Tampa Bay, or
          anywhere in Florida, let us handle the insurance companies while you
          focus on healing. We offer free consultations and a "no win, no fee"
          guarantee. Reach out today to get the answers you deserve.
        </p>
      </div>
    </div>
  );
}
