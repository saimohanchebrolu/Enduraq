"use client";

import { useModal } from "@/lib/modal-context";

export default function CTA({
  title = "Ready to Modernize Your Endpoints?",
  description = "Book a free consultation with our Microsoft experts and discover how we can help your organization.",
  primaryLabel = "Book Free Assessment",
  secondaryLabel = "Contact Sales",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const { openAssessment, openQuote } = useModal();

  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-violet px-8 py-14 sm:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-3 text-white/85">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={openAssessment} className="btn bg-white text-brand-700 hover:bg-white/90">
                {primaryLabel}
              </button>
              <button onClick={openQuote} className="btn-outline-light">
                {secondaryLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
