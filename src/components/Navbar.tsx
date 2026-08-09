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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1500px] h-[64px] md:h-[68px] bg-warmIvory/70 backdrop-blur-[18px] backdrop-saturate-120 border border-richBlack/10 rounded-[14px] flex items-center justify-between px-5 md:px-6 z-[1000] transition-all duration-300">
      
      {/* LOGO */}
      <Link 
        href="/" 
        className="flex flex-col leading-none text-richBlack uppercase group w-[145px] md:w-[175px]"
      >
        <span className="text-2xl md:text-[28px] font-display font-bold tracking-tighter leading-none">BLOCKBRICKS</span>
        <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-widest flex items-center gap-2 mt-1 opacity-90">
          MEDIA
          {/* Signature Burnt Orange Brick */}
          <span className="w-1.5 h-1.5 bg-burntOrange block group-hover:scale-125 transition-transform duration-300 ease-[0.76,0,0.24,1]"></span>
        </span>
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.16em] text-richBlack/80">
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.path} className="relative group transition-colors hover:text-burntOrange">
            {link.name}
            {/* Small orange block hover effect */}
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-burntOrange scale-0 group-hover:scale-100 transition-transform duration-300 ease-[0.76,0,0.24,1]" />
          </Link>
        ))}
      </div>

      {/* CTA BUTTON */}
      <Link 
        href="/contact" 
        className="hidden md:flex items-center gap-1.5 bg-burntOrange text-warmIvory px-5 py-2.5 hover:bg-richBlack transition-colors rounded-md group text-[10px] md:text-[11px] font-bold tracking-widest uppercase"
      >
        START PROJECT
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </Link>

      {/* MOBILE MENU ICON */}
      <button className="md:hidden text-richBlack p-1.5">
        <Menu className="w-5 h-5" />
      </button>

    </nav>
  );
}