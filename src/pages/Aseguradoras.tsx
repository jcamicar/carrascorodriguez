import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InsurerGrid from "@/components/InsurerGrid";
import { insurers } from "@/data/insurers";
import { ExternalLink } from "lucide-react";

const Aseguradoras = () => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <section className="bg-primary py-16">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary-foreground lg:text-4xl">Nuestras Aseguradoras</h1>
        <p className="mt-3 text-primary-foreground/70">Alianzas con las mejores compañías para ofrecerle la cobertura ideal</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <InsurerGrid />

        <div className="mt-16">
          <h2 className="mb-6 font-heading text-2xl font-bold text-center">Formas de pago por aseguradora</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insurers.map((ins) => (
              <div key={ins.slug} className="rounded-xl border bg-card p-5 shadow-sm">
                <h3 className="mb-2 font-heading text-base font-semibold" style={{ color: ins.color }}>{ins.name}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• PSE — Pago en línea</li>
                  <li>• Tarjeta de crédito</li>
                  <li>• Débito automático</li>
                  <li>• Consignación bancaria</li>
                </ul>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                >
                  Portal de pagos <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Aseguradoras;
