import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function PedestrianAccidentSectionFour() {
  return (
    <section className="px-4 md:px-8 pb-6">
      <div>
        <div className="text-sm md:text-lg leading-[1.9] text-slate-600 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            What Makes a Tampa Pedestrian Road Accident Legally Complex
          </h2>

          <p>
            A pedestrian road accident in Tampa is rarely as simple as one
            driver and one clear point of fault. Identifying every layer of
            liability separates a partial recovery from a complete one.
          </p>

          <h3 className="text-xl font-semibold text-black mt-10">
            Multiple Parties Can Share Liability in Tampa Road Accidents
          </h3>

          <p>
            In a Tampa pedestrian road accident, liability often extends beyond
            the driver who struck the pedestrian. A municipality that failed to
            maintain a safe crosswalk or a property owner whose landscaping
            blocked a driver's view can bear responsibility. Other potential
            parties include an employer whose driver was on the clock or a
            vehicle manufacturer whose defective part caused the collision.
          </p>

          <p>
            We investigate every angle of causation. Our team pursues
            compensation from every party whose negligence played a role rather
            than just the most obvious defendant.
          </p>

          <h3 className="text-xl font-semibold text-black mt-10">
            How Road Conditions in Tampa Contribute to Pedestrian Crashes
          </h3>

          <p>
            Tampa's road infrastructure has documented issues that create
            pedestrian risk. Missing crosswalk markings on high-traffic roads
            and signal timing that fails to provide enough crossing time both
            contribute to crashes. Inadequate lighting and poorly designed
            medians also push pedestrians into travel lanes.
          </p>

          <p>
            We examine road conditions in every case. We evaluate whether the
            city or county bears liability alongside the driver. In many Tampa
            pedestrian crashes, the road played a role the initial police report
            never captured.
          </p>

          <h3 className="text-xl font-semibold text-black mt-10">
            Safety Tips for Pedestrians in Tampa and What Happens When They Are
            Not Enough
          </h3>

          <p>
            Pedestrian safety awareness matters. However, even the most careful
            person in Tampa can be struck by a driver who is negligent,
            distracted, or impaired. Knowing your legal rights is just as
            important as knowing the safety rules.
          </p>

          <h3 className="text-xl font-semibold text-black mt-10">
            Safety Practices That Reduce Tampa Pedestrian Risk
          </h3>

          <p>
            Tampa's busiest corridors demand heightened awareness from anyone on
            foot. Practical safety tips for pedestrians in this city include
            these habits.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use marked crosswalks and wait for the full pedestrian signal.
            </li>
            <li>Make eye contact with drivers before you step off the curb.</li>
            <li>
              Avoid crossing between parked vehicles where you suddenly become
              visible to traffic.
            </li>
            <li>
              Stay visible after dark by wearing bright clothing or carrying a
              light.
            </li>
            <li>Avoid phone use while you cross any active roadway.</li>
            <li>
              Cross at intersections with traffic signals rather than mid-block.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-black mt-10">
            When Safety Practices Cannot Protect You From Someone Else's
            Negligence
          </h3>

          <p>
            Following every safety guideline does not guarantee protection from
            a driver who is texting. It does not stop someone who blows past a
            red light or makes a right turn without checking for people in the
            crosswalk.
          </p>

          <p>
            Tampa's crash data consistently shows that driver behavior is the
            primary cause of serious crashes. When a driver's negligence causes
            your injury, we make sure that negligence becomes the focus of the
            legal case. We do not let the insurance company shift the focus to
            your walking habits.
          </p>

          <h3 className="text-xl font-semibold text-black mt-10">
            The Four Ways Tampa Insurers Minimize Claims
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              They request early recorded statements before you have legal
              advice.
            </li>
            <li>
              They argue you were distracted by a phone or stepped outside a
              marked zone.
            </li>
            <li>
              They attribute injuries to pre-existing conditions unrelated to
              the crash.
            </li>
            <li>
              They make a fast, low offer before you understand the full extent
              of your injuries.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-6 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in 3114 N. BOULEVARD TAMPA, FL 33603
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#CE2523] px-6 py-3 rounded-full font-semibold"
            >
              FREE CASE CONSULTATION
            </Link>

            <a
              href="tel:+8139220228"
              className="inline-flex items-center gap-2 bg-[#0D3E8A] px-6 py-3 rounded-full font-semibold"
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
