"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { site } from "@/lib/site";
import { useModal } from "@/lib/modal-context";
import BrandLogo from "./BrandLogo";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { openQuote } = useModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-white lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.25 }}
        >
          <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <BrandLogo />
              <span className="text-lg font-bold text-ink-900">{site.shortName}</span>
            </Link>
            <button onClick={onClose} aria-label="Close menu" className="p-2">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 overflow-y-auto px-4 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="border-b border-ink-900/5 py-3.5 text-base font-medium text-ink-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4">
            <button
              onClick={() => {
                onClose();
                openQuote();
              }}
              className="btn-primary w-full"
            >
              Get a Quote
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
