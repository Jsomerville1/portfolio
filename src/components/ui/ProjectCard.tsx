import Link from "next/link";
import { Project } from "@/data/projects";
import TechBadge from "./TechBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-lg overflow-hidden card-hover flex flex-col",
        featured && "md:flex-row"
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "bg-elevated flex items-center justify-center shrink-0 overflow-hidden",
          featured ? "md:w-5/12 h-56 md:h-auto" : "h-44"
        )}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-heading font-bold text-5xl text-muted/40">
            {project.title[0]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {featured && (
          <span className="font-mono text-xs text-accent tracking-widest mb-2 uppercase">
            // Featured Project
          </span>
        )}
        <h3 className="font-heading font-bold text-xl text-primary mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-muted mb-3">{project.subtitle}</p>
        <p className="text-secondary text-sm leading-relaxed mb-5 flex-1">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 6).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="font-mono text-sm text-accent hover:text-accent/70 transition-colors"
          >
            View Case Study →
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted hover:text-secondary transition-colors"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted hover:text-secondary transition-colors"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
