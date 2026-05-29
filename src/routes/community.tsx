import { createFileRoute } from "@tanstack/react-router";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { Feed } from "@/components/site/Feed";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Tall4Talls" },
      { name: "description", content: "Explore the Tall4Talls community: global members, local groups, real conversations, and tall culture worldwide." },
      { property: "og:title", content: "Community — Tall4Talls" },
      { property: "og:description", content: "Explore the global tall community on Tall4Talls." },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Community" title={<>One tribe. <span className="gold-text">Many cities.</span></>} subtitle="120,000+ tall people building real friendships across 40+ countries." />
      <Features />
      <Stats />
      <Feed />
    </>
  ),
});
