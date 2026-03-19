"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-black/8 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-space text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
          SSJ<span className="text-violet-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 group ${
                  isActive
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full bg-violet-500 transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 border border-black/15 dark:border-white/15 hover:border-black/30 dark:hover:border-white/35 text-zinc-900 dark:text-white text-sm rounded-lg font-medium transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href="mailto:sathyajain9@gmail.com"
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="text-zinc-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#141414] border-t border-black/8 dark:border-white/10 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="w-fit flex items-center gap-1.5 px-4 py-2 border border-black/15 dark:border-white/15 text-zinc-900 dark:text-white text-sm rounded-lg font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href="mailto:sathyajain9@gmail.com"
            className="w-fit px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm rounded-lg font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
