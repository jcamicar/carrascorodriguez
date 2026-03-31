import suraLogo from "@/assets/insurers/sura.png";
import bolivarLogo from "@/assets/insurers/bolivar.png";
import libertyLogo from "@/assets/insurers/liberty.jpg";
import chubbLogo from "@/assets/insurers/chubb.png";
import zurichLogo from "@/assets/insurers/zurich.png";
import mundialLogo from "@/assets/insurers/mundial.png";
import hdiLogo from "@/assets/insurers/hdi.png";
import sbsLogo from "@/assets/insurers/sbs.png";
import cesceLogo from "@/assets/insurers/cesce.jpg";
import berkleyLogo from "@/assets/insurers/berkley.svg";
import estadoLogo from "@/assets/insurers/estado.png";

export interface Insurer {
  name: string;
  slug: string;
  color: string;
  logo: string;
  description: string;
  paymentMethods: string[];
  portalUrl: string;
}

export const insurers: Insurer[] = [
  {
    name: "Sura",
    slug: "sura",
    color: "#0033A0",
    logo: suraLogo,
    description: "Líder en seguros generales y de vida en Colombia con presencia en toda Latinoamérica.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito/débito", "Débito automático", "Consignación bancaria", "Puntos de pago Sura"],
    portalUrl: "https://www.segurossura.com.co",
  },
  {
    name: "Bolívar",
    slug: "bolivar",
    color: "#004B87",
    logo: bolivarLogo,
    description: "Compañía de seguros del Grupo Bolívar, con amplia trayectoria en el mercado colombiano.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito/débito", "Débito automático", "Davivienda (todas las oficinas)", "App Davivienda"],
    portalUrl: "https://www.segurosbolivar.com",
  },
  {
    name: "Liberty",
    slug: "liberty",
    color: "#F5A623",
    logo: libertyLogo,
    description: "Aseguradora internacional con soluciones innovadoras para personas y empresas.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito", "Débito automático", "Efecty / Baloto", "Consignación bancaria"],
    portalUrl: "https://www.libertyseguros.co",
  },
  {
    name: "Chubb",
    slug: "chubb",
    color: "#000000",
    logo: chubbLogo,
    description: "La aseguradora cotizada más grande del mundo. Líder en líneas especializadas y riesgos complejos.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito", "Transferencia bancaria", "Débito automático"],
    portalUrl: "https://www.chubb.com/co",
  },
  {
    name: "Zurich",
    slug: "zurich",
    color: "#003399",
    logo: zurichLogo,
    description: "Grupo asegurador suizo con operación global. Experto en riesgos corporativos e industriales.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito", "Transferencia bancaria", "Débito automático"],
    portalUrl: "https://www.zurich.com.co",
  },
  {
    name: "Mundial",
    slug: "mundial",
    color: "#E31837",
    logo: mundialLogo,
    description: "Aseguradora colombiana especializada en cumplimiento, responsabilidad civil y riesgos generales.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito", "Consignación bancaria", "Débito automático"],
    portalUrl: "https://www.mundialseguros.com.co",
  },
  {
    name: "HDI",
    slug: "hdi",
    color: "#00843D",
    logo: hdiLogo,
    description: "Grupo asegurador alemán con presencia global. Soluciones para industria y comercio.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito", "Transferencia bancaria", "Débito automático"],
    portalUrl: "https://www.hdi.com.co",
  },
  {
    name: "SBS",
    slug: "sbs",
    color: "#1A237E",
    logo: sbsLogo,
    description: "Especialistas en seguros de nicho, líneas financieras y riesgos especiales para el mercado latinoamericano.",
    paymentMethods: ["Transferencia bancaria", "Tarjeta de crédito", "Débito automático"],
    portalUrl: "https://www.sbsseguros.com",
  },
  {
    name: "CESCE",
    slug: "cesce",
    color: "#1A3F8F",
    logo: cesceLogo,
    description: "Compañía española especializada en seguro de crédito a la exportación y riesgo político.",
    paymentMethods: ["Transferencia bancaria", "Débito automático"],
    portalUrl: "https://www.cesce.com",
  },
  {
    name: "Berkley",
    slug: "berkley",
    color: "#006747",
    logo: berkleyLogo,
    description: "W. R. Berkley Corporation — aseguradora global especializada en líneas comerciales, exceso y reaseguro.",
    paymentMethods: ["Transferencia bancaria", "Tarjeta de crédito", "Débito automático"],
    portalUrl: "https://www.berkleyinternacional.com",
  },
  {
    name: "Seguros del Estado",
    slug: "estado",
    color: "#1B3667",
    logo: estadoLogo,
    description: "Aseguradora colombiana de vida con amplia trayectoria en seguros colectivos, vida grupo y accidentes personales.",
    paymentMethods: ["PSE — Pago en línea", "Tarjeta de crédito/débito", "Débito automático", "Consignación bancaria"],
    portalUrl: "https://www.segurosdelestado.com",
  },
];
