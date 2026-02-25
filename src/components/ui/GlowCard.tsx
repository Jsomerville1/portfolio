import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-white/5 rounded-lg p-5 card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
