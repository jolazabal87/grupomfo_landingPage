import { manifestoStats } from '@/data/content';
import { Stat } from '@/components/ui/Stat';

export function Nosotros() {
  return (
    <section id="nosotros" className="manifesto section wrap">
      <div className="section-kicker">01 / NOSOTROS</div>
      <div className="manifesto-grid">
        <h2>De entrar al mercado,<br />a <i>construir presencia.</i></h2>
        <div className="manifesto-copy">
          <p className="lead">
            Grupo MFO 2.0 se incuba en los más de 20 años de experiencia del desarrollo de Aleluya y, desde 2024, lleva ese conocimiento a nuevas marcas de consumo que buscan una inserción inteligente y duradera en Argentina.
          </p>
          <p>Integramos estrategia, negociación, ventas, distribución, marketing y desarrollo de marca dentro de una misma plataforma.</p>
        </div>
      </div>
      <div className="manifesto-stats">
        {manifestoStats.map((stat) => (
          <Stat key={stat.n} n={stat.n} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
