import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTA from "@/components/CTA";
import { services } from "@/lib/services";

const processSteps = [
  { title: "Assess", detail: "Evaluate your current environment and identify gaps and opportunities." },
  { title: "Plan", detail: "Design a tailored modernization roadmap." },
  { title: "Implement", detail: "Deploy and configure solutions with minimal disruption." },
  { title: "Manage", detail: "Ongoing management, monitoring and support." },
  { title: "Optimize", detail: "Continuous improvement and automation." },
];

const differentiators = [
  {
    title: "Microsoft-focused",
    detail: "Specialized in the tools that power the modern workplace.",
  },
  {
    title: "Security by design",
    detail: "Security and sensible controls built into every recommendation.",
  },
  {
    title: "Practical delivery",
    detail: "Clear, phased plans designed to minimize disruption.",
  },
  {
    title: "Built around your team",
    detail: "Solutions shaped around your people, goals and environment.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="home-page">
        <Hero />
        <TechnologyMarquee />

        <section className="section home-services-section bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Our Services"
              title="Technology Services for a Modern Workplace"
              description="From endpoint modernization and security to automation and practical AI solutions, we help you improve the technology your team relies on."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section relative overflow-hidden bg-navy-950">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow-dark">Why Choose {`Enduraq Technologies`}</span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Microsoft
                <br />
                Modern Workplace Partner
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
                We combine deep Microsoft expertise with a practical, outcome-driven
                approach to deliver secure, scalable and efficient IT environments.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  >
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-glow">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop"
                alt="IT professional managing a modern Microsoft workplace environment"
                width={900}
                height={640}
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section home-process-section bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Our Process"
              title="A Simple Path to a Modern Workplace"
              description="We follow a structured and proven methodology to ensure a smooth and successful transformation."
            />
            <ProcessTimeline steps={processSteps} className="mt-10" />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
