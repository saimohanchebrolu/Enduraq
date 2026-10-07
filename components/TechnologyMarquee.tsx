const items = [
  "Windows 11",
  "Microsoft Intune",
  "Entra ID",
  "Microsoft 365",
  "Microsoft Defender",
  "Automation",
  "Azure Virtual Desktop",
  "Microsoft Graph",
];

export default function TechnologyMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink-900/[0.06] bg-white py-3">
      <div className="flex w-max animate-marquee gap-4">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-500/15 bg-brand-50/70 px-4 py-2 text-sm font-semibold tracking-normal text-brand-800"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
