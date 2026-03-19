import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <GitHubStats />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
