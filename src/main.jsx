import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowUpRight, ArrowRight, Menu, X, Globe2, 
  Handshake, Store, Truck, Sparkles, Megaphone, 
  Leaf, Mail, MapPin, Send 
} from 'lucide-react';
import './styles.css';

const ASSETS_PATH = '/assets/';

export function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto MFO - ${formData.empresa || formData.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nEmpresa/Marca: ${formData.empresa}\n\nMensaje:\n${formData.mensaje}`
    );
    window.location.href = `mailto:adrianmolina@grupomfo.com.ar?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site">
      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-inner">
          <button 
            className="brand" 
            onClick={() => scrollToSection('#inicio')} 
            aria-label="Grupo MFO 2.0"
          >
            MFO<span>2.0</span>
          </button>
          
          <nav className={open ? 'nav-links open' : 'nav-links'}>
            <button onClick={() => scrollToSection('#nosotros')}>Nosotros</button>
            <button onClick={() => scrollToSection('#plataforma')}>Plataforma</button>
            <button onClick={() => scrollToSection('#marcas')}>Marcas</button>
            
            {/* Botón Apollo ampliado en tamaño con estilo oficial */}
            <button 
              onClick={() => scrollToSection('#apollo')}
              style={{
                fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                fontSize: '1.25rem', // Tamaño de fuente aumentado
                fontWeight: 600,
                letterSpacing: '-0.05em',
                textTransform: 'lowercase',
                lineHeight: 1,
                padding: '4px 8px',
                display: 'inline-flex',
                alignItems: 'baseline'
              }}
            >
              apollo<span style={{ color: '#d97706', fontSize: '1.4rem', fontWeight: 700, marginLeft: '1px' }}>.</span>maca
            </button>

            <button onClick={() => scrollToSection('#equipo')}>Equipo</button>
            <button className="nav-cta" onClick={() => scrollToSection('#contacto')}>
              Hablemos <ArrowUpRight size={16} />
            </button>
          </nav>

          <button 
            className="menu" 
            onClick={() => setOpen(!open)} 
            aria-label="Abrir menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="inicio">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-media" />
          <div className="hero-overlay" />
          <div className="hero-content wrap">
            <div className="hero-meta">
              <span>GRUPO MFO 2.0</span>
              <span>TANDIL · ARGENTINA</span>
            </div>
            <div className="hero-copy-wrap">
              <div className="eyebrow">BRANDS · GO TO MARKET · WELLNESS</div>
              <h1>Construimos<br /><i>marcas.</i></h1>
              <p>Desarrollamos negocios de consumo con estrategia, ejecución y una visión de largo plazo.</p>
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

        {/* NOSOTROS */}
        <section id="nosotros" className="manifesto section wrap">
          <div className="section-kicker">01 / NOSOTROS</div>
          <div className="manifesto-grid">
            <h2>De entrar al mercado<br />a <i>construir presencia.</i></h2>
            <div className="manifesto-copy">
              <p className="lead">
                Grupo MFO 2.0 nace de más de 15 años de experiencia en el desarrollo de Aleluya y, desde 2024, lleva ese conocimiento a nuevas marcas de consumo que buscan una inserción inteligente y duradera en Argentina.
              </p>
              <p>Integramos estrategia, negociación, ventas, distribución, marketing y desarrollo de marca dentro de una misma plataforma.</p>
            </div>
          </div>
          <div className="manifesto-stats">
            <Stat n="15+" label="años de experiencia junto a Aleluya" />
            <Stat n="2024" label="inicio de MFO como plataforma" />
            <Stat n="360°" label="visión integral del negocio" />
          </div>
        </section>

        {/* PLATAFORMA */}
        <section id="plataforma" className="capabilities section dark">
          <div className="wrap">
            <div className="section-kicker muted">02 / PLATAFORMA</div>
            <div className="section-head">
              <h2>Una plataforma.<br /><i>Todo el negocio.</i></h2>
              <p>Un sistema integrado para llevar una marca desde la estrategia hasta el punto de venta, con capacidad de ejecución comercial y operativa.</p>
            </div>
            <div className="cap-grid">
              <Capability n="01" icon={<Globe2 />} t="Estrategia de mercado" d="Portfolio, posicionamiento, objetivos de precio, estructura comercial y estrategia de entrada." />
              <Capability n="02" icon={<Handshake />} t="Negociaciones" d="Acuerdos comerciales con clientes y canales clave para construir crecimiento sostenible." />
              <Capability n="03" icon={<Store />} t="Cadena comercial" d="Retail, mayoristas, distribuidores, cash & carry y quick commerce." />
              <Capability n="04" icon={<Truck />} t="Logística" d="Depósito, preparación y entrega. Una cadena de suministro eficiente y coordinada." />
              <Capability n="05" icon={<Sparkles />} t="Servicios de soporte" d="Importación, registros de productos y protección de propiedad intelectual." />
              <Capability n="06" icon={<Megaphone />} t="Marketing y Trade Marketing" d="Ejecución en tienda, promociones, comunicación y construcción de marca." />
            </div>
          </div>
        </section>

        {/* MARCAS Y ECOSISTEMA */}
        <section id="marcas" className="manifesto section wrap">
          <div className="section-kicker">03 / ECOSISTEMA</div>
          <div className="section-head">
            <h2>Marcas y relaciones<br />que construyen <i>valor.</i></h2>
            <p>Una red de marcas, retailers y partners conectados por una lógica de largo plazo y beneficio mutuo.</p>
          </div>
          
          {/* Grilla principal de marcas */}
          <div className="logo-grid">
            <Logo src="image9.png" name="Juan Valdez" />
            <Logo src="image10.png" name="Wally's" />
            <Logo src="image8.jpg" name="Aleluya" />
            <Logo src="image11.png" name="Mamuschka" />
          </div>

          {/* Grilla de métricas */}
          <div className="reach-grid">
            <StatBox n="7" label="retailers">
              <div className="mini-logos">
                <img src={ASSETS_PATH + 'image20.png'} alt="Coto" />
                <img src={ASSETS_PATH + 'image25.png'} alt="Cencosud" />
                <img src={ASSETS_PATH + 'image21.png'} alt="Carrefour" />
                <img src={ASSETS_PATH + 'image28.png'} alt="La Anónima" />
              </div>
            </StatBox>

            <StatBox n="+2.144" label="tiendas" />

            <StatBox n="+30.000" label="tiendas vía distribuidores" />

            <StatBox n="3" label="canales de quick commerce">
              <div className="mini-logos">
                <img src={ASSETS_PATH + 'image30.png'} alt="PedidosYa" />
                <img src={ASSETS_PATH + 'image31.png'} alt="Rappi" />
                <img src={ASSETS_PATH + 'meli.png'} alt="Mercado Libre" />
              </div>
            </StatBox>
          </div>
        </section>

        {/* APOLLO */}
        <section id="apollo" className="apollo section">
          <div className="apollo-image" />
          <div className="apollo-overlay" />
          <div className="wrap apollo-grid">
            <div className="apollo-copy">
              <div className="section-kicker light-kicker">04 / UNIDAD DE NEGOCIOS PROPIA</div>
              
              {/* Marca Apollo aplicada con la tipografía oficial */}
              <div 
                style={{
                  fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.06em',
                  textTransform: 'lowercase',
                  color: '#ffffff',
                  margin: '12px 0 8px 0',
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'baseline'
                }}
              >
                apollo<span style={{ color: '#d97706', marginLeft: '2px' }}>.</span>maca
              </div>

              <div className="apollo-line" style={{ marginTop: '12px' }}>
                MACA PERUANA · BIENESTAR · SALUD · DESARROLLO DE PORTFOLIO
              </div>
              
              <h2>Una marca propia.<br />Un universo de <i>bienestar.</i></h2>
              <p className="lead">
                MFO desarrolla una unidad de negocio propia alrededor de la maca peruana y la construcción de una propuesta de bienestar.
              </p>
              <p>
                <strong>Apollo</strong> es nuestra marca propia: un proyecto de bienestar que parte de la maca peruana y evoluciona hacia un portfolio de productos funcionales y de enfoque holístico.
              </p>
              
              <div className="apollo-tags">
                <span><Leaf size={14} /> Maca peruana</span>
                <span>Bienestar</span>
                <span>Funcional</span>
                <span>Holístico</span>
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

            {/* Imagen de Apollo (sin fondo verde) */}
            <div className="apollo-product">

              <div 
                className="product-pack" 
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                  display: 'flex', 
                  justify: 'center', 
                  alignItems: 'center', 
                  padding: '0',
                  width: '100%',
                  height: '100%' 
                }}
              >
                <img 
                  src={ASSETS_PATH + 'image39.png'} 
                  alt="Apollo Maca" 
                  style={{ 
                    maxHeight: '480px', 
                    width: '100%', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.4))'
                  }}
                />
              </div>
              <div className="origin">PERÚ<br /><small>ORIGEN</small></div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="approach section wrap">
          <div className="section-kicker">05 / FORMA DE TRABAJAR</div>
          <div className="approach-grid">
            <div>
              <h2>Socios,<br /><i>no proveedores.</i></h2>
              <p>Construimos relaciones comerciales fuertes, duraderas y orientadas a resultados compartidos entre marca, distribuidor, retail y consumidor.</p>
            </div>
            <div className="steps">
              <Step n="01" t="Entender" d="Marca, categoría, consumidor y oportunidad." />
              <Step n="02" t="Diseñar" d="Modelo comercial y estrategia de entrada." />
              <Step n="03" t="Ejecutar" d="Equipos, canales y agenda comercial." />
              <Step n="04" t="Construir" d="Valor de marca y crecimiento sostenible." />
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section id="equipo" className="team section dark-soft">
          <div className="wrap">
            <div className="section-kicker muted">06 / EQUIPO</div>
            <div className="team-head">
              <h2>Estrategia que se<br /><i>convierte en ejecución.</i></h2>
              <p>Un equipo con experiencia operativa, comercial y financiera, involucrado en el desarrollo del negocio.</p>
            </div>
            <div className="people">
              <Person img="image7.jpg" name="Adrián Molina" role="COO Aleluya Honey · Owner MFO Group" loc="Tandil, Argentina" />
              <Person img="image6.jpg" name="Marcos Falcone" role="Controller Aleluya Honey · Partner MFO Group" loc="Balcarce, Argentina" />
              <Person img="image5.jpg" name="Ignacio Olazabal" role="Director Sales Aleluya Honey · Owner MFO Group" loc="Tandil, Argentina" />
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="contact section wrap">
          <div className="contact-box" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <div className="section-kicker" style={{ color: 'var(--lime, #a3e635)' }}>07 / CONTACTO</div>
              <h2 style={{ color: '#ffffff' }}>¿Tenemos una oportunidad<br /><i style={{ color: '#ffffff' }}>para construir juntos?</i></h2>
              <p style={{ color: '#e2e8f0', marginBottom: '24px' }}>Si buscás un partner para desarrollar una marca en Argentina o explorar una oportunidad en bienestar, dejanos tu mensaje.</p>
              
              <div className="contact-info" style={{ marginTop: '20px' }}>
                <a href="mailto:hola@grupomfo.com.ar" style={{ color: '#ffffff' }}>
                  <Mail size={17} /> hola@grupomfo.com.ar
                </a>
                <span style={{ color: '#cbd5e1' }}>
                  <MapPin size={17} /> Tandil · Buenos Aires · Argentina
                </span>
              </div>
            </div>

            {/* Formulario de contacto */}
            <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="nombre" 
                  placeholder="Nombre y Apellido *" 
                  required 
                  value={formData.nombre}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', outline: 'none' }}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Correo electrónico *" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', outline: 'none' }}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="empresa" 
                  placeholder="Empresa / Marca" 
                  value={formData.empresa}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', outline: 'none' }}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="mensaje" 
                  rows="4" 
                  placeholder="Escribí tu mensaje *" 
                  required 
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', outline: 'none', resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="button light-button" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', background: '#ffffff', color: '#000000', fontWeight: 'bold', padding: '12px 24px', borderRadius: '8px', border: 'none' }}>
                Enviar mensaje <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>GRUPO MFO <b>2.0</b></span>
          <span>Marcas · Mercado · Bienestar</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

// SUBCOMPONENTES
function Stat({ n, label }) {
  return (
    <div className="stat">
      <strong>{n}</strong>
      <span>{label}</span>
    </div>
  );
}

function StatBox({ n, label, children }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <strong>{n}</strong>
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

function Capability({ n, icon, t, d }) {
  return (
    <article className="cap">
      <div className="cap-top">
        <span>{n}</span>
        {icon}
      </div>
      <h3>{t}</h3>
      <p>{d}</p>
    </article>
  );
}

function Step({ n, t, d }) {
  return (
    <div className="step">
      <span>{n}</span>
      <div>
        <h3>{t}</h3>
        <p>{d}</p>
      </div>
    </div>
  );
}

function Person({ img, name, role, loc }) {
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

function Logo({ src, name }) {
  return (
    <div className="logo-box">
      <img src={ASSETS_PATH + src} alt={name} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);