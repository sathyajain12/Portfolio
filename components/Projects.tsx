import Section from "./Section";

type Project = {
  title: string;
  year: string;
  summary: string;
  problem: string;
  built: string[];
  facts: { value: string; label: string }[];
  stack: string[];
};

const projects: Project[] = [
  {
    title: "Student Examination Services Portal",
    year: "2025",
    summary:
      "One place for students to request grade cards, certificates and re-evaluations, and for the exams office to approve them.",
    problem:
      "Nine kinds of request (duplicate grade cards, CGPA conversion, supplementary exams, degree certificates, name changes, re-totalling, migration certificates and more) arrived as paper forms and emails, then moved between desks by hand.",
    built: [
      "A single portal with a form for each request type and a status page students can check.",
      "A multi-stage approval flow through the Director and the Controller of Examinations.",
      "Gmail API notifications at each step, with uploaded documents stored in Google Drive.",
      "Everything deployed on Cloudflare Workers, D1 and Pages, so there is no server to maintain.",
    ],
    facts: [
      { value: "9", label: "request types" },
      { value: "4", label: "campuses" },
    ],
    stack: ["React 19", "Vite", "Cloudflare Workers", "D1", "Gmail API", "Google Drive"],
  },
  {
    title: "IO-SYS",
    year: "2025",
    summary:
      "An inward/outward correspondence register for the institute, with separate portals for administrators and the team.",
    problem:
      "Incoming and outgoing letters were logged in registers and spreadsheets, so it was hard to see who held a letter or whether it had been answered.",
    built: [
      "An admin portal for logging correspondence and assigning it to people.",
      "A team portal where each assignment moves from Pending to In Progress to Completed.",
      "Sign-in with Google OAuth, restricted to @sssihl.edu.in accounts.",
      "A dashboard of volumes and turnaround, served by a Hono API on Cloudflare Workers.",
    ],
    facts: [{ value: "2", label: "portals, admin and team" }],
    stack: ["React 19", "Hono", "Cloudflare Workers", "D1", "Google OAuth"],
  },
];

export default function Projects() {
  return (
    <Section id="work" number="01" title="Selected work">
      <div className="divide-y divide-rule/15">
        {projects.map((p, i) => (
          <article key={p.title} className={i === 0 ? "pb-14" : "py-14 last:pb-0"}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight">{p.title}</h3>
              <span className="font-mono text-xs text-faint shrink-0">{p.year}</span>
            </div>
            <p className="mt-3 text-lg leading-relaxed max-w-2xl">{p.summary}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h4 className="font-mono text-xs text-faint mb-2">The problem</h4>
                <p className="text-muted leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs text-faint mb-2">What I built</h4>
                <ul className="space-y-2 text-muted leading-relaxed">
                  {p.built.map((b) => (
                    <li key={b} className="pl-4 relative">
                      <span className="absolute left-0 text-faint" aria-hidden>
                        –
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-4">
              {p.facts.map((f) => (
                <div key={f.label}>
                  <span className="font-serif text-4xl leading-none">{f.value}</span>
                  <span className="ml-2 text-sm text-muted">{f.label}</span>
                </div>
              ))}
              <p className="font-mono text-xs text-faint sm:ml-auto">{p.stack.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
