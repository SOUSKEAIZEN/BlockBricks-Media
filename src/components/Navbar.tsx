import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-[88px] bg-warmIvory border-b border-richBlack/10 flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 transition-all duration-300">
      
      {/* LOGO */}
      <Link 
        href="/" 
        className="flex flex-col leading-none text-richBlack uppercase group w-[150px] md:w-[180px]"
      >
        <span className="text-2xl md:text-[28px] font-display font-bold tracking-tighter leading-none">BLOCKBRICKS</span>
        <span className="text-[10px] md:text-xs font-mono font-medium tracking-widest flex items-center gap-2 mt-1">
          MEDIA
          {/* Signature Burnt Orange Brick */}
          <span className="w-2.5 h-2.5 bg-burntOrange block group-hover:scale-110 transition-transform"></span>
        </span>
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-richBlack/80">
        <Link href="/" className="hover:text-burntOrange transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-burntOrange transition-colors">ABOUT</Link>
        <Link href="/services" className="hover:text-burntOrange transition-colors">SERVICES</Link>
        <Link href="/work" className="hover:text-burntOrange transition-colors">WORK</Link>
        <Link href="/contact" className="hover:text-burntOrange transition-colors">CONTACT</Link>
      </div>

      {/* CTA BUTTON */}
      <Link 
        href="/contact" 
        className="hidden md:flex items-center gap-2 bg-burntOrange text-warmIvory px-6 py-3 hover:bg-richBlack transition-colors group text-xs font-bold tracking-widest uppercase"
      >
        START A PROJECT
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      </Link>

      {/* MOBILE MENU ICON */}
      <button className="md:hidden text-richBlack p-2">
        <Menu className="w-6 h-6" />
      </button>

    </nav>
  );
}