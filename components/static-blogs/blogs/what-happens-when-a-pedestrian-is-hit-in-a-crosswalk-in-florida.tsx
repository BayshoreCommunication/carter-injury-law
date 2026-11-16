import Link from "next/link";
import type { ReactNode } from "react";

const featuredImage =
  "/assets/static-blogs/pedestrian-hit-in-a-crosswalk-florida-law-guide.webp";

const canonicalUrl =
  "https://www.carterinjurylaw.com/blog/what-happens-when-a-pedestrian-is-hit-in-a-crosswalk-in-florida";

export const whatHappensWhenAPedestrianIsHitInACrosswalkInFlorida = {
  slug: "what-happens-when-a-pedestrian-is-hit-in-a-crosswalk-in-florida",
  title: "What Happens When a Pedestrian Is Hit in a Crosswalk in Florida?",
  category: "Personal Injury",
  published: true,
  createdAt: "2026-11-16T12:00:00.000Z",
  updatedAt: "2026-11-16T12:00:00.000Z",
  shortDescription:
    "After a crosswalk crash in Florida, PIP insurance covers up to $10,000 of your losses if you see a doctor within 14 days, and strict comparative fault rules apply.",
  metaTitle: "What Happens When a Pedestrian Is Hit in a Crosswalk in Florida?",
  metaDescription:
    "After a crosswalk crash in Florida, PIP insurance covers up to $10,000 if you see a doctor within 14 days. Know fault laws, deadlines, and your legal rights.",
  canonicalUrl,
  featuredImage: {
    image: { url: featuredImage },
    altText:
      "Injured pedestrian sitting on a crosswalk beside a car, police cruiser, and an accident report form.",
    title: "What Happens When a Pedestrian Is Hit in a Crosswalk?",
    description:
      "Learn what happens legally when a pedestrian is hit in a Florida crosswalk, including driver liability, documenting the accident, and pursuing injury compensation.",
    caption:
      "Understand your legal rights and options after being injured in a Florida crosswalk accident.",
  },
  body: "<p>After a crosswalk crash in Florida, PIP insurance covers up to $10,000 of your losses if you see a doctor within 14 days. Who was at fault gets argued over evidence that disappears quickly, and a two year limit applies to lawsuits against the driver.</p>",
};

const keyPoints = [
  "Drivers have to stop at signaled crosswalks and wherever a sign says so. Everywhere else they still owe you ordinary care.",
  "Get more than half the blame and Florida pays you nothing. That rule dates to March 2023.",
  "Plenty of Florida drivers carry no bodily injury coverage, so your own uninsured motorist coverage may end up carrying the case.",
  "Video and signal records get erased faster than most people expect.",
];

const scenePhotoChecklist = [
  "The paint and the signal heads, from a few angles.",
  "The car, plate included, and where it ended up.",
  "Witnesses, with names and numbers. Also any shop or restaurant camera aimed at the street.",
  "Your injuries. Take more photos two days later, when the bruises finally show up.",
];

const dangerStats = [
  {
    value: "8th",
    label:
      "Tampa Bay’s rank among the 101 largest US metros for pedestrian danger",
    borderColor: "#E4572E",
    valueColor: "#E4572E",
  },
  {
    value: "3,726",
    label: "Florida pedestrian deaths from 2020 through 2024",
    borderColor: "#13A89E",
    valueColor: "#0E7C75",
  },
  {
    value: "51",
    label: "Pedestrian deaths in Hillsborough County in 2025 (preliminary)",
    borderColor: "#C9A227",
    valueColor: "#9C7A0B",
  },
  {
    value: "14",
    label: "Days to get first treatment and keep your PIP benefits",
    borderColor: "#0B2545",
    valueColor: "#0B2545",
  },
];

const pedestrianDeathsByYear = [
  { year: "2019", deaths: 734, barColor: "bg-[#0B2545]" },
  { year: "2020", deaths: 715, barColor: "bg-[#0B2545]" },
  { year: "2021", deaths: 835, barColor: "bg-[#E4572E]" },
  { year: "2022", deaths: 786, barColor: "bg-[#0B2545]" },
  { year: "2023", deaths: 791, barColor: "bg-[#0B2545]" },
  { year: "2024", deaths: 678, barColor: "bg-[#0B2545]" },
  { year: "2025", deaths: 632, barColor: "bg-[#13A89E]" },
];

