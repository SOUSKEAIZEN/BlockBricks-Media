export default function Numbers() {
  const STATS = [
    { number: "50+", label: "PROJECTS" },
    { number: "20+", label: "BRANDS" },
    { number: "10M+", label: "VIEWS GENERATED" },
    { number: "4.8/5", label: "CLIENT RATING" },
  ];

  return (
    <section className="w-full bg-warmIvory px-6 md:px-12 py-20 md:py-32 border-t border-richBlack/10">
      
      {/* 2x2 Grid on Mobile, 4x1 Grid on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-0 md:divide-x divide-richBlack/10">
        
        {STATS.map((stat, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center px-2 md:px-8 group"
          >
            {/* Giant Number */}
            <span className="text-6xl md:text-7xl lg:text-[6rem] font-display font-bold text-richBlack tracking-tighter mb-4 transition-transform duration-500 group-hover:scale-105">
              {stat.number}
            </span>
            
            {/* Small Label with occasional signature orange brick */}
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest flex items-center gap-2">
              {/* Add the signature orange brick to a specific item for asymmetry */}
              {index === 2 && <span className="w-2 h-2 bg-burntOrange block hidden md:block" />}
              {stat.label}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}