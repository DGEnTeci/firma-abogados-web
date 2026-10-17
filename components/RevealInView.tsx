"use client";

import React, { memo, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export const RevealInView = memo(function RevealInView({
  children,
  delay = 0,
  className = "",
  yOffset = 18,
}: RevealInViewProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});
