import Image from "next/image";
import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className={`container-page relative grid grid-cols-1 items-center gap-8 ${image ? "lg:grid-cols-2" : ""}`}>
        <div>
          {eyebrow && <span className="eyebrow-dark">{eyebrow}</span>}
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">{description}</p>
          {children}
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg border border-white/10 shadow-glow lg:max-w-none">
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={900}
              height={620}
              className="h-[320px] w-full object-cover sm:h-[380px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
