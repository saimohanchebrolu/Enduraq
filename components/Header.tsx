"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { site } from "@/lib/site";
import { useModal } from "@/lib/modal-context";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useModal();

  return (
    <>
        <header
          className="sticky top-0 z-50 w-full border-b border-ink-900/10 bg-white shadow-sm"
      >
        <div className="container-page flex h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandLogo />
            <span className="text-lg font-bold leading-none text-ink-900">
              {site.shortName}
              <span className="block text-[11px] font-medium tracking-wide text-brand-400">
                Technologies
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? "text-brand-600" : "text-ink-700 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button onClick={openQuote} className="btn-primary">
              Get a Quote
            </button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="p-2 text-ink-900 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
