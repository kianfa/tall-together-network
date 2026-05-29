import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Check } from "lucide-react";

const perks = [
  "Access to all global events",
  "Private members-only groups",
  "Curated tall-friendly fashion drops",
  "Editorial journal & member stories",
  "Verified height profiles",
  "City-based local communities",
];

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join — Tall4Talls" },
      { name: "description", content: "Become a member of Tall4Talls — the global community platform built for tall people." },
      { property: "og:title", content: "Join Tall4Talls" },
      { property: "og:description", content: "Become a member of the global tall community." },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Membership" title={<>Become a <span className="gold-text">founding member</span>.</>} subtitle="Free to join during launch. Lifetime perks for early members." />
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start max-w-5xl">
          <form className="glass-strong rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-muted-foreground">First name</span>
                <input className="mt-2 w-full bg-background/40 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition" />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Last name</span>
                <input className="mt-2 w-full bg-background/40 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs text-muted-foreground">Email</span>
              <input type="email" className="mt-2 w-full bg-background/40 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition" />
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-muted-foreground">Height</span>
                <input placeholder={`6'2" or 188cm`} className="mt-2 w-full bg-background/40 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition" />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">City</span>
                <input className="mt-2 w-full bg-background/40 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition" />
              </label>
            </div>
            <button type="button" className="btn-gold w-full justify-center">Request my invite</button>
            <p className="text-[11px] text-muted-foreground text-center">By joining you agree to our community guidelines.</p>
          </form>
          <div className="glass rounded-3xl p-8">
            <p className="eyebrow">What's included</p>
            <ul className="mt-5 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="h-5 w-5 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  ),
});
