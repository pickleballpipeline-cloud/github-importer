import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => (
  <div className="min-h-screen bg-background py-16 md:py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-lime hover:underline text-sm font-display font-semibold mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="text-muted-foreground text-sm mb-10">Last updated: May 19, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Booking & payment</h2>
          <p>Sessions are $100 flat for 1–4 players and are scheduled through Calendly. Payment is collected at or before the session.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Cancellations & reschedules</h2>
          <p>We require 24-hour notice to reschedule or cancel without penalty. Same-day cancellations or no-shows may be charged the full session rate. Weather cancellations don't count against this policy — we'll reschedule at no extra charge.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Assumption of risk</h2>
          <p>Pickleball involves physical activity. By booking a session, you confirm you're physically able to participate and accept the inherent risk of injury. The Pickleball Pipeline isn't liable for injuries sustained during sessions.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Conduct</h2>
          <p>We reserve the right to end a session without refund if a participant behaves in a way that's unsafe, abusive, or disrespectful to the coach or other players.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Content</h2>
          <p>All written content, photos, and video on this site are owned by The Pickleball Pipeline and may not be reused without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact</h2>
          <p>Questions about these terms? Email <a className="text-lime hover:underline" href="mailto:pickleballpipeline@gmail.com">pickleballpipeline@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms;
