import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import IndustryCard from "@/components/IndustryCard";
import ProductCard from "@/components/ProductCard";
import InsurerGrid from "@/components/InsurerGrid";
import { industries } from "@/data/industries";
import { personalProducts, enterpriseProducts } from "@/data/products";

const Index = () => (
  <div className="flex min-h-screen flex-col">
    <Header />

    {/* Hero */}
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(199_89%_48%/0.15),transparent_60%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Abogados y Asesores de Seguros</p>
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground lg:text-5xl">
            Protegemos lo que mueve a su industria
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/70">
            Soluciones de seguros especializadas por industria. Más de 14 aseguradoras aliadas para diseñar el programa perfecto para su empresa.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/cotizar">Cotiza ahora <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/aseguradoras">Nuestras aseguradoras</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b bg-card py-8">
      <div className="container flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        {[
          { icon: Shield, label: "14 aseguradoras aliadas" },
          { icon: Users, label: "8 industrias especializadas" },
          { icon: Sparkles, label: "23+ líneas de seguros" },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <stat.icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Enfoque por industria</p>
          <h2 className="font-heading text-3xl font-bold">Seguros especializados para su sector</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <IndustryCard key={ind.slug} industry={ind} />
          ))}
        </div>
      </div>
    </section>

    {/* Personal Products */}
    <section className="border-t bg-muted/50 py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Para personas</p>
          <h2 className="font-heading text-3xl font-bold">Los seguros que más necesitas</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personalProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>

    {/* Enterprise Products Preview */}
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Para empresas</p>
          <h2 className="font-heading text-3xl font-bold">Líneas especializadas</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Más de 19 líneas de seguros empresariales para cubrir cualquier riesgo de su operación.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {enterpriseProducts.slice(0, 8).map((p) => (
            <Link
              key={p.slug}
              to={`/productos/${p.slug}`}
              className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <p.icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium">{p.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link to="/productos">Ver todos los productos <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Wellness Banner */}
    <section className="border-t bg-accent/5 py-16">
      <div className="container text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Nuevo</p>
        <h2 className="mb-4 font-heading text-3xl font-bold">Plataforma Wellness</h2>
        <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
          Beneficios laborales integrales en seguros para sus empleados. Una plataforma diseñada para el mercado colombiano.
        </p>
        <Button size="lg" asChild>
          <Link to="/wellness">Conocer más <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    {/* Insurers */}
    <section className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Alianzas</p>
          <h2 className="font-heading text-3xl font-bold">Aseguradoras aliadas</h2>
        </div>
        <InsurerGrid />
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
