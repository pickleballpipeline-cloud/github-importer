const Footer = () => (
  <footer className="bg-navy-deep py-12 border-t border-primary-foreground/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display font-bold text-primary-foreground tracking-tight">
        ZACH<span className="text-lime">.</span>ROBSON
      </p>
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} The Pickleball Pipeline. San Diego, CA.
      </p>
    </div>
  </footer>
);

export default Footer;
