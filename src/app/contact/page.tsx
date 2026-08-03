"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  // Calculate completion for the visual builder (0 to 5)
  let completionCount = 0;
  if (formState.name.length > 2) completionCount++;
  if (formState.email.includes("@")) completionCount++;
  if (formState.service) completionCount++;
  if (formState.budget) completionCount++;
  if (formState.message.length > 5) completionCount++;

  const handleServiceClick = (service: string) => {
    setFormState({ ...formState, service: formState.service === service ? "" : service });
  };

  const services = ["UGC", "SOCIAL", "INFLUENCER", "BRANDING", "WEBSITE", "PERFORMANCE", "CREATIVE"];

  return (
    <main className="w-full min-h-screen bg-warmIvory text-richBlack pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* LEFT: HEADER & FORM (8 cols) */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          <div className="flex items-center gap-3 mb-12">
            <span className="w-3.5 h-3.5 bg-burntOrange block" />
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-[0.2em]">
              05 / START SOMETHING
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-8 max-w-[800px]">
            HAVE A BRAND? <br />
            LET'S BUILD <br />
            <span className="text-burntOrange">WHAT'S NEXT.</span>
          </h1>

          <p className="text-lg text-richBlack/70 font-medium mb-16 max-w-[500px] leading-relaxed">
            Tell us what you're building, where you're stuck, or where you want to go. We'll figure out the next brick.
          </p>

          <form className="w-full flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* 01 YOUR NAME */}
            <div className="flex flex-col gap-4 border-b border-softGray/20 pb-4">
              <label className="text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-4">
                <span className="text-burntOrange font-mono">01</span> YOUR NAME
              </label>
              <input 
                type="text" 
                placeholder="Alex Mercer"
                className="w-full bg-transparent text-xl md:text-2xl font-display font-medium outline-none placeholder:text-softGray/30"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            {/* 02 YOUR EMAIL */}
            <div className="flex flex-col gap-4 border-b border-softGray/20 pb-4">
              <label className="text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-4">
                <span className="text-burntOrange font-mono">02</span> YOUR EMAIL
              </label>
              <input 
                type="email" 
                placeholder="alex@brand.com"
                className="w-full bg-transparent text-xl md:text-2xl font-display font-medium outline-none placeholder:text-softGray/30"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            {/* 03 YOUR COMPANY */}
            <div className="flex flex-col gap-4 border-b border-softGray/20 pb-4">
              <label className="text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-4">
                <span className="text-softGray font-mono">03</span> YOUR COMPANY <span className="text-[10px] lowercase tracking-normal font-medium text-softGray/50">(optional)</span>
              </label>
              <input 
                type="text" 
                placeholder="Mercer Industries"
                className="w-full bg-transparent text-xl md:text-2xl font-display font-medium outline-none placeholder:text-softGray/30"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              />
            </div>

            {/* 04 WHAT DO YOU NEED? */}
            <div className="flex flex-col gap-6 border-b border-softGray/20 pb-8">
              <label className="text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-4">
                <span className="text-burntOrange font-mono">04</span> WHAT DO YOU NEED?
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceClick(service)}
                    className={`px-4 py-2 text-xs font-bold tracking-widest border transition-colors ${
                      formState.service === service 
                        ? "bg-richBlack text-warmIvory border-richBlack" 
                        : "bg-transparent text-richBlack/60 border-softGray/30 hover:border-richBlack"
                    }`}
                  >
                    [ {service} ]
                  </button>
                ))}
              </div>
            </div>

            {/* 05 BUDGET */}
            <div className="flex flex-col gap-4 border-b border-softGray/20 pb-4">
              <label className="text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-4">
                <span className="text-burntOrange font-mono">05</span> BUDGET
              </label>
              <input 
                type="text" 
                placeholder="$10k - $50k"
                className="w-full bg-transparent text-xl md:text-2xl font-display font-medium outline-none placeholder:text-softGray/30"
                value={formState.budget}
                onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
              />
            </div>

            {/* 06 TELL US ABOUT IT */}
            <div className="flex flex-col gap-4 border-b border-softGray/20 pb-4">
              <label className="text-xs font-bold text-softGray uppercase tracking-widest flex items-center gap-4">
                <span className="text-burntOrange font-mono">06</span> TELL US ABOUT IT
              </label>
              <textarea 
                placeholder="We want to completely rethink our digital presence..."
                rows={4}
                className="w-full bg-transparent text-xl font-display font-medium outline-none placeholder:text-softGray/30 resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button 
              type="submit"
              className="flex items-center justify-center self-start gap-3 bg-burntOrange text-warmIvory px-8 py-5 hover:bg-richBlack transition-colors group text-sm font-bold tracking-widest uppercase mt-4"
            >
              SEND PROJECT BRIEF
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </button>

          </form>

        </div>

        {/* RIGHT: CONTACT METADATA & MICRO-INTERACTION (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between pt-16 lg:pt-32 h-full gap-16">
          
          {/* Metadata */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">EMAIL</span>
              <a href="mailto:hello@placeholder.com" className="text-sm font-medium hover:text-burntOrange transition-colors">[hello@placeholder.com]</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">PHONE / WHATSAPP</span>
              <a href="#" className="text-sm font-medium hover:text-burntOrange transition-colors">[+1 (555) 000-0000]</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">SOCIAL</span>
              <div className="flex gap-4">
                <a href="#" className="text-sm font-medium hover:text-burntOrange transition-colors">[INSTAGRAM]</a>
                <a href="#" className="text-sm font-medium hover:text-burntOrange transition-colors">[LINKEDIN]</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">LOCATION</span>
              <span className="text-sm font-medium">[City, Country]</span>
            </div>
          </div>

          {/* Micro-Interaction Wall Build */}
          <div className="sticky bottom-12 flex flex-col items-start gap-4">
            <span className="text-[10px] font-mono text-softGray uppercase tracking-widest">
              SYSTEM BUILD: {completionCount}/5
            </span>
            <div className="grid grid-cols-3 gap-2 w-[150px]">
              {/* Brick 1: Name */}
              <motion.div 
                initial={false}
                animate={{ opacity: completionCount >= 1 ? 1 : 0.1, y: completionCount >= 1 ? 0 : 10 }}
                className={`w-full h-8 ${completionCount >= 1 ? "bg-richBlack" : "border border-softGray/30 bg-transparent"} shadow-sm transition-colors duration-500`} 
              />
              {/* Brick 2: Email */}
              <motion.div 
                initial={false}
                animate={{ opacity: completionCount >= 2 ? 1 : 0.1, y: completionCount >= 2 ? 0 : 10 }}
                className={`w-full h-8 col-span-2 ${completionCount >= 2 ? "bg-warmIvory border border-softGray/20" : "border border-softGray/30 bg-transparent"} shadow-sm transition-colors duration-500`} 
              />
              {/* Brick 3: Service */}
              <motion.div 
                initial={false}
                animate={{ opacity: completionCount >= 3 ? 1 : 0.1, y: completionCount >= 3 ? 0 : 10 }}
                className={`w-full h-8 col-span-2 ${completionCount >= 3 ? "bg-burntOrange" : "border border-softGray/30 bg-transparent"} shadow-sm transition-colors duration-500 relative`} 
              >
                {completionCount >= 3 && <div className="absolute top-1.5 right-1.5 w-1 h-1 border-t border-r border-warmIvory/30" />}
              </motion.div>
              {/* Brick 4: Budget */}
              <motion.div 
                initial={false}
                animate={{ opacity: completionCount >= 4 ? 1 : 0.1, y: completionCount >= 4 ? 0 : 10 }}
                className={`w-full h-8 ${completionCount >= 4 ? "bg-richBlack" : "border border-softGray/30 bg-transparent"} shadow-sm transition-colors duration-500`} 
              />
              {/* Brick 5: Message */}
              <motion.div 
                initial={false}
                animate={{ opacity: completionCount >= 5 ? 1 : 0.1, y: completionCount >= 5 ? 0 : 10 }}
                className={`w-full h-8 col-span-3 ${completionCount >= 5 ? "bg-warmIvory border border-softGray/20" : "border border-softGray/30 bg-transparent"} shadow-sm flex items-center justify-center transition-colors duration-500`} 
              >
                {completionCount >= 5 && <span className="text-[8px] font-mono font-bold text-softGray tracking-widest">READY.</span>}
              </motion.div>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}
