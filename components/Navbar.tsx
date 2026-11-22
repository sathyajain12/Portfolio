"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Code", href: "#code" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="font-mono text-xs text-muted hover:text-ink transition-colors"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
    >
      {/* Render a stable placeholder until the theme is known, to avoid a hydration mismatch. */}
      {mounted ? (isDark ? "Light" : "Dark") : "Theme"}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 px-6 md:px-10 bg-paper/90 backdrop-blur-sm transition-[border-color] duration-200 border-b ${
        scrolled ? "border-rule/15" : "border-transparent"
      }`}
    >
      <div className="max-w-page mx-auto h-14 flex items-center justify-between gap-6">
        <a href="#" className="font-serif text-lg tracking-tight">
          Sai Sathya Jain
        </a>
        <div className="flex items-center gap-5 md:gap-7 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden sm:inline text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
