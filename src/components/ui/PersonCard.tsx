import { ASSETS_PATH } from '@/data/content';

interface PersonCardProps {
  img: string;
  name: string;
  role: string;
  loc: string;
}

export function PersonCard({ img, name, role, loc }: PersonCardProps) {
  return (
    <div className="person">
      <img src={ASSETS_PATH + img} alt={name} loading="lazy" />
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <small>{loc}</small>
      </div>
    </div>
  );
}
