import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Nosotros } from '@/components/Nosotros';
import { Plataforma } from '@/components/Plataforma';
import { Marcas } from '@/components/Marcas';
import { Apollo } from '@/components/Apollo';
import { Approach } from '@/components/Approach';
import { Equipo } from '@/components/Equipo';
import { Contacto } from '@/components/Contacto';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Nosotros />
        <Plataforma />
        <Marcas />
        <Apollo />
        <Approach />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
