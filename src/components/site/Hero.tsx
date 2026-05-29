import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-rooftop.png";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Tall4Talls community on a Tehran rooftop at night with Milad Tower"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.14 0.005 280 / 0.55) 0%, oklch(0.14 0.005 280 / 0.35) 35%, oklch(0.14 0.005 280 / 0.85) 85%, oklch(0.14 0.005 280) 100%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }} />

      <div className="relative z-10 container-x px-6 pt-44 pb-32 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            A global community for tall people
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95]">
            Tall Together. <br />
            <span className="gold-text">Stand Stronger.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            The global community platform built for tall people — connect, gather, and
            celebrate tall culture from Tehran to Toronto.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/join" className="btn-gold">
              Join the Community <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/events" className="btn-ghost">Explore Events</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll
        <span className="block h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
