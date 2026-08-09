import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Define basic dynamic data based on the route ID
  const projectHeaders: Record<string, any> = {
    "urban-outfitters": {
      client: "URBAN OUTFITTERS",
      industry: "Fashion / E-Commerce",
      year: "2023",
      services: ["UGC Content", "Social Media", "Influencer Strategy"],
    },
    "native-deodorant": {
      client: "NATIVE",
      industry: "Personal Care",
      year: "2024",
      services: ["Influencer Marketing", "TikTok Ads"],
    },
    "liquid-death": {
      client: "LIQUID DEATH",
      industry: "Beverage",
      year: "2023",
      services: ["Social Strategy", "Viral Campaigns"],
    },
    "dummbers": {
      client: "DUMMBERS",
      industry: "Apparel / Streetwear",
      year: "2023",
      services: ["Brand Relaunch", "Visual Identity", "E-Commerce"],
    }
  };

  const headerData = projectHeaders[id] || projectHeaders["urban-outfitters"];

  const project = {
    ...headerData,
    challenge: `${headerData.client} needed to recapture Gen-Z attention ahead of their critical Q4 launch. Traditional polished creatives were being ignored, resulting in rising CAC and stagnant organic growth.`,
    idea: "Stop acting like a brand. Start acting like a creator. We shifted the entire content engine to feel native, unhinged, and community-driven.",
    strategy: "We built a network of 40 micro-creators to produce lo-fi, trend-reactive content. We bypassed the standard corporate approval matrix to allow for rapid, 24-hour turnaround times on trending audio.",
    execution: "Over 60 days, we deployed 120 unique pieces of short-form content. We actively managed the comments section to build a cult-like community, treating the comments as a secondary content feed.",
    resultNumber: "+184%",
    resultLabel: "ENGAGEMENT RATE",
    testimonial: {
      quote: "They didn't just create content. They understood what our brand needed to say.",
      name: "SARAH JENKINS",
      role: `CMO / ${headerData.client}`,
    }
  };

  return (
    <main className="w-full bg-warmIvory text-richBlack min-h-screen">
      
      {/* BACK TO WORK NAV */}
      <div className="px-6 md:px-12 pt-32 pb-8 max-w-7xl mx-auto flex items-center">
        <Link href="/work" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-softGray hover:text-burntOrange transition-colors">
           <ArrowLeft size={16} />
           Back to all work
        </Link>
      </div>

      {/* PROJECT HERO */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto flex flex-col gap-12 border-b border-softGray/20">
        <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
          {project.client}
        </h1>
        
        {/* METADATA GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">Client</span>
            <span className="text-sm font-medium">{project.client}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">Industry</span>
            <span className="text-sm font-medium">{project.industry}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">Year</span>
            <span className="text-sm font-medium">{project.year}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">Services</span>
            <ul className="text-sm font-medium flex flex-col">
              {project.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HERO VISUAL */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="w-full aspect-video bg-softGray/10 flex items-center justify-center border border-softGray/20 overflow-hidden relative">
          {id === "dummbers" ? (
            <img src="/dumbers.jpeg" alt="Dummbers Hero" className="w-full h-full object-cover" />
          ) : (
            <span className="font-mono text-softGray/50">Hero Video / Image Placeholder</span>
          )}
        </div>
      </section>

      {/* EDITORIAL CONTENT */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* THE CHALLENGE */}
          <div className="md:col-span-12 flex flex-col md:flex-row gap-8 md:gap-24">
            <h2 className="w-full md:w-1/3 text-3xl font-display font-bold uppercase tracking-tighter">
              The Challenge
            </h2>
            <p className="w-full md:w-2/3 text-lg md:text-2xl leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* THE IDEA */}
          <div className="md:col-span-12 flex flex-col md:flex-row gap-8 md:gap-24">
            <h2 className="w-full md:w-1/3 text-3xl font-display font-bold uppercase tracking-tighter">
              The Idea
            </h2>
            <p className="w-full md:w-2/3 text-lg md:text-2xl leading-relaxed">
              {project.idea}
            </p>
          </div>

          {/* SECONDARY VISUALS */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
             <div className="w-full aspect-[4/5] bg-softGray/10 border border-softGray/20 flex items-center justify-center overflow-hidden relative">
                {id === "dummbers" ? (
                  <img src="/d2.jpeg" alt="Dummbers Secondary 1" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-softGray/50">Secondary Image</span>
                )}
             </div>
             <div className="w-full aspect-[4/5] bg-softGray/10 border border-softGray/20 flex items-center justify-center overflow-hidden relative md:mt-24">
                {id === "dummbers" ? (
                  <img src="/d3.jpeg" alt="Dummbers Secondary 2" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-softGray/50">Secondary Image</span>
                )}
             </div>
          </div>

          {/* STRATEGY & EXECUTION */}
          <div className="md:col-span-12 flex flex-col md:flex-row gap-8 md:gap-24">
            <h2 className="w-full md:w-1/3 text-3xl font-display font-bold uppercase tracking-tighter">
              Strategy & Execution
            </h2>
            <div className="w-full md:w-2/3 flex flex-col gap-6 text-lg leading-relaxed">
              <p>{project.strategy}</p>
              <p>{project.execution}</p>
            </div>
          </div>

        </div>
      </section>

      {/* THE RESULT (DARK SECTION) */}
      <section className="w-full bg-richBlack text-warmIvory py-32 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6">
          <span className="text-xs font-bold text-softGray uppercase tracking-widest">The Result</span>
          <h3 className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-burntOrange">
            {project.resultNumber}
          </h3>
          <span className="text-xl md:text-2xl font-medium tracking-tight">
            {project.resultLabel}
          </span>
        </div>
      </section>

      {/* PROJECT TESTIMONIAL */}
      <section className="px-6 md:px-12 py-32 max-w-4xl mx-auto text-center flex flex-col gap-8">
        <p className="text-3xl md:text-5xl font-display font-bold leading-tight">
          "{project.testimonial.quote}"
        </p>
        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold uppercase tracking-widest">{project.testimonial.name}</span>
          <span className="text-xs font-mono text-softGray">{project.testimonial.role}</span>
        </div>
      </section>

    </main>
  );
}