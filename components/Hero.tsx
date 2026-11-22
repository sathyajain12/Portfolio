"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24">
      <motion.div
        className="max-w-page mx-auto grid md:grid-cols-12 gap-y-10 md:gap-x-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="md:col-span-3 font-mono text-xs text-faint leading-relaxed md:pt-4">
          Full-stack developer
          <br />
          Jaipur, India
        </p>

        <div className="md:col-span-9">
          <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl md:leading-[1.04] tracking-tight max-w-4xl">
            I build the software an examinations office{" "}
            <em className="text-accent">runs on</em>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            At Sri Sathya Sai Institute of Higher Learning I turn paper forms and email chains into
            web apps that staff and students use across four campuses. Most of it runs on
            Cloudflare Workers and D1, with no servers to look after.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a href="#work" className="link">
              Read the case studies
            </a>
            <a href="/resume.pdf" className="link">
              Résumé (PDF)
            </a>
            <a href="mailto:sathyajain9@gmail.com" className="link">
              sathyajain9@gmail.com
            </a>
          </div>

          <p className="mt-10 font-mono text-xs text-faint">
            Currently open to full-time roles.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
