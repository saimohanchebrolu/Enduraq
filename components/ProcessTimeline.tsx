type Step = { title: string; detail: string };

export default function ProcessTimeline({
  steps,
  className = "mt-14",
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <div className={className}>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="relative flex items-start justify-between">
          <div className="absolute left-0 right-0 top-6 h-px bg-ink-900/10" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative z-10 flex w-full flex-col items-center px-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-violet text-sm font-bold text-white shadow-glow">
                {i + 1}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="space-y-6 lg:hidden">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-violet text-sm font-bold text-white">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="mt-1 h-full w-px flex-1 bg-ink-900/10" />}
            </div>
            <div className="pb-6">
              <h3 className="text-sm font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
