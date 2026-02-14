import albumsData from "@/lib/data/albums.json";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const albumImages: Record<string, string> = {
  "album-1": album1,
  "album-2": album2,
  "album-3": album3,
};

const Discography = () => {
  return (
    <section id="music" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl text-primary mb-16">
          Music
        </h2>

        <div className="space-y-16">
          {albumsData.map((album, idx) => (
            <div
              key={album.id}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Album art */}
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="aspect-square overflow-hidden border border-border glow-gold">
                  <img
                    src={albumImages[album.image]}
                    alt={album.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Album info */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="font-display text-4xl md:text-5xl text-foreground">
                    {album.title}
                  </h3>
                  <span className="font-body text-sm text-muted-foreground">
                    {album.year}
                  </span>
                </div>
                <p className="font-body text-sm text-primary uppercase tracking-wider mb-6">
                  {album.type} · {album.trackCount} Tracks
                </p>

                {/* Track list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-8">
                  {album.tracks.map((track, i) => (
                    <div
                      key={track}
                      className="flex items-center gap-3 py-2 border-b border-border/50"
                    >
                      <span className="font-body text-xs text-muted-foreground w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm text-foreground">
                        {track}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={album.streamingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Stream Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
