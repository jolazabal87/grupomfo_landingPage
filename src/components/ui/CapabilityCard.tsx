import type { LucideIcon } from 'lucide-react';

interface CapabilityCardProps {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export function CapabilityCard({ n, icon: Icon, title, desc }: CapabilityCardProps) {
  return (
    <article className="cap">
      <div className="cap-top">
        <span>{n}</span>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}
