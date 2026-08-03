"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useAnimation, useSpring } from "framer-motion";
import { useEffect, useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });
  const controls = useAnimation();

  useEffect(() => {
    if (hasClicked) {
      // Lock into place
      controls.start({ x: 0, y: 0, rotate: 0, scale: 1, transition: { duration: 0.15 } });
      setTimeout(() => {
        router.push("/");
      }, 250);
    } else if (isHovering) {
      // Move to slot but hover slightly over it (anticipation)
      controls.start({ x: 0, y: -6, rotate: 0, scale: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } });
    } else {
      // Float nearby
      controls.start({ x: -60, y: 40, rotate: -10, scale: 1.1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } });
    }
  }, [isHovering, hasClicked, controls, router]);

  const handleMouseMove = (e: MouseEvent) => {
    if (isHovering || hasClicked) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHasClicked(true);
  };

  return (
    <main 
      className="w-full min-h-screen bg-warmIvory flex items-center justify-center px-6 md:px-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 md:pt-0">
        
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-start z-10">
          <span className="text-[10rem] md:text-[14rem] font-display font-bold text-richBlack leading-none tracking-tighter mb-4 opacity-5 select-none absolute top-[-5%] left-0 md:relative md:top-auto">
            404
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-richBlack leading-[0.85] tracking-tighter uppercase mb-8 relative z-10 mt-20 md:mt-0">
            LOOKS LIKE <br />
            WE'RE MISSING <br />
            A <span className="text-burntOrange">BRICK.</span>
          </h1>
          <p className="text-lg text-richBlack/70 font-medium mb-12 max-w-[400px]">
            The page you're looking for isn't part of this build.
          </p>
          
          <a
            href="/"
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex items-center justify-center gap-3 bg-burntOrange text-warmIvory px-8 py-4 hover:bg-richBlack transition-colors group text-sm font-bold tracking-widest uppercase relative overflow-hidden"
          >
            BACK HOME
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
          </a>
        </div>

        {/* VISUAL WALL */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          
          <div className="grid grid-cols-3 gap-3 md:gap-4 md:scale-125 transform-gpu pointer-events-none">
            {/* ROW 1 */}
            <div className="w-24 md:w-32 h-12 md:h-16 bg-warmIvory border border-softGray/20 shadow-sm" />
            <div className="w-24 md:w-32 h-12 md:h-16 bg-richBlack shadow-sm relative">
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
            </div>
            <div className="w-24 md:w-32 h-12 md:h-16 bg-warmIvory border border-softGray/20 shadow-sm" />
            
            {/* ROW 2 */}
            <div className="w-24 md:w-32 h-12 md:h-16 bg-richBlack shadow-sm relative">
               <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
            </div>
            
            {/* THE MISSING SLOT */}
            <div className="relative w-24 md:w-32 h-12 md:h-16 border border-softGray/30 bg-transparent flex items-center justify-center">
              <span className="text-[10px] text-softGray/50 font-mono">404</span>
              
              {/* THE FLOATING ORANGE BRICK */}
              <motion.div
                animate={controls}
                style={{ x: isHovering || hasClicked ? 0 : mouseX, y: isHovering || hasClicked ? 0 : mouseY }}
                className="absolute inset-0 bg-burntOrange shadow-lg flex items-center justify-center z-20"
              >
                 <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
              </motion.div>
            </div>
            
            <div className="w-24 md:w-32 h-12 md:h-16 bg-warmIvory border border-softGray/20 shadow-sm" />

            {/* ROW 3 */}
            <div className="w-24 md:w-32 h-12 md:h-16 bg-warmIvory border border-softGray/20 shadow-sm" />
            <div className="w-24 md:w-32 h-12 md:h-16 bg-warmIvory border border-softGray/20 shadow-sm" />
            <div className="w-24 md:w-32 h-12 md:h-16 bg-richBlack shadow-sm relative">
               <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
