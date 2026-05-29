import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import rooftop from "@/assets/event-rooftop.jpg";
import fashion from "@/assets/event-fashion.jpg";
import cafe from "@/assets/event-cafe.jpg";
import fitness from "@/assets/event-fitness.jpg";

const posts = [
  { img: rooftop, tag: "Culture", title: "Why rooftops feel different when you're 6'4\"", read: "5 min read" },
  { img: fashion, tag: "Fashion", title: "The new tall edit: brands actually getting it right", read: "8 min read" },
  { img: cafe, tag: "Community", title: "Notes from a late café night in North Tehran", read: "4 min read" },
  { img: fitness, tag: "Lifestyle", title: "Mobility, posture and the long body advantage", read: "6 min read" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tall4Talls" },
      { name: "description", content: "Editorial stories on tall culture, fashion, community and lifestyle from around the world." },
      { property: "og:title", content: "Blog — Tall4Talls" },
      { property: "og:description", content: "Editorial stories on tall culture, fashion and community." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Journal" title={<>Stories from <span className="gold-text">tall life</span>.</>} subtitle="Editorial features, member essays and field notes from cities around the world." />
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="group glass rounded-2xl overflow-hidden hover-lift">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-gold">{p.tag}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h2 className="mt-2 font-display text-xl md:text-2xl font-semibold">{p.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  ),
});
