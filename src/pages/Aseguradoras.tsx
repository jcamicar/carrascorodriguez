import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insurers.map((ins) => (
            <div key={ins.slug} className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border bg-white p-2">
                  <img src={ins.logo} alt={ins.name} className="h-full w-full object-contain" loading="lazy" width={64} height={64} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{ins.name}</h3>
                  <p className="text-xs text-muted-foreground">{ins.description}</p>
                </div>
              </div>

              <div className="mb-4 flex-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Formas de pago</p>
                <ul className="space-y-1">
                  {ins.paymentMethods.map((m) => (
                    <li key={m} className="text-sm text-muted-foreground">• {m}</li>
                  ))}
                </ul>
              </div>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                Consulta con tu asesor para métodos de pago
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Aseguradoras;
