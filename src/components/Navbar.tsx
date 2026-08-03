import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-[88px] bg-warmIvory border-b border-richBlack/10 flex items-center justify-between px-6 md:px-12 fixed top-0 z-50">
      
      {/* LOGO */}
      <Link 
        href="/" 
        className="flex flex-col leading-none font-display font-bold text-richBlack uppercase tracking-tighter"
      >
        <span className="text-2xl tracking-normal">BLOCK</span>
        <span className="text-sm flex items-center gap-1.5">
          BRICKS MEDIA
          {/* Signature Burnt Orange Brick */}
          <span className="w-3 h-2 bg-burntOrange block"></span>
        </span>
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
        <Link href="/" className="hover:text-burntOrange transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-burntOrange transition-colors">ABOUT</Link>
        <Link href="/services" className="hover:text-burntOrange transition-colors">SERVICES</Link>
        <Link href="/work" className="hover:text-burntOrange transition-colors">WORK</Link>
        <Link href="/contact" className="hover:text-burntOrange transition-colors">CONTACT</Link>
      </div>

      {/* CTA BUTTON */}
      <Link 
        href="/contact" 
        className="hidden md:flex items-center gap-2 bg-richBlack text-warmIvory px-6 py-3 hover:bg-burntOrange transition-colors group text-sm font-bold tracking-wide"
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