import type { Metadata } from "next";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's discuss how we can help you modernize, secure and automate your Microsoft environment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Get in Touch"
          title="Get in Touch"
          description="Let's discuss how we can help you modernize, secure and automate your Microsoft environment."
        />

        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-[1fr,1.4fr]">
            <div>
              <h2 className="text-xl font-semibold text-ink-900">Contact Information</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <div className="text-sm text-ink-500">Phone</div>
                    <a href={`tel:${site.phone}`} className="text-sm font-medium text-ink-900">
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <div className="text-sm text-ink-500">Email</div>
                    <a href={`mailto:${site.email}`} className="text-sm font-medium text-ink-900">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <div className="text-sm text-ink-500">Address</div>
                    <span className="text-sm font-medium text-ink-900">{site.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink-900"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Facebook size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink-900"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>

        <CTA
          title="Book a Free Assessment"
          description="Discover gaps, reduce risk and get a customized modernization roadmap."
        />
      </main>
      <Footer />
    </>
  );
}
