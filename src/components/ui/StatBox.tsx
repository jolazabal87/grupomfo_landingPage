import type { ReactNode } from 'react';

interface StatBoxProps {
  n: string;
  label: string;
  children?: ReactNode;
}

export function StatBox({ n, label, children }: StatBoxProps) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <strong>{n}</strong>
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}
