import { ArrowUpRight, Leaf } from 'lucide-react';
import { ASSETS_PATH, apolloTags } from '@/data/content';

export function Apollo() {
  return (
    <section id="apollo" className="apollo section">
      <div className="apollo-image" />
      <div className="apollo-overlay" />
      <div className="wrap apollo-grid">
        <div className="apollo-copy">
          <div className="section-kicker light-kicker">04 / UNIDAD DE NEGOCIOS PROPIA</div>

          <div
            className="apollo-brand-text"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '12px 0 8px 0' }}
          >
            apollo<span className="apollo-brand-dot" style={{ marginLeft: '2px' }}>.</span>maca
          </div>

          <div className="apollo-line" style={{ marginTop: '12px' }}>
            TRIPLE IMPACTO · BIENESTAR · SALUD · DESARROLLO DE PORTFOLIO
          </div>

          <h2>Una marca propia.<br />Un universo de <i>bienestar.</i></h2>
          <p className="lead">
            MFO desarrolla una unidad de negocio propia alrededor de la maca peruana y la construcción de una propuesta de bienestar.
          </p>
          <p>
            <strong>Apollo</strong> es nuestra marca propia: un proyecto de bienestar que parte de la maca peruana y evoluciona hacia un portfolio de productos funcionales y de enfoque holístico.
          </p>

          <div className="apollo-tags">
            {apolloTags.map((tag) => (
              <span key={tag}>
                {tag === 'Maca peruana' && <Leaf size={14} />}
                {tag}
              </span>
            ))}
          </div>

          <a
            className="button outline-light"
            href="https://www.apollo-maca.com.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar Apollo <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="apollo-product">
          <div className="product-pack">
            <img
              src={ASSETS_PATH + 'image39.png'}
              alt="Apollo Maca"
              style={{ maxHeight: '480px', width: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="origin">PERÚ<br /><small>ORIGEN</small></div>
        </div>
      </div>
    </section>
  );
}
