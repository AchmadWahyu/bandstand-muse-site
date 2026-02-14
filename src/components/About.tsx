import bandData from "@/lib/data/band.json";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <h2 id="about-heading" className="font-display text-5xl md:text-7xl text-primary mb-12">
          The Band
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-20">
          {bandData.description}
        </p>

        {/* Members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bandData.members.map((member, i) => (
            <div
              key={member.name}
              className="group bg-card border border-border p-6 hover:border-primary/40 transition-colors duration-500"
            >
              {/* Number accent */}
              <span className="font-display text-6xl text-primary/10 group-hover:text-primary/30 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-1">
                {member.name}
              </h3>
              <p className="font-body text-sm text-primary uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
