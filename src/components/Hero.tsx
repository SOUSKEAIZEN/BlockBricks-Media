"use client";

import Link from "next/link";
import HeroBrickWall from "./HeroBrickWall";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [hasPlayedIntro, setHasPlayedIntro] = useState(true);

  useEffect(() => {
    setHasPlayedIntro(!!sessionStorage.getItem("blockbricks-hero-collapsed"));
  }, []);

  return (
    <section 
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-warmIvory"
    >
      {/* 
        BACKGROUND LAYER: The Brick Wall 
        Spans the entire viewport. Z-index 10.
        It sits on top of the Warm Ivory background but behind the text.
      */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
         <HeroBrickWall />
      </div>

      {/* 
        FOREGROUND LAYER: The Content 
        Z-index 30. Left aligned perfectly inside the massive negative space.
      */}
      <motion.div 
        initial={{ opacity: hasPlayedIntro ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: hasPlayedIntro ? 0 : 3.0, duration: 1.2, ease: "easeOut" }}
        className="absolute left-[18vw] top-[32%] z-30 flex flex-col items-start w-full max-w-[800px] pointer-events-none"
      >
        
        {/* Brand Wordmark (Read as ONE name) */}
        <div className="flex flex-row items-baseline gap-[clamp(12px,1.5vw,20px)]">
          <h1 
            className="text-richBlack uppercase font-display tracking-tight leading-none"
            style={{ fontSize: "clamp(72px, 6vw, 96px)", fontWeight: 700 }}
          >
            BLOCKBRICKS
          </h1>
          
          <div className="flex items-baseline gap-[clamp(8px,1vw,12px)]">
            <span 
              className="text-richBlack uppercase font-display tracking-tight leading-none"
              style={{ fontSize: "clamp(40px, 4vw, 52px)", fontWeight: 500 }}
            >
              MEDIA
            </span>
            <span className="w-3.5 h-3.5 md:w-4 md:h-4 bg-burntOrange inline-block relative -top-[4px]" />
          </div>
        </div>

        {/* Supporting Structure */}
        <div className="mt-12 flex flex-col items-start">
          
          <h2 
            className="text-richBlack uppercase tracking-tight font-display"
            style={{ fontSize: "clamp(34px, 3vw, 44px)", fontWeight: 600, lineHeight: 1.05 }}
          >
            BUILDING BRANDS,<br/>
            BRICK BY BRICK.
          </h2>
          
          <p 
            className="mt-6 text-richBlack/70 font-display" 
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.5, maxWidth: "420px" }}
          >
            Content, creators and strategy built for<br className="hidden md:block" /> brands that want to grow.
          </p>
          
          {/* CTAs (Pointer events auto since parent is none) */}
          <div className="flex items-center gap-10 mt-12 pointer-events-auto">
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 text-burntOrange hover:text-richBlack transition-colors group text-[13px] font-bold tracking-[0.15em] uppercase font-display"
            >
              START A PROJECT <span className="text-base leading-none transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
            </Link>
            <Link 
              href="/work" 
              className="text-[13px] font-bold tracking-[0.15em] text-richBlack/50 hover:text-burntOrange transition-colors uppercase font-display"
            >
              VIEW WORK
            </Link>
          </div>

        </div>
      </motion.div>
    </section>
  );
}