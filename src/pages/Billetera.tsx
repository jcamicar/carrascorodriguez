import { Link } from "react-router-dom";
import { Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Billetera = () => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <section className="flex flex-1 items-center justify-center py-20">
      <div className="container text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
          <Wallet className="h-10 w-10 text-accent" />
        </div>
        <h1 className="mb-4 font-heading text-3xl font-extrabold lg:text-4xl">Billetera Virtual de Seguros</h1>
        <p className="mx-auto mb-2 max-w-md text-lg text-muted-foreground">
          Próximamente podrás ver todos tus seguros en un solo lugar: pólizas, vencimientos, coberturas y más.
        </p>
        <p className="mx-auto mb-8 max-w-sm text-sm text-muted-foreground">
          Déjanos tu email y te avisamos cuando esté disponible.
        </p>
        <form
          className="mx-auto flex max-w-sm gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const msg = "Quiero registrarme para la billetera virtual de seguros";
            window.open(`https://wa.me/573107695580?text=${encodeURIComponent(msg)}`, "_blank");
          }}
        >
          <Input type="email" placeholder="tu@email.com" required />
          <Button type="submit">Avisar <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </form>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Billetera;
