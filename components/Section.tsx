"use client";

import { motion } from "framer-motion";

/**
 * Editorial section: a numbered label in the left margin column,
 * content on the right, separated from the previous section by a rule.
 */
export default function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 md:px-10 scroll-mt-16">
      <div className="max-w-page mx-auto border-t border-rule/15 py-16 md:py-24 grid md:grid-cols-12 gap-y-8 md:gap-x-10">
        <header className="md:col-span-3">
          <p className="font-mono text-xs text-faint">{number}</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-1 tracking-tight">{title}</h2>
        </header>
        <motion.div
          className="md:col-span-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
