import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center px-6">
        <p className="font-mono text-accent text-sm tracking-widest mb-4">
          // 404
        </p>
        <h1 className="font-heading font-bold text-6xl text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary mb-8">Whatever you were searching for, it's not here.</p>
        <Link
          href="/"
          className="font-mono text-sm text-accent hover:text-accent/70 transition-colors"
        >
          ← Return Home
        </Link>
      </div>
    </div>
  );
}
