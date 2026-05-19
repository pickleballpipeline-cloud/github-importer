import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => (
  <div className="min-h-screen bg-background py-16 md:py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-lime hover:underline text-sm font-display font-semibold mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-10">Last updated: May 19, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Who we are</h2>
          <p>The Pickleball Pipeline ("we", "us") is a coaching and paddle consulting service based in San Diego, CA. You can reach us at <a className="text-lime hover:underline" href="mailto:pickleballpipeline@gmail.com">pickleballpipeline@gmail.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">What we collect</h2>
          <p>When you book a session through Calendly, we receive your name, email address, scheduled time, and any answers you provide on the intake form. If you email us directly, we receive whatever you choose to share. We don't run analytics, ad trackers, or third-party cookies on this site.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">How we use it</h2>
          <p>We use your information only to schedule and run your session, follow up with notes or scheduling changes, and respond to questions. We don't sell, rent, or share your information with anyone outside of the tools we use to deliver the service (currently Calendly and email).</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Your choices</h2>
          <p>You can request a copy of your information or ask us to delete it at any time by emailing <a className="text-lime hover:underline" href="mailto:pickleballpipeline@gmail.com">pickleballpipeline@gmail.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">Updates</h2>
          <p>If this policy changes, we'll update the date above. Continued use of the site or services after a change means you accept the updated policy.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
