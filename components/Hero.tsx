"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const roles = [
  "Full-Stack Developer",
  "Product Builder",
  "React & Next.js Dev",
  "Cloudflare Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
      {/* Noise + gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Violet radial glow from top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(109,40,217,0.18) 0%, transparent 70%)",
          }}
        />
        {/* SVG noise texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="px-6 pt-20 flex flex-col items-center justify-center w-full h-full relative z-10">
          {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono text-cyan-400 border border-cyan-400/25 rounded-full bg-cyan-400/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open to full-time opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-space font-bold text-zinc-900 dark:text-white mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Sai Sathya Jain
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          className="h-12 mb-6 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span
            className="text-2xl md:text-3xl text-violet-400 font-space font-semibold transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {roles[roleIndex]}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-zinc-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build and ship full-stack web products end-to-end — from rough idea to
          working, deployed product with{" "}
          <span className="text-zinc-800 dark:text-gray-200">full ownership, clean code, and real users.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MagneticButton>
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              See My Work <ArrowRight size={16} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/15 hover:border-white/35 text-white rounded-xl font-medium transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/25 text-gray-400 hover:text-white rounded-xl font-medium transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Resume
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { icon: Github, href: "https://github.com/sathyajain12", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/sathya-jain", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sathyajain9@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-400 dark:text-gray-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

        </div>
      </div>
    </section>
  );
}
