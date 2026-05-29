import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-rooftop.png";

export function CTA() {
  return (
    <section className="relative section overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.14 0.005 280 / 0.6), oklch(0.14 0.005 280 / 0.92))" }} />
      <div className="container-x relative text-center max-w-3xl">
        <p className="eyebrow">Your tribe is waiting</p>
        <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
          Find your <span className="gold-text">community</span>.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">Built for tall people everywhere.</p>
        <div className="mt-8 flex justify-center">
          <Link to="/join" className="btn-gold text-base">Join Tall4Talls</Link>
        </div>
      </div>
    </section>
  );
}
