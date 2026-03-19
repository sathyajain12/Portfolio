"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Hover3DCard } from "./ui/Hover3DCard";

const projects = [
  {
    title: "Student Examination Services Portal",
    description:
      "Production full-stack portal handling 9 form types — Duplicate Grade Card, CGPA Conversion, Supplementary Exam, Degree Certificate, Name Change, Re-Totalling, Migration Certificate and more — with a multi-stage Director/Controller approval workflow and Gmail API notifications. Entire stack on Cloudflare: Workers, D1, Pages, Google Drive. Zero traditional server.",
    tech: ["React 19", "Vite", "Cloudflare Workers", "Cloudflare D1", "Google APIs", "Gmail API"],
    color: "violet",
    highlight: "9 form types · Multi-stage approvals · 4 campuses",
    stats: [
      { label: "Form types", value: "9" },
      { label: "Campuses", value: "4" },
      { label: "Servers", value: "0" },
    ],
  },
  {
    title: "IO-SYS — Inward/Outward Management System",
    description:
      "Full-stack correspondence management system for SSSIHL with separate Admin and Team portals. Features Google OAuth restricted to @sssihl.edu.in, Hono REST API on Cloudflare Workers, D1 database, assignment workflows with Pending → In Progress → Completed status tracking, dashboard analytics, and dark/light mode.",
    tech: ["React 19", "Hono", "Cloudflare Workers", "Cloudflare D1", "Google OAuth"],
    color: "cyan",
    highlight: "Admin & Team portals · OAuth-gated · Analytics dashboard",
    stats: [
      { label: "Portals", value: "2" },
      { label: "Status stages", value: "3" },
      { label: "Auth", value: "OAuth" },
    ],
  },
];

const techColorMap: Record<string, string> = {
  "React 19": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Vite: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Cloudflare Workers": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Cloudflare D1": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Google APIs": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Gmail API": "bg-red-500/10 text-red-400 border-red-500/20",
  Hono: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Google OAuth": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-white dark:bg-[#0a0a0a]">
      {/* Cyan glow bottom-right + noise */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 100% 100%, rgba(6,182,212,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-violet-400 tracking-widest uppercase">
            // featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-zinc-900 dark:text-white mt-3">
            Projects
          </h2>
          <p className="text-zinc-500 dark:text-gray-400 mt-3 max-w-xl text-base leading-relaxed">
            Real products built, deployed, and used — end to end, with full ownership.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Hover3DCard className="group relative bg-white dark:bg-[#141414] border border-black/8 dark:border-white/10 p-7 hover:border-violet-500/25">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 w-full h-full flex flex-col">
                  {/* Status badge */}
                  <div
                    className={`inline-flex items-center self-start gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-5 ${
                      project.color === "violet"
                        ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                        : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        project.color === "violet" ? "bg-violet-400" : "bg-cyan-400"
                      }`}
                    />
                    Production · Live
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-space font-bold text-zinc-900 dark:text-white mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Highlight strip */}
                  <p className="text-xs font-mono text-zinc-400 dark:text-gray-500 mb-4 border-l-2 border-violet-500/40 pl-3">
                    {project.highlight}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-5">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <span className="text-lg font-space font-bold text-zinc-900 dark:text-white leading-none">
                          {stat.value}
                        </span>
                        <span className="text-xs text-zinc-400 dark:text-gray-600 mt-0.5">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 text-xs rounded-md border font-medium ${
                          techColorMap[t] || "bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-gray-400 border-black/8 dark:border-white/10"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Hover3DCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/sathyajain12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 dark:text-gray-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
