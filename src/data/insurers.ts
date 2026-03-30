export interface Insurer {
  name: string;
  slug: string;
  color: string;
}

export const insurers: Insurer[] = [
  { name: "Sura", slug: "sura", color: "#0033A0" },
  { name: "Bolívar", slug: "bolivar", color: "#004B87" },
  { name: "Liberty", slug: "liberty", color: "#F5A623" },
  { name: "Chubb", slug: "chubb", color: "#000000" },
  { name: "Zurich", slug: "zurich", color: "#003399" },
  { name: "Mundial", slug: "mundial", color: "#E31837" },
  { name: "HDI", slug: "hdi", color: "#00843D" },
  { name: "SBS", slug: "sbs", color: "#1A237E" },
  { name: "CESCE", slug: "cesce", color: "#C62828" },
];
