"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

type WorkEntry = {
  type: "work";
  title: string;
  org: string;
  period: string;
  bullets: string[];
  current: boolean;
};

type EducationEntry = {
  type: "education";
  title: string;
  org: string;
  period: string;
  extra: string;
  current: boolean;
};

type PublicationEntry = {
  type: "publication";
  title: string;
  org: string;
  period: string;
  extra: string;
  current: boolean;
};

type Entry = WorkEntry | EducationEntry | PublicationEntry;

const entries: Entry[] = [
  {
    type: "work",
    title: "Assistant Manager, Controller of Examinations",
    org: "Sri Sathya Sai Institute of Higher Learning",
    period: "Sep 2025 – Present",
    bullets: [
      "Build internal web apps end-to-end — rough idea in a meeting to working prototype the same day.",
      "Ship clean, usable UIs directly from vague requirements with full ownership from idea to deployment.",
      "Integrate REST & Google Workspace APIs to automate data pipelines across four campuses; continuously refine UX based on real user feedback.",
    ],
    current: true,
  },
  {
    type: "work",
    title: "Intern, Controller of Examinations",
    org: "Sri Sathya Sai Institute of Higher Learning",
    period: "Nov 2024 – Sep 2025",
    bullets: [
      "Delivered automation tools within days of joining; prototyped, tested, and shipped independently with no prior onboarding.",
      "Built a Streamlit app for automated academic report generation, replacing a fully manual process.",
      "Prototyped exam dispatch & result consolidation workflows.",
    ],
    current: false,
  },
  {
    type: "education",
    title: "MSc in Data Science",
    org: "Gitam University",
    period: "Oct 2021 – June 2023",
    extra: "CGPA: 7.0",
    current: false,
  },
  {
    type: "education",
    title: "BSc in Information Technology",
    org: "Amity University, Jaipur",
    period: "Aug 2017 – April 2020",
    extra: "CGPA: 7.0",
    current: false,
  },
  {
    type: "publication",
    title: "IEEE Research Publication",
    org: "AICAI 2019 — DOI: 10.1109/AICAI.2019.8701361",
    period: "2019",
    extra:
      "Study on Use of AI and Big Data for Commercial Systems — co-authored with Vyas, S., Choudhary, I., Chaudhary, A.",
    current: false,
  },
];

const iconConfig = {
  work: { icon: Briefcase, bg: "bg-violet-600/10", border: "border-violet-500/25", color: "text-violet-400" },
  education: { icon: GraduationCap, bg: "bg-cyan-500/10", border: "border-cyan-500/25", color: "text-cyan-400" },
  publication: { icon: BookOpen, bg: "bg-orange-500/10", border: "border-orange-500/25", color: "text-orange-400" },
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 75%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-28 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-violet-400 tracking-widest uppercase">
            // background
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-zinc-900 dark:text-white mt-3">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-white/5 md:left-6 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-500/80 to-violet-500/20"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-6">
            {entries.map((entry, i) => {
              const cfg = iconConfig[entry.type];
              const Icon = cfg.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative pl-16 md:pl-18"
                  style={{ paddingLeft: "4.5rem" }}
                >
                  {/* Icon bubble */}
                  <div
                    className={`absolute left-0 w-11 h-11 rounded-xl flex items-center justify-center border ${cfg.bg} ${cfg.border}`}
                  >
                    <Icon size={16} className={cfg.color} />
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-[#141414] border border-black/8 dark:border-white/10 rounded-xl p-5 hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="text-base font-space font-semibold text-zinc-900 dark:text-white leading-snug">
                          {entry.title}
                          {entry.current && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-green-500/10 text-green-400 border border-green-500/20 rounded-full align-middle">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-violet-400 mt-0.5">{entry.org}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 dark:text-gray-600 whitespace-nowrap pt-0.5">
                        {entry.period}
                      </span>
                    </div>

                    {/* Work bullets */}
                    {entry.type === "work" && (
                      <ul className="mt-3 space-y-2">
                        {entry.bullets.map((b, j) => (
                          <li key={j} className="text-sm text-zinc-500 dark:text-gray-400 flex gap-2 leading-relaxed">
                            <span className="text-violet-500 mt-0.5 flex-shrink-0 font-bold">›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Education / Publication extra */}
                    {(entry.type === "education" || entry.type === "publication") && entry.extra && (
                      <p className="mt-2 text-sm text-zinc-500 dark:text-gray-400">{entry.extra}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
