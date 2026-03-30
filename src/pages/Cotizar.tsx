import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";

const Cotizar = () => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <section className="bg-primary py-16">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary-foreground lg:text-4xl">Cotiza tu seguro</h1>
        <p className="mt-3 text-primary-foreground/70">Completa el formulario y un asesor te contactará en menos de 24 horas</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <QuoteForm />
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Cotizar;
