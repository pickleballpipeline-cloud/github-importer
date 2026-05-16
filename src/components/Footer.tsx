import { Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/thepickleballpipeline/" },
  { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/channel/thepickleballpipeline" },
];

const Footer = () => (
  <footer className="bg-navy-deep py-12 border-t border-primary-foreground/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="The Pickleball Pipeline" className="h-14 w-14 rounded-full object-cover" />
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-lime transition-colors" aria-label={s.label}>
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <a href="mailto:pickleballpipeline@gmail.com" className="text-primary-foreground/50 hover:text-lime text-sm transition-colors flex items-center gap-2">
          <Mail className="w-4 h-4" />
          pickleballpipeline@gmail.com
        </a>
      </div>
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} The Pickleball Pipeline. San Diego, CA.
      </p>
    </div>
  </footer>
);

export default Footer;
