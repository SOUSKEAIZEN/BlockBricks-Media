"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FILTERS = [
  "ALL", "CONTENT", "SOCIAL", "INFLUENCER", "BRANDING"
];

const PROJECTS = [
  {
    id: "urban-outfitters",
    client: "URBAN OUTFITTERS",
    category: "CONTENT",
    year: "2023",
    result: "+184% ENGAGEMENT",
    aspect: "aspect-[4/3]",
  },
  {
    id: "influencers",
    client: "INFLUENCERS",
    category: "INFLUENCER",
    year: "2024",
    result: "2.4M VIEWS",
    aspect: "aspect-square",
    image: "/influencers-cover.png",
  },
  {
    id: "ugc-videos",
    client: "UGC VIDEOS",
    category: "SOCIAL",
    year: "2023",
    result: "+300K FOLLOWERS",
    aspect: "aspect-square",
    image: "/ugc-cover.png"
  },
  {
    id: "dummbers",
    client: "DUMMBERS",
    category: "BRANDING",
    year: "2023",
    result: "BRAND RELAUNCH",
    aspect: "aspect-[16/10]",
    image: "/dumbers.jpeg"
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main className="w-full bg-warmIvory text-richBlack min-h-screen">
      
      {/* HERO */}
      <section className="w-full pt-[160px] md:pt-[200px] pb-[80px] md:pb-[120px]">
        <div className="container flex flex-col gap-12">
          <h1 className="text-[clamp(48px,7vw,92px)] font-display font-bold leading-[0.9] tracking-tighter uppercase">
            The Work <br />
            Speaks.
          </h1>

          {/* FILTERS */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-4 border-t border-softGray/20 pt-8">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
                  activeFilter === filter 
                    ? "text-burntOrange border-b-2 border-burntOrange pb-1" 
                    : "text-softGray hover:text-richBlack"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL GRID */}
      <section className="w-full pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start w-full">
            {filteredProjects.map((project, index) => (
              <Link 
                href={`/work/${project.id}`} 
                key={project.id}
                className={`group flex flex-col ${
                  index % 2 !== 0 ? "md:mt-24" : "" 
                }`}
              >
                {/* Image Container with Hover Effects */}
                <div className={`w-full relative overflow-hidden ${project.aspect} bg-richBlack/5 mb-6`}>
                  {/* Actual Image or Placeholder Background */}
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.client} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[0.2,0.7,0.2,1] group-hover:scale-[1.035]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-softGray/20 transition-transform duration-700 ease-[0.2,0.7,0.2,1] group-hover:scale-[1.035]" />
                  )}
                  
                  {/* Subtle Orange Overlay */}
                  <div className="absolute inset-0 bg-richBlack/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-warmIvory text-richBlack px-6 py-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.2,0.7,0.2,1] delay-100">
                      <span className="text-[11px] font-bold tracking-[0.15em] uppercase">VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between">
                  <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold uppercase tracking-tight group-hover:text-burntOrange transition-colors leading-none">
                    {project.client}
                  </h3>
                  <div className="text-right">
                    <span className="block text-[11px] font-mono text-softGray uppercase tracking-[0.15em] mb-1">{project.category}</span>
                    <span className="block text-[11px] font-mono text-richBlack/40 uppercase tracking-[0.15em]">{project.year}</span>
                  </div>
                </div>

              </Link>
            ))}
          </div>

          {/* Empty State for Filters */}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-24 text-softGray font-mono text-[11px] tracking-[0.15em] uppercase">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>

    </main>
  );
}