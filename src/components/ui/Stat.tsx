interface StatProps {
  n: string;
  label: string;
}

export function Stat({ n, label }: StatProps) {
  return (
    <div className="stat">
      <strong>{n}</strong>
      <span>{label}</span>
    </div>
  );
}
