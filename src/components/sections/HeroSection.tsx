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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const personnel = [
  { key: "ROLE", value: "Full Stack Developer" },
  { key: "BASE", value: "Orlando, FL" },
  { key: "OPEN TO", value: "Remote · Hybrid · Onsite" },
  { key: "STACK", value: "React · Python · AWS · TypeScript" },
  { key: "DEGREE", value: "B.S. Computer Science — UCF" },
];


export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface"
    >
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

      {/* Radial glow — shifted left to match text column */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(255,224,87,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-24 pt-32">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

          {/* ── Left: main content ── */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Status badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400" />
              </span>
              <span className="font-mono text-xs text-muted tracking-[0.25em] uppercase">
                Available for hire
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold leading-[0.9] mb-7"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-primary">
                Joseph Somerville
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-accent text-glow">
                
              </span>
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.div
              variants={fadeUp}
              className="font-heading font-semibold text-xl sm:text-2xl text-secondary mb-6"
            >
              <TypewriterText />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-secondary text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
            >
              Defense Innovation Fellow and CS grad from UCF. I build
              production software that ships to real users — from mobile apps
              for Army Reserve soldiers to full-stack web platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
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

          {/* ── Right: Personnel file card (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            className="hidden lg:block"
          >
            <div className="border border-accent/20 rounded-lg overflow-hidden font-mono text-xs bg-card/60 backdrop-blur-sm">

              {/* Card header */}
              <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between bg-elevated/40">
                <span className="text-accent tracking-[0.25em] uppercase text-[11px]">
                  // Info
                </span>


              </div>

              {/* Key-value rows */}
              <div className="p-5 space-y-3.5">
                {personnel.map(({ key, value }) => (
                  <div key={key} className="grid grid-cols-[72px_1fr] gap-3 items-baseline">
                    <span className="text-accent text-[10px] uppercase tracking-widest">
                      {key}
                    </span>
                    <span className="text-secondary leading-snug">{value}</span>
                  </div>
                ))}
              </div>





              {/* Terminal footer */}
              <div className="px-5 py-3 border-t border-white/5 bg-elevated/20">
                <span className="text-muted text-[11px]">
                  <span className="text-accent">$</span>{" "}
                  status --available --open-to-relocate
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

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
