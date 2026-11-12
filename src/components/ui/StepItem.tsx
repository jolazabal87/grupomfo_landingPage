interface StepItemProps {
  n: string;
  title: string;
  desc: string;
}

export function StepItem({ n, title, desc }: StepItemProps) {
  return (
    <div className="step">
      <span>{n}</span>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
