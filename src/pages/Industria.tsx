import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

const Industria = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container flex flex-1 flex-col items-center justify-center py-20">
          <h1 className="mb-4 font-heading text-2xl font-bold">Industria no encontrada</h1>
          <Button asChild><Link to="/">Volver al inicio</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => industry.relatedProducts.includes(p.slug));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="bg-primary py-16">
        <div className="container">
          <Link to="/" className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> Inicio
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
              <industry.icon className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-primary-foreground">{industry.name}</h1>
              <p className="text-primary-foreground/60">Seguros especializados para el sector</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">{industry.heroDescription}</p>
        </div>
      </section>

      {industry.highlights && industry.highlights.length > 0 && (
        <section className="border-t bg-accent/5 py-12">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-3">
              {industry.highlights.map((h) => (
                <div key={h.title} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                  <h3 className="mb-2 font-heading text-lg font-bold">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.specialtyProducts && industry.specialtyProducts.length > 0 && (
        <section className="border-t py-16">
          <div className="container">
            <h2 className="mb-8 font-heading text-2xl font-bold">Productos de especialidad</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {industry.specialtyProducts.map((sp, i) => (
                <div key={sp.title} className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-lg font-bold">{sp.title}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{sp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {sp.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="border-t bg-muted/50 py-16">
          <div className="container">
            <h2 className="mb-8 font-heading text-2xl font-bold">Productos recomendados para {industry.name}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold">¿Necesita un programa de seguros para {industry.name}?</h2>
          <p className="mx-auto mb-6 max-w-md text-muted-foreground">
            Nuestros expertos diseñarán un programa a la medida de su operación.
          </p>
          <Button size="lg" asChild>
            <Link to={`/cotizar?industria=${industry.slug}`}>Solicitar cotización <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Industria;
