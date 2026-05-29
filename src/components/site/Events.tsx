import { MapPin, ArrowUpRight } from "lucide-react";
import rooftop from "@/assets/event-rooftop.jpg";
import fashion from "@/assets/event-fashion.jpg";
import cafe from "@/assets/event-cafe.jpg";
import fitness from "@/assets/event-fitness.jpg";

const events = [
  { img: rooftop, city: "Dubai", title: "Skyline Rooftop Mixer", date: "Fri · Jul 12" },
  { img: fashion, city: "London", title: "Tall Fashion Night", date: "Sat · Jul 27" },
  { img: cafe, city: "Tehran", title: "Late Café Gathering", date: "Thu · Aug 1" },
  { img: fitness, city: "Toronto", title: "Sunset Fitness Meetup", date: "Sun · Aug 11" },
];

export function Events() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Upcoming</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold">Premium gatherings. <span className="gold-text">Real connections.</span></h2>
          </div>
          <a href="/events" className="btn-ghost text-sm">View all events <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article key={e.title} className="group relative overflow-hidden rounded-2xl glass hover-lift">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="flex items-center gap-1.5 text-xs text-gold">
                  <MapPin className="h-3 w-3" /> {e.city}
                </div>
                <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                <p className="text-xs text-muted-foreground">{e.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
