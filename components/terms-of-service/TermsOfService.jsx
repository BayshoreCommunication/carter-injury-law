import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <>
      <SectionLayout bg="mt-10 lg:mt-22">
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="my-2">
            <h1
              className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20 mb-10  text-center  uppercase`}
            >
              Terms of service
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-stone-950 text-center md:text-left">
              These Terms of Service govern your use of the website located at
              <Link href="  https://www.carterinjurylaw.com">
                {" "}
                carterinjurylaw
              </Link>{" "}
              and any related services provided by Carter Injury Law, PA. By
              accessing https://www.carterinjurylaw.com, you agree to abide by
              these Terms of Service and to comply with all applicable laws and
              regulations. If you do not agree with these Terms of Service, you
              are prohibited from using or accessing this website or using any
              other services provided by Carter Injury Law, PA. We, Carter
              Injury Law, PA, reserve the right to review and amend any of these
              Terms of Service at our sole discretion. Upon doing so, we will
              update this page. Any changes to these Terms of Service will take
              effect immediately from the date of publication. These Terms of
              Service were last updated on 31 October 2022.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Limitations of Use: By using this website, you warrant on behalf
              of yourself, your users, and other parties you represent that you
              will not: modify, copy, prepare derivative works of, decompile, or
              reverse engineer any materials and software contained on this
              website; remove any copyright or other proprietary notations from
              any materials and software on this website; transfer the materials
              to another person or “mirror” the materials on any other server;
              knowingly or negligently use this website or any of its associated
              services in a way that abuses or disrupts our networks or any
              other service Carter Injury Law, PA provides; use this website or
              its associated services to transmit or publish any harassing,
              indecent, obscene, fraudulent, or unlawful material; use this
              website or its associated services in violation of any applicable
              laws or regulations; use this website in conjunction with sending
              unauthorized advertising or spam; harvest, collect, or gather user
              data without the user’s consent; or use this website or its
              associated services in such a way that may infringe the privacy,
              intellectual property rights, or other rights of third parties.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Intellectual Property: The intellectual property in the materials
              contained in this website are owned by or licensed to Carter
              Injury Law, PA and are protected by applicable copyright and
              trademark law. We grant our users permission to download one copy
              of the materials for personal, non-commercial transitory use. This
              constitutes the grant of a license, not a transfer of title. This
              license shall automatically terminate if you violate any of these
              restrictions or the Terms of Service, and may be terminated by
              Carter Injury Law, PA at any time.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Liability: Our website and the materials on our website are
              provided on an 'as is' basis. To the extent permitted by law,
              Carter Injury Law, PA makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property, or other violation of
              rights.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              In no event shall Carter Injury Law, PA or its suppliers be liable
              for any consequential loss suffered or incurred by you or any
              third party arising from the use or inability to use this website
              or the materials on this website, even if Carter Injury Law, PA or
              an authorized representative has been notified, orally or in
              writing, of the possibility of such damage. In the context of this
              agreement, “consequential loss” includes any consequential loss,
              indirect loss, real or anticipated loss of profit, loss of
              benefit, loss of revenue, loss of business, loss of goodwill, loss
              of opportunity, loss of savings, loss of reputation, loss of use
              and/or loss or corruption of data, whether under statute,
              contract, equity, tort (including negligence), indemnity, or
              otherwise. Because some jurisdictions do not allow limitations on
              implied warranties, or limitations of liability for consequential
              or incidental damages, these limitations may not apply to you.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Accuracy of Materials: The materials appearing on our website are
              not comprehensive and are for general information purposes only.
              Carter Injury Law, PA does not warrant or make any representations
              concerning the accuracy, likely results, or reliability of the use
              of the materials on this website, or otherwise relating to such
              materials or on any resources linked to this website.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Links: Carter Injury Law, PA has not reviewed all of the sites
              linked to its website and is not responsible for the contents of
              any such linked site. The inclusion of any link does not imply
              endorsement, approval, or control by Carter Injury Law, PA of the
              site. Use of any such linked site is at your own risk and we
              strongly advise you make your own investigations with respect to
              the suitability of those sites.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Right to Terminate: We may suspend or terminate your right to use
              our website and terminate these Terms of Service immediately upon
              written notice to you for any breach of these Terms of Service.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Severance: Any term of these Terms of Service which is wholly or
              partially void or unenforceable is severed to the extent that it
              is void or unenforceable. The validity of the remainder of these
              Terms of Service is not affected.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left ">
              Governing Law: These Terms of Service are governed by and
              construed in accordance with the laws of Florida. You irrevocably
              submit to the exclusive jurisdiction of the courts in that State
              or location.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsOfService;
