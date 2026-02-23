import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function FatalAccidentSection() {
  return (
    <section className="px-4 md:px-8 ">
      
      <div className="">
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-black mb-8">
          LEGAL OPTIONS WITH A FATAL CAR 
          ACCIDENT ATTORNEY IN FLORIDA
        </h2>

        {/* Content */}
        <div className="text-lg leading-[1.9] text-slate-600 space-y-6">
          
          <p>
            When a crash results in a loss of life, the legal process shifts in
            both scope and gravity. A fatal car accident attorney in Florida
            handles cases that are governed by specific statutes and procedural
            rules, most notably the Florida Wrongful Death Act. These claims are
            not personal injury cases extended further; they are distinct legal
            actions designed to address the financial and relational losses
            suffered by surviving family members.
          </p>

          <p>
            A fatal collision creates immediate questions. Who has the right to
            bring a claim? What damages are recoverable? How are insurance
            proceeds distributed? A fatal car accident attorney answers these
            questions early, because missteps at the beginning can limit recovery
            later. In Florida, the personal representative of the estate files
            wrongful death lawsuits on behalf of survivors, including spouses,
            children, and occasionally parents. Both strategy and damages are
            impacted by knowing who is eligible to be a survivor.
          </p>

          <p>
            These cases often involve higher insurance limits and more
            aggressive defenses. Insurers scrutinize liability, causation, and
            the financial history of the deceased. A fatal car accident attorney
            prepares for this scrutiny by assembling employment records, tax
            documentation, and expert analysis to establish lost support and
            services. The claim must show not only what was lost in the past but
            also what the deceased would likely have provided over a lifetime.
          </p>

          <p>
            Beyond financial loss, Florida law recognizes the emotional and
            relational impact of a death. Loss of companionship, guidance, and
            protection are compensable damages for certain survivors. Presenting
            these losses requires sensitivity and precision. The legal strategy
            must humanize the person who was lost without becoming speculative or
            exaggerated. A seasoned fatal car accident attorney balances empathy
            with evidentiary discipline.
          </p>

          <p>
            These cases also demand patience. Investigations may take longer,
            experts are often required, and insurers are slower to resolve
            claims involving death. Throughout the process, the attorney’s role
            includes shielding families from legal stress, managing
            communication, and ensuring that deadlines and procedural
            requirements are met without burdening those who are grieving.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-black">
          When a Case Needs to Go to Court
        </h3>

        <div className="text-lg leading-[1.9] text-slate-600  space-y-6">
          
          <p>
            While some wrongful death cases resolve through negotiated
            settlements, others must be litigated. A case may need to go to
            court when liability is disputed, when damages are contested, or
            when insurers refuse to acknowledge the full scope of loss. In fatal
            accident cases, the difference between settlement and trial often
            reflects how convincingly the evidence has been developed.
          </p>

          <p>
            A fatal car accident attorney prepares for court by building a
            comprehensive record. This includes accident reconstruction, expert
            economic projections, and testimony that explains both financial
            loss and family impact. Court proceedings allow a judge or jury to
            evaluate credibility and weigh evidence directly, rather than
            through insurer assessments.
          </p>

          <p>
            Going to court is not about escalation for its own sake. It is about
            ensuring accountability when negotiation fails. The willingness and
            ability to litigate signals seriousness and often influences
            settlement discussions along the way. For families, knowing that
            their attorney is prepared to pursue justice fully can provide
            reassurance during an otherwise uncertain period.
          </p>

          <p>
            In Florida courts, wrongful death litigation follows strict
            procedural rules and timelines. A fatal car accident attorney
            manages these requirements while maintaining focus on the broader
            goal: securing compensation that reflects the magnitude of the loss
            and supports surviving family members as they rebuild their lives.
          </p>

        </div>
          {/* CTA Section */}
                  <div className="mt-6 bg-[#1E2538] rounded-2xl p-8 text-center text-white">
                    
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