import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Placeholder data as requested
const PROJECTS = [
  {
    id: 1,
    client: "URBAN OUTFITTERS",
    category: "CONTENT",
    year: "2023",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    client: "NATIVE DEODORANT",
    category: "BRANDING",
    year: "2024",
    aspect: "aspect-square",
  },
  {
    id: 3,
    client: "GYMSHARK",
    category: "SOCIAL",
    year: "2024",
    aspect: "aspect-square",
  },
  {
    id: 4,
    client: "LIQUID DEATH",
    category: "CONTENT",
    year: "2023",
    aspect: "aspect-[16/10]",
  },
];

export default function FeaturedWork() {
  return (
    <section className="w-full bg-warmIvory py-[120px]">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 bg-burntOrange block" />
              <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
                03 / SELECTED WORK
              </span>
            </div>
            <h2 className="text-richBlack font-display font-bold uppercase tracking-[-0.04em] leading-[0.95] text-[clamp(48px,5vw,72px)]">
              THE WORK <br />
              SPEAKS.
            </h2>
          </div>
          
          {/* VIEW ALL CTA (Desktop) */}
          <Link 
            href="/work"
            className="hidden md:flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-richBlack hover:text-burntOrange transition-colors border-b border-richBlack hover:border-burntOrange pb-1 group"
          >
            VIEW ALL WORK 
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* EDITORIAL GRID */}
        <div className="flex flex-col gap-12 md:gap-24">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
            {/* Large Card (58%) */}
            <div className="w-full md:w-[58%] group cursor-pointer flex flex-col">
              <div className={`w-full ${PROJECTS[0].aspect} bg-richBlack/5 mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 w-full h-full bg-softGray/20 transition-transform duration-700 ease-[0.2,0.7,0.2,1] group-hover:scale-[1.035]" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-richBlack/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-warmIvory text-richBlack px-6 py-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.2,0.7,0.2,1] delay-100">
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase">VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold text-richBlack uppercase tracking-tight transition-colors group-hover:text-burntOrange leading-none">
                  {PROJECTS[0].client}
                </h3>
                <div className="text-right">
                  <span className="block text-[11px] font-mono text-softGray uppercase tracking-[0.15em] mb-1">{PROJECTS[0].category}</span>
                  <span className="block text-[11px] font-mono text-richBlack/40 uppercase tracking-[0.15em]">{PROJECTS[0].year}</span>
                </div>
              </div>
            </div>
            
            {/* Small Card (42%) */}
            <div className="w-full md:w-[42%] group cursor-pointer flex flex-col pt-0 md:pt-24">
              <div className={`w-full ${PROJECTS[1].aspect} bg-richBlack/5 mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 w-full h-full bg-softGray/20 transition-transform duration-700 ease-[0.2,0.7,0.2,1] group-hover:scale-[1.035]" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-richBlack/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-warmIvory text-richBlack px-6 py-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.2,0.7,0.2,1] delay-100">
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase">VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold text-richBlack uppercase tracking-tight transition-colors group-hover:text-burntOrange leading-none">
                  {PROJECTS[1].client}
                </h3>
                <div className="text-right">
                  <span className="block text-[11px] font-mono text-softGray uppercase tracking-[0.15em] mb-1">{PROJECTS[1].category}</span>
                  <span className="block text-[11px] font-mono text-richBlack/40 uppercase tracking-[0.15em]">{PROJECTS[1].year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 (Flipped widths) */}
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 w-full">
            {/* Small Card (42%) */}
            <div className="w-full md:w-[42%] group cursor-pointer flex flex-col pt-0 md:pt-16">
              <div className={`w-full ${PROJECTS[2].aspect} bg-richBlack/5 mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 w-full h-full bg-softGray/20 transition-transform duration-700 ease-[0.2,0.7,0.2,1] group-hover:scale-[1.035]" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-richBlack/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-warmIvory text-richBlack px-6 py-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.2,0.7,0.2,1] delay-100">
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase">VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold text-richBlack uppercase tracking-tight transition-colors group-hover:text-burntOrange leading-none">
                  {PROJECTS[2].client}
                </h3>
                <div className="text-right">
                  <span className="block text-[11px] font-mono text-softGray uppercase tracking-[0.15em] mb-1">{PROJECTS[2].category}</span>
                  <span className="block text-[11px] font-mono text-richBlack/40 uppercase tracking-[0.15em]">{PROJECTS[2].year}</span>
                </div>
              </div>
            </div>

            {/* Large Card (58%) */}
            <div className="w-full md:w-[58%] group cursor-pointer flex flex-col">
              <div className={`w-full ${PROJECTS[3].aspect} bg-richBlack/5 mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 w-full h-full bg-softGray/20 transition-transform duration-700 ease-[0.2,0.7,0.2,1] group-hover:scale-[1.035]" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-richBlack/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-warmIvory text-richBlack px-6 py-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.2,0.7,0.2,1] delay-100">
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase">VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold text-richBlack uppercase tracking-tight transition-colors group-hover:text-burntOrange leading-none">
                  {PROJECTS[3].client}
                </h3>
                <div className="text-right">
                  <span className="block text-[11px] font-mono text-softGray uppercase tracking-[0.15em] mb-1">{PROJECTS[3].category}</span>
                  <span className="block text-[11px] font-mono text-richBlack/40 uppercase tracking-[0.15em]">{PROJECTS[3].year}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* VIEW ALL CTA (Mobile) */}
        <div className="mt-16 flex justify-center md:hidden">
          <Link 
            href="/work"
            className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-richBlack border-b border-richBlack pb-1"
          >
            VIEW ALL WORK 
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}