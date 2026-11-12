import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '@/hooks/scrollToSection';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-media" />
      <div className="hero-overlay" />
      <div className="hero-content wrap">
        <div className="hero-meta">
          <span>GRUPO MFO 2.0</span>
          <span>TANDIL · ARGENTINA</span>
        </div>
        <div className="hero-copy-wrap">
          <div className="eyebrow">BRANDS · GO TO MARKET · WELLNESS</div>
          <h1>Potenciamos<br /><i>marcas.</i></h1>
          <p>Desarrollamos negocios de consumo masivo con estrategia, ejecución y una visión de largo plazo.</p>
          <div className="hero-actions">
            <button className="button light" onClick={() => scrollToSection('#nosotros')}>
              Conocer MFO <ArrowRight size={17} />
            </button>
            <a
              className="ghost-link"
              href="https://www.apollo-maca.com.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocer Apollo <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>01 — ESTRATEGIA</span>
          <span>02 — EJECUCIÓN</span>
          <span>03 — LARGO PLAZO</span>
          <span className="scroll">DESLIZÁ ↓</span>
        </div>
      </div>
    </section>
  );
}
