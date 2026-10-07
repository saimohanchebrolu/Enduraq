import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.companyName} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Legal"
          title="Terms & Conditions"
          description="Please read these terms before using this website. Separate written agreements govern any services we provide."
        />
        <section className="section bg-white">
          <div className="container-page max-w-3xl">
            <p className="text-sm text-ink-500">Last updated: 4 October 2026</p>
            <p className="mt-5 leading-relaxed text-ink-700">
              These terms apply to your use of {site.website}, operated under the
              name {site.companyName} (“we”, “us” or “our”). By accessing or using
              the website, you agree to these terms. If you do not agree, please do
              not use the website.
            </p>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Website information</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                The website provides general information about our company,
                technology services and areas of focus. Content is provided for
                information only; it is not technical, security, legal or other
                professional advice for your specific environment. You should
                independently assess your requirements and obtain appropriate
                professional advice before making decisions.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                We make reasonable efforts to keep information useful and current,
                but do not promise that every page is complete, error-free or
                up-to-date. Product names and descriptions belong to their
                respective owners and do not imply endorsement.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Enquiries and service engagements</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Website content, displayed prices (if any), and enquiry forms do not
                create an offer, accepted quote or service contract. The quote,
                assessment and contact forms are currently not connected to a
                submission service; information entered there is not sent to us.
                To contact us, use the email address or telephone number in the
                website footer.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                Any services will be subject to a separate written agreement,
                statement of work or order accepted by both parties. That agreement
                will set the applicable scope, fees, responsibilities, timelines,
                service levels, confidentiality, data handling, intellectual
                property and other engagement terms. If it conflicts with these
                website terms, the signed agreement governs the services.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Acceptable use</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                You may use this website only for lawful purposes. You must not
                attempt to disrupt, damage, gain unauthorized access to or interfere
                with the website, its infrastructure or another person’s use of it.
                You must not misuse the website to transmit malicious code, spam or
                unlawful material.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Intellectual property</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Unless otherwise stated, the website’s text, branding, design and
                original materials are owned by or used with permission by
                {` ${site.companyName}`}. You may view and print pages for personal,
                non-commercial reference. You must not reproduce, adapt, distribute
                or commercially exploit website materials without prior written
                permission, except where applicable law allows.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Third-party services and links</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                The website may link to third-party services, including social
                networks and messaging services. We do not control those services
                and are not responsible for their content, availability, terms or
                privacy practices. Your use of them is governed by their own terms.
                See our{" "}
                <Link href="/privacy" className="font-medium text-brand-600 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/cookies" className="font-medium text-brand-600 underline">
                  Cookie Policy
                </Link>.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Availability and liability</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                We may update, suspend or remove website content or features at any
                time. To the extent permitted by applicable law, the website is
                provided on an “as available” basis, without warranties that cannot
                lawfully be excluded. We are not liable for indirect or
                consequential loss arising solely from use of, or inability to use,
                this informational website. Nothing in these terms excludes or
                limits liability or rights that cannot lawfully be excluded or
                limited. Liability for any contracted services is addressed in the
                relevant written agreement.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">Changes and applicable law</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                We may revise these terms by publishing an updated version on this
                page. Your continued use after an update means the updated terms
                apply to your future website use. These terms are subject to the
                laws applicable to the operator and your use of the website.
                Mandatory consumer protections and other non-waivable legal rights
                remain unaffected.
              </p>
            </section>

            <section className="mt-10 border-t border-ink-900/10 pt-8">
              <h2 className="text-xl font-semibold text-ink-900">Contact</h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline">
                  {site.email}
                </a>{" "}
                or by post to {site.address}.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
