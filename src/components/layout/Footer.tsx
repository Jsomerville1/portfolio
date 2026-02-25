import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-surface border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
