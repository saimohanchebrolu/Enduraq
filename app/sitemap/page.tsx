import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse the pages, services and solutions on the Enduraq Technologies website.",
  alternates: { canonical: "/sitemap" },
};

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const policies = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Explore"
          title="Sitemap"
          description="Browse the main pages, services and solutions available on our website."
        />
        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SitemapGroup title="Website">
              {pages.map((page) => (
                <SitemapLink key={page.href} href={page.href}>{page.label}</SitemapLink>
              ))}
            </SitemapGroup>
            <SitemapGroup title="Services">
              {services.map((service) => (
                <SitemapLink key={service.slug} href={`/services/${service.slug}`}>
                  {service.title}
                </SitemapLink>
              ))}
            </SitemapGroup>
            <SitemapGroup title="Solutions">
              {solutions.map((solution) => (
                <SitemapLink key={solution.slug} href={`/solutions/${solution.slug}`}>
                  {solution.title}
                </SitemapLink>
              ))}
            </SitemapGroup>
            <SitemapGroup title="Policies">
              {policies.map((policy) => (
                <SitemapLink key={policy.href} href={policy.href}>{policy.label}</SitemapLink>
              ))}
            </SitemapGroup>
            <SitemapGroup title="Machine-readable sitemap">
              <SitemapLink href="/sitemap.xml">XML Sitemap</SitemapLink>
            </SitemapGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SitemapGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card p-6">
      <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </section>
  );
}

function SitemapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm leading-relaxed text-ink-500 hover:text-brand-600">
        {children}
      </Link>
    </li>
  );
}
