import { Monitor, Building2, Truck, Dice5, Pill, Stethoscope, Bike, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroDescription: string;
  relatedProducts: string[];
}

export const industries: Industry[] = [
  {
    slug: "tecnologia",
    name: "Tecnología",
    icon: Monitor,
    description: "Protección integral para empresas del sector tecnológico y digital.",
    heroDescription: "En un mundo digital en constante evolución, las empresas de tecnología enfrentan riesgos únicos. Ofrecemos coberturas especializadas para proteger su negocio contra amenazas cibernéticas, errores profesionales y responsabilidad por productos digitales.",
    relatedProducts: ["cibernetico", "eo", "do", "responsabilidad-profesional", "property"],
  },
  {
    slug: "infraestructura",
    name: "Infraestructura",
    icon: Building2,
    description: "Seguros especializados para proyectos de construcción e infraestructura.",
    heroDescription: "Los proyectos de infraestructura requieren coberturas robustas que protejan cada fase del desarrollo. Desde la construcción hasta la operación, diseñamos programas de seguros a la medida.",
    relatedProducts: ["construccion-todo-riesgo", "property", "responsabilidad", "garantia-indemnizacion", "contingencia"],
  },
  {
    slug: "transporte",
    name: "Transporte y Logística",
    icon: Truck,
    description: "Cobertura completa para flotas, carga y operaciones logísticas.",
    heroDescription: "El sector transporte y logística necesita protección contra riesgos en tránsito, daños a carga y responsabilidad civil. Diseñamos programas integrales para operadores logísticos.",
    relatedProducts: ["responsabilidad", "property", "accidente", "contingencia"],
  },
  {
    slug: "juegos-azar",
    name: "Juegos de Suerte y Azar",
    icon: Dice5,
    description: "Especialistas en seguros para la industria del juego: garantías, casinos, operadores land based y online.",
    heroDescription: "Nuestra experiencia va más allá del conocimiento en seguros. Conocemos el sector de juegos de suerte y azar y su regulación de manera profunda. Hablamos el lenguaje del operador y el de la aseguradora con igual fluidez. Somos los perfectos intérpretes para que las compañías aseguradoras comprendan el verdadero perfil del sector, sus controles y su profesionalismo. Traducimos complejidad en confianza.",
    highlights: [
      { title: "Líderes en emisión de garantías", desc: "Para gaming, tanto para operadores land based como online." },
      { title: "Cobertura integral", desc: "Land Based & Online — protección para ambos segmentos." },
      { title: "Regulación", desc: "Conocimiento profundo del marco normativo del sector." },
    ],
    specialtyProducts: [
      { title: "Garantías de Cumplimiento", desc: "Para operadores land based y online. Respaldamos el cumplimiento de las obligaciones contractuales y regulatorias ante las autoridades de juego.", tags: ["Land Based", "Online"] },
      { title: "Garantía de Pago de Premios", desc: "Aseguramos el pago oportuno de premios a los jugadores, generando confianza en el operador y cumpliendo con los requisitos regulatorios del sector.", tags: ["Premios", "Regulación"] },
      { title: "Seguros para Casinos y Establecimientos", desc: "Somos de las pocas firmas que han logrado asegurar casinos, establecimientos de juego y el transporte de máquinas tragamonedas. Cobertura integral.", tags: ["Casinos", "Tragamonedas", "Transporte"] },
      { title: "Gestión de Contratos Fiduciarios", desc: "Apoyamos en la estructuración y gestión de contratos fiduciarios cuando el regulador o la operación lo requieren, integrando la solución aseguradora.", tags: ["Fiduciario", "Estructuración"] },
    ],
    relatedProducts: ["responsabilidad", "crimen", "cibernetico", "do", "property", "garantia-indemnizacion"],
  },
  {
    slug: "farmaceuticas",
    name: "Farmacéuticas",
    icon: Pill,
    description: "Protección para laboratorios y distribuidoras farmacéuticas.",
    heroDescription: "Las farmacéuticas enfrentan riesgos de responsabilidad por producto, ensayos clínicos y propiedad intelectual. Nuestros programas cubren toda la cadena de valor.",
    relatedProducts: ["responsabilidad", "retirada-producto", "eo", "property", "credito-capital"],
  },
  {
    slug: "medicos",
    name: "Médicos y Salud",
    icon: Stethoscope,
    description: "Seguros de responsabilidad médica y protección para profesionales de la salud.",
    heroDescription: "Los profesionales e instituciones de salud necesitan coberturas de responsabilidad médica especializadas. Trabajamos con las principales aseguradoras para ofrecer las mejores condiciones.",
    relatedProducts: ["responsabilidad-medica", "responsabilidad-profesional", "eo", "cibernetico"],
  },
  {
    slug: "movilidad-electrica",
    name: "Movilidad Eléctrica",
    icon: Bike,
    description: "Seguros innovadores para bicicletas, scooters y transporte eléctrico.",
    heroDescription: "La nueva movilidad requiere nuevos seguros. Cubrimos bicicletas eléctricas, scooters, vehículos eléctricos y operadores de micromovilidad con productos innovadores.",
    relatedProducts: ["responsabilidad", "accidente", "affinity", "property"],
  },
  {
    slug: "telecomunicaciones",
    name: "Telecomunicaciones",
    icon: Radio,
    description: "Cobertura para infraestructura y operaciones de telecomunicaciones.",
    heroDescription: "Las telecomunicaciones son críticas para la economía moderna. Protegemos torres, centros de datos, redes y la continuidad operativa del sector.",
    relatedProducts: ["property", "cibernetico", "responsabilidad", "energias-potencia", "terrorismo"],
  },
];
