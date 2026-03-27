import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#origin" },
  { label: "Services", href: "#expertise" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="The Pickleball Pipeline" className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} className="text-primary-foreground/70 hover:text-lime text-sm font-medium transition-colors">
              {l.label}
            </button>
          ))}
          <Button variant="cta" size="sm" onClick={() => handleNav("#booking")}>
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-deep/98 backdrop-blur-md border-t border-primary-foreground/10 px-6 py-6 space-y-4 animate-fade-in">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} className="block text-primary-foreground/70 hover:text-lime text-base font-medium transition-colors w-full text-left">
              {l.label}
            </button>
          ))}
          <Button variant="cta" className="w-full mt-4" onClick={() => handleNav("#booking")}>
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
