import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.companyName} uses cookies and browser storage on this website.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Legal"
          title="Cookie Policy"
          description="A clear explanation of cookies and browser storage used by this website."
        />
        <section className="section bg-white">
          <article className="container-page max-w-3xl">
            <p className="text-sm text-ink-500">Last updated: 4 October 2026</p>
            <p className="mt-5 leading-relaxed text-ink-700">
              This policy describes the cookies and similar browser storage used
              by the public website at {site.website}. For other information
              practices, read our{" "}
              <Link href="/privacy" className="font-medium text-brand-600 underline">
                Privacy Policy
              </Link>.
            </p>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">What the website currently uses</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                The website application does not currently set analytics or
                advertising cookies. It uses the browser’s local storage to
                remember that you dismissed the cookie notice. The storage entry
                is named <code className="rounded bg-[#F7F9FE] px-1.5 py-0.5 text-sm">enduraq-cookie-consent</code>.
                It is stored on your device, is not a cookie, and is not sent to
                our website as part of a request. It remains until you clear this
                site’s browser storage.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                The website code does not currently include analytics or
                advertising trackers. Hosting, security, content-delivery or other
                infrastructure providers may use strictly necessary technologies
                as part of operating the live site; the exact deployment setup
                should be checked with the hosting provider.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Your choices</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                You can dismiss the notice using its “Got it” button. You can
                remove the saved notice preference by clearing this website’s
                local storage or site data in your browser settings. If you block
                local storage, the notice may appear again. Browser settings also
                let you control or delete cookies set by websites and providers.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Third-party websites</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                If you follow a link to an external website, that website may use
                its own cookies and tracking technologies. We do not control those
                technologies; consult the external provider’s privacy and cookie
                notices.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Changes to this policy</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                We will update this page if the website begins using additional
                cookies or similar technologies. The “Last updated” date above
                indicates the latest revision.
              </p>
            </section>

            <section className="mt-10 border-t border-ink-900/10 pt-8">
              <h2 className="text-xl font-semibold text-ink-900">Contact</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                For questions about this policy, contact{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline">
                  {site.email}
                </a>.
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
