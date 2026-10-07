"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Modal from "./Modal";
import { useModal } from "@/lib/modal-context";
import { site } from "@/lib/site";
import { submitForm } from "@/lib/submit-form";

export default function AssessmentModal() {
  const { assessmentOpen, closeAssessment } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    setError(null);
    setSending(true);
    const result = await submitForm("assessment", form);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  }

  function handleClose() {
    closeAssessment();
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
    }, 300);
  }

  return (
    <Modal open={assessmentOpen} onClose={handleClose} labelledBy="assessment-modal-title">
      {submitted ? (
        <div className="py-6 text-center">
          <CheckCircle2 className="mx-auto mb-4 text-brand-500" size={40} />
          <h3 className="text-xl font-semibold text-ink-900">Thank you — request received</h3>
          <p className="mt-2 text-ink-500">
            Our team will contact you shortly to schedule your free endpoint assessment.
          </p>
          <button onClick={handleClose} className="btn-primary mt-6">
            Close
          </button>
        </div>
      ) : (
        <>
          <h3 id="assessment-modal-title" className="text-xl font-semibold text-ink-900">
            Get a Free Endpoint Assessment
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Share a few details and our team will reach out to schedule your assessment.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {error && (
              <p role="alert" className="rounded-md bg-red-50 px-4 py-2.5 text-sm text-red-700">
                {error}{" "}
                <a href={`mailto:${site.email}`} className="font-medium underline">
                  {site.email}
                </a>
              </p>
            )}
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div>
              <label htmlFor="a-name" className="mb-1.5 block text-sm font-medium text-ink-700">
                Full name
              </label>
              <input
                id="a-name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-ink-900/15 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label htmlFor="a-email" className="mb-1.5 block text-sm font-medium text-ink-700">
                Work email
              </label>
              <input
                id="a-email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-ink-900/15 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label htmlFor="a-company" className="mb-1.5 block text-sm font-medium text-ink-700">
                Company name
              </label>
              <input
                id="a-company"
                name="company"
                type="text"
                required
                className="w-full rounded-md border border-ink-900/15 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-70">
              {sending ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" /> Sending…
                </>
              ) : (
                "Request Free Assessment"
              )}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
