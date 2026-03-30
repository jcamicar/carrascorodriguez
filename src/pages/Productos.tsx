import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { personalProducts, enterpriseProducts } from "@/data/products";

const Productos = () => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <section className="bg-primary py-16">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary-foreground lg:text-4xl">Nuestros Productos</h1>
        <p className="mt-3 text-primary-foreground/70">Coberturas para cada necesidad — personas y empresas</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 font-heading text-2xl font-bold">Seguros para Personas</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personalProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>

    <section className="border-t bg-muted/50 py-16">
      <div className="container">
        <h2 className="mb-2 font-heading text-2xl font-bold">Líneas Especializadas — Empresas</h2>
        <p className="mb-8 text-muted-foreground">Más de 19 líneas de seguros corporativos para cubrir cualquier riesgo.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {enterpriseProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Productos;
