import { experience, education } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import TechBadge from "@/components/ui/TechBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-28 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeading index="03" title="Resume" />

        {/* Education */}
        <div className="mt-14 mb-14">
          <h3 className="font-mono text-accent text-xs tracking-widest uppercase mb-8">
            Education
          </h3>
          {education.map((entry) => (
            <div
              key={entry.title}
              className="border-l-2 border-elevated pl-6 relative"
            >
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-heading font-bold text-primary">
                  {entry.title}
                </h4>
                <span className="font-mono text-xs text-muted shrink-0">
                  {entry.period}
                </span>
              </div>
              <p className="text-accent text-sm mt-1">
                {entry.company} — {entry.location}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-14">
          <h3 className="font-mono text-accent text-xs tracking-widest uppercase mb-8">
            Experience
          </h3>
          <div className="space-y-10">
            {experience.map((entry) => (
              <div
                key={entry.title}
                className="border-l-2 border-elevated pl-6 relative"
              >
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h4 className="font-heading font-bold text-primary">
                      {entry.title}
                    </h4>
                    <p className="text-accent text-sm mt-0.5">{entry.company}</p>
                    <p className="text-muted text-xs">{entry.location}</p>
                  </div>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {entry.period}
                  </span>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="text-secondary text-sm flex gap-2">
                      <span className="text-accent shrink-0 mt-0.5">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                {entry.tech && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tech.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills summary */}
        <div className="mb-14">
          <h3 className="font-mono text-accent text-xs tracking-widest uppercase mb-8">
            Skills
          </h3>
          <div className="space-y-3">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="flex gap-3 items-baseline">
                <span className="font-mono text-xs text-muted uppercase tracking-widest shrink-0 w-36">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill}>{skill}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center pt-4">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-all duration-200 glow-blue"
          >
            Download Full Resume (PDF)
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
