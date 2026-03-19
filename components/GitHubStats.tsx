"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
};

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
}

interface GitHubData {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topRepos: Repo[];
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <section id="github" className="py-24 bg-[#0a0a0a] dark:bg-[#0a0a0a] bg-white relative">
      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white dark:text-white mb-2">
              Open Source
            </h2>
            <p className="text-gray-400 dark:text-gray-400">
              What I&apos;ve been building and shipping on GitHub
            </p>
          </div>
          <a
            href="https://github.com/sathyajain12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/15 dark:border-white/15 hover:border-white/35 text-gray-400 dark:text-gray-400 hover:text-white text-sm rounded-xl transition-all duration-200 hover:bg-white/5"
          >
            <Github size={15} />
            View Profile
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-6 mb-10"
        >
          {[
            { label: "Public Repos", value: data?.publicRepos },
            { label: "Followers", value: data?.followers },
            { label: "Total Stars", value: data?.totalStars },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="text-2xl font-space font-bold text-white dark:text-white">
                {value !== undefined ? value : "—"}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Repo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data?.topRepos ?? Array(4).fill(null)).map((repo, i) => (
            <motion.a
              key={repo?.name ?? i}
              href={repo?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="group flex flex-col gap-3 p-5 bg-[#141414] dark:bg-[#141414] border border-white/8 dark:border-white/8 rounded-2xl hover:border-violet-500/30 transition-all duration-300 hover:bg-[#1a1a1a] dark:hover:bg-[#1a1a1a]"
            >
              {repo ? (
                <>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink size={13} className="text-gray-600 group-hover:text-gray-400 shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {repo.description ?? "No description"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-600">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: languageColors[repo.language] ?? "#888",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star size={11} /> {repo.stars}
                      </span>
                    )}
                    {repo.forks > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork size={11} /> {repo.forks}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                /* Skeleton */
                <>
                  <div className="h-3 w-32 bg-white/5 rounded animate-pulse" />
                  <div className="h-2.5 w-full bg-white/4 rounded animate-pulse" />
                  <div className="h-2.5 w-3/4 bg-white/4 rounded animate-pulse" />
                  <div className="h-2 w-16 bg-white/3 rounded animate-pulse mt-1" />
                </>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
