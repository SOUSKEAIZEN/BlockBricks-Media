import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import HeroBrickWall from "./HeroBrickWall";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 md:pt-0 overflow-hidden bg-warmIvory">
      
      {/* CONTENT GRID */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full items-center">
        
        {/* LEFT: COPY (50-55%) */}
        <div className="w-full md:w-[55%] flex flex-col items-start pt-10 md:pt-0">
          
          {/* Label */}
          <div className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest mb-6 md:mb-8">
            Creative Marketing Agency <br />
            Delhi / India
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-display font-bold text-richBlack leading-[0.85] tracking-tighter uppercase">
            We Build <br />
            Brands <br />
            Brick By <br />
            {/* Distinctive Orange Treatment */}
            <span className="flex items-center gap-2 md:gap-4 mt-2">
              <span className="w-12 h-8 md:w-20 md:h-12 bg-burntOrange inline-block" />
              Brick.
            </span>
          </h1>
          
          {/* Supporting Copy */}
          <p className="mt-8 text-base md:text-lg text-richBlack/80 max-w-md font-medium leading-relaxed">
            BlockBricks Media combines strategy, content, creators, design and digital experiences to build brands people notice, remember and choose.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-burntOrange text-warmIvory px-8 py-4 hover:bg-richBlack transition-colors group text-sm font-bold tracking-wide"
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </Link>
            <Link 
              href="/work" 
              className="text-sm font-bold tracking-wide text-richBlack hover:text-burntOrange transition-colors border-b border-richBlack hover:border-burntOrange pb-1"
            >
              VIEW OUR WORK
            </Link>
          </div>
        </div>

        {/* RIGHT: ANIMATED BRICK WALL (45-50%) */}
        <div className="w-full md:w-[45%] h-[40vh] md:h-screen absolute md:relative bottom-0 right-0 -z-10 md:z-0 opacity-20 md:opacity-100 flex items-center justify-center">
           <HeroBrickWall />
        </div>

      </div>

      {/* BOTTOM SCROLL DETAIL */}
      <div className="absolute bottom-8 left-6 md:left-12 z-10 flex flex-col gap-3 pb-8 md:pb-0">
        <span className="text-[10px] md:text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-2">
          <ArrowDown className="w-3 h-3 animate-bounce" /> Scroll to explore
        </span>
        <span className="text-[10px] md:text-xs font-medium text-richBlack/50 uppercase tracking-widest">
          Strategy / Content / Creators / Design / Digital
        </span>
      </div>

    </section>
  );
}