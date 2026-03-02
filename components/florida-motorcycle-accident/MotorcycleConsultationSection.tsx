import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function MotorcycleConsultationSection() {
  return (
    <div className="min-h-screen pt-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
        {/* H2 */}
        <h2 className="text-2xl font-bold text-slate-900">
          Consult with the Best Motorcycle Accident Attorney for Free
        </h2>

        <p>
          You deserve clear answers and a roadmap for your case before you
          commit to any legal path or sign any contracts.
        </p>

        {/* H3 */}
        <h3 className="text-xl font-semibold text-slate-800">
          What to Expect at Your Free Case Evaluation
        </h3>

        <p>
          The road to justice begins with a single conversation. Consulting with
          the best motorcycle accident attorney allows you to gain a realistic
          perspective on your legal options without any financial risk. During
          your initial consultation at Carter Injury Law, we listen to your
          story, review the police report, and provide an honest assessment of
          your chances for recovery.
        </p>

        <p>
          We believe in transparency; if we don't believe your case has a high
          probability of success, we will tell you why. We are not interested in
          wasting your time; we are interested in winning your case.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Free Evaluations: Zero cost to speak with an attorney about your
            crash.
          </li>
          <li>
            Mobile Consultations: We can visit you at home or in the hospital.
          </li>
          <li>
            Honest Advice: Clear expectations regarding the timeline and value
            of your case.
          </li>
        </ul>

        {/* H3 */}
        <h3 className="text-xl font-semibold text-slate-800 pt-6">
          We Visit You If Travel Is a Burden
        </h3>

        <p>
          Our attorneys are available to meet with you at our Tampa office, or
          we can travel to your home or hospital room if your injuries prevent
          you from coming to us. We understand that after a major collision,
          travel may be difficult or impossible. We make sure that everyone can
          get justice by offering mobile consultations, no matter what their
          physical condition is.
        </p>

        <p>
          This initial meeting is your opportunity to ask questions about our
          experience, our fees, and our strategy. We want you to feel completely
          confident in our ability to represent your interests before you sign a
          single document.
        </p>

        {/* H2 */}
        <h2 className="text-2xl font-bold text-slate-900 pt-8">
          Essential Qualities of the Right Lawyer for Motorcycle Accident Claims
          and Success
        </h2>

        <p>
          The right representation understands the road as well as you do,
          combining legal skill with a true passion for the Florida ride.
        </p>

        {/* H3 */}
        <h3 className="text-xl font-semibold text-slate-800">
          Why Do You Need an Advocate from the Motorcycle Community?
        </h3>

        <p>
          In the sea of legal advertisements, finding the right lawyer for
          motorcycle accident representation can feel like a daunting task. You
          should look for a lawyer who is not only a member of the Florida Bar
          but also an active participant in the motorcycle community.
        </p>

        <p>
          Experience in the courtroom is essential, as is a willingness to
          communicate directly with clients rather than delegating everything to
          a paralegal. Carter Injury Law prioritizes the attorney-client
          relationship, ensuring that you always have direct access to the
          lawyer handling your case.
        </p>

        {/* H3 */}
        <h3 className="text-xl font-semibold text-slate-800 pt-6">
          A Clear View of Florida’s Unique Insurance Laws
        </h3>

        <p>
          Furthermore, the right lawyer will have a deep understanding of
          Florida's insurance landscape. Since PIP insurance is not required for
          motorcycles, we must look to other avenues such as bodily injury
          liability coverage from the at-fault driver or your own
          uninsured/underinsured motorist (UM) policy.
        </p>

        <p>
          We have a deep understanding of how to stack policies and navigate the
          intricacies of insurance contracts to maximize your payout. Our
          reputation for thoroughness and ethical practice means that when
          insurance companies see our name on a letterhead, they know we are
          prepared for a fight.
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
            className="bg-[#ED1B24] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold inline-block"
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
