"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import ParticleField from "@/components/effects/ParticleField";
import TypewriterText from "@/components/ui/TypewriterText";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface"
    >
      {/* Particle field */}
      <ParticleField />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,224,87,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,224,87,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,224,87,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-accent text-sm mb-5 tracking-widest"
        >
          // hello
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-heading font-bold text-5xl sm:text-6xl lg:text-8xl text-primary mb-4 leading-none"
        >
          Joseph
          <br />
          <span className="text-accent text-glow">Somerville</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-secondary mb-6"
        >
          <TypewriterText />
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-secondary text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Building mission-critical software for real-world impact. 80+
          production tickets shipped. 400+ soldiers served.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-accent text-surface font-mono font-medium rounded hover:bg-accent/80 transition-all duration-200 text-center"
          >
            View My Work
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-all duration-200 glow-blue text-center"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-muted/60 to-transparent" />
      </div>
    </section>
  );
}
