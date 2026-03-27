import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Waves, Send, Star, CheckCircle2 } from "lucide-react";

const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [nomName, setNomName] = useState("");
  const [nomReason, setNomReason] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [nominated, setNominated] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleNominate = (e: React.FormEvent) => {
    e.preventDefault();
    if (nomName) {
      setNominated(true);
      setNomName("");
      setNomReason("");
    }
  };

  return (
    <section id="community" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Waves className="w-10 h-10 text-lime mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3">
            Are You Making Waves?
          </h2>
          <p className="text-primary-foreground/60 max-w-md mx-auto">
            Join the Swell Community — get insights, gear drops, and local San Diego updates delivered to your inbox.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-navy-deep/60 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-2 mb-4">
              <Send className="w-5 h-5 text-lime" />
              <h3 className="font-display font-bold text-primary-foreground">Join the Newsletter</h3>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Weekly gear breakdowns, coaching tips, and San Diego pickleball news.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-lime">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-display font-semibold">You're in! Welcome to the Swell.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30"
                  required
                />
                <Button variant="cta" type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            )}
          </div>

          <div className="bg-navy-deep/60 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-lime" />
              <h3 className="font-display font-bold text-primary-foreground">Nominate a Rising Star</h3>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Know a local player making waves? Nominate them for a feature on the channel.
            </p>
            {nominated ? (
              <div className="flex items-center gap-2 text-lime">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-display font-semibold">Nomination submitted! 🤙</span>
              </div>
            ) : (
              <form onSubmit={handleNominate} className="space-y-3">
                <Input
                  placeholder="Player's name"
                  value={nomName}
                  onChange={(e) => setNomName(e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30"
                  required
                />
                <Textarea
                  placeholder="Why should they be featured?"
                  value={nomReason}
                  onChange={(e) => setNomReason(e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 resize-none"
                  rows={3}
                />
                <Button variant="cta" type="submit" className="w-full">
                  Nominate
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
