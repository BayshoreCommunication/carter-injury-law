import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function MotorcycleAccidentSupportSection() {
  return (
    <div className="min-h-screen pt-8 px-4 md:px-4">
      <div className="max-w-[1320px] mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900">
          How Our Motorcycle Accident Law Firm Supports You from Hospital to
          Courtroom
        </h2>

        {/* Image + Intro Content */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
          {/* Left Image */}
          <div className="relative w-full md:w-[420px] rounded-xl overflow-hidden">
            <Image
              src="/assets/motorcycle/courtroom.png"
              alt="Florida Motorcycle Accident"
              width={1000}
              height={800}
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-start text-sm md:text-lg leading-[1.9] text-slate-600 space-y-4 md:flex-1">
            <p>
              We provide the resources of a large firm with the personalized
              care of a local advocate to help you rebuild your life after a
              crash.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-800">
          Access Elite Resources for Your Recovery
        </h3>

        <p className="text-sm md:text-lg">
          Success in personal injury law is built on a foundation of resources
          and expertise. As a dedicated motorcycle accident law firm, we possess
          the financial and professional resources necessary to challenge large
          insurance corporations. This includes hiring accident reconstruction
          experts, medical specialists, and vocational experts who can testify
          to the extent of your losses.
        </p>

        <p className="text-sm md:text-lg">
          We operate on a contingency fee basis, meaning we front all the costs
          of litigation. You do not owe us a single cent in attorney fees unless
          we successfully recover money for you.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg">
          <li>
            We secure dashcam footage, black box data, and witness statements.
          </li>
          <li>
            We help you find experts who know how to deal with
            motorcycle-related injuries.
          </li>
          <li>
            We deal with all of the aggressive tactics that insurance adjusters
            use.
          </li>
          <li>If they won't pay fairly, we take them to court.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 pt-6">
          A Team of Professionals Focused on Injury Law
        </h3>

        <p className="text-sm md:text-lg">
          Our internal team is structured to provide high-touch service. We
          understand that a crash affects more than just the person on the bike;
          it affects their entire family. We assist with property damage claims,
          help you find specialized medical care, and ensure that your lost
          wages are accounted for.
        </p>

        <p className="text-sm md:text-lg">
          We stay on top of changes in Florida law and court decisions that
          could affect your case by only working on injury law. Our firm is not
          just a business; it is a community of legal professionals dedicated to
          making Florida roads safer for everyone who chooses to ride.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-8">
          The Proven Process to Start a Motorcycle Accident Lawsuit and Hold
          Others Accountable
        </h2>

        <p className="text-sm md:text-lg">
          If the insurance company refuses to pay what you deserve, we take the
          fight to the courtroom to secure a just result for you.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          What to Expect in the Discovery Phase
        </h3>

        <p className="text-sm md:text-lg">
          When negotiations fail to produce a just result, the next step is
          filing a motorcycle accident lawsuit. This formal legal action begins
          the discovery phase, where both sides exchange evidence and take
          depositions. A lawsuit is a powerful tool that forces the defendant to
          produce documents and information that they may have withheld during
          initial negotiations.
        </p>

        <p className="text-sm md:text-lg">
          While the prospect of going to court can be intimidating, our
          attorneys are seasoned litigators who thrive in the courtroom
          environment. We guide you through every step of the process, ensuring
          you are prepared for every hearing.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 pt-6">
          Tech Tools That Prove Driver Negligence
        </h3>

        <p className="text-sm md:text-lg">
          The litigation process also allows us to uncover cell phone records
          that may prove the other driver was distracted at the time of the
          collision. We utilize cutting-edge technology to create visual aids
          for the jury, making complex accident dynamics easy to understand.
        </p>

        <p className="text-sm md:text-lg">
          Most cases settle before they actually reach a trial, but the
          willingness to file a lawsuit often provides the necessary leverage to
          secure a maximum settlement. No matter how long it takes, Carter
          Injury Law will make sure your case is handled all the way to the end.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-8">
          What Is the Value of a Motorcycle Accident Case?
        </h2>

        <p className="text-sm md:text-lg">
          Calculating the true cost of an injury involves more than just adding
          up current bills; it requires a deep look at your future needs.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          The Difference Between Economic and Non-Economic Loss
        </h3>

        <p className="text-sm md:text-lg">
          Determining the worth of a motorcycle accident case involves a careful
          analysis of both economic and non-economic damages. Economic damages
          are quantifiable losses, such as emergency room bills, future
          surgeries, and lost income.
        </p>

        <p className="text-sm md:text-lg">
          Non-economic damages are more subjective, covering pain and suffering,
          emotional distress, and loss of enjoyment of life. Because bikers
          often suffer more severe injuries than car occupants, their
          non-economic damages are typically much higher.
        </p>

        <p className="text-sm md:text-lg">
          We work with economists to project the lifetime cost of your injuries,
          ensuring that you aren't left with bills ten years down the line.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 pt-6">
          How Do Florida’s Fault Rules Affect Your Award?
        </h3>

        <p className="text-sm md:text-lg">
          Florida’s comparative negligence laws also play a role in the
          valuation of your case. Under these rules, your compensation can be
          reduced by your percentage of fault. For example, if a jury determines
          you were 10% at fault for the accident, your total award would be
          reduced by 10%.
        </p>

        <p className="text-sm md:text-lg">
          This makes it even more vital to have a legal team that can argue
          effectively against any allegations of negligence on your part. We
          meticulously analyze every factor—from road conditions to mechanical
          failures—to ensure that the primary burden of liability remains on the
          party who truly caused the harm.
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
            className="bg-[#CE2523] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
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
  );
}
