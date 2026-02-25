import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/effects/ScrollReveal";

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading index="02" title="Projects" />
        </ScrollReveal>

        <div className="mt-14 space-y-6">
          {/* Featured — full width */}
          {featured && (
            <ScrollReveal delay={0.1}>
              <ProjectCard project={featured} featured />
            </ScrollReveal>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
