import Link from "next/link";
import type { ReactNode } from "react";

const featuredImage =
  "/assets/static-blogs/can-a-misdiagnosis-lead-to-a-medical-malpractice-claim-in-florida.webp";

export const canAMisdiagnosisLeadToAMedicalMalpracticeClaimInFlorida = {
  slug: "can-a-misdiagnosis-lead-to-a-medical-malpractice-claim-in-florida",
  title: "Can a Misdiagnosis Lead to a Medical Malpractice Claim in Florida?",
  category: "Medical Malpractice",
  published: true,
  createdAt: "2026-10-07T12:00:00.000Z",
  updatedAt: "2026-10-07T12:00:00.000Z",
  shortDescription:
    "Did a Florida doctor misdiagnose your condition? Learn your legal rights, deadlines, and standard of care requirements.",
  metaTitle: "Florida Misdiagnosis Laws: Can You File a Lawsuit?",
  metaDescription:
    "Did a Florida doctor misdiagnose your condition? Learn your legal rights, deadlines, and standard of care requirements.",
  canonicalUrl:
    "https://www.carterinjurylaw.com/blog/can-a-misdiagnosis-lead-to-a-medical-malpractice-claim-in-florida",
  featuredImage: {
    image: {
      url: featuredImage,
    },
    altText:
      "Doctor reviewing brain scans with a distressed patient, alongside a misdiagnosis report, gavel, and Florida skyline.",
    title: "Can a Misdiagnosis Lead to a Medical Malpractice Claim in Florida",
    description:
      "Learn whether a misdiagnosis can lead to a medical malpractice claim in Florida with Big Al's Law. Understand how to compare medical care, prove negligence, understand your rights, and get experienced legal support.",
    caption:
      "Find out how a medical misdiagnosis can form the basis of a malpractice claim and protect your legal rights in Florida.",
  },
  body: "<p>A misdiagnosis may give rise to a medical malpractice claim in the state of Florida when the patient is wrongly diagnosed by the doctor and the doctor acts unreasonably below the standard level of medical care. They can cause serious damage to the patient including delayed treatment, aggravation of the condition, and even death. Not every wrong diagnosis qualifies. The error has to be one a competent doctor would’ve caught.</p>",
};

const keyTakeaways = [
  "Florida law treats a misdiagnosis as malpractice only if it breaks the standard of care and causes provable harm.",
  "You generally have two years from discovering the error, and never more than four years from the incident, under Fla. Stat. section 95.11(5)(c).",
  "Florida requires a presuit investigation before any lawsuit, including a written expert opinion under Chapter 766.",
  "There is no cap on damages. The Florida Supreme Court struck down noneconomic damage limits in Kalitan (2017), and that still holds in 2026.",
  "Cancer, heart attack, stroke, sepsis, and appendicitis are on the list as in these conditions speed decides outcomes.",
  "A same-specialty medical expert needs to review your records early. Waiting costs you evidence and time.",
];

const misdiagnosisPatterns = [
  {
    title: "Missed diagnosis",
    desc: "A chest x-ray gets read as normal when a tumor was visible.",
  },
  {
    title: "Delayed diagnosis",
    desc: "The correct call eventually happens, but months late, letting a treatable condition progress.",
  },
  {
    title: "Wrong diagnosis",
    desc: "The doctor treats the wrong problem, sometimes causing harm through unnecessary treatment.",
  },
];

const fourElements = [
  {
    title: "Duty of care",
    desc: "A doctor-patient relationship existed. Rarely contested.",
  },
  {
    title: "Breach of the standard",
    desc: "The diagnostic process fell short of what a similarly trained physician would have done.",
  },
  {
    title: "Causation",
    desc: "The misdiagnosis, not the underlying illness, caused the harm.",
  },
  {
    title: "Damages",
    desc: "Real, measurable loss. Medical bills, pain and suffering, lost income or wrongful death.",
  },
];

