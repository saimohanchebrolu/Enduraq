"use client";

import { useState } from "react";
import { Service } from "@/lib/services";
import ServiceCard from "./ServiceCard";

const categories = [
  "All",
  "Endpoint",
  "Security",
  "Identity",
  "Microsoft 365",
  "Automation",
  "AI Solutions",
  "Web & Digital",
] as const;

export default function ServicesGrid({ services }: { services: Service[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-brand-500 text-white"
                : "bg-ink-900/[0.04] text-ink-700 hover:bg-ink-900/[0.08]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
