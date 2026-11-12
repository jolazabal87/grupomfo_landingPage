import { capabilities } from '@/data/content';
import { CapabilityCard } from '@/components/ui/CapabilityCard';

export function Plataforma() {
  return (
    <section id="plataforma" className="capabilities section dark">
      <div className="wrap">
        <div className="section-kicker muted">02 / PLATAFORMA</div>
        <div className="section-head">
          <h2>Una plataforma.<br /><i>Todo el negocio.</i></h2>
          <p>Un sistema integrado para llevar una marca desde la estrategia hasta el punto de venta, con capacidad de ejecución comercial y operativa.</p>
        </div>
        <div className="cap-grid">
          {capabilities.map((cap) => (
            <CapabilityCard
              key={cap.n}
              n={cap.n}
              icon={cap.icon}
              title={cap.title}
              desc={cap.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
