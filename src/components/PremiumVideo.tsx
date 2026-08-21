"use client";

import { useRef, useEffect, useState } from "react";
import { Maximize2, Minimize2, Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function PremiumVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      // Pause all other videos on the page
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach(v => {
        if (v !== videoRef.current && v !== bgVideoRef.current) {
          v.pause();
        }
      });
      videoRef.current.play();
      bgVideoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      bgVideoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    // Keep background video in sync
    if (bgVideoRef.current && videoRef.current) {
      if (Math.abs(bgVideoRef.current.currentTime - videoRef.current.currentTime) > 0.5) {
        bgVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-hidden bg-black/90 group rounded-md ${
        isFullscreen ? "w-screen h-screen" : "w-full aspect-[9/16]"
      }`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      {/* Blurred Background Video */}
      <video 
        ref={bgVideoRef}
        src={src} 
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-60 scale-110 pointer-events-none"
        muted
        playsInline
        loop
      />

      {/* Main Video */}
      <video 
        ref={videoRef}
        src={src}
        className="relative z-10 w-full h-full object-contain"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        playsInline
        loop
      />

      {/* Custom Controls Overlay */}
      <div 
        className={`absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-end">
           {/* Top right area if needed */}
        </div>
        
        {/* Play button overlay in center when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-black/50 text-white rounded-full p-4 backdrop-blur-sm">
                <Play size={40} className="ml-1" />
             </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pointer-events-auto bg-gradient-to-t from-black/80 via-black/40 to-transparent -mx-4 -mb-4 p-6 pt-12">
          <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-gray-300 transition-colors">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleMute}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <button onClick={toggleFullscreen} className="text-white hover:text-gray-300 transition-colors">
              {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
