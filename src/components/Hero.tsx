"use client";

import Link from "next/link";
import HeroBrickWall from "./HeroBrickWall";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleReveal = useCallback(() => {
    setShowContent(true);
  }, []);

  // Sequence delays relative to the reveal trigger
  const cinematicEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section 
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-warmIvory"
    >
      {/* BACKGROUND LAYER: The Brick Wall - Z-Index 10 */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center overflow-hidden">
         <HeroBrickWall onReveal={handleReveal} />
      </div>

      {/* FOREGROUND LAYER: The Content - Z-Index 100 */}
      {isMounted && (
        <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center w-full h-full pointer-events-none">
          {/* Brand Wordmark */}
          <div className="flex flex-col items-center drop-shadow-[0_4px_32px_rgba(246,240,232,0.95)]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
              transition={{ duration: 0.9, delay: 0.1, ease: cinematicEase }}
              className="text-richBlack uppercase font-display tracking-tighter leading-[0.85] text-[clamp(48px,6vw,92px)] font-extrabold"
            >
              BLOCKBRICKS
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.9, delay: 0.25, ease: cinematicEase }}
              className="flex items-center gap-[clamp(8px,1vw,12px)] mt-2"
            >
              <span 
                className="text-richBlack uppercase font-display tracking-tight leading-none text-[clamp(28px,3.5vw,52px)] font-bold"
              >
                MEDIA
              </span>
              <span className="w-3 h-3 md:w-4 md:h-4 bg-burntOrange inline-block relative -top-[2px]" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: showContent ? 1 : 0, scaleX: showContent ? 1 : 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: cinematicEase }}
              className="w-12 h-[1.5px] bg-richBlack/20 mt-6 origin-center" 
            />
          </div>

          {/* Supporting Structure */}
          <div className="mt-8 flex flex-col items-center text-center">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.9, delay: 0.55, ease: cinematicEase }}
              className="text-richBlack uppercase tracking-tight font-display text-[clamp(20px,2vw,32px)] font-bold leading-[1.15]"
            >
              BUILDING BRANDS,<br/>
              <span className="text-burntOrange">BRICK BY BRICK.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.9, delay: 0.7, ease: cinematicEase }}
              className="mt-4 text-richBlack/80 font-sans text-[clamp(15px,1.2vw,17px)] font-medium leading-[1.6] max-w-[420px]" 
            >
              Content, creators and strategy built for<br className="hidden md:block" /> brands that want to grow.
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.9, delay: 0.85, ease: cinematicEase }}
              className="flex items-center justify-center gap-8 mt-10 pointer-events-auto"
            >
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 bg-burntOrange text-white hover:bg-richBlack transition-colors group text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase font-display px-6 py-3.5 rounded-[2px]"
              >
                START A PROJECT <span className="text-sm leading-none transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
              </Link>
              <Link 
                href="/work" 
                className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-richBlack hover:text-burntOrange transition-colors uppercase font-display border-b-[1.5px] border-richBlack/30 hover:border-burntOrange pb-1"
              >
                VIEW WORK
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}