const specialtyRows = [
  {
    specialty: "Orthopedic surgeon reviewing an orthopedic surgeon's care",
    status: "Yes",
    accepted: true,
  },
  {
    specialty: "Plastic surgeon reviewing an orthopedic surgeon's care",
    status: "No, different specialty",
    accepted: false,
  },
  {
    specialty: "Cardiologist reviewing a pulmonologist's care",
    status: "No, even with shared internal medicine roots",
    accepted: false,
  },
  {
    specialty: "Emergency physician reviewing an ER doctor's triage decision",
    status: "Yes",
    accepted: true,
  },
];

const deadlineRules = [
  {
    title: "Two years from the incident or discovery",
    desc: "Generally, you have two years from the medical incident to file a claim. If you did not discover the injury right away, the two-year period may instead run from when you discovered, or reasonably should have discovered, the injury with due diligence. Florida law addresses this under § 95.11(4)(c), Florida Statutes.",
    link: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html",
    linkText: "§ 95.11(4)(c), Florida Statutes",
  },
  {
    title: "A four-year outside limit",
    desc: "The statute of repose generally prevents a medical malpractice action from being filed more than four years after the incident, even if the injury was discovered later. There is an important exception for claims brought on behalf of a minor.",
  },
  {
    title: "Fraud or concealment can change the deadline",
    desc: "If fraud, concealment, or intentional misrepresentation prevented you from discovering the injury, the law can extend the filing period.",
  },
  {
    title: "Minors get more time",
    desc: "Generally until their eighth birthday.",
  },
];

const presuitSteps = [
  {
    num: "1",
    title: "Records Review",
    desc: "Your attorney gets the file reviewed by a same-specialty physician.",
  },
  {
    num: "2",
    title: "Expert Opinion",
    desc: "That expert signs an affidavit supporting the claim.",
  },
  {
    num: "3",
    title: "Notice of Intent",
    desc: "Once the provider receives the notice, the 90-day presuit investigation period under Section 766.106, Florida Statutes, begins.",
  },
  {
    num: "4",
    title: "90 Day Response",
    desc: "The insurer denies, settles, or stays silent. Silence counts as denial.",
  },
  {
    num: "5",
    title: "Lawsuit Filed",
    desc: "With no resolution, the claim moves into court.",
  },
];

const commonConditions = [
  {
    condition: "Cancer",
    detail: "Especially breast, colorectal, and lung, where a scan or biopsy gets misread.",
  },
  {
    condition: "Heart attack",
    detail: "Misdiagnosed as anxiety or indigestion, particularly in women.",
  },
  {
    condition: "Stroke",
    detail: "Where narrow treatment windows make delay especially damaging.",
  },
  {
    condition: "Sepsis",
    detail: "Which can progress to organ failure within hours.",
  },
  {
    condition: "Appendicitis",
    detail: "Often mistaken for stomach flu.",
  },
];

const faqs = [
  {
    q: "Can I sue if the misdiagnosis happened at a hospital instead of a private practice?",
    a: "Yes. Hospitals and government run facilities can involve sovereign immunity limits under Fla. Stat. section 768.28. An attorney needs to identify who employed the provider.",
    statuteLink: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.28.html",
    statuteText: "Fla. Stat. section 768.28",
  },
  {
    q: "What if I signed paperwork agreeing to arbitration before treatment?",
    a: "Some providers include arbitration clauses in intake paperwork. This can shift where your claim gets resolved, but it rarely erases your right to compensation.",
  },
  {
    q: "Do I need to pay anything upfront to have my case reviewed?",
    a: "No. Reputable Florida malpractice firms, Carter Injury Law included, work on contingency and get paid only if your case wins.",
  },
];

const SectionTitle = ({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) => (
  <h2 className="mt-10 flex items-start gap-3 text-2xl font-bold text-[#1B2639] md:text-3xl">
    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#EC1D21] text-base text-white">
      {number}
    </span>
    <span className="self-center">{children}</span>
  </h2>
);

const ExternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
    className={className || "font-semibold text-[#EC1D21] hover:underline"}
  >
    {children}
  </a>
);

