import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Target, Wrench, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const PaddleConsultingDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phases = [
    { num: "01", title: "The Diagnostic", desc: "Audit your current setup, playstyle, and goals." },
    { num: "02", title: "Shape & Tech Baseline", desc: "Side-by-side testing of Elongated vs. Standard shapes and Gen 1 vs. Gen 4 tech to find your sweet spot." },
    { num: "03", title: "The Swell Stress Test", desc: "Real-world court scenarios — firefights, drops, serves — to test the final contenders." },
    { num: "04", title: "Custom Calibration & Savings", desc: "Dialing in swing weight with lead tape, grip fitting, and finding direct-to-consumer alternatives that save you $100+ on premium carbon fiber." },
  ];

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-lime font-display font-semibold text-sm hover:underline transition-all"
      >
        See the 4-Phase Blueprint
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="mt-6 space-y-4 animate-fade-up">
          {phases.map((phase) => (
            <div key={phase.num} className="flex gap-4">
              <span className="text-lime font-display font-bold text-lg shrink-0">{phase.num}</span>
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm">{phase.title}</h4>
                <p className="text-muted-foreground text-sm mt-1">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const pillars = [
  {
    icon: Play,
    label: "Content Creation",
    title: "The Pickleball Pipeline",
    description: "Watch the latest gear breakdowns and local San Diego highlights.",
    cta: "Watch Now",
    ctaLink: "/watch",
    hasExternal: true,
  },
  {
    icon: Target,
    label: "Coaching",
    title: "Master the Court",
    price: "$75/hr",
    description: "Private, high-performance coaching tailored to your mechanics and strategy.",
    cta: "Book Coaching",
    ctaLink: "#booking",
  },
  {
    icon: Wrench,
    label: "Paddle Consulting",
    title: "Tech Discovery",
    price: "$50/hr",
    description: "Stop guessing and stop wasting money on the hype. Access an inventory of the latest paddle technologies across all major brands.",
    cta: "Book Fitting",
    ctaLink: "#booking",
    hasBlueprint: true,
  },
];

const ExpertiseSection = () => {
  const navigate = useNavigate();
  return (
    <section id="expertise" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            The Three Pillars
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Your Complete Pickleball Edge
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-lime/30 transition-all duration-500 hover:shadow-xl hover:shadow-lime/5 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-lime transition-colors duration-500">
                <pillar.icon className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <p className="text-muted-foreground text-xs font-display font-semibold tracking-wider uppercase mb-1">
                {pillar.label}
              </p>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{pillar.title}</h3>
              {pillar.price && (
                <span className="text-lime font-display font-bold text-sm mb-3">{pillar.price}</span>
              )}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {pillar.description}
              </p>
              {pillar.hasBlueprint && <PaddleConsultingDetail />}
              <div className="mt-auto pt-4">
                <Button
                  variant={pillar.hasExternal ? "ctaOutline" : "cta"}
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    if (pillar.ctaLink.startsWith("#")) {
                      document.getElementById(pillar.ctaLink.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(pillar.ctaLink);
                    }
                  }}
                >
                  {pillar.cta}
                  {pillar.hasExternal && <ExternalLink className="w-4 h-4 ml-1" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
