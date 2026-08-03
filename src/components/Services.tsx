import { ArrowRight } from "lucide-react";

const SERVICES = [
  "UGC Content",
  "Social Media",
  "Influencer Marketing",
  "Brand Collaborations",
  "Website Development",
  "Performance Marketing",
  "Creative Design",
  "Brand Strategy",
];

export default function Services() {
  return (
    <section className="w-full bg-warmIvory px-6 md:px-12 py-24 md:py-32">
      
      {/* SECTION HEADER */}
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-burntOrange block" />
          <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
            02 / WHAT WE BUILD
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-richBlack leading-[0.9] tracking-tighter uppercase">
          Every Brick <br />
          Has A Purpose.
        </h2>
      </div>

      {/* SERVICES LIST (Full-Width Rows) */}
      <div className="flex flex-col border-t border-richBlack/10">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="group relative flex items-center justify-between py-8 md:py-12 border-b border-richBlack/10 cursor-pointer overflow-hidden"
          >
            
            {/* Left side: Number + Service Name */}
            <div className="flex items-center gap-6 md:gap-12">
              <span className="text-sm md:text-base font-mono font-bold text-softGray">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter text-richBlack transition-transform duration-500 ease-out group-hover:translate-x-4 md:group-hover:translate-x-8">
                {service}
              </h3>
            </div>

            {/* Right side: Arrow (Appears on Hover) */}
            <div className="pr-4 overflow-hidden hidden md:block">
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-burntOrange opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0" />
            </div>

            {/* Expanding Orange Accent Line (Bottom) */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-burntOrange w-0 transition-all duration-700 ease-out group-hover:w-full" />
            
          </div>
        ))}
      </div>

    </section>
  );
}