"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Modal from "./Modal";
import { useModal } from "@/lib/modal-context";
import { site } from "@/lib/site";
import { submitForm } from "@/lib/submit-form";

export default function QuoteModal() {
  const { quoteOpen, closeQuote } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    setError(null);
    setSending(true);
    const result = await submitForm("quote", form);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  }

  function handleClose() {
    closeQuote();
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
    }, 300);
  }

  return (
    <Modal open={quoteOpen} onClose={handleClose} labelledBy="quote-modal-title">
      {submitted ? (
        <div className="py-6 text-center">
          <CheckCircle2 className="mx-auto mb-4 text-brand-500" size={40} />
          <h3 className="text-xl font-semibold text-ink-900">Thank you — request received</h3>
          <p className="mt-2 text-ink-500">
            Our team will review your request and get back to you shortly with a quote.
          </p>
          <button onClick={handleClose} className="btn-primary mt-6">
            Close
          </button>
        </div>
      ) : (
        <>
          <h3 id="quote-modal-title" className="text-xl font-semibold text-ink-900">
            Get a Quote
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Tell us what you need and we&apos;ll get back to you with a tailored quote.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {error && <ErrorNote message={error} />}
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full name" id="q-name" name="name" type="text" required />
              <Field label="Work email" id="q-email" name="email" type="email" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Company name" id="q-company" name="company" type="text" required />
              <Field label="Company size" id="q-size" name="size" type="text" placeholder="e.g. 50–200 employees" />
            </div>
            <div>
              <label htmlFor="q-message" className="mb-1.5 block text-sm font-medium text-ink-700">
                What do you need help with?
              </label>
              <textarea
                id="q-message"
                name="message"
                rows={3}
                className="w-full rounded-md border border-ink-900/15 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-70">
              {sending ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" /> Sending…
                </>
              ) : (
                "Request Quote"
              )}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}

function ErrorNote({ message }: { message: string }) {
  return (
    <p role="alert" className="rounded-md bg-red-50 px-4 py-2.5 text-sm text-red-700">
      {message}{" "}
      <a href={`mailto:${site.email}`} className="font-medium underline">
        {site.email}
      </a>
    </p>
  );
}

function Field({
  label,
  id,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-ink-900/15 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
