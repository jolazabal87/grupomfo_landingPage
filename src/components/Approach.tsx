import { steps } from '@/data/content';
import { StepItem } from '@/components/ui/StepItem';

export function Approach() {
  return (
    <section className="approach section wrap">
      <div className="section-kicker">05 / FORMA DE TRABAJAR</div>
      <div className="approach-grid">
        <div>
          <h2>Socios,<br /><i>no proveedores.</i></h2>
          <p>Construimos relaciones comerciales fuertes, duraderas y orientadas a resultados compartidos entre marca, distribuidor, retail y consumidor.</p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <StepItem key={step.n} n={step.n} title={step.title} desc={step.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
