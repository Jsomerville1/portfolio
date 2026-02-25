"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const phrases = [
  "Full Stack Developer",
  "Defense Innovation Fellow",
  "Mission-Critical Software",
];

const TYPING_SPEED = 65;
const DELETING_SPEED = 35;
const PAUSE_DURATION = 2600;

export default function TypewriterText() {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(phrases[0]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;
    let phraseI = 0;
    let charI = phrases[0].length; // start fully typed
    let deleting = false;

    const step = () => {
      const current = phrases[phraseI];

      if (!deleting) {
        if (charI < current.length) {
          charI++;
          setDisplayed(current.slice(0, charI));
          timeout = setTimeout(step, TYPING_SPEED);
        } else {
          // Pause, then delete
          timeout = setTimeout(() => {
            deleting = true;
            step();
          }, PAUSE_DURATION);
        }
      } else {
        if (charI > 0) {
          charI--;
          setDisplayed(current.slice(0, charI));
          timeout = setTimeout(step, DELETING_SPEED);
        } else {
          // Advance to next phrase
          phraseI = (phraseI + 1) % phrases.length;
          deleting = false;
          timeout = setTimeout(step, TYPING_SPEED);
        }
      }
    };

    // Delay first cycle so hero animation finishes first
    timeout = setTimeout(step, 2200);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="text-accent">{phrases[0]}</span>;
  }

  return (
    <span className="text-accent">
      {displayed}
      <span className="inline-block w-0.5 h-[0.85em] bg-accent ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
