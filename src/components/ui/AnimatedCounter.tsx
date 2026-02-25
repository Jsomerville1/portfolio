"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedCounterProps {
  value: string; // e.g. "80+" or "11"
  label: string;
}

export default function AnimatedCounter({
  value,
  label,
}: AnimatedCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(spanRef, { once: true });
  const prefersReducedMotion = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || prefersReducedMotion || !spanRef.current) return;

    const controls = animate(0, num, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        if (spanRef.current) {
          spanRef.current.textContent = Math.round(v) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, num, suffix, prefersReducedMotion]);

  return (
    <div>
      <div className="font-heading font-bold text-4xl text-accent text-glow">
        <span ref={spanRef}>{value}</span>
      </div>
      <div className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
