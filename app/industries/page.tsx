import type { Metadata } from "next";
import { Landmark, HeartPulse, Briefcase, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description: "Microsoft modern workplace expertise tailored to your industry.",
  alternates: { canonical: "/industries" },
};

const industries = [
  {
    id: "financial-services",
    icon: Landmark,
    title: "Financial Services",
    detail:
      "Strengthen identity and endpoint controls to meet regulatory and compliance requirements without slowing teams down.",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    detail:
      "Secure clinical and administrative endpoints while supporting the availability healthcare teams depend on.",
  },
  {
    id: "professional-services",
    icon: Briefcase,
    title: "Professional Services",
    detail:
      "Enable secure, flexible remote and hybrid work with modern identity and device management.",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    detail:
      "Modernize office and plant-floor endpoints with consistent policy and centralized visibility.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Industries"
          title="Industries We Serve"
          description="Microsoft modern workplace expertise tailored to the requirements of your industry."
        />
        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.id} id={ind.id} className="card scroll-mt-24 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <ind.icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink-900">{ind.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-500">{ind.detail}</p>
              </div>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
