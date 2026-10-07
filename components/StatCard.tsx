export default function StatCard({
  value,
  label,
  dark = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center sm:text-left">
      <div className={`text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-ink-900"}`}>
        {value}
      </div>
      <div className={`mt-1 text-sm ${dark ? "text-white/60" : "text-ink-500"}`}>{label}</div>
    </div>
  );
}
