import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Target, Wrench, CheckCircle2 } from "lucide-react";

interface SessionInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  duration: string;
  features: string[];
  note?: string;
}

type SessionType = "coaching" | "consulting";

const BookingSection = () => {
  const [selected, setSelected] = useState<SessionType>("coaching");

  const sessions: Record<SessionType, SessionInfo> = {
    coaching: {
      icon: Target,
      title: "Coaching Session",
      price: "$75",
      duration: "1 Hour",
      features: [
        "Personalized mechanics analysis",
        "Strategic game plan development",
        "Real-time on-court feedback",
        "Video breakdown & follow-up notes",
      ],
    },
    consulting: {
      icon: Wrench,
      title: "Paddle Consulting Session",
      price: "$50",
      duration: "1 Hour",
      features: [
        "Full paddle technology audit",
        "Side-by-side shape & gen testing",
        "Real-world court stress tests",
        "Custom calibration & savings plan",
      ],
      note: "A Pre-Consultation Intake Form will be sent automatically upon booking.",
    },
  };

  const current = sessions[selected];

  return (
    <section id="booking" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Book Your Session
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
            Ready to Level Up?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-navy-deep rounded-full p-1.5 flex gap-1">
              <button
                onClick={() => setSelected("coaching")}
                className={`px-6 py-3 rounded-full font-display font-semibold text-sm transition-all duration-300 ${
                  selected === "coaching"
                    ? "bg-lime text-accent-foreground shadow-lg"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                <Target className="w-4 h-4 inline mr-2" />
                Coaching — $75/hr
              </button>
              <button
                onClick={() => setSelected("consulting")}
                className={`px-6 py-3 rounded-full font-display font-semibold text-sm transition-all duration-300 ${
                  selected === "consulting"
                    ? "bg-lime text-accent-foreground shadow-lg"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                <Wrench className="w-4 h-4 inline mr-2" />
                Paddle Fitting — $50/hr
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-navy-deep/60 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center">
                  <current.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-display font-bold text-lg">{current.title}</h3>
                  <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{current.duration}</span>
                    <span className="text-lime font-bold">{current.price}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              {current.note && (
                <p className="mt-6 text-xs text-lime/80 bg-lime/10 rounded-lg px-4 py-3 border border-lime/20">
                  📋 {current.note}
                </p>
              )}
            </div>

            <div className="text-center md:text-left">
              <Calendar className="w-16 h-16 text-lime/40 mx-auto md:mx-0 mb-6" />
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-3">
                Pick Your Time
              </h3>
              <p className="text-primary-foreground/60 mb-8 text-sm leading-relaxed">
                Sessions are held at San Diego courts. Choose a time that works for you and let's get to work.
              </p>
              <Button variant="cta" size="lg" className="text-base px-12 py-6">
                Book Now — {current.price}
              </Button>
              <p className="text-primary-foreground/40 text-xs mt-4">
                Powered by your preferred scheduling platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
