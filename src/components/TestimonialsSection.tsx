import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zach fixed my serve in one session. I went from hitting it into the net to placing it with confidence.",
    name: "Marcus T.",
    detail: "Coaching Session",
  },
  {
    quote: "I was ready to buy a $300 paddle I saw online. Zach showed me a better fit for my game and saved me money.",
    name: "Jennifer L.",
    detail: "Paddle Consulting",
  },
  {
    quote: "My entire group of four improved our positioning after just one hour. Worth every penny.",
    name: "David R.",
    detail: "Group Coaching",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What Players Say
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Real Results on the Court
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 border border-border hover:border-lime/30 transition-all duration-500 flex flex-col"
            >
              <Quote className="w-8 h-8 text-lime mb-4" />
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
