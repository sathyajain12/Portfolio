"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "sathyajain9@gmail.com",
    href: "mailto:sathyajain9@gmail.com",
    color: "violet",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sathyajain12",
    href: "https://github.com/sathyajain12",
    color: "gray",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sathya-jain",
    href: "https://linkedin.com/in/sathya-jain",
    color: "blue",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0d0d0d]">
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
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mt-3">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            I'm open to full-time roles, freelance projects, or just a good conversation about
            building products.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-7">
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-7">
              <MapPin size={13} />
              <span>Jaipur, Rajasthan, India</span>
            </div>

            {/* Links */}
            <div className="space-y-3">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/4 hover:bg-white/8 border border-white/8 hover:border-white/20 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600/15 transition-colors">
                    <Icon size={15} className="text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600 font-mono mb-0.5">{label}</p>
                    <p className="text-sm text-white font-medium truncate">{value}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-600 group-hover:text-gray-300 transition-colors flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-20 space-y-1"
      >
        <p className="text-gray-600 text-sm font-mono">
          Built with Next.js & Tailwind CSS · Deployed on Vercel
        </p>
        <p className="text-gray-700 text-xs">© 2025 Sai Sathya Jain. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
