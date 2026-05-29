import { Heart, MessageCircle, Bookmark } from "lucide-react";
import m1 from "@/assets/member-1.jpg";
import m2 from "@/assets/member-2.jpg";
import m3 from "@/assets/member-3.jpg";
import rooftop from "@/assets/event-rooftop.jpg";
import fashion from "@/assets/event-fashion.jpg";

const posts = [
  { avatar: m1, name: "Layla", handle: "@layla.k", location: "Dubai · 6'1\"", text: "Last night's rooftop was unreal. Tall girls actually filling out the frame for once 💛", img: rooftop, likes: 824 },
  { avatar: m2, name: "Arman", handle: "@arman.t", location: "Tehran · 6'7\"", text: "Found a tailor who finally gets sleeve length. Dropping the address in #fashion later.", img: null, likes: 312 },
  { avatar: m3, name: "Sara", handle: "@sara.m", location: "London · 6'0\"", text: "First time at a fashion night where I wasn't the tallest in the room. Belonging hits different.", img: fashion, likes: 1402 },
];

export function Feed() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
        <div className="lg:sticky lg:top-32">
          <p className="eyebrow">Inside the app</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">A feed that <span className="gold-text">feels like home</span>.</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Real members. Real heights. Real conversations — without the noise of mainstream
            social. Built editorial-first, mobile-native, ad-free.
          </p>
        </div>
        <div className="space-y-5">
          {posts.map((p) => (
            <article key={p.handle} className="glass rounded-2xl p-5 hover-lift">
              <header className="flex items-center gap-3">
                <img src={p.avatar} alt={p.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{p.name} <span className="text-muted-foreground font-normal">{p.handle}</span></div>
                  <div className="text-xs text-muted-foreground">{p.location}</div>
                </div>
                <span className="text-xs text-gold">Follow</span>
              </header>
              <p className="mt-3 text-sm leading-relaxed">{p.text}</p>
              {p.img && (
                <img src={p.img} alt="" loading="lazy" className="mt-4 rounded-xl w-full aspect-[16/10] object-cover" />
              )}
              <footer className="mt-4 flex items-center gap-5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Heart className="h-4 w-4 text-gold" /> {p.likes}</span>
                <span className="inline-flex items-center gap-1.5"><MessageCircle className="h-4 w-4" /> 48</span>
                <span className="inline-flex items-center gap-1.5 ml-auto"><Bookmark className="h-4 w-4" /></span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
