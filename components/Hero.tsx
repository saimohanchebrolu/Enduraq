"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  KeyRound,
  LayoutGrid,
  Monitor,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { site } from "@/lib/site";
import { useModal } from "@/lib/modal-context";

const technologies = [
  { label: "Windows 11", Icon: Monitor, color: "text-sky-300" },
  { label: "Intune", Icon: Smartphone, color: "text-cyan-300" },
  { label: "Entra ID", Icon: KeyRound, color: "text-blue-300" },
  { label: "Microsoft 365", Icon: LayoutGrid, color: "text-amber-300" },
  { label: "Defender", Icon: ShieldCheck, color: "text-emerald-300" },
  { label: "Automation", Icon: Workflow, color: "text-indigo-300" },
];

export default function Hero() {
  const { openAssessment, openQuote } = useModal();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#080e19] py-8 sm:py-10">
      <div className="hero-backdrop pointer-events-none absolute inset-0" />
      <Image
        src="/images/hero-computer.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="hero-copy-shade pointer-events-none absolute inset-0" />
      <div className="hero-horizon pointer-events-none" />

      <div className="container-page relative">
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow-dark">{site.badge}</span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Modernize.
            <br />
            Secure.{" "}
            <span className="bg-gradient-to-r from-brand-300 to-accent-cyan bg-clip-text text-transparent">
              Automate.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={openAssessment} className="btn-primary">
              Book a Free Assessment
            </button>
            <button onClick={openQuote} className="btn-outline-light">
              Talk to an Expert
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,1.4fr)]">
            {technologies.map(({ label, Icon, color }, index) => (
              <motion.div
                key={label}
                animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 3.8,
                        delay: index * 0.14,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-md border border-white/10 bg-[#091426]/85 px-2 py-2 shadow-sm backdrop-blur-md"
              >
                <Icon size={15} className={`shrink-0 ${color}`} />
                <span className="whitespace-nowrap text-[10px] font-semibold text-white sm:text-[11px]">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
