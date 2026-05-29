import { Users, Calendar, Heart } from "lucide-react";
import m1 from "@/assets/member-1.jpg";
import m2 from "@/assets/member-2.jpg";
import m3 from "@/assets/member-3.jpg";
import rooftop from "@/assets/event-rooftop.jpg";

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[260px] aspect-[9/19] rounded-[2.5rem] p-2 glass-strong shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ${className}`}>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-background/90 z-10" />
      <div className="h-full w-full rounded-[2rem] overflow-hidden bg-background relative">
        {children}
      </div>
    </div>
  );
}

export function AppPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <p className="eyebrow">In your pocket</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">A native app made for <span className="gold-text">tall life</span>.</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Dark, editorial, gold-touched. Browse events, chat with locals, share moments, and find
            your people in seconds — wherever you land.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Curated feed, no ads, no algorithm noise</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> One-tap RSVP for member events worldwide</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Height-verified profiles for genuine connection</li>
          </ul>
        </div>

        <div className="relative h-[560px] flex items-center justify-center">
          <Phone className="absolute -left-2 top-4 -rotate-6 animate-float">
            <div className="p-4 text-[10px]">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-sm">Feed</span>
                <Users className="h-3.5 w-3.5 text-gold" />
              </div>
              <div className="mt-3 space-y-3">
                {[m1, m2, m3].map((src, i) => (
                  <div key={i} className="glass rounded-xl p-2 flex items-center gap-2">
                    <img src={src} alt="" className="h-8 w-8 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="font-semibold text-[10px]">Member {i + 1}</div>
                      <div className="text-[8px] text-muted-foreground">posted just now</div>
                    </div>
                    <Heart className="h-3 w-3 text-gold" />
                  </div>
                ))}
              </div>
            </div>
          </Phone>
          <Phone className="relative z-10 animate-float" >
            <img src={rooftop} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-[10px]">
              <span className="eyebrow !text-[8px]">Tonight · Dubai</span>
              <h3 className="font-display text-base font-semibold mt-1">Skyline Mixer</h3>
              <p className="text-[10px] text-muted-foreground">42 members going</p>
              <button className="mt-3 btn-gold !py-1.5 !px-3 !text-[10px] w-fit">RSVP</button>
            </div>
          </Phone>
          <Phone className="absolute -right-2 top-12 rotate-6 animate-float">
            <div className="p-4 text-[10px]">
              <div className="flex items-center gap-2">
                <img src={m1} alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-display font-semibold text-sm">Layla, 6'1"</div>
                  <div className="text-[9px] text-muted-foreground">Dubai · Architect</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1">
                {[m1, m2, m3, rooftop, m1, m2].map((src, i) => (
                  <img key={i} src={src} alt="" className="aspect-square rounded object-cover" />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[9px]">
                <Calendar className="h-3 w-3 text-gold" />
                <span className="text-muted-foreground">3 mutual events</span>
              </div>
            </div>
          </Phone>
        </div>
      </div>
    </section>
  );
}
