"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "sathyajain9@gmail.com",
    href: "mailto:sathyajain9@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sathyajain12",
    href: "https://github.com/sathyajain12",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sathya-jain",
    href: "https://linkedin.com/in/sathya-jain",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeernrrp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6 bg-white dark:bg-[#0a0a0a]">
      {/* Violet glow bottom-center + noise */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(109,40,217,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-violet-400 tracking-widest uppercase">
            // say hello
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-zinc-900 dark:text-white mt-3">
            Get in Touch
          </h2>
          <p className="text-zinc-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            I'm open to full-time roles, freelance projects, or just a good conversation about
            building products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-[#141414] border border-black/8 dark:border-white/10 rounded-2xl p-7 h-full">
              <h3 className="text-zinc-900 dark:text-white font-medium mb-5 text-sm">Send a message</h3>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-48 gap-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Send size={16} className="text-green-400" />
                  </div>
                  <p className="text-zinc-900 dark:text-white text-sm font-medium">Message sent!</p>
                  <p className="text-zinc-400 dark:text-gray-500 text-xs">I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-violet-400 hover:text-violet-300 transition-colors mt-1"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-400 text-xs">Something went wrong. Try emailing directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:pointer-events-none text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20"
                  >
                    <Send size={14} />
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-[#141414] border border-black/8 dark:border-white/10 rounded-2xl p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-gray-500 text-sm mb-7">
                  <MapPin size={13} />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="space-y-3">
                  {links.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-black/3 dark:bg-white/4 hover:bg-black/6 dark:hover:bg-white/8 border border-black/8 dark:border-white/8 hover:border-black/15 dark:hover:border-white/20 rounded-xl transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600/15 transition-colors">
                        <Icon size={15} className="text-violet-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-400 dark:text-gray-600 font-mono mb-0.5">{label}</p>
                        <p className="text-sm text-zinc-900 dark:text-white font-medium truncate">{value}</p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-400 dark:text-gray-600 group-hover:text-zinc-700 dark:group-hover:text-gray-300 transition-colors flex-shrink-0"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-20 space-y-1"
      >
        <p className="text-zinc-400 dark:text-gray-600 text-sm font-mono">
          Built with Next.js & Tailwind CSS · Deployed on Vercel
        </p>
        <p className="text-zinc-400 dark:text-gray-700 text-xs">© 2025 Sai Sathya Jain. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
