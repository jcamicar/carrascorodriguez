import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { personalProducts, enterpriseProducts } from "@/data/products";
import logoHorizontal from "@/assets/logo-horizontal.jpg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoHorizontal} alt="Carrasco Rodriguez" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${isActive("/") ? "text-accent" : "text-foreground"}`}
          >
            Inicio
          </Link>

          {/* Industries Dropdown */}
          <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
              Industrias <ChevronDown className="h-3 w-3" />
            </button>
            {industriesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg border bg-card p-2 shadow-lg">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industria/${ind.slug}`}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => setIndustriesOpen(false)}
                  >
                    <ind.icon className="h-4 w-4 text-accent" />
                    {ind.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
              Productos <ChevronDown className="h-3 w-3" />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full w-[520px] rounded-lg border bg-card p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Personas</p>
                    {personalProducts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/productos/${p.slug}`}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                        onClick={() => setProductsOpen(false)}
                      >
                        <p.icon className="h-4 w-4 text-accent" />
                        {p.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Empresas</p>
                    <div className="max-h-72 overflow-y-auto pr-1">
                      {enterpriseProducts.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/productos/${p.slug}`}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                          onClick={() => setProductsOpen(false)}
                        >
                          <p.icon className="h-3.5 w-3.5 text-accent" />
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/wellness" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${isActive("/wellness") ? "text-accent" : ""}`}>
            Wellness
          </Link>
          <Link to="/aseguradoras" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${isActive("/aseguradoras") ? "text-accent" : ""}`}>
            Aseguradoras
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+573107695580" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" /> Contáctanos
          </a>
          <Button asChild>
            <Link to="/cotizar">Cotiza ahora</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-card lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" onClick={() => setMobileOpen(false)}>Inicio</Link>
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industrias</p>
            {industries.map((ind) => (
              <Link key={ind.slug} to={`/industria/${ind.slug}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}>
                <ind.icon className="h-4 w-4 text-accent" /> {ind.name}
              </Link>
            ))}
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Productos Personas</p>
            {personalProducts.map((p) => (
              <Link key={p.slug} to={`/productos/${p.slug}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted" onClick={() => setMobileOpen(false)}>
                <p.icon className="h-4 w-4 text-accent" /> {p.name}
              </Link>
            ))}
            <Link to="/wellness" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" onClick={() => setMobileOpen(false)}>Wellness</Link>
            <Link to="/aseguradoras" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" onClick={() => setMobileOpen(false)}>Aseguradoras</Link>
            <Button asChild className="mt-2">
              <Link to="/cotizar" onClick={() => setMobileOpen(false)}>Cotiza ahora</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
