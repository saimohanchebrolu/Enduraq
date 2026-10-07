import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Globe,
  Headphones,
  Laptop,
  LayoutGrid,
  Mail,
  Monitor,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Tablet,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Service } from "@/lib/services";

const serviceIcons: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  ShieldCheck,
  Users,
  Mail,
  LayoutGrid,
  Headphones,
  Workflow,
  Server,
  Tablet,
  RefreshCw,
  Laptop,
  Globe,
  BrainCircuit,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon] ?? Monitor;

  return (
    <div className="card group flex flex-col p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
      >
        Learn More <ArrowRight size={15} />
      </Link>
    </div>
  );
}
