import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { ModalProvider } from "@/lib/modal-context";
import QuoteModal from "@/components/QuoteModal";
import AssessmentModal from "@/components/AssessmentModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: `${site.companyName} | ${site.tagline}`,
    template: `%s | ${site.companyName}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.companyName} | ${site.tagline}`,
    description: site.description,
    url: site.website,
    siteName: site.companyName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.companyName} | ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.companyName,
    url: site.website,
    logo: `${site.website}/favicon.ico`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
    },
    sameAs: [site.linkedin, site.facebook, site.twitter],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900 focus:shadow-cardHover"
        >
          Skip to main content
        </a>
        <ModalProvider>
          {children}
          <QuoteModal />
          <AssessmentModal />
        </ModalProvider>
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
