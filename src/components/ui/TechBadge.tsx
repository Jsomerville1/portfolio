interface TechBadgeProps {
  children: React.ReactNode;
}

export default function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-block px-2 py-0.5 bg-elevated border border-white/5 rounded text-xs font-mono text-secondary">
      {children}
    </span>
  );
}
