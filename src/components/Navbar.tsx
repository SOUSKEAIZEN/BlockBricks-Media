import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "WORK", path: "/work" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full h-[88px] bg-warmIvory border-b border-richBlack/10 flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 transition-all duration-300">
      
      {/* LOGO */}
      <Link 
        href="/" 
        className="flex flex-col leading-none text-richBlack uppercase group w-[160px] md:w-[200px]"
      >
        <span className="text-3xl md:text-[34px] font-display font-bold tracking-tighter leading-none">BLOCKBRICKS</span>
        <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-widest flex items-center gap-2 mt-1 opacity-90">
          MEDIA
          {/* Signature Burnt Orange Brick */}
          <span className="w-2 h-2 bg-burntOrange block group-hover:scale-125 transition-transform duration-300 ease-[0.76,0,0.24,1]"></span>
        </span>
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex items-center gap-10 lg:gap-16 text-[11px] font-bold uppercase tracking-[0.2em] text-richBlack/80">
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.path} className="relative group transition-colors hover:text-burntOrange">
            {link.name}
            {/* Small orange block hover effect */}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-burntOrange scale-0 group-hover:scale-100 transition-transform duration-300 ease-[0.76,0,0.24,1]" />
          </Link>
        ))}
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