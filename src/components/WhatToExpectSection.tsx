import { ClipboardList, Video, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Quick Intake",
    desc: "After booking, you'll get a short form so I show up already knowing your goals, level, and current paddle setup.",
  },
  {
    icon: Video,
    title: "On-Court Assessment",
    desc: "We warm up, play a few points, and I diagnose the mechanics and decisions costing you the most points.",
  },
  {
    icon: MessageSquare,
    title: "Targeted Reps & Feedback",
    desc: "Focused drills tied to your gaps — third-shot drops, resets, serve mechanics, or paddle testing — with real-time coaching.",
  },
  {
    icon: Trophy,
    title: "Takeaway Plan",
    desc: "You leave with clear next steps, drills to practice solo, and follow-up notes you can reference before your next session.",
  },
];

const WhatToExpectSection = () => (
  <section id="what-to-expect" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          What To Expect
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Your First Session, Step by Step
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          No mystery, no fluff. Here's exactly how a session runs from the moment you book.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative bg-background rounded-xl p-6 border border-border hover:border-lime/40 transition-colors"
          >
            <span className="absolute top-4 right-5 font-display font-bold text-5xl text-lime/10">
              0{i + 1}
            </span>
            <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mb-5">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatToExpectSection;
