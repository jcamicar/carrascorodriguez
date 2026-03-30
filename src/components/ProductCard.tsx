import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
      <product.icon className="h-5 w-5 text-accent" />
    </div>
    <h3 className="mb-1 font-heading text-base font-semibold text-card-foreground">{product.name}</h3>
    <p className="mb-4 flex-1 text-sm text-muted-foreground">{product.shortDescription}</p>
    <div className="flex gap-2">
      <Button variant="outline" size="sm" asChild className="flex-1">
        <Link to={`/productos/${product.slug}`}>Detalles</Link>
      </Button>
      <Button size="sm" asChild className="flex-1">
        <Link to={`/cotizar?producto=${product.slug}`}>Cotizar</Link>
      </Button>
    </div>
  </div>
);

export default ProductCard;
