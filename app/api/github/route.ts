import { NextResponse } from "next/server";

export async function GET() {
  const headers = { "User-Agent": "sai-portfolio" };

  const [userRes, reposRes] = await Promise.all([
    fetch("https://api.github.com/users/sathyajain12", {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(
      "https://api.github.com/users/sathyajain12/repos?sort=updated&per_page=8&type=public",
      { headers, next: { revalidate: 3600 } }
    ),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    return NextResponse.json({ error: "GitHub API error" }, { status: 502 });
  }

  const user = await userRes.json();
  const repos = await reposRes.json();

  const totalStars = repos.reduce(
    (sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count,
    0
  );

  // ✏️ Add or remove repo names here to control which ones appear on your portfolio
  const PINNED_REPOS = [
    "Student_service",
    "slack-clone",
    "Gmail-AI-Assistant",
  ];

  // ✏️ Custom descriptions — overrides whatever is written on GitHub
  const CUSTOM_DESCRIPTIONS: Record<string, string> = {
    "Student_service": "Full-stack student examination services portal handling 9 form types with multi-stage Director/Controller approval workflow. Built on Cloudflare Workers, D1, and Pages.",
    "slack-clone": "A Slack-inspired real-time messaging application clone built with JavaScript.",
    "Gmail-AI-Assistant": "AI-powered Gmail assistant that reads, summarizes, and drafts emails using natural language. Powered by Google Apps Script and an AI API integration.",
  };

  const topRepos = repos
    .filter((r: { fork: boolean; name: string }) =>
      PINNED_REPOS.includes(r.name)
    )
    .sort(
      (a: { name: string }, b: { name: string }) =>
        PINNED_REPOS.indexOf(a.name) - PINNED_REPOS.indexOf(b.name)
    )
    .map((r: {
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      html_url: string;
    }) => ({
      name: r.name,
      description: CUSTOM_DESCRIPTIONS[r.name] ?? r.description,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      url: r.html_url,
    }));

  return NextResponse.json({
    publicRepos: user.public_repos,
    followers: user.followers,
    totalStars,
    topRepos,
  });
}
