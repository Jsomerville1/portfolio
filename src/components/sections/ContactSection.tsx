import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading index="04" title="Contact" centered />

        <h3 className="font-heading font-bold text-3xl text-primary mt-10 mb-5">
          Let&apos;s Build Something{" "}
          <span className="text-accent text-glow">Great</span>
        </h3>

        <p className="text-secondary text-lg mb-10 leading-relaxed">
          Looking for full stack, front end, or back end software engineer position. Open to
          in-office, hybrid, or remote within the US — willing to relocate.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-surface font-mono font-medium rounded hover:bg-accent/80 transition-all duration-200 mb-14"
        >
          {siteConfig.email}
        </a>

        <div className="flex justify-center gap-10">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-secondary hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-secondary hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.itchio}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-secondary hover:text-accent transition-colors"
          >
            itch.io
          </a>
        </div>
      </div>
    </section>
  );
}
