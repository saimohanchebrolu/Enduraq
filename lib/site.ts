// Central brand configuration.
// Change company name/contact info here — it propagates across the entire site.

export const site = {
  companyName: "Enduraq Technologies",
  shortName: "Enduraq",
  tagline: "Modernize. Secure. Automate.",
  description:
    "We help organizations modernize, secure, manage and automate Microsoft-based workplace environments — Windows 11, Intune, Entra ID, Defender, Microsoft 365 and automation.",
  badge: "Microsoft Modern Workplace Specialists",
  phone: "+91 9600181431",
  email: "info@enduraq.in",
  address: "Flat 2114, Arun Excello Sankara, Kannapuram Main Road, Kolathur Mambakkam, Chennai - 600127",
  website: "https://www.enduraq.com",
  linkedin: "https://www.linkedin.com/company/enduraq-technologies",
  facebook: "https://www.facebook.com/enduraqtech",
  twitter: "https://twitter.com/enduraqtech",
  whatsapp: "https://wa.me/919600181431",
  nav: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export type NavItem = (typeof site.nav)[number];
