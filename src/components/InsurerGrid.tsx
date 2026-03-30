import { insurers } from "@/data/insurers";

const InsurerGrid = () => (
  <div className="flex flex-wrap items-center justify-center gap-8">
    {insurers.map((ins) => (
      <div
        key={ins.slug}
        className="flex h-16 w-28 items-center justify-center rounded-lg border bg-card px-4 shadow-sm transition-all hover:shadow-md"
      >
        <span className="font-heading text-sm font-bold" style={{ color: ins.color }}>
          {ins.name}
        </span>
      </div>
    ))}
  </div>
);

export default InsurerGrid;
