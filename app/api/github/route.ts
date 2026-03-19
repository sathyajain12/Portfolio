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

  const topRepos = repos
    .filter((r: { fork: boolean }) => !r.fork)
    .slice(0, 4)
    .map((r: {
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      html_url: string;
    }) => ({
      name: r.name,
      description: r.description,
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
