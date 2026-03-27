import { Award, BookOpen, Compass } from "lucide-react";
import zachPhoto from "@/assets/zach-robson.jpg";

const OriginSection = () => {
  return (
    <section id="origin" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <img
              src={zachPhoto}
              alt="Zach Robson"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover aspect-[3/4]"
            />
            <div className="space-y-5">
              {[
                {
                  icon: BookOpen,
                  title: "Credentialed Educator",
                  desc: "California-credentialed with years of structured teaching experience, bringing pedagogy to the court.",
                },
                {
                  icon: Award,
                  title: "Coach & Consultant",
                  desc: "Certified coaching backed by hands-on testing of paddles across every major brand.",
                },
                {
                  icon: Compass,
                  title: "San Diego Scene Builder",
                  desc: "Embedded in the SD pickleball community — from court meetups to the latest local events.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0 group-hover:bg-lime transition-colors duration-500">
                    <item.icon className="w-4 h-4 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm mb-0.5">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              The Origin Story
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Connection & Adventure on Every Court
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Zach Robson. I didn't start my career in a pro shop; my background is actually in education.
              </p>
              <p>
                Earning my teaching credential taught me how to break down complex concepts into actionable steps. Eventually, I realized that the exact same skills apply to the pickleball court. Whether it's deconstructing the mechanics of a third-shot drop or explaining how the swing weight of a Gen 4 paddle affects your elbow, teaching is at the core of everything I do.
              </p>
              <p>
                I started <span className="text-foreground font-semibold">The Pickleball Pipeline</span> because I am deeply invested in the San Diego scene. From playing in local leagues to grinding in tournaments, I saw a massive gap: players were buying $300 paddles based on internet hype rather than a personal fit, and they were hitting plateaus because they didn't have someone to break down their mechanics.
              </p>
              <p>
                The Pipeline was built to change that. It's a space to connect the community and explore the adventure of the sport. Whether I'm behind the camera profiling a local rising star, dialing in your gear with a custom paddle/gear fitting, or working one-on-one with you on the court, my goal is straightforward: I want to help you understand your game, find the right tools, and have a great time doing it.
              </p>
              <p>
                See you on the courts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
