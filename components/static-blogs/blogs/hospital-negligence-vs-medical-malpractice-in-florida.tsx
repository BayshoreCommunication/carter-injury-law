import Link from "next/link";
import type { ReactNode } from "react";

const featuredImage =
  "/assets/static-blogs/hospital-negligence-vs-medical-malpractice-fl.webp";

const canonicalUrl =
  "https://www.carterinjurylaw.com/blog/hospital-negligence-vs-medical-malpractice-in-florida";

export const hospitalNegligenceVsMedicalMalpracticeInFlorida = {
  slug: "hospital-negligence-vs-medical-malpractice-in-florida",
  title:
    "Hospital Negligence vs Medical Malpractice in Florida: What Is the Difference?",
  category: "Medical Malpractice",
  published: true,
  createdAt: "2026-11-11T12:00:00.000Z",
  updatedAt: "2026-11-11T12:00:00.000Z",
  shortDescription:
    "Florida treats hospital negligence and medical malpractice differently. Know your deadlines, pre-suit rules and legal rights before you file in Tampa.",
  metaTitle: "Hospital Negligence vs. Medical Malpractice in Florida",
  metaDescription:
    "Florida treats hospital negligence and medical malpractice differently. Know your deadlines, pre-suit rules and legal rights before you file in Tampa.",
  canonicalUrl,
  featuredImage: {
    image: { url: featuredImage },
    altText:
      "Medical claim form, judge's gavel, and stethoscope comparing hospital negligence with doctor malpractice.",
    title: "Hospital Negligence vs Medical Malpractice in Florida",
    description:
      "Learn the critical differences between hospital negligence and medical malpractice claims under Florida law, including liability and legal requirements.",
    caption:
      "Understand the legal distinctions between hospital negligence and medical malpractice in Florida.",
  },
  body: "<p>Hospital negligence happens when the hospital fails to act such as with slippery floors or inadequate security. Medical malpractice is when a person is not provided with the required standard of treatment. These terms are used differently in the state of Florida, meaning that they are treated independently.</p>",
};

const keyTakeaways = [
  "Unsafe buildings and broken systems usually mean hospital negligence.",
  "Bad treatment usually means medical malpractice.",
  "The label sets your deadline, your paperwork and how fault is counted.",
  "Public hospitals follow their rules and a damages cap.",
  "You have a right to see a hospital's incident records.",
];

const claimComparisonCards = [
  {
    title: "Hospital negligence",
    items: [
      "Wet lobby floor",
      "Assault in a dark garage",
      "Understaffed unit",
      "Broken equipment left in service",
    ],
    cardClass: "bg-[#0B1F3A] text-white",
    titleClass: "!text-white text-lg",
    titleColor: "#FFFFFF",
    textColor: "#FFFFFF",
    bulletClass: "bg-[#C9A24B]",
  },
  {
    title: "Medical malpractice",
    items: [
      "Surgical error",
      "Wrong medication dose",
      "Missed heart attack in the ER",
      "No monitoring after surgery",
    ],
    cardClass: "bg-[#1F7A8C] text-white",
    titleClass: "!text-white text-lg",
    titleColor: "#FFFFFF",
    textColor: "#FFFFFF",
    bulletClass: "bg-[#C9A24B]",
  },
];

const reviewComparisonCards = [
  {
    title: "BEFORE",
    items: [
      'One vague claim against "the hospital"',
      "Deadlines guessed",
      "Records missing",
    ],
    cardClass: "bg-[#F6E3E1]",
    titleClass: "!text-[#A33B32] text-xs uppercase tracking-wider",
    titleColor: "#A33B32",
    textColor: "#222B38",
    bulletClass: "bg-[#7A7A7A]",
  },
  {
    title: "AFTER",
    items: [
      "Right defendants named",
      "Presuit notice sent",
      "Expert opinion secured",
      "Incident records requested",
    ],
    cardClass: "bg-[#E0F0EA]",
    titleClass: "!text-[#1B6B52] text-xs uppercase tracking-wider",
    titleColor: "#1B6B52",
    textColor: "#222B38",
    bulletClass: "bg-[#7A7A7A]",
  },
];

