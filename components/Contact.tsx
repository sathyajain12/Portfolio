"use client";

import { useState } from "react";
import Section from "./Section";

const links = [
  { label: "Email", value: "sathyajain9@gmail.com", href: "mailto:sathyajain9@gmail.com" },
  { label: "GitHub", value: "github.com/sathyajain12", href: "https://github.com/sathyajain12" },
  { label: "LinkedIn", value: "linkedin.com/in/sathya-jain", href: "https://linkedin.com/in/sathya-jain" },
];

const field =
  "w-full bg-transparent border-0 border-b border-rule/25 px-0 py-2.5 text-ink placeholder:text-faint focus:outline-none focus:ring-0 focus:border-accent transition-colors";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xeernrrp", {
        method: "POST",
        body: new FormData(form),
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
    <>
      <Section id="contact" number="05" title="Contact">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="font-serif text-2xl md:text-3xl leading-snug tracking-tight">
              I&apos;m looking for a full-time role building products people rely on.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Email is the fastest way to reach me. I&apos;m based in Jaipur, Rajasthan.
            </p>
            <dl className="mt-8 divide-y divide-rule/10 border-t border-rule/10">
              {links.map((l) => (
                <div key={l.label} className="py-3 grid grid-cols-[6rem_1fr] gap-4">
                  <dt className="font-mono text-xs text-faint pt-1">{l.label}</dt>
                  <dd className="min-w-0 truncate">
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {l.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-mono text-xs text-faint mb-2">Or leave a message</h3>
            {status === "success" ? (
              <div className="py-8">
                <p className="font-serif text-xl">Thanks, your message is on its way.</p>
                <p className="mt-2 text-muted">I&apos;ll get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="link mt-4 text-sm">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input type="text" name="name" required placeholder="Name" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input type="email" name="email" required placeholder="Email" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Message"
                    className={`${field} resize-none`}
                  />
                </label>
                {status === "error" && (
                  <p className="text-sm text-accent">
                    That didn&apos;t go through. Please email me directly instead.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-5 py-2.5 bg-ink text-paper text-sm hover:bg-accent disabled:opacity-50 transition-colors"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <footer className="px-6 md:px-10">
        <div className="max-w-page mx-auto border-t border-rule/15 py-8 pb-24 flex flex-wrap justify-between gap-4 font-mono text-xs text-faint">
          <span>© {new Date().getFullYear()} Sai Sathya Jain</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
