import bandData from "@/lib/data/band.json";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Echoes of Ember live concert atmosphere"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 opacity-0 animate-fade-up">
        <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-wider text-foreground mb-4">
          {bandData.name}
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-10">
          {bandData.tagline}
        </p>
        <nav aria-label="Primary actions" className="flex items-center justify-center gap-4">
          <a
            href="#music"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Listen Now
          </a>
          <a
            href="#shows"
            className="inline-block px-8 py-3 border border-foreground/30 text-foreground font-body text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            Tour Dates
          </a>
        </nav>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-12 bg-muted-foreground/40 mx-auto mb-2" />
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
      </div>
    </header>
  );
};

export default Hero;
