import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

const QuoteForm = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get("producto") || "";

  const [form, setForm] = useState({
    type: "empresa" as "empresa" | "persona",
    product: preselectedProduct,
    industry: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productName = products.find(p => p.slug === form.product)?.name || form.product;
    const msg = `Hola, soy ${form.name}${form.company ? ` de ${form.company}` : ""}. Estoy interesado en ${productName}. ${form.message}`.trim();
    const waUrl = `https://wa.me/573107695580?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    toast.success("Redirigiendo a WhatsApp para completar tu cotización");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Select value={form.type} onValueChange={(v: "empresa" | "persona") => setForm({ ...form, type: v, product: "" })}>
          <SelectTrigger><SelectValue placeholder="Tipo" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="persona">Persona</SelectItem>
            <SelectItem value="empresa">Empresa</SelectItem>
          </SelectContent>
        </Select>

        <Select value={form.product} onValueChange={(v) => setForm({ ...form, product: v })}>
          <SelectTrigger><SelectValue placeholder="Producto" /></SelectTrigger>
          <SelectContent>
            {products
              .filter((p) => p.category === form.type)
              .map((p) => (
                <SelectItem key={p.slug} value={p.slug}>{p.name}</SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {form.type === "empresa" && (
        <Select value={form.industry} onValueChange={(v) => setForm({ ...form, industry: v })}>
          <SelectTrigger><SelectValue placeholder="Industria (opcional)" /></SelectTrigger>
          <SelectContent>
            {industries.map((i) => (
              <SelectItem key={i.slug} value={i.slug}>{i.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <Input placeholder="Nombre completo *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      
      {form.type === "empresa" && (
        <Input placeholder="Empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Input type="email" placeholder="Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Input type="tel" placeholder="Teléfono *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>

      <Textarea placeholder="Cuéntanos sobre tu necesidad de seguro..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

      <Button type="submit" className="w-full" size="lg">
        Solicitar cotización por WhatsApp
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Al enviar, serás redirigido a WhatsApp para completar tu solicitud con uno de nuestros asesores.
      </p>
    </form>
  );
};

export default QuoteForm;
