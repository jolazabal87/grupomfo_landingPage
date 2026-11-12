import { ASSETS_PATH, brandLogos, reachCards } from '@/data/content';
import { Logo } from '@/components/ui/Logo';
import { StatBox } from '@/components/ui/StatBox';

export function Marcas() {
  return (
    <section id="marcas" className="manifesto section wrap">
      <div className="section-kicker">03 / ECOSISTEMA</div>
      <div className="section-head">
        <h2>Marcas y relaciones<br />que construyen <i>valor.</i></h2>
        <p>Una red de marcas, retailers y partners conectados por una lógica de largo plazo y beneficio mutuo.</p>
      </div>

      <div className="logo-grid">
        {brandLogos.map((logo) => (
          <Logo key={logo.name} src={logo.src} name={logo.name} />
        ))}
      </div>

      <div className="reach-grid">
        {reachCards.map((card) => (
          <StatBox key={card.label} n={card.n} label={card.label}>
            {card.logos && (
              <div className="mini-logos">
                {card.logos.map((logo) => (
                  <img key={logo.alt} src={ASSETS_PATH + logo.src} alt={logo.alt} />
                ))}
              </div>
            )}
          </StatBox>
        ))}
      </div>
    </section>
  );
}