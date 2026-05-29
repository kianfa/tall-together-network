import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-tall4talls.png";

const links = [
  { to: "/community", label: "Community" },
  { to: "/events", label: "Events" },
  { to: "/members", label: "Members" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Tall4Talls" className="h-9 w-9 rounded-md object-cover" />
            <span className="hidden sm:inline font-display text-base font-semibold tracking-tight">
              TALL<span className="gold-text">4</span>TALLS
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
                  activeProps={{ className: "text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link to="/join" className="btn-gold !py-2 !px-5 text-sm">Join</Link>
            <button
              aria-label="Menu"
              className="lg:hidden h-10 w-10 rounded-full glass flex items-center justify-center"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-4 h-px bg-foreground relative before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-foreground after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-foreground" />
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden px-5 pb-4 flex flex-col gap-1 animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
