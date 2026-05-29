import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";

const values = [
  { title: "Community", body: "We rise together. Membership is mutual lift." },
  { title: "Confidence", body: "Stand tall. Be you. Without explanation." },
  { title: "Connection", body: "Real people. Real talk. Real friendships." },
  { title: "Growth", body: "Elevate every day, in every city." },
  { title: "Inclusivity", body: "All tall. All welcome. All represented." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tall4Talls" },
      { name: "description", content: "Tall4Talls is a global community platform built for tall people. Learn our story, mission, and values." },
      { property: "og:title", content: "About — Tall4Talls" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Our Story" title={<>Built for tall people. <span className="gold-text">By tall people.</span></>} subtitle="Tall4Talls began as a private group of friends who realised how rare it was to belong somewhere by default. Today it spans 40+ countries." />
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6 hover-lift">
              <div className="eyebrow">{v.title}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Stats />
      <CTA />
    </>
  ),
});
