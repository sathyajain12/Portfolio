import Section from "./Section";

const groups = [
  { label: "Frontend", items: "React 19, Next.js, TypeScript, Vite, Tailwind CSS" },
  { label: "Backend", items: "Cloudflare Workers, Hono, REST APIs, Supabase, Firebase" },
  { label: "Data & hosting", items: "Cloudflare D1 and Pages, Vercel, Google Cloud" },
  { label: "Integrations", items: "Google Workspace APIs (Gmail, Drive, Sheets), Google OAuth" },
  { label: "Automation", items: "Python, Google Apps Script, n8n, Streamlit" },
];

export default function Skills() {
  return (
    <Section id="toolkit" number="03" title="Toolkit">
      <dl className="divide-y divide-rule/10">
        {groups.map((g) => (
          <div key={g.label} className="py-4 first:pt-0 grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
            <dt className="font-mono text-xs text-faint pt-1">{g.label}</dt>
            <dd className="leading-relaxed">{g.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
