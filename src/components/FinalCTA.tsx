import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-richBlack px-6 md:px-12 py-32 md:py-48 flex flex-col items-center justify-center text-center">
      
      {/* MASSIVE TYPOGRAPHY */}
      <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-bold text-warmIvory leading-[0.9] tracking-tighter uppercase mb-16 relative">
        Got a brand? <br />
        Let's build <br />
        Something <br />
        People Remember.
        
        {/* Signature Orange Brick Anchor */}
        <span className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-16 h-6 bg-burntOrange block hidden md:block" />
      </h2>

      {/* CTA BUTTON */}
      <Link 
        href="/contact" 
        className="flex items-center justify-center gap-3 bg-burntOrange text-warmIvory px-10 py-5 hover:bg-warmIvory hover:text-richBlack transition-colors group text-sm md:text-base font-bold tracking-wide mb-8 mt-4 md:mt-0"
      >
        START A PROJECT
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      </Link>

      {/* SUBTITLE */}
      <p className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
        NO BORING BRIEFS REQUIRED.
      </p>

    </section>
  );
}