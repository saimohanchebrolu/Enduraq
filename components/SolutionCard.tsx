import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Cloud,
  KeyRound,
  Laptop,
  Layers,
  Mail,
  Monitor,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Solution } from "@/lib/solutions";

const solutionIcons: Record<string, LucideIcon> = {
  Monitor,
  Laptop,
  ShieldCheck,
  Cloud,
  Mail,
  MonitorSmartphone,
  Smartphone,
  KeyRound,
};

export default function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solutionIcons[solution.icon] ?? Layers;

  return (
    <div className="card group overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-md bg-white text-brand-600 shadow-card">
          <Icon size={18} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold text-ink-900">{solution.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{solution.short}</p>
        <Link
          href={`/solutions/${solution.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
        >
          Learn More <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
