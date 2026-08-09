import { ArrowRight } from "lucide-react";

const SERVICES = [
  "UGC CONTENT",
  "SOCIAL MEDIA",
  "INFLUENCER MARKETING",
  "BRANDING",
  "WEB",
];

export default function Services() {
  return (
    <section className="w-full bg-warmIvory py-[120px]">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
              02 / WHAT WE BUILD
            </span>
          </div>
          <h2 className="text-richBlack font-display font-bold uppercase tracking-[-0.04em] leading-[0.95] text-[clamp(48px,5vw,72px)]">
            EVERY BRICK <br />
            HAS A PURPOSE.
          </h2>
        </div>

        {/* SERVICES LIST (Accordion style) */}
        <div className="flex flex-col border-t border-richBlack/10">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative flex items-center justify-between h-[110px] md:h-[135px] border-b border-richBlack/10 cursor-pointer overflow-hidden"
            >
              
              {/* Left side: Number + Service Name */}
              <div className="flex items-center gap-8 md:gap-16 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-6 z-10 relative">
                <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray/60 w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold uppercase tracking-tight text-richBlack transition-colors duration-300 group-hover:text-burntOrange">
                  {service}
                </h3>
              </div>

              {/* Right side: Arrow */}
              <div className="pr-4 z-10 relative">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-burntOrange opacity-0 -translate-x-4 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:translate-x-0" />
              </div>

              {/* Expanding subtle background hover */}
              <div className="absolute inset-0 bg-richBlack/[0.015] w-full h-full scale-y-0 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-y-100" />
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}