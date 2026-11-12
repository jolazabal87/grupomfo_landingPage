import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { scrollToSection } from '@/hooks/scrollToSection';
import { navLinks } from '@/data/content';

export function Nav() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const handleClick = (target: string) => {
    scrollToSection(target);
    setOpen(false);
  };

  return (
    <header className={scrolled ? 'nav scrolled' : 'nav'}>
      <div className="nav-inner">
        <button
          className="brand"
          onClick={() => handleClick('#inicio')}
          aria-label="Grupo MFO 2.0"
        >
          MFO<span>2.0</span>
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <button key={link.target} onClick={() => handleClick(link.target)}>
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleClick('#apollo')}
            className="apollo-brand-text"
            style={{ fontSize: '1.25rem', padding: '4px 8px' }}
          >
            apollo<span className="apollo-brand-dot" style={{ fontSize: '1.4rem', marginLeft: '1px' }}>.</span>maca
          </button>

          <button className="nav-cta" onClick={() => handleClick('#contacto')}>
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
  );
}
