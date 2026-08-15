export default function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-signal pl-3">
      <p className="font-mono text-2xl font-semibold text-ink">{value}</p>
      <p className="text-xs text-steel uppercase tracking-wide">{label}</p>
    </div>
  );
}
