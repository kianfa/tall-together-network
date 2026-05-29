import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { Feed } from "@/components/site/Feed";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Members — Tall4Talls" },
      { name: "description", content: "Meet the people behind Tall4Talls — architects, founders, editors and creatives from around the world." },
      { property: "og:title", content: "Members — Tall4Talls" },
      { property: "og:description", content: "Meet the people behind Tall4Talls." },
    ],
    links: [{ rel: "canonical", href: "/members" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Members" title={<>The people who <span className="gold-text">rise with you</span>.</>} subtitle="Real members. Verified heights. Lifelong connections." />
      <Testimonials />
      <Feed />
    </>
  ),
});
