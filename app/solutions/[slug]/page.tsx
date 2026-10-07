import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionCard from "@/components/SolutionCard";
import { solutions, getSolutionBySlug } from "@/lib/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.short,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-navy-950 py-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div className="container-page relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white/80">{solution.title}</span>
            </nav>
            <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {solution.title}
                </h1>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">{solution.short}</p>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-glow">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={900}
                  height={620}
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Overview</h2>
              <p className="mt-5 leading-relaxed text-ink-700">{solution.overview}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {solution.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Expected Outcomes</h2>
              <ul className="mt-6 space-y-4">
                {solution.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-ink-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-[#F7F9FE]">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-ink-900">Related Solutions</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <SolutionCard key={s.slug} solution={s} />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
