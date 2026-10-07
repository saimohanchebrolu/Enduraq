import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SolutionCard from "@/components/SolutionCard";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTA from "@/components/CTA";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Productized solutions for a secure and modern workplace.",
  alternates: { canonical: "/solutions" },
};

const transformSteps = [
  { title: "Assess", detail: "Understand your current environment and goals." },
  { title: "Design", detail: "Architect the target state solution." },
  { title: "Pilot", detail: "Validate with a representative group." },
  { title: "Deploy", detail: "Roll out in structured, low-risk waves." },
  { title: "Manage", detail: "Provide ongoing management and support." },
  { title: "Optimize", detail: "Continuously improve based on real usage." },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Our Solutions"
          title="Our Solutions"
          description="Productized solutions for a secure and modern workplace, built on deep Microsoft platform expertise."
        />
        <section className="section bg-white">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-[#F7F9FE]">
          <div className="container-page">
            <SectionHeading
              eyebrow="Our Methodology"
              title="How We Transform Your Workplace"
              description="A consistent, proven methodology applied across every solution engagement."
            />
            <ProcessTimeline steps={transformSteps} />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
