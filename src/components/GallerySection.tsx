import actionStretch from "@/assets/photo-action-stretch.jpg";
import postMatch from "@/assets/photo-post-match.jpg";
import tournamentMedals from "@/assets/photo-tournament-medals.jpg";

const photos = [
  { src: actionStretch, alt: "Zach stretching for a forehand at the kitchen line" },
  { src: tournamentMedals, alt: "Zach with tournament medal on court" },
  { src: postMatch, alt: "Zach and a student smiling after a session" },
];

const GallerySection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-lime font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          On The Court
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Moments In Motion
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {photos.map((p) => (
          <div
            key={p.src}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-border"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              width={1280}
              height={832}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
