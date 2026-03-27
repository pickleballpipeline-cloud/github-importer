import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy-deep py-12 border-t border-primary-foreground/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="The Pickleball Pipeline" className="h-14 w-auto" />
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} The Pickleball Pipeline. San Diego, CA.
      </p>
    </div>
  </footer>
);

export default Footer;
