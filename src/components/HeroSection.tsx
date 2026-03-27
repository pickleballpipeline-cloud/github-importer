import heroImage from "@/assets/hero-court.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zach Robson coaching on a San Diego pickleball court at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            The Pickleball Pipeline
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
            <span className="text-lime">Elevating</span> Your Game.
            <br />
            <span className="text-lime">Connected</span> to the Court.
          </h1>
          <p className="text-lg md:text-xl text-slate-light leading-relaxed mb-10 max-w-lg font-light">
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={scrollToBooking}>
              Book a Session
            </Button>
            <Button variant="ctaOutline" size="lg" className="text-base px-10 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/60 hover:text-lime transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
