import m1 from "@/assets/member-1.jpg";
import m2 from "@/assets/member-2.jpg";
import m3 from "@/assets/member-3.jpg";

const quotes = [
  { avatar: m1, name: "Layla K.", role: "Architect · Dubai", text: "I've never felt this seen. For the first time, a room where I'm not the tallest — and it changed something." },
  { avatar: m2, name: "Arman T.", role: "Founder · Tehran", text: "Tall4Talls turned a private struggle into a global identity. The network alone is worth it." },
  { avatar: m3, name: "Sara M.", role: "Editor · London", text: "Editorial, calm, premium. It feels like a brand made by tall people, for tall people. Finally." },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Members</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">Belonging, in their <span className="gold-text">own words</span>.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="glass rounded-2xl p-7 hover-lift">
              <div className="text-gold text-4xl leading-none font-display">“</div>
              <blockquote className="mt-3 text-base leading-relaxed">{q.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={q.avatar} alt={q.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
