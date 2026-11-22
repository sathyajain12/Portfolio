"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A small accent dot that trails the native cursor and opens into a ring
 * over links and buttons. The native cursor stays visible.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, input, textarea, label"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className={`fixed top-0 left-0 z-[100] pointer-events-none rounded-full border border-accent transition-colors duration-150 ${
        hovering ? "bg-transparent" : "bg-accent"
      }`}
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? 34 : 8,
        height: hovering ? 34 : 8,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    />
  );
}