export default function CanAMisdiagnosisLeadToAMedicalMalpracticeClaimInFlorida() {
  return (
    <article className="space-y-7">
      {/* Intro paragraph with doc-specified alignment */}
      <p className="text-justify leading-relaxed text-gray-700 md:text-left text-lg">
        A misdiagnosis may give rise to a medical malpractice claim in the state
        of Florida when the patient is wrongly diagnosed by the doctor and the
        doctor acts unreasonably below the standard level of medical care. They
        can cause serious damage to the patient including delayed treatment,
        aggravation of the condition, and even death. Not every wrong diagnosis
        qualifies. The error has to be one a competent doctor would’ve caught.
      </p>

      {/* Key Takeaways Card - Gold branding matching Google Doc */}
      <div className="overflow-hidden rounded-lg border-l-4 border-[#B8860B] bg-[#FBF3E1] shadow-sm">
        <div className="!p-6 md:!p-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#B8860B] flex items-center gap-2">
            <svg
              className="h-5 w-5 text-[#B8860B]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Key Takeaways
          </h2>
          <ul className="mt-4 grid gap-3 !pl-0 md:grid-cols-2">
            {keyTakeaways.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 !text-base text-gray-800 leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#B8860B]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 1: What Counts as a Misdiagnosis */}
      <SectionTitle number="1">
        What Counts as a Misdiagnosis Under Florida Law
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        Plenty of good doctors have missed something on a first look. They can
        misread the symptoms. Only a wrong guess is not enough to be counted as
        malpractice. You can take action against a{" "}
        <Link
          href="/areas-of-practice/personal-injury"
          className="font-semibold text-[#EC1D21] hover:underline"
        >
          misdiagnosis
        </Link>{" "}
        if it fails to meet a certain legal standard. Florida courts ask two
        things. Does the doctor fall below the standard of care that a reasonable
        practitioner should have followed? Secondly, was there harm that
        wouldn&apos;t have occurred if the standard had been met? And, if the answer
        is yes, then it counts as a misdiagnosis.
      </p>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left font-medium">
        Three patterns show up again and again in Florida misdiagnosis claims:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {misdiagnosisPatterns.map((pattern) => (
          <div
            key={pattern.title}
            className="rounded-lg border border-gray-200 bg-white !p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-bold text-[#1B2639] flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EC1D21]" />
              {pattern.title}
            </h3>
            <p className="!mb-0 mt-2 text-base leading-7 text-gray-700">
              {pattern.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        A missed diagnosis corrected the next week with no lasting harm usually
        will not support a claim.
      </p>

      {/* Diagnostic Error Box - Deep Navy and Gold */}
      <div className="my-8 rounded-lg bg-[#1B2A4A] !p-6 md:!p-8 !text-white shadow-md">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
          <h3
            className="text-base font-bold uppercase tracking-wider !text-[#F59E0B] !my-0"
            style={{ color: "#F59E0B" }}
          >
            Diagnostic Error
          </h3>
        </div>
        <p
          className="mt-4 text-base leading-relaxed !text-white"
          style={{ color: "#FFFFFF" }}
        >
          An estimated 12 million adults are affected by diagnostic errors in
          U.S. outpatient care each year, per research in{" "}
          <ExternalLink
            href="https://qualitysafety.bmj.com/"
            className="font-semibold !text-[#FCA5A5] hover:!text-white underline"
          >
            BMJ Quality &amp; Safety
          </ExternalLink>
          . Roughly half carry potential for serious harm.
        </p>
        <p
          className="mt-3 text-base leading-relaxed !text-white"
          style={{ color: "#FFFFFF" }}
        >
          <ExternalLink
            href="https://www.hopkinsmedicine.org/"
            className="font-semibold !text-[#FCA5A5] hover:!text-white underline"
          >
            Johns Hopkins Medicine
          </ExternalLink>{" "}
          researchers found diagnostic failures account for the largest share of
          paid malpractice claims nationally, more than surgical errors or
          medication mistakes.
        </p>
      </div>

      {/* Section 2: What You Have to Prove */}
      <SectionTitle number="2">
        What You Have to Prove in a Florida Misdiagnosis Case
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        Florida requires four elements in any medical malpractice claim. Miss
        one and the case falls apart.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {fourElements.map((elem, idx) => (
          <div
            key={elem.title}
            className="rounded-lg border border-gray-200 bg-white !p-5 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2639] text-xs font-bold text-white">
                {idx + 1}
              </span>
              <h3 className="text-base font-bold text-[#1B2639] !my-0">
                {elem.title}
              </h3>
            </div>
            <p className="!mb-0 mt-2 text-base leading-7 text-gray-700">
              {elem.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Section 3: The Same Specialty Rule */}
      <SectionTitle number="3">
        The Same Specialty Rule Is Important
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        Under{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2023/766.102">
          section 766.102
        </ExternalLink>
        , your presuit expert has to practice in the same specialty as the
        doctor you are accusing. Courts dismiss cases over this exact issue.
      </p>

      {/* Specialty Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-6 shadow-sm">
        <table className="min-w-[620px] w-full border-collapse bg-white text-left text-sm md:text-base">
          <thead className="bg-[#1B2A4A] text-white">
            <tr>
              <th
                className="!px-5 !py-3.5 font-bold !text-white"
                style={{ color: "#FFFFFF" }}
              >
                Expert&apos;s Specialty
              </th>
              <th
                className="!px-5 !py-3.5 font-bold !text-white"
                style={{ color: "#FFFFFF" }}
              >
                Accepted by Florida Courts?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {specialtyRows.map((row) => (
              <tr
                key={row.specialty}
                className={row.accepted ? "bg-[#EAF5EF]/40" : "bg-[#FBECEC]/40"}
              >
                <td className="!px-5 !py-3.5 font-medium text-gray-800">
                  {row.specialty}
                </td>
                <td className="!px-5 !py-3.5 font-bold">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
                      row.accepted
                        ? "bg-[#EAF5EF] text-[#2E6B4F]"
                        : "bg-[#FBECEC] text-[#8B2E2E]"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs md:text-sm italic text-gray-600 mt-2">
        Source case law:{" "}
        <ExternalLink href="https://casetext.com/case/davis-v-karr-3">
          Davis v. Karr, 264 So. 3d 279 (Fla. 5th DCA 2019)
        </ExternalLink>
        , dismissed on this exact ground.
      </p>

      {/* Section 4: How Long Do You Have to File */}
      <SectionTitle number="4">
        How Long Do You Have to File in Florida?
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        A lot of valid claims die quietly, simply because nobody acted in time.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm mt-4">
        <ul className="divide-y divide-gray-200 !pl-0 !my-0">
          {deadlineRules.map((rule) => (
            <li
              key={rule.title}
              className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
              <div>
                <strong className="text-[#1B2639]">{rule.title}. </strong>
                <span>
                  {rule.link ? (
                    <>
                      Generally, you have two years from the medical incident to
                      file a claim. If you did not discover the injury right
                      away, the two-year period may instead run from when you
                      discovered, or reasonably should have discovered, the
                      injury with due diligence. Florida law addresses this under{" "}
                      <ExternalLink href={rule.link}>
                        {rule.linkText}
                      </ExternalLink>
                      .
                    </>
                  ) : (
                    rule.desc
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left mt-4">
        Misdiagnosis cases are built on delayed discovery. You might not learn
        your original doctor was wrong until a second doctor, sometimes years
        later, tells you so. That second opinion date usually starts your clock,
        not the original visit. Do not assume that without a lawyer confirming
        it.
      </p>

      {/* Comparison Timeline Card */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-[#1B2639] mb-4">
          A Typical Misdiagnosis Timeline
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 bg-[#FBECEC]/60 !p-6">
              <div className="rounded-md bg-[#8B2E2E] !py-2 !px-4 text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider !text-white !my-0">
                  BEFORE THE CORRECT DIAGNOSIS
                </h4>
              </div>
              <div className="mt-4 space-y-3 text-base text-gray-800">
                <p className="font-semibold text-[#8B2E2E]">
                  Chest pain and fatigue. ER discharges with a diagnosis of
                  anxiety.
                </p>
                <p className="text-gray-700">
                  No cardiac workup ordered. Symptoms worsen over six weeks.
                </p>
              </div>
            </div>
            <div className="bg-[#EAF5EF]/60 !p-6">
              <div className="rounded-md bg-[#2E6B4F] !py-2 !px-4 text-center">
                <h4 className="text-sm font-bold uppercase tracking-wider !text-white !my-0">
                  AFTER THE CORRECT DIAGNOSIS
                </h4>
              </div>
              <div className="mt-4 space-y-3 text-base text-gray-800">
                <p className="font-semibold text-[#2E6B4F]">
                  Second hospital orders an EKG immediately. Coronary blockage
                  confirmed, six weeks late.
                </p>
                <p className="text-gray-700">
                  Patient now has permanent heart damage earlier treatment
                  likely would have prevented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: The Presuit Process */}
      <SectionTitle number="5">
        The Presuit Process Florida Requires Before You Can Even File Suit
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        Florida does not let you walk into court the day after a bad diagnosis.{" "}
        <ExternalLink href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0766/0766.html">
          Chapter 766
        </ExternalLink>{" "}
        requires a presuit investigation first. Skip a step and your case gets
        dismissed.
      </p>

      <div className="space-y-3 mt-4">
        {presuitSteps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col sm:flex-row items-start sm:items-center rounded-lg border border-gray-200 bg-[#EEF1F7]/70 !p-4 shadow-sm gap-4 transition hover:bg-[#EEF1F7]"
          >
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1B2A4A] text-xl font-bold !text-[#F59E0B] shadow-inner"
              style={{ color: "#F59E0B" }}
            >
              {step.num}
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1B2A4A] !my-0">
                {step.title}
              </h3>
              <p className="!mb-0 mt-1 text-sm md:text-base text-gray-700 leading-relaxed">
                {step.num === "3" ? (
                  <>
                    Once the provider receives the notice, the 90-day presuit
                    investigation period under{" "}
                    <ExternalLink href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0766/Sections/0766.106.html">
                      Section 766.106, Florida Statutes
                    </ExternalLink>
                    , begins.
                  </>
                ) : (
                  step.desc
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 6: What Compensation Looks Like */}
      <SectionTitle number="6">
        What Compensation Looks Like in Florida Misdiagnosis Cases
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        Florida used to cap noneconomic damages at $500,000 or $1 million
        depending on injury. That is gone. The Florida Supreme Court struck it
        down as unconstitutional in{" "}
        <ExternalLink href="https://casetext.com/case/n-broward-hosp-dist-v-kalitan">
          North Broward Hospital District v. Kalitan
        </ExternalLink>{" "}
        back in 2017, and it stayed struck down. No dollar ceiling applies today.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm mt-4">
        <ul className="divide-y divide-gray-200 !pl-0 !my-0">
          <li className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
            <span>
              Past and future medical expenses tied to correcting the
              misdiagnosis
            </span>
          </li>
          <li className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
            <span>Lost wages and diminished future earning capacity</span>
          </li>
          <li className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
            <span>Pain and suffering, with no statutory cap since 2017</span>
          </li>
          <li className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
            <span>
              <Link
                href="/wrongful-death-Lawyer-in-tampa"
                className="font-semibold text-[#EC1D21] hover:underline"
              >
                Wrongful death
              </Link>{" "}
              damages for surviving family
            </span>
          </li>
        </ul>
      </div>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left mt-4">
        A missed skin cancer caught one stage later carries a very different
        value than a missed sepsis diagnosis that led to organ failure. Numbers
        depend on the medical evidence, not a formula.
      </p>

      {/* Attorney Quote Card - Matching Doc Colors */}
      <blockquote className="my-8 border-l-4 border-[#B8860B] bg-[#F5F0E6] !p-6 md:!p-8 shadow-sm rounded-r-lg">
        <p className="text-lg md:text-xl italic text-gray-800 leading-relaxed !mb-4">
          &ldquo;The hardest part is proving the delay actually changed the
          outcome. That&apos;s why we get records reviewed fast, before memories
          fade. Waiting even a few extra months can weaken a claim that started
          out strong.&rdquo;
        </p>
        <cite className="block text-sm font-bold text-[#1B2A4A] not-italic">
          &mdash; David Carter, Founding Attorney, Carter Injury Law, Tampa
        </cite>
      </blockquote>

      {/* Section 7: Which Conditions Get Misdiagnosed Most Often */}
      <SectionTitle number="7">
        Which Conditions Get Misdiagnosed Most Often in Florida
      </SectionTitle>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left">
        Some conditions show up in claims far more than others, mostly because
        early symptoms mimic something harmless.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm mt-4">
        <ul className="divide-y divide-gray-200 !pl-0 !my-0">
          {commonConditions.map((item) => (
            <li
              key={item.condition}
              className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
              <div>
                <strong className="text-[#1B2639]">{item.condition}: </strong>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-justify leading-relaxed text-gray-700 md:text-left mt-4">
        Notice the pattern. Every one has a narrow treatment window. That is not
        a coincidence.
      </p>

      {/* Section 8: FAQs */}
      <SectionTitle number="8">Frequently Asked Questions</SectionTitle>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="rounded-md border border-gray-200 bg-white !p-5 shadow-sm"
          >
            <h3 className="!mt-0 text-lg font-bold text-[#1B2639]">{faq.q}</h3>
            <p className="!mb-0 text-base text-gray-700 leading-7 mt-2">
              {faq.statuteLink ? (
                <>
                  Yes. Hospitals and government run facilities can involve
                  sovereign immunity limits under{" "}
                  <ExternalLink href={faq.statuteLink}>
                    {faq.statuteText}
                  </ExternalLink>
                  . An attorney needs to identify who employed the provider.
                </>
              ) : (
                faq.a
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Box - Deep Navy & Gold Accents */}
      <div className="my-10 rounded-xl bg-[#1B2A4A] !p-8 text-center !text-white shadow-lg">
        <h2
          className="!mt-0 text-2xl font-bold !text-white md:text-3xl"
          style={{ color: "#FFFFFF" }}
        >
          Don&apos;t Let a Missed Deadline Take Away Your Case Too.
        </h2>
        <p
          className="mx-auto mt-3 max-w-2xl text-base !text-gray-200 leading-relaxed"
          style={{ color: "#E5E7EB" }}
        >
          Carter Injury Law has represented Tampa Bay patients through medical
          malpractice claims for years, and we handle misdiagnosis cases on
          contingency.
        </p>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-4 text-lg font-bold !text-[#F59E0B]">
          <a
            href="tel:8139220228"
            className="hover:underline flex items-center gap-2 !text-[#F59E0B]"
            style={{ color: "#F59E0B" }}
          >
            <svg
              className="w-5 h-5 !text-[#F59E0B]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            (813) 922-0228
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="tel:7279551922"
            className="hover:underline flex items-center gap-2 !text-[#F59E0B]"
            style={{ color: "#F59E0B" }}
          >
            <svg
              className="w-5 h-5 !text-[#F59E0B]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            (727) 955-1922
          </a>
        </div>
        <p
          className="mt-3 text-sm !text-gray-300"
          style={{ color: "#D1D5DB" }}
        >
          3114 N. Boulevard, Tampa, FL 33603 &nbsp;|&nbsp; carterinjurylaw.com
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#EC1D21] !px-8 !py-3.5 text-base font-bold !text-white shadow-md hover:bg-[#B91C1C] !no-underline transition duration-200"
          >
            Get Your Free Case Review
          </Link>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <p className="rounded-md bg-gray-50 !p-4 text-sm text-gray-600 mt-6">
        Disclaimer: This article is for general information only and is not
        legal advice. Laws change, and every case depends on its own facts.
        Speak with Carter Injury Law about your specific situation.
      </p>
    </article>
  );
}
