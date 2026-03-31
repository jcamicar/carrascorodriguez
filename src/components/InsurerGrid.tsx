import { insurers } from "@/data/insurers";

const InsurerGrid = () => (
  <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
    {insurers.map((ins) => (
      <a
        key={ins.slug}
        href={ins.portalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-2"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-xl border bg-white p-3 shadow-sm transition-all group-hover:shadow-md group-hover:scale-105">
          <img
            src={ins.logo}
            alt={ins.name}
            className="h-full w-full object-contain"
            loading="lazy"
            width={80}
            height={80}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {ins.name}
        </span>
      </a>
    ))}
  </div>
);

export default InsurerGrid;
