import showsData from "@/lib/data/shows.json";
import { format } from "date-fns";

const Shows = () => {
  return (
    <section id="shows" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl text-primary mb-16">
          Tour Dates
        </h2>

        <div className="space-y-0">
          {showsData.map((show) => {
            const showDate = new Date(show.date);
            return (
              <div
                key={show.id}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-3 md:mb-0">
                  <span className="font-display text-3xl md:text-4xl text-foreground min-w-[140px]">
                    {format(showDate, "MMM d")}
                  </span>
                  <div>
                    <h3 className="font-body text-base text-foreground font-medium">
                      {show.venue}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {show.city}
                    </p>
                  </div>
                </div>

                {show.soldOut ? (
                  <span className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                    Sold Out
                  </span>
                ) : (
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-foreground/20 text-foreground font-body text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    Tickets
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shows;
