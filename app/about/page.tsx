import type { Metadata } from "next";
import Image from "next/image";
import { Users, Award, ShieldCheck, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Enduraq Technologies, a growing startup focused on practical Microsoft modern workplace solutions.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Users, title: "Customer First", detail: "Every recommendation starts with your business outcomes, not our product list." },
  { icon: Award, title: "Practical Technology", detail: "We focus on useful, well-documented solutions across the Microsoft ecosystem." },
  { icon: ShieldCheck, title: "Integrity", detail: "Transparent scoping, honest timelines and no unsupported claims." },
  { icon: Lightbulb, title: "Keep Learning", detail: "We keep up with evolving Microsoft capabilities and recommend them when they fit your needs." },
];

const ecosystem = [
  "Windows 11",
  "Microsoft Intune",
  "Microsoft Entra",
  "Microsoft Defender",
  "Microsoft 365",
  "Azure",
  "PowerShell",
  "Microsoft Graph",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="About Enduraq Technologies"
          title="About Enduraq Technologies"
          description="A growing technology startup focused on practical Microsoft modern workplace solutions."
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
          imageAlt="A bright, collaborative workspace"
        />

        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
                A focused start, built around your needs
              </h2>
              <p className="mt-5 leading-relaxed text-ink-700">
                Enduraq Technologies is an emerging technology company with a clear
                focus: help organizations make practical progress with the Microsoft
                modern workplace. We are building a business around thoughtful,
                right-sized support for the people and systems our customers rely on.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                As a startup, we are growing our capabilities with care. Our approach
                is to understand your environment first, agree on a clear scope, and
                work through manageable steps across technologies such as Windows 11,
                Intune, Microsoft Entra, Defender and Microsoft 365. We aim to be
                transparent about what we can deliver and where we are still growing.
              </p>
              <dl
                aria-label="How we work"
                className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="rounded-lg border border-ink-900/[0.06] bg-[#F7F9FE] p-4 sm:p-5">
                  <dt className="text-base font-semibold leading-snug text-ink-900">Focused</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    Microsoft workplace solutions
                  </dd>
                </div>
                <div className="rounded-lg border border-ink-900/[0.06] bg-[#F7F9FE] p-4 sm:p-5">
                  <dt className="text-base font-semibold leading-snug text-ink-900">Practical</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    Right-sized recommendations
                  </dd>
                </div>
                <div className="rounded-lg border border-ink-900/[0.06] bg-[#F7F9FE] p-4 sm:p-5">
                  <dt className="text-base font-semibold leading-snug text-ink-900">Transparent</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    Clear scope and communication
                  </dd>
                </div>
                <div className="rounded-lg border border-ink-900/[0.06] bg-[#F7F9FE] p-4 sm:p-5">
                  <dt className="text-base font-semibold leading-snug text-ink-900">Growing</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    A startup built to keep learning
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-card lg:min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                alt="A small technology team collaborating around a laptop in a shared workspace"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section bg-[#F7F9FE]">
          <div className="container-page">
            <SectionHeading eyebrow="Our Values" title="What Guides Our Work" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="card p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    <v.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Our Technology Focus"
              title="Microsoft Tools We Work With"
              description="Our current focus includes Microsoft workplace, endpoint and automation technologies."
            />
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {ecosystem.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-medium text-ink-700 shadow-card"
                >
                  {t}
                </span>
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
