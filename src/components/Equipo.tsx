import { team } from '@/data/content';
import { PersonCard } from '@/components/ui/PersonCard';

export function Equipo() {
  return (
    <section id="equipo" className="team section dark-soft">
      <div className="wrap">
        <div className="section-kicker muted">06 / EQUIPO</div>
        <div className="team-head">
          <h2>Estrategia que se<br /><i>convierte en ejecución.</i></h2>
          <p>Un equipo con experiencia operativa, comercial y financiera, involucrado en el desarrollo del negocio.</p>
        </div>
        <div className="people">
          {team.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