const deadlineRulesRows = [
  {
    issue: "Governing law",
    hospitalNegligence: "General negligence and premises law",
    medicalMalpractice: "Chapter 766 and section 95.11",
    tinted: false,
  },
  {
    issue: "Filing deadline",
    hospitalNegligence: "2 years from the incident",
    medicalMalpractice: "2 years from discovery",
    tinted: true,
  },
  {
    issue: "Outer cap",
    hospitalNegligence: "None",
    medicalMalpractice: "4 years, or 7 with fraud",
    tinted: false,
  },
  {
    issue: "Presuit step",
    hospitalNegligence: "None required",
    medicalMalpractice: "90-day notice before suit",
    tinted: true,
  },
  {
    issue: "Expert opinion",
    hospitalNegligence: "Usually not needed",
    medicalMalpractice: "Required before suit",
    tinted: false,
  },
  {
    issue: "Family sues",
    hospitalNegligence:
      "Over a hospital death and calls it ordinary negligence.",
    medicalMalpractice:
      "The hospital says no, it's malpractice & nobody sent a pre-suit notice.",
    tinted: true,
  },
];

const hospitalStats = [
  {
    value: "$4.4B",
    label: "yearly Medicare cost of hospital harm, per federal auditors",
    bgClass: "bg-[#0B1F3A]",
  },
  {
    value: "1%",
    label: "of harm events hospitals reported to state systems in one audit",
    bgClass: "bg-[#0B1F3A]",
  },
  {
    value: "81%",
    label: "of Florida voters backed Amendment 7 in 2004",
    bgClass: "bg-[#0B1F3A]",
  },
  {
    value: "$0",
    label: "upfront cost to start your claim",
    bgClass: "bg-[#1F7A8C]",
  },
];

const harmBySettingBars = [
  { line1: "Acute care", line2: "hospitals", pct: 27, color: "bg-[#0B1F3A]" },
  { line1: "Rehab", line2: "hospitals", pct: 29, color: "bg-[#0B1F3A]" },
  { line1: "Skilled nursing", line2: "facilities", pct: 33, color: "bg-[#0B1F3A]" },
  { line1: "Long-term care", line2: "hospitals", pct: 46, color: "bg-[#1F7A8C]" },
];

const faqs = [
  {
    q: "Can I sue the hospital and the doctor in the same case?",
    a: "Yes, when both played a part in your harm.",
  },
  {
    q: "Does Florida cap pain and suffering at a private hospital?",
    a: "No. The Florida Supreme Court struck those caps down in 2014 and 2017.",
  },
  {
    q: "What if the hospital ignores my presuit notice?",
    a: "After 90 days of silence, Florida treats it as a rejection. You can then file suit.",
  },
  {
    q: "How much does it cost to hire Carter Injury Law?",
    a: "Nothing upfront. The firm gets paid only if you win.",
  },
  {
    q: "Who files when a patient dies after a hospital error?",
    a: "A personal representative files for the estate and surviving family.",
  },
];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2
    className="!mt-10 !mb-4 flex items-start gap-3 border-b border-[#D9D2C0] !pb-2.5 text-2xl font-bold !text-[#0B1F3A] md:text-3xl"
    style={{ color: "#0B1F3A" }}
  >
    <span
      className="mt-1.5 inline-block h-6 w-1.5 flex-shrink-0 rounded-full bg-[#C9A24B]"
      aria-hidden="true"
    />
    <span>{children}</span>
  </h2>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
    className="font-bold !text-[#1F7A8C] underline hover:!text-[#0B1F3A] transition-colors"
    style={{ color: "#1F7A8C" }}
  >
    {children}
  </a>
);

const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link
    href={href}
    className="font-bold !text-[#1F7A8C] underline hover:!text-[#0B1F3A] transition-colors"
    style={{ color: "#1F7A8C" }}
  >
    {children}
  </Link>
);

