import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceCard from "@/components/ServiceCard";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-navy-950 py-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div className="container-page relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white">Services</Link>
              <ChevronRight size={14} />
              <span className="text-white/80">{service.title}</span>
            </nav>
            <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="eyebrow-dark">{service.category}</span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">{service.short}</p>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-glow">
                <Image
                  src={service.image}
                  alt={service.title}
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
              <h2 className="text-2xl font-bold text-ink-900">Common Challenges</h2>
              <ul className="mt-6 space-y-4">
                {service.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                How {`Enduraq Technologies`} Helps
              </h2>
              <ul className="mt-6 space-y-4">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-ink-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-[#F7F9FE]">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr,1fr]">
              <div className="card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-ink-900">Scope</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  What we plan and deliver as part of the engagement.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  {service.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-700">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="rounded-lg border border-brand-500/15 bg-brand-50/70 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-ink-900">Prerequisites</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  To keep discovery and delivery moving, please have:
                </p>
                <ul className="mt-5 space-y-4">
                  {service.prerequisites.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section aria-labelledby="implementation-plan-heading" className="section bg-[#F7F9FE]">
          <div className="container-page">
            <span className="eyebrow">Our Delivery Approach</span>
            <h2
              id="implementation-plan-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
            >
              Implementation Plan
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              A clear, phased delivery path tailored to your environment and requirements.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {service.methodology.map((m, i) => (
                <article
                  key={m.step}
                  className="card flex min-h-[210px] flex-col p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-base font-bold text-white shadow-[0_6px_16px_rgba(62,109,245,0.2)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-ink-900">{m.step}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-500">{m.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {service.deliverables && (
          <section className="section bg-white">
            <div className="container-page">
              <h2 className="text-2xl font-bold text-ink-900">Project Deliverables</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-500">
                The documentation and validation outputs your team receives during handover.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {service.deliverables.map((item, i) => (
                  <div key={item} className="card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink-900">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Technology Stack</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-10 text-2xl font-bold text-ink-900">Expected Outcomes</h2>
              <ul className="mt-6 space-y-4">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-ink-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {service.faq.map((f) => (
                  <div key={f.q} className="card p-5">
                    <h3 className="text-sm font-semibold text-ink-900">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-[#F7F9FE]">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-ink-900">Related Services</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>

        {service.slug === "claude-ai-solutions" ? (
          <CTA
            title="Explore a practical Claude AI use case"
            description="Start with a focused conversation about your workflow, data requirements and safeguards before deciding whether an AI pilot is right for you."
            primaryLabel="Request an AI discussion"
            secondaryLabel="Contact our team"
          />
        ) : (
          <CTA />
        )}
      </main>
      <Footer />
    </>
  );
}
