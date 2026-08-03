"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroBrickWall from "./HeroBrickWall";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Spring-smoothed mouse coordinates for the background wordmark
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    // Normalize to -1 to 1 based on screen size
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    // Max movement: X ±5px, Y ±3px
    mouseX.set(x * 5);
    mouseY.set(y * 3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="relative w-full min-h-[calc(100svh-88px)] flex flex-col justify-center pt-12 md:pt-0 overflow-hidden bg-warmIvory"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* BACKGROUND WORDMARK */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.03] flex flex-col"
      >
        <span className="font-display font-bold tracking-tighter leading-[0.8] text-[20vw] whitespace-nowrap">
          BLOCKBRICKS
        </span>
        <span className="font-mono font-bold tracking-[0.3em] text-[3vw] ml-2 mt-4 flex items-center gap-4">
          MEDIA 
          <span className="w-[2vw] h-[2vw] bg-richBlack block opacity-50" />
        </span>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full items-center max-w-[1600px] mx-auto pl-[clamp(24px,5vw,88px)]">
        
        {/* LEFT: COPY (55%) */}
        <div className="w-full md:w-[55%] flex flex-col items-start z-20 pr-6 md:pr-0">
          
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="w-3.5 h-3.5 bg-burntOrange block" />
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-[0.2em]">
              Creative Marketing Agency
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-display font-bold text-richBlack leading-[0.85] tracking-tighter uppercase max-w-[650px] md:max-w-[720px]" style={{ fontSize: "clamp(3.5rem, 6.5vw, 7.5rem)" }}>
            WE BUILD <br />
            BRANDS
            <div className="h-[0.3em]" /> {/* Rhythm gap */}
            BRICK BY <br />
            <span className="text-burntOrange inline-flex items-center">
              BRICK.
            </span>
          </h1>
          
          {/* Supporting Copy */}
          <p className="mt-8 text-base md:text-lg text-richBlack/70 font-medium leading-relaxed max-w-[430px]">
            BlockBricks Media combines strategy, content, creators, design and digital experiences to build brands people notice, remember and choose.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-3 bg-burntOrange text-warmIvory px-8 py-4 hover:bg-richBlack transition-colors group text-sm font-bold tracking-widest uppercase"
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </Link>
            <Link 
              href="/work" 
              className="text-sm font-bold tracking-widest text-richBlack hover:text-burntOrange transition-colors border-b border-richBlack hover:border-burntOrange pb-1 uppercase"
            >
              VIEW OUR WORK →
            </Link>
          </div>
        </div>

        {/* RIGHT: ANIMATED BRICK WALL (45%) */}
        {/* Wall animation bleeds off right edge intentionally */}
        <div className="w-full md:w-[45%] h-[50vh] md:h-full absolute md:relative bottom-0 right-0 -z-10 md:z-10 opacity-30 md:opacity-100 flex items-center justify-center md:pl-12">
           <HeroBrickWall />
        </div>

      </div>

      {/* BOTTOM SCROLL DETAIL */}
      <div className="absolute bottom-8 left-0 w-full pl-[clamp(24px,5vw,88px)] pr-[clamp(24px,5vw,88px)] flex justify-between items-end z-20 pointer-events-none">
        <span className="text-[10px] md:text-xs font-bold text-softGray uppercase tracking-widest">
          SCROLL TO EXPLORE ↓
        </span>
        <span className="hidden md:block text-[10px] md:text-xs font-bold text-softGray uppercase tracking-widest text-right">
          Strategy / Content / Creators / Design / Digital
        </span>
      </div>

    </section>
  );
}