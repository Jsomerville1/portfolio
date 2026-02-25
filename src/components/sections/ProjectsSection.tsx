import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" title="Projects" />

        <div className="mt-14 space-y-6">
          {/* Featured — full width */}
          {featured && <ProjectCard project={featured} featured />}

          {/* Rest — grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
