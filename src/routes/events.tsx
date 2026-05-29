import { createFileRoute } from "@tanstack/react-router";
import { Events } from "@/components/site/Events";
import { CTA } from "@/components/site/CTA";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Tall4Talls" },
      { name: "description", content: "Premium rooftop mixers, fashion nights, café gatherings and fitness meetups for tall people, worldwide." },
      { property: "og:title", content: "Events — Tall4Talls" },
      { property: "og:description", content: "Premium events and meetups for tall people worldwide." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Events" title={<>Show up. <span className="gold-text">Stand out.</span></>} subtitle="Curated gatherings from Tehran to Toronto — designed for tall people, by tall people." />
      <Events />
      <CTA />
    </>
  ),
});
