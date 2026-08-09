import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-richBlack py-[120px] flex flex-col items-center justify-center text-center">
      <div className="container flex flex-col items-center">
        
        {/* RESTRAINED TYPOGRAPHY */}
        <h2 className="w-full max-w-[60%] text-[clamp(48px,5.5vw,72px)] font-display font-bold text-warmIvory leading-[0.95] tracking-tighter uppercase mb-12">
          EVERYTHING <br />
          YOUR BRAND <br />
          NEEDS TO GROW.
        </h2>

        {/* Signature Orange Brick Anchor */}
        <div className="w-3 h-3 bg-burntOrange block mb-12" />

        {/* CTA BUTTON */}
        <Link 
          href="/contact" 
          className="flex items-center justify-center gap-2 bg-burntOrange text-warmIvory px-8 py-4 hover:bg-warmIvory hover:text-richBlack transition-colors group text-[11px] md:text-[12px] font-bold tracking-[0.15em] mb-6"
        >
          START A PROJECT
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>

        {/* SUBTITLE */}
        <p className="text-[10px] md:text-[11px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
          NO BORING BRIEFS REQUIRED.
        </p>

      </div>
    </section>
  );
}