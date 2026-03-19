"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useRef } from "react";

export const Hover3DCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // For Tilt
    const xPos = (clientX - left - width / 2) / 25;
    const yPos = (clientY - top - height / 2) / 25;
    x.set(xPos);
    y.set(yPos);

    // For Glare
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: useMotionTemplate`perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`,
      }}
      className={`relative group h-full w-full rounded-2xl transition-all duration-200 ease-linear ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-soft-light z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
};
