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
        <p className="text-secondary mb-8">This sector is off the grid.</p>
        <Link
          href="/"
          className="font-mono text-sm text-accent hover:text-accent/70 transition-colors"
        >
          ← Return to Base
        </Link>
      </div>
    </div>
  );
}
