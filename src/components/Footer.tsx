import bandData from "@/lib/data/band.json";

const Footer = () => {
  const socials = bandData.socialLinks;

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl text-primary mb-6">
          {bandData.name}
        </h2>

        <div className="flex items-center justify-center gap-6 mb-8">
          {Object.entries(socials).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {name}
            </a>
          ))}
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} {bandData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
