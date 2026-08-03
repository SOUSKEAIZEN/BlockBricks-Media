import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder data as requested
const PROJECTS = [
  {
    id: 1,
    client: "URBAN OUTFITTERS",
    category: "UGC Campaign",
    year: "2023",
    description: "A creator-led TikTok campaign designed to drive Gen-Z awareness and conversion for the winter collection.",
    resultNumber: "+184%",
    resultLabel: "ENGAGEMENT",
    aspect: "aspect-[4/5]", // Taller
  },
  {
    id: 2,
    client: "NATIVE DEODORANT",
    category: "Influencer Strategy",
    year: "2024",
    description: "Strategic placement across 40+ micro-influencers to build authentic brand trust and lower CAC.",
    resultNumber: "2.4M",
    resultLabel: "VIEWS",
    aspect: "aspect-square", // Square
  },
  {
    id: 3,
    client: "GYMSHARK",
    category: "Performance Marketing",
    year: "2024",
    description: "Paid social restructuring and creative testing framework that scaled ad spend profitably.",
    resultNumber: "4.2X",
    resultLabel: "ROAS",
    aspect: "aspect-square", // Square
  },
  {
    id: 4,
    client: "LIQUID DEATH",
    category: "Social Media",
    year: "2023",
    description: "Unhinged community management and viral reactive content that dominated the timeline.",
    resultNumber: "+300K",
    resultLabel: "FOLLOWERS",
    aspect: "aspect-[4/5]", // Taller
  },
];

export default function FeaturedWork() {
  return (
    <section className="w-full bg-warmIvory px-6 md:px-12 py-24 md:py-32">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-32">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
              03 / SELECTED WORK
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-richBlack leading-[0.9] tracking-tighter uppercase">
            Work Built <br />
            To Perform.
          </h2>
        </div>
        
        {/* VIEW ALL CTA (Desktop) */}
        <Link 
          href="/work"
          className="hidden md:flex items-center gap-2 text-sm font-bold tracking-wide text-richBlack hover:text-burntOrange transition-colors border-b border-richBlack hover:border-burntOrange pb-1 group"
        >
          VIEW ALL WORK 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* ASYMMETRIC GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            // The staggered asymmetric effect: push even items down on desktop
            className={`flex flex-col group cursor-pointer ${
              index % 2 === 1 ? "md:mt-32" : ""
            }`}
          >
            
            {/* Image Placeholder */}
            <div className={`w-full ${project.aspect} bg-richBlack/5 mb-6 overflow-hidden relative`}>
              <div className="absolute inset-0 w-full h-full bg-softGray/20 transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
              {/* Optional: subtle orange overlay on hover */}
              <div className="absolute inset-0 bg-burntOrange/0 transition-colors duration-500 group-hover:bg-burntOrange/10" />
            </div>

            {/* Project Meta */}
            <div className="flex items-center justify-between border-b border-richBlack/10 pb-4 mb-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-richBlack uppercase tracking-tighter transition-colors group-hover:text-burntOrange">
                {project.client}
              </h3>
              <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest text-right">
                {project.category} <br /> {project.year}
              </span>
            </div>

            {/* Description & Results */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-between">
              <p className="text-base text-richBlack/70 font-medium leading-relaxed sm:max-w-[200px]">
                {project.description}
              </p>
              <div className="flex flex-col items-start sm:items-end flex-shrink-0">
                <span className="text-4xl md:text-5xl font-display font-bold text-richBlack tracking-tighter">
                  {project.resultNumber}
                </span>
                <span className="text-xs font-bold text-burntOrange uppercase tracking-widest mt-1">
                  {project.resultLabel}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* VIEW ALL CTA (Mobile) */}
      <div className="mt-16 flex justify-center md:hidden">
        <Link 
          href="/work"
          className="flex items-center gap-2 text-sm font-bold tracking-wide text-richBlack border-b border-richBlack pb-1"
        >
          VIEW ALL WORK 
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  );
}