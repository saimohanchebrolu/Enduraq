import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.companyName} handles information when you visit this website or contact us.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  { id: "information", title: "Information and this website" },
  { id: "use", title: "How information is used" },
  { id: "sharing", title: "When information may be shared" },
  { id: "retention", title: "Retention and security" },
  { id: "rights", title: "Your choices and rights" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description={`This policy explains what information this website handles, what happens when you contact ${site.companyName}, and the choices available to you.`}
        />
        <section className="section bg-white">
          <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[240px,minmax(0,1fr)] lg:gap-16">
            <aside className="h-fit rounded-lg border border-ink-900/[0.06] bg-[#F7F9FE] p-5 lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-ink-900">On this page</h2>
              <nav aria-label="Privacy policy sections" className="mt-4">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-sm text-ink-500 hover:text-brand-600">
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link href="/cookies" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            <article className="max-w-3xl">
              <p className="text-sm text-ink-500">Last updated: 4 October 2026</p>
              <p className="mt-5 leading-relaxed text-ink-700">
                This policy applies to the public website at {site.website}. In this
                policy, “we” means {site.companyName}, the name used to operate this
                website. If you contact us about a project, the organization
                identified in your eventual service agreement will be responsible for
                handling information under that engagement.
              </p>

              <section id="information" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">Information and this website</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  You can browse the public pages without submitting personal
                  information. The contact, quote and assessment forms currently
                  displayed on this website are not connected to a submission
                  service. Submitting one does not send its fields to us or save them
                  on our systems. Please email us directly if you want to make an
                  enquiry.
                </p>
                <p className="mt-3 leading-relaxed text-ink-700">
                  If you email, call or message us through WhatsApp, we receive the
                  details you choose to share, such as your name, contact details,
                  organization and enquiry. WhatsApp and your email or telephone
                  providers process information under their own terms and privacy
                  notices.
                </p>
                <p className="mt-3 leading-relaxed text-ink-700">
                  Like most websites, the hosting or network providers that deliver
                  this site may process technical request and security information
                  (for example, IP address, browser details, request time and error
                  logs). The exact information, provider and retention period depend
                  on the live hosting configuration; they are not configured by the
                  application code in this repository.
                </p>
              </section>

              <section id="use" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">How information is used</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  We use information you send directly to respond to your enquiry,
                  discuss a potential engagement, provide requested support, and
                  maintain business records where needed. Technical information may
                  be used by hosting providers to deliver, secure and troubleshoot
                  the website.
                </p>
                <p className="mt-3 leading-relaxed text-ink-700">
                  The website code does not currently include analytics or
                  advertising tracking. For details about the browser storage used
                  for the cookie notice, see our{" "}
                  <Link href="/cookies" className="font-medium text-brand-600 underline">
                    Cookie Policy
                  </Link>.
                </p>
              </section>

              <section id="sharing" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">When information may be shared</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  We do not sell personal information. If you contact us, information
                  may be handled by service providers needed to operate our
                  communications or business systems, or disclosed when required by
                  law. We do not operate a form-processing service through this
                  website. Links to external sites are provided for convenience;
                  those sites control their own information practices.
                </p>
              </section>

              <section id="retention" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">Retention and security</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  Information in an enquiry sent directly to us is kept only for as
                  long as reasonably needed to respond, manage a business
                  relationship, meet legal obligations or resolve disputes. Specific
                  retention periods depend on the communication and any applicable
                  contract or legal requirements. No information entered into the
                  currently unconnected website forms is transmitted to or retained
                  by us through those forms.
                </p>
                <p className="mt-3 leading-relaxed text-ink-700">
                  We take reasonable steps to protect information we handle, but no
                  method of transmission or storage can be guaranteed completely
                  secure.
                </p>
              </section>

              <section id="rights" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">Your choices and rights</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  Depending on the law that applies to you, you may have rights to
                  request access to, correction of, deletion of or other action
                  regarding your personal information. You can also ask us a
                  question or request that we stop using information you previously
                  sent, subject to legal and contractual requirements. Contact us
                  using the details below. We may need to verify your identity and
                  clarify the request before responding.
                </p>
              </section>

              <section id="children" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">Children</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  This business website is intended for organizations and adults
                  seeking technology services. It is not designed to collect
                  information from children.
                </p>
              </section>

              <section id="changes" className="mt-10 scroll-mt-28">
                <h2 className="text-xl font-semibold text-ink-900">Changes to this policy</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  We may update this policy when the website or our practices change.
                  The “Last updated” date above indicates the latest revision.
                </p>
              </section>

              <section className="mt-10 border-t border-ink-900/10 pt-8">
                <h2 className="text-xl font-semibold text-ink-900">Contact</h2>
                <p className="mt-3 leading-relaxed text-ink-700">
                  For privacy questions or requests, email{" "}
                  <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline">
                    {site.email}
                  </a>{" "}
                  or write to {site.address}.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
