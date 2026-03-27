import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Youtube, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const channels = [
  {
    icon: Youtube,
    label: "YouTube",
    url: "https://youtube.com",
    description: "Gear breakdowns, paddle reviews, and on-court tutorials.",
    color: "hover:text-red-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://instagram.com",
    description: "Behind-the-scenes content, drills, and SD pickleball culture.",
    color: "hover:text-pink-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    url: "https://facebook.com",
    description: "Community updates, event announcements, and group discussions.",
    color: "hover:text-blue-500",
  },
];

const Watch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-lime transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            The Pickleball Pipeline
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            Watch & Follow
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl">
            Stay connected with the latest content, gear reviews, and San Diego pickleball highlights across all platforms.
          </p>

          <div className="space-y-6">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 rounded-xl border border-border bg-card hover:border-lime/30 transition-all duration-300 hover:shadow-lg hover:shadow-lime/5"
              >
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center shrink-0 group-hover:bg-lime transition-colors duration-500">
                  <channel.icon className="w-7 h-7 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-foreground text-lg">{channel.label}</h3>
                  <p className="text-muted-foreground text-sm">{channel.description}</p>
                </div>
                <Button variant="ctaOutline" size="sm" className="hidden sm:inline-flex">
                  Visit
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Watch;
