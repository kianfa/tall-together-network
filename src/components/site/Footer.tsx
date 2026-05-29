import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo-tall4talls.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-20">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--gold) 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, var(--gold) 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="container-x px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Tall4Talls" className="h-10 w-10 rounded-md" />
            <span className="font-display text-lg font-semibold">TALL<span className="gold-text">4</span>TALLS</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            The global community platform built for tall people. Tall together. Stand stronger.
          </p>
          <form className="mt-6 flex max-w-sm rounded-full glass p-1">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="btn-gold !py-2 !px-4 text-xs">Subscribe</button>
          </form>
        </div>
        <div>
          <p className="eyebrow mb-4">Community</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/community" className="text-muted-foreground hover:text-foreground">Community</Link></li>
            <li><Link to="/events" className="text-muted-foreground hover:text-foreground">Events</Link></li>
            <li><Link to="/members" className="text-muted-foreground hover:text-foreground">Members</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/join" className="text-muted-foreground hover:text-foreground">Join</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Tall4Talls. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gold"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