type CardConfig = (typeof claimComparisonCards)[number];

/** Renders a two-column comparison panel with square bullet markers. */
const ComparisonCard = ({ card }: { card: CardConfig }) => (
  <div className={`rounded-lg !p-5 md:!p-6 shadow-sm ${card.cardClass}`}>
    <h4
      className={`!mt-0 !mb-3 font-bold ${card.titleClass}`}
      style={{ color: card.titleColor }}
    >
      {card.title}
    </h4>
    <ul className="!my-0 !pl-0 list-none space-y-2.5">
      {card.items.map((item) => (
        <li
          key={item}
          className="!my-0 flex items-start gap-3 text-justify text-sm leading-relaxed md:text-base"
          style={{ color: card.textColor }}
        >
          <span
            className={`mt-2 h-2 w-2 flex-shrink-0 ${card.bulletClass}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** Decision flowchart sorting hospital injuries into malpractice vs ordinary negligence. */
const ClaimSortFlowchart = () => (
  <figure
    className="!my-8 rounded-xl border border-[#D9D2C0] bg-[#FBF9F3] !p-5 md:!p-8 shadow-sm"
    aria-label="Flow chart sorting hospital injuries into malpractice or negligence"
  >
    <div className="flex flex-col items-center">
      <div className="rounded-xl bg-[#0B1F3A] !px-6 !py-3.5 text-center shadow-sm">
        <span className="text-base font-bold text-white md:text-lg">
          You were hurt at a hospital
        </span>
      </div>

      <svg className="h-8 w-8 text-[#5B6573]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <line x1="16" y1="2" x2="16" y2="24" stroke="currentColor" strokeWidth="2.5" />
        <polygon points="10,20 22,20 16,29" fill="currentColor" />
      </svg>

      <div className="relative flex w-full max-w-[320px] items-center justify-center">
        <svg viewBox="0 0 320 156" className="h-auto w-full drop-shadow-sm" aria-hidden="true">
          <polygon points="160,6 312,78 160,150 8,78" fill="#C9A24B" />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center !px-8 text-center">
          <span className="text-sm font-bold leading-snug text-[#0B1F3A] sm:text-base">
            Did medical care
            <br />
            cause the harm?
          </span>
        </div>
      </div>

      <svg
        className="hidden h-16 w-full max-w-[460px] text-[#5B6573] md:block"
        viewBox="0 0 460 72"
        fill="none"
        aria-hidden="true"
      >
        <line x1="150" y1="2" x2="96" y2="60" stroke="currentColor" strokeWidth="2.5" />
        <polygon points="89,55 103,63 90,69" fill="currentColor" />
        <text x="92" y="26" fill="#1F7A8C" fontSize="15" fontWeight="700">Yes</text>

        <line x1="310" y1="2" x2="364" y2="60" stroke="currentColor" strokeWidth="2.5" />
        <polygon points="357,63 371,55 370,69" fill="currentColor" />
        <text x="350" y="26" fill="#0B1F3A" fontSize="15" fontWeight="700">No</text>
      </svg>

      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 md:gap-8">
        {[
          { branch: "Yes ↓", branchColor: "text-[#1F7A8C]", bg: "bg-[#1F7A8C]", title: "Medical malpractice", sub: "Chapter 766 rules apply" },
          { branch: "No ↓", branchColor: "text-[#0B1F3A]", bg: "bg-[#0B1F3A]", title: "Hospital negligence", sub: "Ordinary negligence rules apply" },
        ].map((node) => (
          <div key={node.title} className="flex flex-col items-center">
            <span className={`mb-1.5 text-sm font-bold md:hidden ${node.branchColor}`}>
              {node.branch}
            </span>
            <div className={`w-full rounded-xl ${node.bg} !px-5 !py-4 text-center shadow-sm`}>
              <p className="!my-0 text-base font-bold !text-white md:text-lg" style={{ color: "#FFFFFF" }}>
                {node.title}
              </p>
              <p className="!mt-1 !mb-0 text-xs !text-white/95 md:text-sm" style={{ color: "#F8FAFC" }}>
                {node.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <figcaption className="mt-4 text-justify text-xs italic text-[#5B6573] md:text-sm">
      Use this path to sort your injury.
    </figcaption>
  </figure>
);

/** Vertical bar chart showing share of Medicare patients harmed by care setting. */
const HarmRateChart = () => (
  <figure
    className="!my-8 rounded-xl border border-[#D9D2C0] bg-[#FBF9F3] !p-5 md:!p-7 shadow-sm"
    aria-label="Vertical range graph of patient harm rates by care setting"
  >
    <p className="!mt-0 !mb-5 text-base font-bold !text-[#0B1F3A] md:text-lg" style={{ color: "#0B1F3A" }}>
      Share of Medicare patients harmed by care setting
    </p>
    <div className="!pt-4">
      <div className="flex items-stretch gap-2 sm:gap-4">
        <div className="relative h-64 w-8 flex-shrink-0 text-right text-xs font-medium text-[#5B6573] sm:h-72 select-none">
          {["50%", "40%", "30%", "20%", "10%", "0%"].map((label, idx) => (
            <span
              key={label}
              className="absolute right-0 -translate-y-1/2"
              style={{ top: `${idx * 20}%` }}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="relative h-64 flex-1 border-b border-[#5B6573] sm:h-72">
          {[0, 20, 40, 60, 80].map((topPct) => (
            <div
              key={topPct}
              className="pointer-events-none absolute left-0 right-0 border-t border-dashed border-[#D9D2C0]"
              style={{ top: `${topPct}%` }}
            />
          ))}
          <div
            className="pointer-events-none absolute left-0 right-0 bg-[#EFE7D2]/85"
            style={{ bottom: "54%", height: "38%" }}
          />
          <span className="pointer-events-none absolute left-2 top-1 text-[11px] italic text-[#5B6573] sm:text-xs">
            Range 27% to 46%
          </span>
          <div className="relative z-10 grid h-full grid-cols-4 items-end gap-2 px-1 sm:gap-6 sm:px-4">
            {harmBySettingBars.map((bar) => (
              <div key={bar.line1} className="flex h-full flex-col items-center justify-end">
                <span className="mb-1 text-xs font-bold !text-[#0B1F3A] sm:text-base" style={{ color: "#0B1F3A" }}>
                  {bar.pct}%
                </span>
                <div
                  className={`w-full max-w-[78px] rounded-t-sm ${bar.color}`}
                  style={{ height: `${bar.pct * 2}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2.5 flex items-start gap-2 sm:gap-4">
        <div className="w-8 flex-shrink-0" aria-hidden="true" />
        <div className="grid flex-1 grid-cols-4 gap-2 px-1 text-center text-[11px] font-medium leading-tight text-[#0B1F3A] sm:gap-6 sm:px-4 sm:text-xs md:text-sm">
          {harmBySettingBars.map((bar) => (
            <div key={bar.line1}>
              <span className="block">{bar.line1}</span>
              <span className="block">{bar.line2}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <figcaption className="mt-4 text-justify text-xs italic text-[#5B6573] md:text-sm">
      Source: HHS OIG audits of Medicare patients.
    </figcaption>
  </figure>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carterinjurylaw.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.carterinjurylaw.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: hospitalNegligenceVsMedicalMalpracticeInFlorida.title,
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#blogposting`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      headline: hospitalNegligenceVsMedicalMalpracticeInFlorida.title,
      name: hospitalNegligenceVsMedicalMalpracticeInFlorida.metaTitle,
      description: hospitalNegligenceVsMedicalMalpracticeInFlorida.metaDescription,
      url: canonicalUrl,
      image: {
        "@type": "ImageObject",
        url: "https://www.carterinjurylaw.com/_next/image?url=%2Fassets%2Fstatic-blogs%2Fhospital-negligence-vs-medical-malpractice-fl.webp&w=1200&q=75",
      },
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.carterinjurylaw.com/blog#blog",
        name: "Carter Injury Law Blog",
        url: "https://www.carterinjurylaw.com/blog",
      },
      about: {
        "@type": "Thing",
        name: "Hospital Negligence and Medical Malpractice in Florida",
      },
      keywords: [
        "hospital negligence vs medical malpractice Florida",
        "hospital negligence Florida",
        "medical malpractice Florida",
        "Florida Chapter 766 medical malpractice",
        "Florida Statute 768.28 sovereign immunity hospital",
        "Florida Amendment 7 adverse medical incidents",
        "hospital negligence lawyer Tampa",
        "medical malpractice attorney Tampa",
        "Florida medical malpractice presuit notice",
        "Carter Injury Law",
      ],
      author: {
        "@type": "Person",
        name: "David Carter",
        url: "https://www.carterinjurylaw.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Carter Injury Law, P.A.",
        url: "https://www.carterinjurylaw.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.carterinjurylaw.com/_next/image?url=%2Fassets%2Fsite-logo%2Flogo.png&w=1080&q=75",
        },
      },
      datePublished: "2026-11-11",
      dateModified: "2026-11-11",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      url: canonicalUrl,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function HospitalNegligenceVsMedicalMalpracticeInFlorida() {
  return (
    <article className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="!mt-4 !mb-6 text-justify text-base leading-relaxed !text-[#0B1F3A] md:text-lg" style={{ color: "#0B1F3A" }}>
        Hospital negligence happens when the hospital fails to act such as with
        slippery floors or inadequate security. Medical malpractice is when a
        person is not provided with the required standard of treatment. These
        terms are used differently in the state of Florida, meaning that they
        are treated independently.
      </p>

      {/* Key Takeaways Card */}
      <div className="!my-6 overflow-hidden rounded-lg border border-[#D9D2C0] border-l-4 border-l-[#1F7A8C] bg-[#FBF9F3] shadow-sm">
        <div className="!p-5 md:!p-7">
          <h2 className="!my-0 text-xs font-bold uppercase tracking-[0.16em] !text-[#1F7A8C] md:text-sm" style={{ color: "#1F7A8C" }}>
            KEY TAKEAWAYS
          </h2>
          <ul className="!mt-4 !mb-0 !pl-0 list-none space-y-2.5">
            {keyTakeaways.map((point) => (
              <li
                key={point}
                className="!my-0 flex items-start gap-3 text-justify text-base leading-relaxed !text-[#222B38]"
                style={{ color: "#222B38" }}
              >
                <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 bg-[#C9A24B]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 1 */}
      <SectionHeading>What Counts as Hospital Negligence in Florida?</SectionHeading>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        The Hospital has a duty of care to protect its patients and visitors
        from hazards such as wet floors, faulty lifts and dark parking garages.
        A place where an individual could be assaulted. (This is based on the
        law of negligent security.)
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        An insufficient complement of nurses on a floor can lead to overlooked
        warning signs. In addition, sloppy cleaning can cause the spread of
        infection in an entire ward. This is not the fault of a single doctor
        but the hospital administration as a whole.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        However, things get more complicated when it comes to the direct
        provision of care. If the victim was injured as a result of the hospital
        giving or not giving care, section 766.106 considers this medical
        negligence. On the other hand, it gets different in terms of care. If
        your injury came from giving or withholding medical care, section
        766.106 treats it as medical negligence.
      </p>

      <div className="!my-7">
        <h3 className="!mt-0 !mb-3 text-xs font-bold uppercase tracking-[0.14em] !text-[#5B6573]" style={{ color: "#5B6573" }}>
          WHERE EACH CLAIM USUALLY LANDS
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {claimComparisonCards.map((card) => (
            <ComparisonCard key={card.title} card={card} />
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <SectionHeading>Medical Malpractice Law Is Different In Florida</SectionHeading>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        Malpractice starts with a clinician. A surgeon cuts the wrong thing. A
        nurse gives ten times the dose. An ER doctor sends you home in the
        middle of a heart attack. Each one missed the standard of care, and you
        got hurt. Many of these are{" "}
        <InternalLink href="/areas-of-practice/surgical-errors">
          surgical errors
        </InternalLink>{" "}
        cases.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        In any hospital negligence vs. medical error fight, the defense usually
        wants the malpractice label. It comes with hoops. According to{" "}
        <ExternalLink href="https://flsenate.gov/Laws/Statutes/2024/766.203">
          Section 766.203
        </ExternalLink>
        , you have to send notice and provide a written opinion from a qualified
        medical expert.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        Fault works differently too. Since the 2023 reform, known as HB 837, an
        ordinary negligence jury that finds you more than 50 percent to blame
        leaves you with nothing. That&apos;s{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2026/768.81">
          section 768.81(6)
        </ExternalLink>
        . Malpractice claims are exempt. There, the jury just trims your award
        by your share, even if you carry most of the blame. So a hospital fall
        and a botched surgery can end very differently.
      </p>

      <ClaimSortFlowchart />

      {/* Section 3 */}
      <SectionHeading>
        How Your Deadline Changes - Hospital Negligence vs. Medical Malpractice
      </SectionHeading>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        The table shows the difference. Lawmakers cut the general negligence
        window in 2023, so the numbers look alike now. They aren&apos;t and that
        gap can sink a whole claim.
      </p>

      <div className="!my-6">
        <h3 className="!mt-0 !mb-3 text-xs font-bold uppercase tracking-[0.14em] !text-[#5B6573]" style={{ color: "#5B6573" }}>
          FLORIDA DEADLINES AND RULES FOR 2026
        </h3>
        <div className="overflow-x-auto rounded-lg border border-[#D9D2C0] shadow-sm">
          <table className="min-w-[620px] w-full border-collapse bg-white text-left text-sm md:text-base">
            <thead>
              <tr>
                <th className="border border-[#D9D2C0] bg-[#0B1F3A] !px-4 !py-3 font-bold !text-white text-justify" style={{ color: "#FFFFFF" }}>
                  Issue
                </th>
                <th className="border border-[#D9D2C0] bg-[#0B1F3A] !px-4 !py-3 font-bold !text-white text-justify" style={{ color: "#FFFFFF" }}>
                  Hospital negligence
                </th>
                <th className="border border-[#D9D2C0] bg-[#1F7A8C] !px-4 !py-3 font-bold !text-white text-justify" style={{ color: "#FFFFFF" }}>
                  Medical malpractice
                </th>
              </tr>
            </thead>
            <tbody>
              {deadlineRulesRows.map((row) => (
                <tr key={row.issue}>
                  <td className="border border-[#D9D2C0] bg-[#EFE7D2] !px-4 !py-3 font-bold !text-[#222B38] text-justify align-top" style={{ color: "#222B38" }}>
                    {row.issue}
                  </td>
                  <td
                    className={`border border-[#D9D2C0] ${row.tinted ? "bg-[#FBF9F3]" : "bg-white"} !px-4 !py-3 !text-[#222B38] text-justify align-top`}
                    style={{ color: "#222B38" }}
                  >
                    {row.hospitalNegligence}
                  </td>
                  <td
                    className={`border border-[#D9D2C0] ${row.tinted ? "bg-[#FBF9F3]" : "bg-white"} !px-4 !py-3 !text-[#222B38] text-justify align-top`}
                    style={{ color: "#222B38" }}
                  >
                    {row.medicalMalpractice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        Meanwhile, the outer cap keeps ticking. Evidence changes too.
        Malpractice turns on charts and experts. Ordinary negligence turns on
        photos, incident reports, and witnesses.
      </p>

      <h3 className="!mt-7 !mb-3 text-justify text-lg font-bold !text-[#0B1F3A] md:text-xl" style={{ color: "#0B1F3A" }}>
        What if the hospital is public?
      </h3>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        Some hospitals belong to the government, like county hospital districts
        and state teaching hospitals. As per{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2025/768.28">
          Section 768.28
        </ExternalLink>{" "}
        damages are generally <strong className="!text-[#222B38]">limited to</strong>{" "}
        $200,000 per person and $300,000 per incident. It doesn&apos;t matter
        how large the verdict is. Lawmakers voted in 2026 to increase those
        limits; however, the governor vetoed the bill on June 30.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        For malpractice, they get 90 days to answer and silence counts as a
        denial. Miss that step and your claim can die quietly. Anything above
        the limitation needs a claim bill from the Legislature, which is slow
        and never guaranteed. So ask early who owns the hospital.
      </p>

      <div className="!my-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {hospitalStats.map((stat) => (
          <div key={stat.value} className={`${stat.bgClass} rounded-md !px-4 !py-5 shadow-sm flex flex-col justify-start`}>
            <p className="!mt-0 !mb-2 text-justify text-3xl font-bold !text-[#C9A24B] md:text-4xl" style={{ color: "#C9A24B" }}>
              {stat.value}
            </p>
            <p className="!my-0 text-justify text-xs leading-relaxed !text-white md:text-sm" style={{ color: "#FFFFFF" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Section 4 */}
      <SectionHeading>Ask Hospitals for the Records</SectionHeading>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        Florida voters gave you real power in 2004. Amendment 7 lets patients see
        records of adverse medical incidents at a hospital or provider, with
        other patients&apos; names blacked out. Hospitals fought it. In{" "}
        <ExternalLink href="https://hortyspringer.com/HSM/Data/Cases/fulltext5/FloridaHospitalWaterman_v_Buster_March2008.pdf">
          Florida Hospital Waterman v. Buster
        </ExternalLink>
        , the Florida Supreme Court said in 2008 that it works on its own and
        reaches older records too.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        The push is important for federal auditors at the{" "}
        <ExternalLink href="https://oig.hhs.gov/reports/all/2012/few-adverse-events-in-hospitals-were-reported-to-state-adverse-event-reporting-systems/">
          HHS Office of Inspector General
        </ExternalLink>{" "}
        found hospitals rarely report their own mistakes.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        There can be a fight. Federal patient safety law protects some internal
        review files and hospitals defend every page. Ask early and in writing.
        Then ask for incident reports and credentialing files. One missed
        diagnosis is a mistake. Five on one unit is a system problem.
      </p>

      <HarmRateChart />

      {/* Section 5 */}
      <SectionHeading>
        Can a Tampa Hospital Be Liable for Its Doctors&apos; Mistakes?
      </SectionHeading>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        Often, yes. Plenty of ER doctors, radiologists, and anesthesiologists
        aren&apos;t hospital employees, and the hospital will say so loudly. But
        if it presented them as part of its team, Florida&apos;s apparent agency
        rule can still make the hospital pay. It can also be directly at fault
        for poor hiring or thin staffing.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        That usually means two defendants and two insurers pointing at each
        other. Our intake surveys show many callers can&apos;t tell who caused
        their harm. Actually, why would you? Ask who employs each doctor who
        treated you. Name everyone who might be responsible. Otherwise you meet
        the empty chair trick, where each side blames someone you never sued. If
        a loved one died, a{" "}
        <InternalLink href="/areas-of-practice/medical-malpractice-wrongful-death">
          wrongful death
        </InternalLink>{" "}
        claim has its own rules.
      </p>

      <div className="!my-7">
        <h3 className="!mt-0 !mb-3 text-xs font-bold uppercase tracking-[0.14em] !text-[#5B6573]" style={{ color: "#5B6573" }}>
          BEFORE AND AFTER A PROPER CLAIM REVIEW
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {reviewComparisonCards.map((card) => (
            <ComparisonCard key={card.title} card={card} />
          ))}
        </div>
      </div>

      {/* Section 6 */}
      <SectionHeading>
        Why Tampa Families Trust Carter Injury Law With Hospital Cases
      </SectionHeading>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        David Carter has handled personal injury cases for over a decade. Every
        client gets his personal cell number, which matters when a hospital
        stalls and the insurer goes quiet. His firm brings in medical experts to
        pick through your records before filing, and it prepares every case like
        trial is coming.
      </p>

      <blockquote className="!my-7 rounded-r-lg border-l-4 border-[#C9A24B] bg-[#FBF9F3] !p-5 md:!p-7 shadow-sm not-italic">
        <p className="!mt-0 !mb-3 text-justify text-lg italic leading-relaxed !text-[#0B1F3A] md:text-xl" style={{ color: "#0B1F3A" }}>
          &ldquo;Families call it hospital negligence. The law often calls it
          malpractice. That label sets your deadline, so we sort it out
          first.&rdquo;
        </p>
        <cite className="block text-justify text-xs font-bold not-italic !text-[#1F7A8C] md:text-sm" style={{ color: "#1F7A8C" }}>
          David Carter, Carter Injury Law
        </cite>
      </blockquote>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        The results are a $400,000 settlement for a client hit by a large RV. A
        policy-limit settlement after a rear-end crash in Largo. Those were auto
        cases, but that&apos;s the pushback you want against a hospital&apos;s
        insurer. Past results don&apos;t guarantee future ones.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
        You&apos;ll find the team at 3114 N. Boulevard in Tampa, with a Largo
        office by appointment. If a hospital lets you down, a Tampa{" "}
        <InternalLink href="/areas-of-practice/medical-malpractice">
          malpractice attorney
        </InternalLink>{" "}
        can sort out the label before your clock runs out.
      </p>

      <div className="!my-8 rounded-xl bg-[#0B1F3A] !p-6 text-center !text-white shadow-lg md:!p-8">
        <h3 className="!mt-0 !mb-3 text-xl font-bold !text-white md:text-2xl" style={{ color: "#FFFFFF" }}>
          Hurt at a Florida hospital? Get answers before your deadline runs out
        </h3>
        <p className="mx-auto !mt-0 !mb-6 max-w-2xl text-sm leading-relaxed !text-[#E8E2D0] md:text-base" style={{ color: "#E8E2D0" }}>
          Call{" "}
          <a
            href="tel:8139220228"
            className="font-bold !text-[#C9A24B] !no-underline hover:underline"
            style={{ color: "#C9A24B", textDecoration: "none" }}
          >
            (813) 922-0228
          </a>{" "}
          anytime. Your consultation is free and confidential.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-[#C9A24B] !px-7 !py-3 text-sm font-bold !text-[#0B1F3A] shadow-md transition duration-200 hover:bg-[#d8b45c] !no-underline md:text-base"
          style={{ color: "#0B1F3A", textDecoration: "none" }}
        >
          Talk to Carter Injury Law
        </Link>
      </div>

      {/* Section 7: Frequently Asked Questions */}
      <SectionHeading>Frequently Asked Questions</SectionHeading>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-lg border border-[#D9D2C0] bg-white !p-5 shadow-sm">
            <h3 className="!mt-0 !mb-2 text-justify text-base font-bold !text-[#0B1F3A] md:text-lg" style={{ color: "#0B1F3A" }}>
              {faq.q}
            </h3>
            <p className="!my-0 text-justify text-base leading-relaxed !text-[#222B38]" style={{ color: "#222B38" }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <p className="!mt-8 !mb-0 rounded-md border border-[#D9D2C0] bg-[#FBF9F3] !p-4 text-justify text-sm !text-[#5B6573]" style={{ color: "#5B6573" }}>
        Disclaimer: This article is for general information only and is not
        legal advice. Laws change, and every case depends on its own facts.
        Speak with Carter Injury Law about your specific situation.
      </p>
    </article>
  );
}
