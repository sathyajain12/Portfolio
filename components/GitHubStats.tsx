"use client";

import { useEffect, useState } from "react";
import Section from "./Section";

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
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <Section id="code" number="04" title="On GitHub">
      <p className="text-muted max-w-2xl">
        Smaller tools and experiments.
        {data && ` ${data.publicRepos} public repositories.`}{" "}
        <a
          href="https://github.com/sathyajain12"
          target="_blank"
          rel="noopener noreferrer"
          className="link text-ink"
        >
          github.com/sathyajain12
        </a>
      </p>

      <ul className="mt-8 divide-y divide-rule/10 border-t border-rule/10">
        {(data?.topRepos ?? Array.from({ length: 4 }, () => null)).map((repo, i) => (
          <li key={repo?.name ?? i}>
            {repo ? (
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid sm:grid-cols-[14rem_1fr_auto] gap-x-6 gap-y-1 py-4"
              >
                <span className="font-mono text-sm group-hover:text-accent transition-colors truncate">
                  {repo.name}
                </span>
                <span className="text-muted text-sm line-clamp-2">
                  {repo.description ?? "No description"}
                </span>
                <span className="font-mono text-xs text-faint whitespace-nowrap sm:text-right pt-0.5">
                  {[repo.language, repo.stars > 0 ? `★ ${repo.stars}` : null]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </a>
            ) : (
              <div className="py-4 grid sm:grid-cols-[14rem_1fr] gap-6" aria-hidden>
                <span className="h-3 w-32 bg-rule/10 rounded-sm" />
                <span className="h-3 w-3/4 bg-rule/5 rounded-sm" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
