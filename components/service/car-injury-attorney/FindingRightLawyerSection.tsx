import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function FindingRightLawyerSection() {
  return (
    <section className="px-4 md:px-8">
      
      <div className="">
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-black mb-8">
          FINDING THE RIGHT ACCIDENT AND 
          INJURY LAWYER NEAR ME AFTER A 
          COLLISION
        </h2>

        {/* Paragraph Content */}
        <div className="text-lg leading-[1.9] text-slate-600 space-y-6">
          
          <p>
            After a collision, many people search for an accident and injury
            lawyer near me with urgency and uncertainty. Pain, vehicle damage,
            missed work, and insurance calls all arrive at once, and the choice
            of legal representation can shape everything that follows. In Florida,
            where traffic density and insurance disputes are common, finding the
            right lawyer is not about proximity alone. It is about experience,
            credibility, and the ability to manage a case from the first medical
            visit through final resolution.
          </p>

          <p>
            A serious crash creates a legal problem and a life problem at the
            same time. The right accident and injury lawyer understands both.
            Legal knowledge matters, but so does judgment. A strong lawyer knows
            when a case needs aggressive early action and when patience protects
            value. They know how local insurers operate, how courts tend to view
            certain injuries, and how to build a case that feels credible rather
            than inflated. That balance is what separates meaningful
            representation from simple claim processing.
          </p>

          <p>
            Carter Injury Law approaches every case with the understanding that
            clients are often meeting a lawyer on one of the worst days of their
            lives. Clear communication becomes part of the service. We explain
            how Florida injury law works, what timelines look like, and what
            decisions may arise along the way. Clients should never feel like
            they are guessing what comes next or why a particular step matters.
          </p>

          <p>
            An accident and injury lawyer near you should also have the
            resources to handle complex cases. Serious injuries require
            coordination with medical providers, experts, and sometimes accident
            reconstruction professionals. A law firm must be prepared to invest
            time and resources into proving liability and damages. This
            preparation strengthens settlement negotiations and ensures that, if
            litigation becomes necessary, the case is ready rather than rushed.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-black">
          Next Steps Toward Protecting Your Future
        </h3>

        {/* More Content */}
        <div className="text-lg leading-[1.9] text-slate-600 space-y-6">

          <p>
            The first steps after a collision often feel overwhelming, yet they
            are critical. Seeking medical care is always the priority, even if
            symptoms seem minor at first. Many serious injuries, including soft
            tissue damage and traumatic brain injuries, emerge over time. An
            accident and injury lawyer will emphasize consistent treatment
            because medical continuity protects both health and legal claims.
          </p>

          <p>
            Documentation is the next layer of protection. Photos of the scene,
            vehicle damage, and visible injuries help preserve facts that may
            later be disputed. Keeping records of medical visits, prescriptions,
            and missed work creates a clear paper trail. A lawyer can guide
            clients on what to preserve and how to avoid actions that could
            undermine a claim, such as discussing the accident publicly or
            accepting early insurance offers.
          </p>

          <p>
            Contacting an attorney early allows for immediate intervention.
            Insurers often move quickly to secure statements and settlements.
            An accident and injury lawyer steps in to manage communication,
            ensuring that nothing is said or signed without full understanding of
            the consequences. This early involvement can prevent costly mistakes
            and set a strong foundation for recovery.
          </p>

          <p>
            Protecting your future also means understanding the scope of
            potential damages. Beyond medical bills, a lawyer evaluates how
            injuries affect work, family responsibilities, and quality of life.
            This broader view shapes legal strategy and ensures that claims
            reflect real losses, not just visible expenses. The goal is not speed,
            but completeness.
          </p>

          <p>
            Choosing the right accident and injury lawyer near you is ultimately
            about alignment. You want a legal partner who listens carefully,
            explains clearly, and prepares thoroughly. At Carter Injury Law, we
            see representation as a long-term commitment during a vulnerable
            time. Each step is designed to reduce stress, protect rights, and
            build a case that supports recovery and stability.
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