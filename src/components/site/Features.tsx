import { Globe2, CalendarHeart, Shirt, Users2, Sparkles, MessageCircle, Lock, MapPin } from "lucide-react";

const features = [
  { icon: Globe2, title: "Global Community", desc: "Members across 40+ countries connecting daily." },
  { icon: CalendarHeart, title: "Events & Meetups", desc: "Curated rooftop, café and fashion gatherings." },
  { icon: Shirt, title: "Tall-Friendly Fashion", desc: "Brands, fits and edits made for tall bodies." },
  { icon: Users2, title: "Networking", desc: "Career, creative and lifestyle introductions." },
  { icon: Sparkles, title: "Lifestyle Content", desc: "Editorial stories on tall culture worldwide." },
  { icon: MessageCircle, title: "Height-Based Talks", desc: "Honest conversations from people who get it." },
  { icon: Lock, title: "Private Groups", desc: "Members-only circles for deeper connection." },
  { icon: MapPin, title: "Local Communities", desc: "Find your tribe in your city, tonight." },
];

export function Features() {
  return (
    <section className="section relative">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">What you get</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">A community built around <span className="gold-text">how you live</span>.</h2>
          <p className="mt-4 text-muted-foreground">Eight rooms, one membership. Everything tall people actually want under one elegant roof.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="glass rounded-2xl p-6 hover-lift gold-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-xl gold-border flex items-center justify-center bg-gradient-to-br from-gold/10 to-transparent">
                <f.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
