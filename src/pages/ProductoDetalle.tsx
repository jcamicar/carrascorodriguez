import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

const ProductoDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container flex flex-1 flex-col items-center justify-center py-20">
          <h1 className="mb-4 font-heading text-2xl font-bold">Producto no encontrado</h1>
          <Button asChild><Link to="/productos">Ver productos</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedIndustries = industries.filter((i) => product.relatedIndustries.includes(i.slug));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="bg-primary py-16">
        <div className="container">
          <Link to="/productos" className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> Productos
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
              <product.icon className="h-7 w-7 text-accent" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-accent">{product.category === "persona" ? "Personas" : "Empresas"}</span>
              <h1 className="font-heading text-3xl font-extrabold text-primary-foreground">{product.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{product.description}</p>

            <h2 className="mb-4 font-heading text-xl font-bold">Coberturas principales</h2>
            <ul className="space-y-3">
              {product.coverages.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-heading text-lg font-semibold">¿Interesado?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Solicite una cotización sin compromiso. Nuestros asesores le contactarán en menos de 24 horas.
              </p>
              <Button className="w-full" asChild>
                <Link to={`/cotizar?producto=${product.slug}`}>Cotizar {product.name} <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            {relatedIndustries.length > 0 && (
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-heading text-lg font-semibold">Industrias relacionadas</h3>
                <ul className="space-y-2">
                  {relatedIndustries.map((ind) => (
                    <li key={ind.slug}>
                      <Link to={`/industria/${ind.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                        <ind.icon className="h-4 w-4 text-accent" />
                        {ind.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductoDetalle;
