const stats = [
  { value: "120K+", label: "Members" },
  { value: "40+", label: "Countries" },
  { value: "500+", label: "Events" },
  { value: "1M+", label: "Connections" },
];

export function Stats() {
  return (
    <section className="relative section overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, oklch(0.82 0.13 82 / 0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, oklch(0.97 0.01 90 / 0.5) 0, transparent 2px), radial-gradient(1.5px 1.5px at 70% 60%, oklch(0.82 0.13 82 / 0.6) 0, transparent 2px), radial-gradient(2px 2px at 40% 80%, oklch(0.78 0.16 240 / 0.4) 0, transparent 2px)",
          backgroundSize: "300px 300px, 240px 240px, 360px 360px",
        }}
      />
      <div className="container-x relative">
        <div className="glass-strong rounded-3xl p-10 md:p-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-semibold gold-text">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
