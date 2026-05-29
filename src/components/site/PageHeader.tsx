export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-16 px-6">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, oklch(0.82 0.13 82 / 0.12), transparent 70%)" }}
      />
      <div className="container-x relative text-center max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95]">{title}</h1>
        {subtitle && <p className="mt-5 text-muted-foreground text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
