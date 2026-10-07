import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import BrandLogo from "./BrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const serviceColumnBreak = Math.ceil(services.length / 2);

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-page grid grid-cols-1 items-start gap-x-10 gap-y-12 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr,0.8fr,1.8fr,1.2fr] lg:gap-x-8 lg:gap-y-10 lg:py-14">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <BrandLogo />
            <span className="text-lg font-bold leading-none text-white">
              {site.shortName}
              <span className="block text-[11px] font-medium tracking-wide text-brand-300">
                Technologies
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Modern workplace. Secure endpoints. Automated IT. We help organizations
            modernize, secure and manage their Microsoft environments with a
            customer-first approach.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={site.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href={site.facebook} label="Facebook">
              <Facebook size={16} />
            </SocialIcon>
            <SocialIcon href={site.twitter} label="Twitter">
              <Twitter size={16} />
            </SocialIcon>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Our Services</h4>
          <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm xl:grid-cols-2">
            {[services.slice(0, serviceColumnBreak), services.slice(serviceColumnBreak)].map(
              (column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2.5">
                  {column.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block leading-relaxed hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
            )}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-300" />
              <a href={`tel:${site.phone}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-300" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-300" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.companyName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/70 transition-colors hover:border-brand-400 hover:text-white"
    >
      {children}
    </a>
  );
}
