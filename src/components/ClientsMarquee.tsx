const PLACEHOLDER_CLIENTS = [
  "ARCHETYPE",
  "LUMINA",
  "NEXUS",
  "FORMA",
  "STUDIO TWO",
  "BRAND ONE",
  "OAK & IRON",
  "VANGUARD",
];

export default function ClientsMarquee() {
  return (
    <section className="w-full bg-warmIvory py-16 md:py-24 border-b border-richBlack/10 overflow-hidden">
      
      {/* Scoped CSS for the infinite marquee */}
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* SMALL HEADING */}
      <h3 className="text-center text-xs md:text-sm font-bold text-softGray uppercase tracking-widest mb-10 md:mb-16">
        Brands We've Built With
      </h3>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full flex items-center overflow-hidden">
        
        {/* The Track (Pauses on hover via CSS) */}
        <div className="marquee-track">
          {/* We duplicate the array to ensure a seamless infinite loop */}
          {[...PLACEHOLDER_CLIENTS, ...PLACEHOLDER_CLIENTS].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-12 md:px-24"
            >
              {/* Monochrome typographic logo placeholders */}
              <span className="text-2xl md:text-4xl font-display font-bold text-richBlack/30 uppercase tracking-tighter hover:text-richBlack transition-colors duration-300 cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}