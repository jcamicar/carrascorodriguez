import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";

const IndustryCard = ({ industry }: { industry: Industry }) => (
  <Link
    to={`/industria/${industry.slug}`}
    className="group flex flex-col items-center gap-3 rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
      <industry.icon className="h-7 w-7 text-accent" />
    </div>
    <h3 className="font-heading text-sm font-semibold text-card-foreground">{industry.name}</h3>
    <p className="text-xs text-muted-foreground line-clamp-2">{industry.description}</p>
    <span className="mt-auto flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
      Ver más <ArrowRight className="h-3 w-3" />
    </span>
  </Link>
);

export default IndustryCard;
