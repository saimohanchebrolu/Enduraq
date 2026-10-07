"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const consentKey = "enduraq-cookie-consent";
const consentEvent = "enduraq-cookie-consent-change";

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(consentEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(consentEvent, callback);
  };
}

function getConsentSnapshot() {
  return Boolean(window.localStorage.getItem(consentKey));
}

function getServerConsentSnapshot() {
  return false;
}

export default function CookieConsent() {
  const visible = !useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  function accept() {
    window.localStorage.setItem(consentKey, "accepted");
    window.dispatchEvent(new Event(consentEvent));
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-900/10 bg-white/95 backdrop-blur-md"
        >
          <div className="container-page flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
            <p className="text-sm text-ink-500">
              We use browser storage to remember this notice. We don&apos;t currently use
              analytics or advertising cookies. See our{" "}
              <Link href="/cookies" className="font-medium text-brand-600 underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-3">
              <button onClick={accept} className="btn-primary px-4 py-2 text-xs">
                Got it
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
