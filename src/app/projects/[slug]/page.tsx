import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import TechBadge from "@/components/ui/TechBadge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Joseph Somerville`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-surface pt-24 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/#projects"
          className="font-mono text-sm text-muted hover:text-accent transition-colors flex items-center gap-2 mb-14"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <p className="font-mono text-accent text-sm tracking-widest mb-3">
          // CASE STUDY
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary mb-2">
          {project.title}
        </h1>
        <p className="font-mono text-muted text-sm mb-6">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:text-accent/70 transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:text-accent/70 transition-colors"
            >
              Live Demo →
            </a>
          )}
          {project.devpost && (
            <a
              href={project.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:text-accent/70 transition-colors"
            >
              Devpost →
            </a>
          )}
        </div>

        {/* YouTube embed */}
        {project.youtubeId && (
          <div className="mb-14 aspect-video rounded-lg overflow-hidden bg-card border border-white/5">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={`${project.title} Demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* STAR method */}
        <div className="space-y-14">
          <div>
            <h2 className="font-heading font-bold text-2xl text-primary mb-5 flex items-center gap-4">
              <span className="font-mono text-accent text-sm bg-accent/10 px-2 py-1 rounded">
                01
              </span>
              Situation
            </h2>
            <p className="text-secondary leading-relaxed text-lg">
              {project.situation}
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-primary mb-5 flex items-center gap-4">
              <span className="font-mono text-accent text-sm bg-accent/10 px-2 py-1 rounded">
                02
              </span>
              Task
            </h2>
            <p className="text-secondary leading-relaxed text-lg">
              {project.task}
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-primary mb-5 flex items-center gap-4">
              <span className="font-mono text-accent text-sm bg-accent/10 px-2 py-1 rounded">
                03
              </span>
              Actions
            </h2>
            <ul className="space-y-4">
              {project.actions.map((action, i) => (
                <li key={i} className="text-secondary flex gap-3 leading-relaxed">
                  <span className="text-accent shrink-0 mt-1">▸</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-primary mb-5 flex items-center gap-4">
              <span className="font-mono text-accent text-sm bg-accent/10 px-2 py-1 rounded">
                04
              </span>
              Results
            </h2>
            <ul className="space-y-4">
              {project.results.map((result, i) => (
                <li key={i} className="text-secondary flex gap-3 leading-relaxed">
                  <span className="text-accent shrink-0 mt-1">★</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
