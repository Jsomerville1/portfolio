interface SectionHeadingProps {
  index: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({
  index,
  title,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="font-mono text-accent text-sm tracking-widest mb-2">
        // {index}. {title.toUpperCase()}
      </p>
      <h2 className="font-heading font-bold text-4xl sm:text-5xl text-primary">
        {title}
      </h2>
    </div>
  );
}
