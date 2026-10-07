import Image from "next/image";

export default function BrandLogo({ className = "h-10 w-11" }: { className?: string }) {
  return (
    <span className={`relative block shrink-0 ${className}`}>
      <Image
        src="/images/enduraq-logo-mark.png"
        alt=""
        fill
        sizes="44px"
        className="object-contain"
      />
    </span>
  );
}
