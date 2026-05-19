import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const booking = document.getElementById("booking");
      const scrolledPast = window.scrollY > 600;
      let inBooking = false;
      if (booking) {
        const rect = booking.getBoundingClientRect();
        inBooking = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(scrolledPast && !inBooking);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="w-full bg-lime text-accent-foreground font-display font-bold py-4 rounded-full shadow-2xl shadow-lime/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
      >
        <Calendar className="w-5 h-5" />
        Book a Session — $100
      </button>
    </div>
  );
};

export default MobileStickyCTA;
