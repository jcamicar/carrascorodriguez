import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoVertical from "@/assets/logo-vertical.jpg";
import { industries } from "@/data/industries";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img src={logoVertical} alt="Carrasco Rodriguez" className="h-20 w-auto self-start rounded bg-white p-2" />
          <p className="text-sm text-primary-foreground/70">
            Abogados y Asesores de Seguros. Protegemos lo que más importa para su empresa.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Industrias</h4>
          <ul className="flex flex-col gap-1.5">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link to={`/industria/${ind.slug}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Productos</h4>
          <ul className="flex flex-col gap-1.5">
            {["Autos", "Hogar", "Vida", "Salud", "Cibernético", "D&O", "Property"].map((name) => (
              <li key={name}>
                <Link to={`/productos/${name.toLowerCase().replace("&", "").replace(/ /g, "-")}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Contacto</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Phone className="h-4 w-4" /> +57 310 769 5580
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Mail className="h-4 w-4" /> info@carrascoseguros.com
            </li>
            <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Bogotá, Colombia
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Carrasco Rodriguez — Abogados y Asesores de Seguros. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
