import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function VehicleAccidentGuidanceSection() {
  return (
    <section className="px-4 md:px-8 pt-8">
      
      <div className="">
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-black mb-8">
          GUIDANCE FROM VEHICLE ACCIDENT
          LAWYERS AFTER SERIOUS INJURIES
        </h2>

        {/* Content */}
        <div className="text-lg leading-[1.9] text-slate-600  space-y-6">
          
          <p>
            Serious injuries change the rhythm of daily life. Pain, limited
            mobility, and uncertainty about recovery affect work, relationships,
            and long-term plans. Vehicle accident lawyers provide guidance that
            extends beyond legal filings, helping injured people navigate a
            system where medical, financial, and legal decisions overlap. In
            Florida, where injury claims often involve layered insurance and
            complex liability issues, that guidance becomes especially valuable
            after significant harm.
          </p>

          <p>
            Vehicle accident lawyers approach serious injury cases with a long
            view. Early medical outcomes rarely tell the full story. Treatment
            regimens may change, symptoms may evolve, and complications may
            develop. Legal strategy must remain flexible enough to reflect these
            changes while still moving the case forward. This requires close
            attention to medical progress and ongoing communication with
            providers.
          </p>

          <p>
            Guidance also involves coordination. Serious injuries often require
            care from multiple specialists, along with physical therapy,
            diagnostic imaging, and sometimes psychological support. Vehicle
            accident lawyers help organize records from these providers into a
            coherent narrative that shows how injuries affect the body and the
            person’s ability to function. That narrative supports claims for
            comprehensive damages rather than fragmented reimbursement.
          </p>

          <p>
            Financial stress is another reality. Missed work, reduced hours, or
            permanent work limitations can destabilize households. Lawyers
            assess how injuries affect employability and earning potential, and
            they incorporate that impact into the claim. This approach ensures
            that compensation reflects lost opportunity, not just lost paychecks.
          </p>

          <p>
            Throughout recovery, legal guidance provides reassurance. Injured
            individuals can concentrate on their recovery without having to
            worry about paperwork, deadlines, or insurer demands all the time
            when they know that their case is being handled.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-black">
          How Fault Impacts Your Ability to Recover Damages
        </h3>

        <div className="text-lg leading-[1.9] text-slate-600 space-y-6">

          <p>
            Fault is a central issue in vehicle accident claims, particularly
            in Florida’s comparative fault system. Even when another driver is
            clearly negligent, insurers may argue that the injured person
            contributed to the crash. Vehicle accident lawyers address this by
            carefully analyzing evidence and presenting a clear account of how
            the collision occurred.
          </p>

          <p>
            Understanding fault also helps manage expectations. When fault is
            shared, recovery may be reduced proportionally. Lawyers explain
            these dynamics early, so clients are not surprised later in the
            process. This transparency supports informed decision-making and
            realistic settlement discussions.
          </p>

          <p>
            In serious injury cases, fault disputes can become technical.
            Accident reconstruction, vehicle data, and expert testimony may be
            required to establish responsibility accurately. Vehicle accident
            lawyers work with qualified professionals to clarify these issues
            and to counter attempts to shift blame unfairly.
          </p>

          <p>
            The way fault is presented can influence every stage of a case,
            from settlement offers to trial outcomes. Clear, evidence-based
            arguments reduce uncertainty and strengthen credibility. By
            addressing fault methodically and honestly, lawyers protect the
            injured person’s ability to recover damages that align with the
            true impact of the injuries.
          </p>

          <p>
            Guidance after serious injuries is about building a claim that
            reflects reality, supports long-term recovery, and respects the
            legal standards that govern compensation in Florida.
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