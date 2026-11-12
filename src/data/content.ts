import type { LucideIcon } from 'lucide-react';
import {
  Globe2,
  Handshake,
  Store,
  Truck,
  Sparkles,
  Megaphone,
} from 'lucide-react';

export const ASSETS_PATH = '/assets/';

export interface NavLink {
  label: string;
  target: string;
}

export const navLinks: NavLink[] = [
  { label: 'Nosotros', target: '#nosotros' },
  { label: 'Plataforma', target: '#plataforma' },
  { label: 'Marcas', target: '#marcas' },
  { label: 'Equipo', target: '#equipo' },
];

export interface Capability {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const capabilities: Capability[] = [
  { n: '01', icon: Globe2, title: 'Estrategia de mercado', desc: 'Portfolio, posicionamiento, objetivos de precio, estructura comercial y estrategia de entrada.' },
  { n: '02', icon: Handshake, title: 'Negociaciones', desc: 'Acuerdos comerciales con clientes y canales clave para construir crecimiento sostenible.' },
  { n: '03', icon: Store, title: 'Cadena comercial', desc: 'Retail, mayoristas, distribuidores, cash & carry y quick commerce.' },
  { n: '04', icon: Truck, title: 'Logística', desc: 'Depósito, preparación y entrega. Una cadena de suministro eficiente y coordinada.' },
  { n: '05', icon: Sparkles, title: 'Servicios de soporte', desc: 'Importación, registros de productos y protección de propiedad intelectual.' },
  { n: '06', icon: Megaphone, title: 'Marketing y Trade Marketing', desc: 'Ejecución en tienda, promociones, comunicación y construcción de marca.' },
];

export interface BrandLogo {
  src: string;
  name: string;
}

export const brandLogos: BrandLogo[] = [
  { src: 'image9.png', name: 'Juan Valdez' },
  { src: 'image10.png', name: "Wally's" },
  { src: 'image8.jpg', name: 'Aleluya' },
  { src: 'image11.png', name: 'Mamuschka' },
];

export interface StatItem {
  n: string;
  label: string;
}

export const manifestoStats: StatItem[] = [
  { n: '20+', label: 'años de experiencia junto a Aleluya' },
  { n: '2024', label: 'inicio de MFO como plataforma' },
  { n: '360°', label: 'visión integral del negocio' },
];

export interface ReachCard {
  n: string;
  label: string;
  logos?: { src: string; alt: string }[];
}

export const reachCards: ReachCard[] = [
  {
    n: '7',
    label: 'retailers',
    logos: [
      { src: 'image20.png', alt: 'Coto' },
      { src: 'image25.png', alt: 'Cencosud' },
      { src: 'image21.png', alt: 'Carrefour' },
      { src: 'image28.png', alt: 'La Anónima' },
    ],
  },
  { n: '+2.144', label: 'tiendas' },
  { n: '+30.000', label: 'tiendas vía distribuidores' },
  {
    n: '3',
    label: 'canales de quick commerce',
    logos: [
      { src: 'image30.png', alt: 'PedidosYa' },
      { src: 'image31.png', alt: 'Rappi' },
      { src: 'meli.png', alt: 'Mercado Libre' },
    ],
  },
];

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export const steps: Step[] = [
  { n: '01', title: 'Entender', desc: 'Marca, categoría, consumidor y oportunidad.' },
  { n: '02', title: 'Diseñar', desc: 'Modelo comercial y estrategia de entrada.' },
  { n: '03', title: 'Ejecutar', desc: 'Equipos, canales y agenda comercial.' },
  { n: '04', title: 'Construir', desc: 'Valor de marca y crecimiento sostenible.' },
];

export interface Person {
  img: string;
  name: string;
  role: string;
  loc: string;
}

export const team: Person[] = [
  { img: 'image7.jpg', name: 'Adrián Molina', role: 'COO Aleluya Honey · Owner MFO Group', loc: 'Tandil, Argentina' },
  { img: 'image6.jpg', name: 'Marcos Falcone', role: 'Controller Aleluya Honey · Partner MFO Group', loc: 'Balcarce, Argentina' },
  { img: 'image5.jpg', name: 'Ignacio Olazabal', role: 'Director Sales Aleluya Honey · Owner MFO Group', loc: 'Tandil, Argentina' },
];

export const apolloTags = ['Triple Impacto', 'Bienestar', 'Funcional', 'Holístico'];
