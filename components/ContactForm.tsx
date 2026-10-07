"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { submitForm } from "@/lib/submit-form";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    if (!email.includes("@")) {
      setError("Please enter a valid work email address.");
      return;
    }
    setError(null);
    setSending(true);
    const result = await submitForm("contact", form);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center justify-center p-10 text-center">
        <CheckCircle2 className="text-brand-500" size={40} />
        <h3 className="mt-4 text-xl font-semibold text-ink-900">Thank you — message sent</h3>
        <p className="mt-2 text-ink-500">
          We&apos;ve received your message and will get back to you shortly. You can also reach us
          at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8" noValidate>
      <h2 className="text-xl font-semibold text-ink-900">Send Us a Message</h2>
      {error && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-2.5 text-sm text-red-700">
          {error}
        </p>
      )}
      {/* Honeypot: hidden from people, catches bots */}
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink-700">
            Full Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-ink-700">
            Phone Number
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
        <div>
          <label htmlFor="c-company" className="mb-1.5 block text-sm font-medium text-ink-700">
            Company Name
          </label>
          <input
            id="c-company"
            name="company"
            type="text"
            required
            className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-size" className="mb-1.5 block text-sm font-medium text-ink-700">
            Company Size
          </label>
          <select
            id="c-size"
            name="size"
            className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option>1–50 employees</option>
            <option>51–200 employees</option>
            <option>201–1,000 employees</option>
            <option>1,000+ employees</option>
          </select>
        </div>
        <div>
          <label htmlFor="c-service" className="mb-1.5 block text-sm font-medium text-ink-700">
            Service Interested In
          </label>
          <select
            id="c-service"
            name="service"
            className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-ink-700">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={4}
          required
          className="w-full rounded-md border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
        {sending ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
