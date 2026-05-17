import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where are sessions held?",
    a: "Default location is Pacific Highlands Ranch Rec Center in San Diego. If you have a private court you'd prefer, just let me know when booking and we'll meet there instead.",
  },
  {
    q: "What should I bring to a coaching session?",
    a: "Your paddle (if you have one), court shoes, water, and a ball or two if you've got them. For paddle consulting, just bring yourself — I'll provide the full demo inventory.",
  },
  {
    q: "How many players can join one session?",
    a: "Sessions are a flat $100 for 1–4 players. Bring a partner, a doubles group, or come solo — the rate is the same.",
  },
  {
    q: "What skill level do you work with?",
    a: "Everyone from brand-new beginners to 4.5+ tournament players. Sessions are tailored to your current level and goals.",
  },
  {
    q: "What's the cancellation policy?",
    a: "A 24-hour notice is required to reschedule or cancel without penalty. Same-day cancellations may be charged the full session rate.",
  },
  {
    q: "How does paddle consulting work?",
    a: "After booking, you'll get a short intake form. On court, we test multiple paddle shapes and tech generations side-by-side, stress-test your top picks in real play, then dial in grip, swing weight, and direct-to-consumer alternatives that can save you $100+.",
  },
  {
    q: "What if it rains?",
    a: "We'll reschedule for the next available time at no extra charge — weather cancellations don't count against the 24-hour policy.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          Frequently Asked
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Questions, Answered
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-lime/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
