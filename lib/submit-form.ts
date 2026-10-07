// Client-side helper used by the Contact form, Get a Quote and Free Assessment forms.
// Posts to the Cloudflare Pages Function at /api/contact, which emails info@enduraq.in.

export type FormType = "contact" | "quote" | "assessment";

export type SubmitResult = { ok: true } | { ok: false; error: string };

const FALLBACK_ERROR =
  "Something went wrong while sending your request. Please try again or email us directly.";

export async function submitForm(formType: FormType, form: HTMLFormElement): Promise<SubmitResult> {
  const data: Record<string, string> = { formType };
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") data[key] = value;
  });

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (res.ok && body?.ok) return { ok: true };
    return { ok: false, error: body?.error || FALLBACK_ERROR };
  } catch {
    return { ok: false, error: FALLBACK_ERROR };
  }
}
