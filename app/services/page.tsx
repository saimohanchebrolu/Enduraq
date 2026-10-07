import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Microsoft modern workplace and Claude AI services to modernize, secure and improve your IT workflows.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Our Services"
          title="Our Services"
          description="From Microsoft modern workplace services to practical Claude AI integrations, we help you improve the tools and workflows your organization relies on."
        />
        <section className="section bg-white">
          <div className="container-page">
            <ServicesGrid services={services} />
          </div>
        </section>
        <CTA
          title="Not sure where to start?"
          description="Book a free assessment and we'll help you identify the highest-impact place to begin."
        />
      </main>
      <Footer />
    </>
  );
}
