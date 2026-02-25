import { skillCategories } from "@/data/skills";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";

const stats = [
  { value: "80+", label: "Production Tickets" },
  { value: "400+", label: "Soldiers Served" },
  { value: "11", label: "Person Team Led" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" title="About" />

        <div className="grid lg:grid-cols-2 gap-16 mt-14">
          {/* Bio + stats */}
          <div>
            <p className="text-secondary text-lg leading-relaxed mb-5">
              I&apos;m a full stack developer and recent Computer Science
              graduate from UCF with hands-on experience shipping production
              software for the U.S. Army Reserve.
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-5">
              As a Defense Innovation Summer Fellow (NSIN / DIU), I built and
              deployed features for Project Mercury — a cross-platform
              application used by 400+ soldiers — owning entire features from
              mockup to production across React Native, React, Python, and AWS.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              I&apos;m looking for full stack, front end, or back end roles
              where I can keep building software that matters. Open to
              in-office, hybrid, or remote within the US — willing to relocate.
            </p>

            {/* Stat counters */}
            <div className="flex gap-10 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-4xl text-accent text-glow">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category) => (
              <GlowCard key={category.label}>
                <h3 className="font-mono text-accent text-xs tracking-widest mb-4 uppercase">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill}>{skill}</TechBadge>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
