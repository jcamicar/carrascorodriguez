import { Link } from "react-router-dom";
import { Heart, Shield, TrendingUp, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const features = [
  { icon: Heart, title: "Bienestar integral", desc: "Seguros de salud, vida y accidentes para todos los colaboradores con coberturas premium." },
  { icon: Shield, title: "Protección familiar", desc: "Extensión de beneficios a familias de empleados con planes flexibles." },
  { icon: TrendingUp, title: "Retención de talento", desc: "Los mejores beneficios laborales del mercado para atraer y retener a su equipo." },
  { icon: Gift, title: "Experiencia digital", desc: "Plataforma donde cada empleado gestiona sus beneficios, como Betterfly." },
];

const Wellness = () => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <section className="bg-primary py-20">
      <div className="container text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Plataforma de bienestar</p>
        <h1 className="mb-4 font-heading text-4xl font-extrabold text-primary-foreground lg:text-5xl">Wellness by Carrasco Rodriguez</h1>
        <p className="mx-auto max-w-lg text-lg text-primary-foreground/70">
          Beneficios laborales integrales en seguros para empresas colombianas. Elevamos la experiencia de sus empleados.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t bg-muted/50 py-16">
      <div className="container text-center">
        <h2 className="mb-4 font-heading text-2xl font-bold">¿Quiere implementar Wellness en su empresa?</h2>
        <p className="mx-auto mb-6 max-w-md text-muted-foreground">
          Diseñamos un programa de beneficios a la medida de su organización con las mejores aseguradoras del país.
        </p>
        <Button size="lg" asChild>
          <Link to="/cotizar">Solicitar demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Wellness;
