import { skillCategories } from "@/data/skills";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/effects/ScrollReveal";

const stats = [
  { value: "80+", label: "Production Tickets" },
  { value: "400+", label: "Soldiers Served" },
  { value: "11", label: "Person Team Led" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading index="01" title="About" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-14">
          {/* Bio + stats */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-secondary text-lg leading-relaxed mb-5">
                I&apos;m a full stack developer and recent Computer Science
                graduate from UCF with hands-on experience shipping production
                software for the U.S. Army Reserve.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-5">
                As a Defense Innovation Summer Fellow (NSIN / DIU), I built and
                deployed features for Project Mercury — a cross-platform
                application used by 400+ soldiers — owning entire features from
                mockup to production across React Native, React, Python, and
                AWS.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                I&apos;m looking for full stack, front end, or back end roles
                where I can keep building software that matters. Open to
                in-office, hybrid, or remote within the US — willing to
                relocate.
              </p>
            </ScrollReveal>

            {/* Animated stat counters */}
            <ScrollReveal delay={0.2}>
              <div className="flex gap-10 mt-12">
                {stats.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, i) => (
              <ScrollReveal key={category.label} delay={i * 0.08}>
                <GlowCard className="h-full">
                  <h3 className="font-mono text-accent text-xs tracking-widest mb-4 uppercase">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechBadge key={skill}>{skill}</TechBadge>
                    ))}
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
