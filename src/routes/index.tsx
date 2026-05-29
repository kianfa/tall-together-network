import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { Events } from "@/components/site/Events";
import { Feed } from "@/components/site/Feed";
import { Testimonials } from "@/components/site/Testimonials";
import { AppPreview } from "@/components/site/AppPreview";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tall4Talls — The global community for tall people" },
      { name: "description", content: "Connect with tall people worldwide. Premium events, real community, modern app — from Tehran to Toronto." },
      { property: "og:title", content: "Tall4Talls — The global community for tall people" },
      { property: "og:description", content: "Connect with tall people worldwide. Premium events, real community, modern app." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Events />
      <Feed />
      <Testimonials />
      <AppPreview />
      <CTA />
    </>
  );
}
