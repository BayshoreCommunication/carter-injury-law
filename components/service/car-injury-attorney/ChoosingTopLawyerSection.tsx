import Image from "next/image";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function ChoosingTopLawyerSection() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-[#0D3E8A] mb-10">
          CHOOSING A TOP AUTO ACCIDENT LAWYER FOR YOUR TAMPA CASE
        </h2>

        {/* Image + Intro Content */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
          {/* Left Image */}
          <div className="relative w-full md:w-[520px] rounded-xl overflow-hidden">
            <Image
              src="/assets/service/lawyer.png"
              alt="Attorney Consultation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center text-lg leading-[1.9] text-slate-600 space-y-4 md:flex-1">
            <p>
              Choosing a top auto accident lawyer in Tampa is a decision that
              carries long-term consequences. The lawyer you select will
              influence how your case is framed, how insurers respond, and how
              confidently your claim moves forward. Tampa’s roads are busy, its
              courts are active, and insurers are well practiced. Representation
              must match that reality with preparation, credibility, and local
              insight.
            </p>

            <p>
              A strong Tampa auto accident lawyer understands the regional legal
              environment. Local courts have distinct procedures, judges have
              preferences, and opposing counsel often follow predictable
              patterns. Familiarity with these elements allows a lawyer to
              anticipate obstacles and respond efficiently.
            </p>
          </div>
        </div>

        {/* Remaining Content */}
        <div className="text-lg leading-[1.9] text-slate-600 space-y-6">
          <p>
            Depth of experience matters, but so does relevance. A lawyer who
            regularly handles auto accident cases in Tampa understands the
            common crash scenarios in the area, including highway collisions,
            urban intersections, and tourist-related accidents involving rental
            vehicles. This practical knowledge informs investigation and
            strategy, helping ensure that no detail is overlooked simply because
            it appears routine.
          </p>

          <p>
            A top auto accident lawyer also demonstrates discipline in case
            selection and development. Not every claim should be handled the
            same way. Some require rapid resolution to stabilize finances, while
            others demand careful buildup to reflect lasting harm. The ability
            to distinguish between these paths is a mark of seasoned judgment.
          </p>

          <p>
            Transparency is another defining trait. Clear explanations of fees,
            costs, and expectations build trust. Clients should understand how
            compensation is pursued and how decisions will be made along the
            way. A lawyer who communicates openly reduces uncertainty and allows
            clients to participate meaningfully in their own case.
          </p>

          <p>
            Resources matter as well. Complex cases require access to experts,
            investigators, and support staff who can move quickly and
            accurately. A top auto accident lawyer invests in these resources
            because preparation is not optional. It is the foundation of
            credibility with insurers and courts alike.
          </p>

          <p>
            In Tampa, where insurers handle a high volume of claims, reputation
            carries weight. Lawyers known for thorough preparation and
            principled advocacy are taken seriously. Their demands are reviewed
            carefully, and their deadlines are respected. This reputation is
            built over time through consistent results and ethical conduct, not
            advertising alone.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-black">
          What Sets a Strong Legal Strategy Apart
        </h3>

        <div className="text-lg leading-[1.9] text-slate-600  space-y-6">
          <p>
            A strong legal strategy begins with clarity. It identifies the core
            facts that matter and organizes them into a narrative that makes
            sense to decision makers. This narrative connects liability, injury,
            and damages without exaggeration. It is persuasive because it is
            grounded in evidence.
          </p>

          <p>
            Strategy also requires timing. Knowing when to present information,
            when to negotiate, and when to escalate is critical. Premature
            demands can weaken leverage, while delayed action can erode value. A
            top auto accident lawyer understands this rhythm and adjusts as the
            case evolves.
          </p>

          <p>
            Another distinguishing factor is adaptability. No case follows a
            straight line. Medical outcomes change, witnesses become
            unavailable, and insurers alter their positions. A strong strategy
            absorbs these changes without losing direction, keeping attention
            focused on the end goal.
          </p>

          <p>
            Documentation quality also separates effective strategies from weak
            ones. Well-organized medical records, clear financial analysis, and
            credible expert opinions create confidence. They reduce
            opportunities for dispute and make negotiation more productive.
          </p>

          <p>
            Finally, a top auto accident lawyer prepares for resolution from the
            first day. Whether a case settles or proceeds further, preparation
            ensures that outcomes are not left to chance. This approach respects
            both the legal process and the client’s future.
          </p>
        </div>
        {/* CTA Section */}
        <div className="mt-6 bg-[#27355e] rounded-2xl p-8 text-center text-white">
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in St. Petersburg, FL
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#ED1B24] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
              FREE CASE CONSULTATION
            </button>

            <a
              href="tel:+8139220228"
              className="inline-flex items-center gap-2 bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white"
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
