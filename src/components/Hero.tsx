"use client";

import Link from "next/link";
import HeroBrickWall from "./HeroBrickWall";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-warmIvory"
    >
      {/* BACKGROUND LAYER: The Brick Wall */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
         <HeroBrickWall />
      </div>

      {/* FOREGROUND LAYER: The Content */}
      {isMounted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1.0, ease: "easeOut" }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center w-full h-full pointer-events-none"
        >
          {/* Brand Wordmark */}
          <div className="flex flex-col items-center drop-shadow-[0_4px_32px_rgba(246,240,232,0.95)]">
            <h1 
              className="text-richBlack uppercase font-display tracking-tighter leading-[0.85]"
              style={{ fontSize: "clamp(64px, 8vw, 110px)", fontWeight: 800 }}
            >
              BLOCKBRICKS
            </h1>
            
            <div className="flex items-center gap-[clamp(8px,1vw,12px)] mt-2">
              <span 
                className="text-richBlack uppercase font-display tracking-tight leading-none"
                style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 500 }}
              >
                MEDIA
              </span>
              <span className="w-4 h-4 md:w-5 md:h-5 bg-burntOrange inline-block relative -top-[2px]" />
            </div>
            
            <div className="w-16 h-[1.5px] bg-richBlack/20 mt-6" />
          </div>

          {/* Supporting Structure */}
          <div className="mt-8 flex flex-col items-center text-center">
            
            <h2 
              className="text-richBlack uppercase tracking-tight font-display"
              style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 700, lineHeight: 1.15 }}
            >
              BUILDING BRANDS,<br/>
              <span className="text-burntOrange">BRICK BY BRICK.</span>
            </h2>
            
            <p 
              className="mt-6 text-softGray font-display" 
              style={{ fontSize: "clamp(15px, 1.1vw, 17px)", fontWeight: 400, lineHeight: 1.6, maxWidth: "420px" }}
            >
              Content, creators and strategy built for<br className="hidden md:block" /> brands that want to grow.
            </p>
            
            {/* CTAs */}
            <div className="flex items-center justify-center gap-8 mt-10 pointer-events-auto">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 bg-burntOrange text-white hover:bg-richBlack transition-colors group text-[11px] font-bold tracking-[0.15em] uppercase font-display px-6 py-3.5 rounded-[2px]"
              >
                START A PROJECT <span className="text-sm leading-none transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
              </Link>
              <Link 
                href="/work" 
                className="text-[11px] font-bold tracking-[0.15em] text-richBlack hover:text-burntOrange transition-colors uppercase font-display border-b-[1.5px] border-richBlack/30 hover:border-burntOrange pb-1"
              >
                VIEW WORK
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}