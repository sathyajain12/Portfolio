"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    color: "cyan",
    skills: ["React 19", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    color: "violet",
    skills: [
      "Cloudflare Workers",
      "Hono",
      "REST APIs",
      "Supabase",
      "Firebase",
      "Google Workspace APIs",
    ],
  },
  {
    label: "Infrastructure",
    color: "orange",
    skills: ["Cloudflare D1", "Cloudflare Pages", "Vercel", "GCP", "Git", "GitHub"],
  },
  {
    label: "Languages",
    color: "green",
    skills: ["TypeScript", "JavaScript", "Python", "Google Apps Script"],
  },
  {
    label: "Automation",
    color: "yellow",
    skills: ["n8n", "Python Scripting", "Google Apps Script"],
  },
  {
    label: "Data & Research",
    color: "pink",
    skills: ["Data Science", "Big Data", "Streamlit", "IEEE Publication"],
  },
];

type ColorKey = "cyan" | "violet" | "orange" | "green" | "yellow" | "pink";

const colorMap: Record<
  ColorKey,
  { header: string; dot: string; badge: string }
> = {
  cyan: {
    header: "text-cyan-400",
    dot: "bg-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  violet: {
    header: "text-violet-400",
    dot: "bg-violet-400",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  orange: {
    header: "text-orange-400",
    dot: "bg-orange-400",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  green: {
    header: "text-green-400",
    dot: "bg-green-400",
    badge: "bg-green-500/10 text-green-300 border-green-500/20",
  },
  yellow: {
    header: "text-yellow-400",
    dot: "bg-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
  pink: {
    header: "text-pink-400",
    dot: "bg-pink-400",
    badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-violet-400 tracking-widest uppercase">
            // tech stack
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mt-3">
            Skills
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            Technologies I work with to build and ship products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const colors = colorMap[group.color as ColorKey];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#141414] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors duration-300"
              >
                {/* Group header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <span className={`text-sm font-space font-semibold ${colors.header}`}>
                    {group.label}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs rounded-md border font-medium ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
