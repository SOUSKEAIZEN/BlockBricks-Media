"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "WORK", path: "/work" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1500px] h-[64px] md:h-[68px] bg-warmIvory/70 backdrop-blur-[18px] backdrop-saturate-120 border border-richBlack/10 rounded-[14px] flex items-center justify-between px-5 md:px-6 z-[1000] transition-all duration-300">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="flex flex-col leading-none text-richBlack uppercase group w-[145px] md:w-[175px]"
        >
          <span className="text-2xl md:text-[28px] font-display font-bold tracking-tighter leading-none">BLOCKBRICKS</span>
          <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-widest flex items-center gap-2 mt-1 opacity-90">
            MEDIA
            <span className="w-1.5 h-1.5 bg-burntOrange block group-hover:scale-125 transition-transform duration-300 ease-[0.76,0,0.24,1]"></span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.16em] text-richBlack/80">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`relative group transition-colors duration-300 ${isActive ? "text-burntOrange" : "hover:text-burntOrange"}`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-burntOrange transition-all duration-300 ease-[0.76,0,0.24,1]
                    ${isActive 
                      ? "w-1.5 h-1.5 opacity-100 rounded-[1px]" 
                      : "w-4 h-1 opacity-0 group-hover:opacity-100 rounded-sm"
                    }
                  `} 
                />
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON (Desktop) */}
        <Link 
          href="/contact" 
          className="hidden md:flex items-center gap-1.5 bg-burntOrange text-warmIvory px-5 py-2.5 hover:bg-richBlack transition-colors rounded-md group text-[10px] md:text-[11px] font-bold tracking-widest uppercase"
        >
          START PROJECT
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </Link>

        {/* MOBILE MENU ICON */}
        <button 
          className="md:hidden text-richBlack p-1.5 z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-warmIvory flex flex-col justify-center items-center md:hidden pt-20 px-6"
          >
            <div className="flex flex-col items-center gap-8 text-center w-full max-w-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className={`text-[clamp(32px,8vw,42px)] font-display font-bold uppercase tracking-tighter transition-colors duration-300 ${isActive ? "text-burntOrange" : "text-richBlack"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link 
                href="/contact" 
                className="mt-8 flex items-center justify-center gap-2 w-full bg-burntOrange text-warmIvory py-4 hover:bg-richBlack transition-colors rounded-md group text-[13px] font-bold tracking-[0.2em] uppercase"
              >
                START A PROJECT
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}