const coverageRows = [
  {
    layer: "PIP",
    does: "Pays 80 percent of medical bills and 60 percent of lost wages, up to $10,000",
    catch:
      "Treatment within 14 days, and a $2,500 cap without an emergency finding",
    tinted: true,
  },
  {
    layer: "Driver’s bodily injury liability",
    does: "Covers what PIP can’t, including pain and suffering for qualifying injuries",
    catch: "Many drivers aren’t required to carry it, and limits run low",
    tinted: false,
  },
  {
    layer: "Your uninsured or underinsured motorist coverage",
    does: "Kicks in when the driver has nothing or too little",
    catch: "Sits on your own policy and can be waived in writing, so check yours",
    tinted: true,
  },
  {
    layer: "Employer or platform coverage",
    does: "Can add money if the driver was on the clock",
    catch: "You have to prove the driver was working at impact",
    tinted: false,
  },
];

const evidenceChecklist = [
  "Signal timing records from the city or county traffic office, which can show who actually had the walk or the green at the second of impact.",
  "The car’s event data recorder, which may log speed and braking just before the hit.",
  "Video from shops and doorbells. A lot of it records over itself on a short loop.",
  "The driver’s phone records, obtained through proper legal channels.",
  "Lighting and sight lines, photographed at the same hour the crash happened.",
];

const legalClocks = [
  {
    labelLine1: "PIP treatment window",
    labelLine2: "",
    days: 14,
    tag: "Day 14",
    colorClass: "bg-[#13A89E]",
  },
  {
    labelLine1: "Crash report stays confidential",
    labelLine2: "to outsiders",
    days: 60,
    tag: "Day 60",
    colorClass: "bg-[#C9A227]",
  },
  {
    labelLine1: "Lawsuit deadline for negligence",
    labelLine2: "and wrongful death",
    days: 730,
    tag: "Day 730 (2 years)",
    colorClass: "bg-[#E4572E]",
  },
];

const faultRows = [
  { share: "0 percent", recovery: "$200,000", tinted: true },
  { share: "20 percent", recovery: "$160,000", tinted: false },
  { share: "50 percent", recovery: "$100,000", tinted: true },
  { share: "51 percent", recovery: "$0", tinted: false },
];

const faqs = [
  {
    q: "What if the driver who hit me kept going?",
    a: "Report it to police right away. Your PIP coverage still applies to you, and your own uninsured motorist coverage may respond when the driver is never found, depending on your policy terms.",
  },
  {
    q: "Can I still recover if I wasn’t exactly on the painted lines?",
    a: "Often yes. Being outside the paint gives the insurer an argument but doesn’t end the claim. How the blame splits depends on the facts, so have a lawyer look before you assume the worst.",
  },
  {
    q: "Should I accept the insurance company’s first offer?",
    a: "Not before you know what your injuries will really cost. Early offers often show up before treatment is finished, and a signed release usually closes the claim for good.",
  },
];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2
    className="!mt-10 !mb-3 flex items-start gap-3 border-b border-[#E3DCCB] !pb-2.5 text-2xl font-bold !text-[#0B2545] md:text-3xl"
    style={{ color: "#0B2545" }}
  >
    <span
      className="mt-1.5 inline-block h-6 w-1.5 flex-shrink-0 rounded-full bg-[#E4572E]"
      aria-hidden="true"
    />
    <span>{children}</span>
  </h2>
);

const LeadAnswer = ({ children }: { children: ReactNode }) => (
  <p
    className="!mt-2 !mb-3 text-justify text-base font-bold leading-relaxed !text-[#0B2545] md:text-lg"
    style={{ color: "#0B2545" }}
  >
    {children}
  </p>
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
    className="font-semibold !text-[#0E7C75] underline hover:!text-[#0B2545] transition-colors"
    style={{ color: "#0E7C75" }}
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
    className="font-semibold !text-[#0E7C75] underline hover:!text-[#0B2545] transition-colors"
    style={{ color: "#0E7C75" }}
  >
    {children}
  </Link>
);

