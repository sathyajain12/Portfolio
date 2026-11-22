import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <GitHubStats />
      <Contact />
    </main>
  );
}
