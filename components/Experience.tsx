import Section from "./Section";

type Row = {
  period: string;
  title: string;
  org: string;
  detail?: string;
  bullets?: string[];
  href?: string;
};

const work: Row[] = [
  {
    period: "Sep 2025 – now",
    title: "Assistant Manager, Controller of Examinations",
    org: "Sri Sathya Sai Institute of Higher Learning",
    bullets: [
      "Build the office's internal web apps, often going from a requirement raised in a meeting to a working prototype the same day.",
      "Connect REST and Google Workspace APIs to automate data flows across four campuses.",
      "Refine the tools based on feedback from the staff who use them.",
    ],
  },
  {
    period: "Nov 2024 – Sep 2025",
    title: "Intern, Controller of Examinations",
    org: "Sri Sathya Sai Institute of Higher Learning",
    bullets: [
      "Shipped my first automation tools within days of joining.",
      "Built a Streamlit app that generates academic reports, replacing a manual process.",
      "Prototyped exam dispatch and result consolidation workflows.",
    ],
  },
];

const education: Row[] = [
  {
    period: "2021 – 2023",
    title: "MSc, Data Science",
    org: "GITAM University",
  },
  {
    period: "2017 – 2020",
    title: "BSc, Information Technology",
    org: "Amity University, Jaipur",
  },
];

const publications: Row[] = [
  {
    period: "2019",
    title: "Study on Use of AI and Big Data for Commercial Systems",
    org: "IEEE AICAI 2019",
    detail: "With S. Vyas, I. Choudhary and A. Chaudhary.",
    href: "https://doi.org/10.1109/AICAI.2019.8701361",
  },
];

function Group({ heading, rows }: { heading: string; rows: Row[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs text-faint mb-4">{heading}</h3>
      <ol className="divide-y divide-rule/10">
        {rows.map((r) => (
          <li key={r.title} className="py-5 first:pt-0 grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
            <span className="font-mono text-xs text-faint pt-1">{r.period}</span>
            <div>
              <p className="font-medium">
                {r.href ? (
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="link">
                    {r.title}
                  </a>
                ) : (
                  r.title
                )}
              </p>
              <p className="text-muted">{r.org}</p>
              {r.detail && <p className="mt-1 text-sm text-muted">{r.detail}</p>}
              {r.bullets && (
                <ul className="mt-3 space-y-1.5 text-muted leading-relaxed max-w-2xl">
                  {r.bullets.map((b) => (
                    <li key={b} className="pl-4 relative">
                      <span className="absolute left-0 text-faint" aria-hidden>
                        –
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <div className="space-y-12">
        <Group heading="Work" rows={work} />
        <Group heading="Education" rows={education} />
        <Group heading="Publications" rows={publications} />
      </div>
    </Section>
  );
}
