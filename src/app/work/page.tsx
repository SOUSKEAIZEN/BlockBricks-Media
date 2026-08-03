"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FILTERS = [
  "ALL", "CONTENT", "SOCIAL", "INFLUENCER", "BRANDING", "WEB", "PERFORMANCE"
];

const PROJECTS = [
  {
    id: "urban-outfitters",
    client: "URBAN OUTFITTERS",
    category: "CONTENT",
    year: "2023",
    result: "+184% ENGAGEMENT",
    aspect: "aspect-[3/4]",
  },
  {
    id: "native-deodorant",
    client: "NATIVE",
    category: "INFLUENCER",
    year: "2024",
    result: "2.4M VIEWS",
    aspect: "aspect-square",
  },
  {
    id: "gymshark",
    client: "GYMSHARK",
    category: "PERFORMANCE",
    year: "2024",
    result: "4.2X ROAS",
    aspect: "aspect-square",
  },
  {
    id: "liquid-death",
    client: "LIQUID DEATH",
    category: "SOCIAL",
    year: "2023",
    result: "+300K FOLLOWERS",
    aspect: "aspect-[3/4]",
  },
  {
    id: "forma-studio",
    client: "FORMA STUDIO",
    category: "WEB",
    year: "2024",
    result: "-40% BOUNCE RATE",
    aspect: "aspect-[4/5]",
  },
  {
    id: "nexus-health",
    client: "NEXUS",
    category: "BRANDING",
    year: "2023",
    result: "BRAND RELAUNCH",
    aspect: "aspect-[4/5]",
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
      <section className="px-6 md:px-12 pt-32 pb-16 md:pt-48 md:pb-24 max-w-7xl mx-auto flex flex-col gap-12">
        <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter uppercase">
          The Work <br />
          Speaks.
        </h1>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center gap-6 mt-8 md:mt-12 border-t border-softGray/20 pt-8">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-colors ${
                activeFilter === filter 
                  ? "text-burntOrange border-b-2 border-burntOrange pb-1" 
                  : "text-softGray hover:text-richBlack"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ASYMMETRIC GRID */}
      <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          {filteredProjects.map((project, index) => (
            <Link 
              href={`/work/${project.id}`} 
              key={project.id}
              className={`group flex flex-col gap-4 ${
                index % 2 !== 0 ? "md:mt-32" : "" // Creates the staggered asymmetric look
              }`}
            >
              {/* Image Container with Hover Effects */}
              <div className={`w-full relative overflow-hidden ${project.aspect} bg-softGray/10`}>
                {/* Simulated Image Background */}
                <div className="absolute inset-0 bg-richBlack/5 group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                {/* Subtle Orange Overlay */}
                <div className="absolute inset-0 bg-burntOrange/0 group-hover:bg-burntOrange/20 transition-colors duration-500" />
                
                {/* Hover CTA: VIEW PROJECT ↗ */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-richBlack text-warmIvory px-6 py-3 rounded-full flex items-center gap-2 font-mono text-sm font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tighter group-hover:text-burntOrange transition-colors">
                    {project.client}
                  </h3>
                  <span className="text-sm font-mono text-softGray group-hover:text-burntOrange transition-colors">
                    {project.year}
                  </span>
                </div>
                
                <div className="border-t border-softGray/20 pt-2 flex justify-between items-center text-xs font-bold text-softGray uppercase tracking-widest mt-1">
                  <span>
                    {project.category}
                  </span>
                  <span className="text-richBlack">
                    {project.result}
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Empty State for Filters */}
        {filteredProjects.length === 0 && (
          <div className="w-full text-center py-24 text-softGray font-mono">
            No projects found in this category yet.
          </div>
        )}
      </section>

    </main>
  );
}