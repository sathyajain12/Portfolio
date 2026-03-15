"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Student Examination Services Portal",
    description:
      "Production full-stack portal handling 9 form types — Duplicate Grade Card, CGPA Conversion, Supplementary Exam, Degree Certificate, Name Change, Re-Totalling, Migration Certificate and more — with a multi-stage Director/Controller approval workflow and Gmail API notifications. Entire stack on Cloudflare: Workers, D1, Pages, Google Drive. Zero traditional server.",
    tech: ["React 19", "Vite", "Cloudflare Workers", "Cloudflare D1", "Google APIs", "Gmail API"],
    color: "violet",
    highlight: "9 form types · Multi-stage approvals · 4 campuses",
  },
  {
    title: "IO-SYS — Inward/Outward Management System",
    description:
      "Full-stack correspondence management system for SSSIHL with separate Admin and Team portals. Features Google OAuth restricted to @sssihl.edu.in, Hono REST API on Cloudflare Workers, D1 database, assignment workflows with Pending → In Progress → Completed status tracking, dashboard analytics, and dark/light mode.",
    tech: ["React 19", "Hono", "Cloudflare Workers", "Cloudflare D1", "Google OAuth"],
    color: "cyan",
    highlight: "Admin & Team portals · OAuth-gated · Analytics dashboard",
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
    <section id="projects" className="py-28 px-6">
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
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mt-3">
            Projects
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl text-base leading-relaxed">
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
              className="group relative bg-[#141414] border border-white/10 rounded-2xl p-7 hover:border-violet-500/25 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Status badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-5 ${
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
                <h3 className="text-xl font-space font-bold text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Highlight strip */}
                <p className="text-xs font-mono text-gray-500 mb-4 border-l-2 border-violet-500/40 pl-3">
                  {project.highlight}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-xs rounded-md border font-medium ${
                        techColorMap[t] || "bg-white/5 text-gray-400 border-white/10"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
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
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