const CoralBulletList = ({ items }: { items: string[] }) => (
  <ul className="!my-3 !pl-0 list-none space-y-2.5">
    {items.map((item) => (
      <li
        key={item}
        className="!my-0 flex items-start gap-3 text-justify text-base leading-relaxed !text-[#111827]"
        style={{ color: "#111827" }}
      >
        <span
          className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#E4572E]"
          aria-hidden="true"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/** Quote callout matching the doc's teal left bar and cream surface. */
const QuoteCard = ({
  quote,
  speaker,
  role,
}: {
  quote: string;
  speaker: string;
  role: string;
}) => (
  <blockquote
    className="!my-6 rounded-r-lg border-l-[6px] border-[#13A89E] bg-[#FBF7EF] !p-5 md:!p-6 shadow-sm not-italic"
    style={{ borderLeftColor: "#13A89E" }}
  >
    <p
      className="!mt-0 !mb-2.5 text-justify text-lg italic leading-relaxed !text-[#0B2545] md:text-xl"
      style={{ color: "#0B2545" }}
    >
      &ldquo;{quote}&rdquo;
    </p>
    <cite className="block text-justify text-sm not-italic leading-snug">
      <strong className="font-bold !text-[#E4572E]" style={{ color: "#E4572E" }}>
        {speaker}
      </strong>{" "}
      <span className="!text-[#6B7785]" style={{ color: "#6B7785" }}>
        {role}
      </span>
    </cite>
  </blockquote>
);

/** Vertical bar chart of Florida pedestrian fatalities from 2019 to 2025. */
const PedestrianDeathsChart = () => {
  const maxAxis = 900;
  return (
    <figure
      className="!my-7 rounded-xl border border-[#E3DCCB] bg-[#FBF7EF] !p-5 md:!p-7 shadow-sm"
      aria-label="Vertical bar chart of Florida pedestrian deaths per year from 2019 to 2025"
    >
      <p
        className="!mt-0 !mb-5 text-base font-bold !text-[#0B2545] md:text-lg"
        style={{ color: "#0B2545" }}
      >
        Florida pedestrian deaths by year
      </p>

      <div className="!pt-4">
        <div className="flex items-stretch gap-2 sm:gap-4">
          <div className="hidden items-center sm:flex">
            <span className="-rotate-90 whitespace-nowrap text-xs font-medium text-[#0B2545] select-none w-5 text-center">
              Pedestrians killed
            </span>
          </div>

          <div className="relative h-56 w-8 flex-shrink-0 text-right text-xs font-medium text-[#6B7785] sm:h-64 select-none">
            {[800, 600, 400, 200, 0].map((val) => (
              <span
                key={val}
                className="absolute right-0 -translate-y-1/2"
                style={{ top: `${((maxAxis - val) / maxAxis) * 100}%` }}
              >
                {val}
              </span>
            ))}
          </div>

          <div className="relative h-56 flex-1 border-b border-[#0B2545] sm:h-64">
            {[800, 600, 400, 200].map((val) => (
              <div
                key={val}
                className="pointer-events-none absolute left-0 right-0 border-t border-[#E3DCCB]"
                style={{ top: `${((maxAxis - val) / maxAxis) * 100}%` }}
              />
            ))}

            <div className="relative z-10 grid h-full grid-cols-7 items-end gap-1.5 px-1 sm:gap-4 sm:px-3">
              {pedestrianDeathsByYear.map((row) => (
                <div
                  key={row.year}
                  className="flex h-full flex-col items-center justify-end"
                >
                  <span
                    className="mb-1 text-[10px] font-bold !text-[#0B2545] sm:text-sm"
                    style={{ color: "#0B2545" }}
                  >
                    {row.deaths}
                  </span>
                  <div
                    className={`w-full max-w-[48px] rounded-t-sm ${row.barColor}`}
                    style={{ height: `${(row.deaths / maxAxis) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-start gap-2 sm:gap-4">
          <div className="hidden w-5 sm:block" aria-hidden="true" />
          <div className="w-8 flex-shrink-0" aria-hidden="true" />
          <div className="grid flex-1 grid-cols-7 gap-1 px-0.5 text-center text-[10px] font-medium text-[#0B2545] sm:gap-4 sm:px-3 sm:text-sm">
            {pedestrianDeathsByYear.map((row) => (
              <span key={row.year}>{row.year}</span>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-justify text-xs text-[#6B7785] md:text-sm">
        Source FLHSMV crash data as compiled in 2026. The 2025 figure is the
        latest compilation and may be revised.
      </figcaption>
    </figure>
  );
};

/** Log-scale bar chart of critical Florida post-crash legal clocks (14, 60, 730 days). */
const LegalClocksChart = () => {
  const maxLog = Math.log10(7500);
  const ticks = [1, 7, 14, 30, 60, 180, 365, 730];
  const pctFor = (days: number) =>
    days <= 1 ? 0 : (Math.log10(days) / maxLog) * 100;

  return (
    <figure
      className="!my-7 rounded-xl border border-[#E3DCCB] bg-[#FBF7EF] !p-5 md:!p-7 shadow-sm"
      aria-label="Range chart of Florida legal clocks after a pedestrian crash, showing 14, 60, and 730 days"
    >
      <p
        className="!mt-0 !mb-5 text-base font-bold !text-[#0B2545] md:text-lg"
        style={{ color: "#0B2545" }}
      >
        The Florida clocks that start the moment you are hit
      </p>

      {/* Mobile stacked view for crisp legibility under 640px */}
      <div className="space-y-4 sm:hidden">
        {legalClocks.map((clock) => (
          <div key={clock.tag} className="space-y-1.5">
            <p className="!my-0 text-sm font-medium !text-[#0B2545]" style={{ color: "#0B2545" }}>
              {clock.labelLine1} {clock.labelLine2}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-6 flex-1 rounded-sm bg-[#EFE8D8] overflow-hidden">
                <div
                  className={`h-full ${clock.colorClass}`}
                  style={{ width: `${Math.max(18, pctFor(clock.days))}%` }}
                />
              </div>
              <span className="text-xs font-bold text-[#0B2545] whitespace-nowrap">
                {clock.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet proportional log-scale range chart */}
      <div className="hidden sm:block">
        <div className="relative">
          {legalClocks.map((clock) => (
            <div key={clock.tag} className="grid grid-cols-12 items-center gap-3 py-3">
              <div className="col-span-4 text-right text-xs font-medium leading-snug text-[#0B2545] md:text-sm">
                <span className="block">{clock.labelLine1}</span>
                {clock.labelLine2 && <span className="block">{clock.labelLine2}</span>}
              </div>
              <div className="relative col-span-8 h-9 flex items-center">
                {ticks.map((t) => (
                  <div
                    key={t}
                    className="pointer-events-none absolute top-[-12px] bottom-[-12px] border-l border-[#E3DCCB]"
                    style={{ left: `${pctFor(t)}%` }}
                  />
                ))}
                <div
                  className={`relative z-10 h-8 ${clock.colorClass} rounded-r-sm`}
                  style={{ width: `${pctFor(clock.days)}%` }}
                />
                <span className="relative z-10 ml-2.5 text-sm font-bold text-[#0B2545] whitespace-nowrap">
                  {clock.tag}
                </span>
              </div>
            </div>
          ))}

          {/* Bottom Log Axis */}
          <div className="grid grid-cols-12 items-start gap-3">
            <div className="col-span-4" aria-hidden="true" />
            <div className="relative col-span-8 border-t border-[#0B2545] pt-2 h-8">
              {ticks.map((t) => (
                <div
                  key={t}
                  className="absolute top-0 flex flex-col items-center -translate-x-1/2"
                  style={{ left: `${pctFor(t)}%` }}
                >
                  <span className="h-1.5 w-[1px] bg-[#0B2545]" />
                  <span className="mt-1 text-[11px] font-medium text-[#6B7785]">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-1">
            <div className="col-span-4" aria-hidden="true" />
            <p className="col-span-8 !my-0 text-center text-xs font-semibold text-[#0B2545]">
              Days after the crash (log scale)
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-justify text-xs text-[#6B7785] md:text-sm">
        Sources Fla. Stat. 627.736(1)(a), 316.066, 95.11(4). Deadlines for
        claims against government can differ.
      </figcaption>
    </figure>
  );
};

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
          name: whatHappensWhenAPedestrianIsHitInACrosswalkInFlorida.title,
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#blogposting`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      headline: whatHappensWhenAPedestrianIsHitInACrosswalkInFlorida.title,
      name: whatHappensWhenAPedestrianIsHitInACrosswalkInFlorida.metaTitle,
      description: whatHappensWhenAPedestrianIsHitInACrosswalkInFlorida.metaDescription,
      url: canonicalUrl,
      image: {
        "@type": "ImageObject",
        url: "https://www.carterinjurylaw.com/_next/image?url=%2Fassets%2Fstatic-blogs%2Fpedestrian-hit-in-a-crosswalk-florida-law-guide.webp&w=1200&q=75",
      },
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.carterinjurylaw.com/blog#blog",
        name: "Carter Injury Law Blog",
        url: "https://www.carterinjurylaw.com/blog",
      },
      about: {
        "@type": "Thing",
        name: "Florida Crosswalk Pedestrian Accident Law, PIP Coverage, and Liability",
      },
      keywords: [
        "pedestrian hit in a crosswalk Florida",
        "Florida crosswalk laws pedestrian right of way",
        "Florida Statute 316.130 crosswalk",
        "Florida PIP pedestrian accident 14 day rule",
        "Florida comparative fault 51 percent pedestrian",
        "Tampa pedestrian accident lawyer",
        "uninsured motorist pedestrian claim Florida",
        "Hillsborough County pedestrian crashes",
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
      datePublished: "2026-11-16",
      dateModified: "2026-11-16",
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

export default function WhatHappensWhenAPedestrianIsHitInACrosswalkInFlorida() {
  return (
    <article className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Intro Highlight Box */}
      <div className="!mt-4 !mb-6 rounded-lg border border-[#E3DCCB] border-l-4 border-l-[#0B2545] bg-[#FBF7EF] !p-5 md:!p-6 shadow-sm">
        <p className="!my-0 text-justify text-base leading-relaxed !text-[#0B2545] md:text-lg" style={{ color: "#0B2545" }}>
          After a crosswalk crash in Florida, PIP insurance covers up to $10,000
          of your losses if you see a doctor within 14 days. Who was at fault
          gets argued over evidence that disappears quickly, and a two year limit
          applies to lawsuits against the driver.
        </p>
      </div>

      {/* KEY POINTS Card */}
      <div className="!my-6 rounded-lg border border-[#E3DCCB] border-l-4 border-l-[#E4572E] bg-[#FBF7EF] !p-5 md:!p-7 shadow-sm">
        <h2 className="!my-0 text-xs font-bold uppercase tracking-[0.16em] !text-[#E4572E] md:text-sm" style={{ color: "#E4572E" }}>
          KEY POINTS
        </h2>
        <div className="mt-3">
          <CoralBulletList items={keyPoints} />
        </div>
      </div>

      {/* Section 1 */}
      <SectionHeading>
        What should you do right after a driver hits you?
      </SectionHeading>

      <LeadAnswer>
        Call 911. Check yourself even if you feel okay. Take photographs of the
        scene before it changes. An adrenaline rush can hide injuries. That first
        medical record anchors everything after it.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        Your phone matters more than anything else you&apos;re carrying. If you
        can&apos;t use it, ask a bystander to.
      </p>

      <CoralBulletList items={scenePhotoChecklist} />

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        With the other driver, keep it short. And never hand the other
        side&apos;s insurer a recorded statement before you&apos;ve talked to a
        lawyer. Florida generally treats what you tell the officer for the crash
        report as privileged at trial. An adjuster&apos;s call gets no such
        shelter, and yes, they&apos;re recording.
      </p>

      {/* 4 Top-Accented KPI Stat Cards */}
      <div className="!my-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {dangerStats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-md bg-[#FBF7EF] !px-4 !py-5 shadow-sm border-t-4 flex flex-col justify-start"
            style={{ borderTopColor: stat.borderColor }}
          >
            <p
              className="!mt-0 !mb-2 text-justify text-3xl font-bold md:text-4xl"
              style={{ color: stat.valueColor }}
            >
              {stat.value}
            </p>
            <p className="!my-0 text-justify text-xs leading-relaxed !text-[#111827] md:text-sm" style={{ color: "#111827" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <SectionHeading>
        Why do so many crosswalk crashes happen around Tampa Bay?
      </SectionHeading>

      <LeadAnswer>
        Mostly road design. Wide, fast roads with long stretches between safe
        crossings put people on foot in front of drivers who have no time to
        react.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        The June 2026{" "}
        <ExternalLink href="https://www.smartgrowthamerica.org/signature-reports/dangerous-by-design/">
          Dangerous by Design
        </ExternalLink>{" "}
        report from Smart Growth America ranks Florida fifth worst among the
        states for pedestrians, and the Tampa Bay region lands eighth among the
        101 biggest metros, which makes it the worst in Florida. Across the
        state, 3,726 people on foot died between 2020 and 2024.
      </p>

      <QuoteCard
        quote="Wide roads with many lanes and few crossings in between"
        speaker="Heidi Simon"
        role="Director of Thriving Communities, Smart Growth America, speaking to FOX 13 Tampa"
      />

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        We went through the public numbers ourselves and one gap jumped out. In
        2025, pedestrians were in about 2.9 percent of Florida&apos;s crashes,
        going by final{" "}
        <ExternalLink href="https://www.flhsmv.gov/traffic-crash-reports/crash-dashboard/">
          FLHSMV crash data
        </ExternalLink>
        , yet they made up roughly 21 percent of the deaths. Preliminary figures
        for Hillsborough County show 683 pedestrian crashes and 51 deaths.
        Statewide deaths have come down from the 2021 high of 835, which is
        good, though I&apos;d hold the applause.
      </p>

      <PedestrianDeathsChart />

      {/* Section 3 */}
      <SectionHeading>
        Who has to stop for a pedestrian in a Florida crosswalk?
      </SectionHeading>

      <LeadAnswer>
        At a signaled intersection, drivers must stop and stay stopped for a
        pedestrian with a permitted signal. Where a sign marks the crosswalk, the
        same applies. Everywhere else, drivers still owe due care.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        The statute is{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2025/0316.130">
          section 316.130
        </ExternalLink>
        , and it&apos;s shorter than you&apos;d guess. Subsection 7(a) handles
        signaled intersections and 7(b) handles signed crosswalks. Subsection 9
        says nobody may pass a car that has stopped for a walker, which matters
        because the driver in the next lane can&apos;t see you past that stopped
        vehicle. Subsection 15 is the general duty of due care.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        You have duties too. Step off the curb against a Don&apos;t Walk signal
        and the other side will lean on that for the entire case.
      </p>

      {/* Section 4 */}
      <SectionHeading>Who pays your medical bills first?</SectionHeading>

      <LeadAnswer>
        Your own PIP coverage, up to $10,000, no matter who caused the crash. If
        your losses run past that, the driver&apos;s liability coverage and your
        uninsured motorist coverage come into play.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        Under{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2025/627.736">
          section 627.736
        </ExternalLink>
        , PIP pays 80 percent of reasonable medical bills and 60 percent of lost
        wages. Catch number one is timing. First treatment has to happen within
        14 days or the benefit is gone. Catch number two is that the cap sits at
        $2,500 unless a provider finds an emergency medical condition. As a
        pedestrian you look to your own PIP first, then a relative living in your
        household, and only after that to the policy on the car that hit you.
        There&apos;s also a $5,000 death benefit.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        What surprises people is that most Florida drivers aren&apos;t required
        to carry bodily injury liability insurance, and plenty don&apos;t. So
        &ldquo;just sue the driver&rdquo; can mean suing somebody with nothing
        to collect. That&apos;s where your own policy does the heavy lifting.
      </p>

      <div className="!my-6 overflow-x-auto rounded-lg border border-[#E3DCCB] shadow-sm">
        <table className="min-w-[640px] w-full border-collapse bg-white text-sm md:text-base">
          <thead>
            <tr className="bg-[#0B2545]">
              {["Coverage layer", "What it does", "The catch"].map((col) => (
                <th
                  key={col}
                  className="!px-4 !py-3 font-bold !text-white text-justify"
                  style={{ color: "#FFFFFF" }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E3DCCB]">
            {coverageRows.map((row) => (
              <tr key={row.layer} className={row.tinted ? "bg-[#FBF7EF]" : "bg-white"}>
                <td className="!px-4 !py-3 font-bold !text-[#111827] text-justify align-top" style={{ color: "#111827" }}>
                  {row.layer}
                </td>
                <td className="!px-4 !py-3 !text-[#111827] text-justify align-top" style={{ color: "#111827" }}>
                  {row.does}
                </td>
                <td className="!px-4 !py-3 !text-[#111827] text-justify align-top" style={{ color: "#111827" }}>
                  {row.catch}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        One more wrinkle. Because Florida is a no fault state, suing for pain
        and suffering generally means showing a permanent injury, though the
        statute also allows it for significant scarring or a death. That
        threshold is why truly{" "}
        <InternalLink href="/areas-of-practice/catastrophic-injuries">
          catastrophic injury
        </InternalLink>{" "}
        cases get handled so differently from sprains.
      </p>

      {/* Section 5 */}
      <SectionHeading>
        How do lawyers actually prove who had the right of way?
      </SectionHeading>

      <LeadAnswer>
        By rebuilding the crash from data. Signal timing records, the car&apos;s
        black box, phone records, and video tell the story far more reliably
        than two witnesses who disagree.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        The police report helps, sure, but it&apos;s one officer&apos;s best
        read after showing up late. A real investigation goes looking for more.
      </p>

      <CoralBulletList items={evidenceChecklist} />

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        A crash report stays confidential for about 60 days after it&apos;s
        filed, with access limited mostly to the people involved, their lawyers,
        and their insurers. Meanwhile the other clocks run at very different
        speeds, as the chart shows.
      </p>

      <LegalClocksChart />

      {/* Section 6 */}
      <SectionHeading>
        Can the insurance company say it was your fault?
      </SectionHeading>

      <LeadAnswer>
        Yes, and the stakes are steep. A jury that finds you more than 50
        percent at fault leaves you with nothing. At 50 percent or below, your
        award drops by your share.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        That comes from the 2023 tort reform, section 768.81(6), and the math is
        unforgiving.
      </p>

      <div className="!my-6">
        <div className="overflow-x-auto rounded-lg border border-[#E3DCCB] shadow-sm">
          <table className="min-w-[480px] w-full border-collapse bg-white text-sm md:text-base">
            <thead>
              <tr className="bg-[#0B2545]">
                <th className="!px-4 !py-3 font-bold !text-white text-justify" style={{ color: "#FFFFFF" }}>
                  Pedestrian fault share
                </th>
                <th className="!px-4 !py-3 font-bold !text-white text-justify" style={{ color: "#FFFFFF" }}>
                  Recovery on a $200,000 claim
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E3DCCB]">
              {faultRows.map((row) => (
                <tr key={row.share} className={row.tinted ? "bg-[#FBF7EF]" : "bg-white"}>
                  <td className="!px-4 !py-3 font-bold !text-[#111827] text-justify" style={{ color: "#111827" }}>
                    {row.share}
                  </td>
                  <td className="!px-4 !py-3 !text-[#111827] text-justify" style={{ color: "#111827" }}>
                    {row.recovery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="!mt-2 !mb-0 text-justify text-xs italic !text-[#6B7785] md:text-sm" style={{ color: "#6B7785" }}>
          Illustration only. Real cases involve many more moving parts.
        </p>
      </div>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        Expect the greatest hits. You were on your phone. You wore dark clothes.
        You came out of nowhere. We answer with physics and visibility, meaning
        how fast the car was going, how well lit the street was, and how long an
        alert driver needs to see a person and brake.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        Then another clock. Negligence suits from crashes after March 24, 2023
        must be filed within two years, and wrongful death claims get two years
        as well. Families facing a loss can see how our{" "}
        <InternalLink href="/areas-of-practice/wrongful-death-lawyer">
          wrongful death
        </InternalLink>{" "}
        team approaches it, though I&apos;d say call sooner than later.
      </p>

      {/* Section 7 */}
      <SectionHeading>
        When can a city or county share the blame?
      </SectionHeading>

      <LeadAnswer>
        When the way a crossing was designed, timed, lit, or maintained helped
        cause the crash. These claims run into sovereign immunity caps of
        $200,000 per person and $300,000 per incident.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        Notice rules for claims against government are stricter than for
        ordinary lawsuits, so waiting costs more. Legislators passed HB 145 in
        March 2026 to raise the caps to $350,000 and $500,000, but{" "}
        <ExternalLink href="https://floridaphoenix.com/2026/06/29/desantis-veto-spares-government-entities-from-larger-payouts-in-negligence-suits/">
          DeSantis vetoed it in late June
        </ExternalLink>
        . The old caps stand, and anything above them needs a claims bill from
        the Legislature.
      </p>

      {/* Section 8 */}
      <SectionHeading>
        What should you want in a Tampa pedestrian accident lawyer?
      </SectionHeading>

      <LeadAnswer>
        Someone who tries cases, picks up his own phone, and investigates before
        negotiating. I think that describes David Carter at Carter Injury Law.
      </LeadAnswer>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        David Carter finished at Florida State University College of Law in
        2014. He left with a Business Law Certificate, cum laude, and a Pro Bono
        Service Award. Even then, the work meant more to him than the paycheck.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        In 2021 the National Trial Lawyers named him to its Top 40 Under 40. It
        also placed him on two lists that matter in Tampa traffic, Top 25 in
        Motor Vehicle and Top 10 in Trucking. Honors are only paper, sure. But
        paper this hard to earn tells you something.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        He has belonged to the Hillsborough County Bar Association since 2017.
        Around town he talks with ordinary people about what their auto policies
        really cover. It&apos;s the fine print we all sign and never read, until
        a truck on I-275 decides to read it for us. He holds a 10.0.
      </p>

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        An attorney who worked a claim beside him described him as stern with
        the insurer and kind to the client. That&apos;s a rare pairing, like a
        cold drink in August. I&apos;d pay for it.
      </p>

      <QuoteCard
        quote="Families wait because they assume the evidence will keep. It won’t. Video gets taped over, signal logs get archived, and the insurer is already working the file. Call early."
        speaker="David Carter"
        role="Managing Partner, Carter Injury Law, PA"
      />

      <p className="!my-3 text-justify leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
        Consultations are free and the firm gets paid only if you win. The main
        office is at 3114 N. Boulevard in Tampa, with a Largo satellite office
        at 801 W. Bay Drive, Suite 229, by appointment. The firm&apos;s{" "}
        <InternalLink href="/areas-of-practice/pedestrian-personal-injury-litigation">
          pedestrian injury practice page
        </InternalLink>{" "}
        lays out how the team handles these cases.
      </p>

      {/* Section 9: FAQ */}
      <SectionHeading>FAQ</SectionHeading>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="rounded-lg border border-[#E3DCCB] bg-[#FBF7EF]/60 !p-5 shadow-sm"
          >
            <h3
              className="!mt-0 !mb-2 text-justify text-lg font-bold !text-[#0B2545]"
              style={{ color: "#0B2545" }}
            >
              {faq.q}
            </h3>
            <p className="!my-0 text-justify text-base leading-relaxed !text-[#111827]" style={{ color: "#111827" }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="!my-8 rounded-xl border-t-4 border-[#E4572E] bg-[#0B2545] !p-6 text-center !text-white shadow-lg md:!p-8">
        <p
          className="!mt-0 !mb-2 text-xs font-bold uppercase tracking-[0.16em] !text-[#C9A227]"
          style={{ color: "#C9A227" }}
        >
          DON&apos;T LET THE CLOCK RUN
        </p>
        <h3
          className="!mt-0 !mb-3 text-xl font-bold !text-white md:text-2xl"
          style={{ color: "#FFFFFF" }}
        >
          Hurt as a pedestrian in Florida? Talk to someone who investigates
          first.
        </h3>
        <p
          className="mx-auto !mt-0 !mb-6 max-w-2xl text-sm leading-relaxed !text-[#DCE3EC] md:text-base"
          style={{ color: "#DCE3EC" }}
        >
          Free, confidential, and no fee unless you win. Call any hour of any
          day, or send a message and let the evidence work for you.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#E4572E] !px-7 !py-3 text-sm font-bold !text-white shadow-md transition duration-200 hover:bg-[#c84620] !no-underline md:text-base"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            Start your free case evaluation
          </Link>
        </div>
        <p
          className="!mt-4 !mb-0 text-sm !text-[#DCE3EC]"
          style={{ color: "#DCE3EC" }}
        >
          Or call{" "}
          <a
            href="tel:8139220228"
            className="font-bold !text-[#C9A227] !no-underline hover:underline"
            style={{ color: "#C9A227", textDecoration: "none" }}
          >
            813.922.0228
          </a>{" "}
          any hour of any day
        </p>
      </div>

      {/* Disclaimer */}
      <p
        className="!mt-6 !mb-0 rounded-md border border-[#E3DCCB] bg-[#FBF7EF] !p-4 text-justify text-xs italic !text-[#6B7785] md:text-sm"
        style={{ color: "#6B7785" }}
      >
        Disclaimer: This article is general information, not legal advice, and
        reading it does not create an attorney client relationship. Laws change,
        and every case turns on its own facts. Past results do not guarantee a
        similar outcome.
      </p>
    </article>
  );
}
