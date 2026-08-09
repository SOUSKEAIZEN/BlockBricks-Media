"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RECENT_ACTIVITY = [
  { name: "KARTIK", handle: "@bhalu1", action: "sent a brief", time: "2 min ago", detail: '"need a website that doesn\'t look like every other agency"' },
  { name: "RIYA KAPOOR", handle: "@riyuhere", action: "launching", time: "11 min ago", detail: '"launching a skincare brand"' },
  { name: "ARJUN MEHTA", handle: "@arjun.exe", action: "building", time: "1 hour ago", detail: '"we have an idea. it\'s kinda insane."' }
];

const SERVICES = [
  "A WEBSITE",
  "AN APP",
  "A BRAND",
  "SOCIAL CONTENT",
  "SOMETHING WEIRD",
  "IDK YET"
];

const BUDGETS = [
  "₹10K — ₹25K",
  "₹25K — ₹50K",
  "₹50K — ₹1L",
  "₹1L+",
  "LET'S TALK FIRST"
];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    service: "",
    problem: "",
    budget: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Focus input automatically on step change
  useEffect(() => {
    if (step === 1 || step === 2) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else if (step === 4) {
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [step]);

  // Handle Enter key for progression on text fields
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleNext = () => {
    if (step === 1 && formData.name.trim() === "") return;
    if (step === 2 && formData.nickname.trim() === "") return;
    if (step === 4 && formData.problem.trim() === "") return;
    
    // Auto-fill nickname with first name if proceeding from step 1
    if (step === 1 && formData.nickname === "") {
      setFormData(prev => ({ ...prev, nickname: prev.name.split(" ")[0] }));
    }
    
    setStep(prev => prev + 1);
  };

  const handleSelectService = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setStep(prev => prev + 1);
  };

  const handleSelectBudget = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
    setStep(prev => prev + 1);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 40, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, y: -40, filter: "blur(4px)", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const } }
  };

  return (
    <main className="w-full h-[100svh] overflow-hidden bg-warmIvory text-richBlack pt-[100px] md:pt-[120px] pb-12 px-6 md:px-12 flex flex-col justify-center">
      
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 h-full">
        
        {/* LEFT: CONVERSATIONAL UI (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* SCREEN 00: HERO */}
            {step === 0 && (
              <motion.div key="step-0" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start max-w-[800px]">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-8">
                  GOT A CRAZY IDEA? <br />
                  <span className="text-burntOrange">GOOD. WE LIKE THOSE.</span>
                </h1>
                <p className="text-lg text-richBlack/70 font-medium mb-12 leading-relaxed">
                  Don't send us a boring brief.<br/>
                  Tell us what you're trying to build, fix, launch or completely destroy.
                </p>
                <button 
                  onClick={handleNext}
                  className="flex items-center justify-center gap-3 bg-burntOrange text-warmIvory px-8 py-5 hover:bg-richBlack transition-colors group text-sm font-bold tracking-widest uppercase mb-4"
                >
                  START A CONVERSATION
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                </button>
                <span className="text-xs font-mono text-softGray uppercase tracking-widest">
                  usually replies in &lt; 24 hrs
                </span>
              </motion.div>
            )}

            {/* SCREEN 01: NAME */}
            {step === 1 && (
              <motion.div key="step-1" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start w-full">
                <span className="text-xs font-mono font-bold text-burntOrange uppercase tracking-widest mb-6">
                  01 / INTRO
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  YO, WHO ARE YOU?
                </h2>
                <div className="w-full relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Kartik Bhalu"
                    className="w-full bg-transparent text-4xl md:text-6xl font-display font-medium outline-none placeholder:text-softGray/20 border-b-2 border-richBlack/10 focus:border-burntOrange transition-colors pb-4"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onKeyDown={handleKeyDown}
                  />
                  <div className="absolute right-0 bottom-4 flex items-center gap-4 pointer-events-none opacity-50">
                    <span className="text-xs font-mono uppercase tracking-widest hidden md:block">Press Enter</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 02: NICKNAME */}
            {step === 2 && (
              <motion.div key="step-2" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start w-full">
                <span className="text-xs font-mono font-bold text-burntOrange uppercase tracking-widest mb-6">
                  02 / VIBE CHECK
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  WHAT SHOULD WE CALL YOU?
                </h2>
                <div className="w-full relative">
                  <input
                    ref={inputRef}
                    type="text"
                    className="w-full bg-transparent text-4xl md:text-6xl font-display font-medium outline-none placeholder:text-softGray/20 border-b-2 border-richBlack/10 focus:border-burntOrange transition-colors pb-4"
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    onKeyDown={handleKeyDown}
                  />
                  <div className="absolute right-0 bottom-4 flex items-center gap-4 pointer-events-none opacity-50">
                    <span className="text-xs font-mono uppercase tracking-widest hidden md:block">Press Enter</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 03: SERVICE */}
            {step === 3 && (
              <motion.div key="step-3" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start w-full">
                <span className="text-xs font-mono font-bold text-burntOrange uppercase tracking-widest mb-6">
                  03 / THE MISSION
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  WHAT ARE WE MAKING?
                </h2>
                <div className="flex flex-wrap gap-4 w-full max-w-[800px]">
                  {SERVICES.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleSelectService(service)}
                      className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight px-6 py-4 border-2 border-richBlack/10 hover:border-burntOrange hover:text-burntOrange transition-all text-left"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SCREEN 04: PROBLEM */}
            {step === 4 && (
              <motion.div key="step-4" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start w-full h-full">
                <span className="text-xs font-mono font-bold text-burntOrange uppercase tracking-widest mb-6">
                  04 / THE TEA
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-10">
                  OKAY. WHAT'S THE PROBLEM?
                </h2>
                <div className="w-full relative flex-1 min-h-[250px]">
                  <textarea
                    ref={textareaRef}
                    placeholder={`"Our brand looks like it was made in 2018..."\n\nor\n\n"We have an idea but absolutely no idea how to execute it."`}
                    className="w-full h-full bg-transparent text-2xl md:text-3xl font-display font-medium outline-none placeholder:text-softGray/30 resize-none"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    onKeyDown={handleKeyDown}
                  />
                  <div className="absolute right-0 bottom-0 flex items-center gap-6">
                    <span className="text-xs font-mono text-softGray uppercase tracking-widest hidden md:block">
                      Shift + Enter for new line
                    </span>
                    <button 
                      onClick={handleNext}
                      className="flex items-center justify-center p-4 bg-richBlack text-warmIvory hover:bg-burntOrange transition-colors group"
                    >
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 05: BUDGET */}
            {step === 5 && (
              <motion.div key="step-5" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start w-full">
                <span className="text-xs font-mono font-bold text-burntOrange uppercase tracking-widest mb-6">
                  05 / REALITY CHECK
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  WHAT'S THE DAMAGE? 💸
                </h2>
                <div className="flex flex-col gap-4 w-full max-w-[500px]">
                  {BUDGETS.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => handleSelectBudget(budget)}
                      className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight px-6 py-4 border-2 border-richBlack/10 hover:border-burntOrange hover:text-burntOrange transition-all text-left flex justify-between items-center group"
                    >
                      {budget}
                      <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SCREEN 06: OUTRO */}
            {step === 6 && (
              <motion.div key="step-6" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start max-w-[800px]">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  THAT'S IT.<br/>
                  <span className="text-burntOrange">WE'LL TAKE IT FROM HERE.</span>
                </h1>
                
                <button 
                  disabled={isSubmitting}
                  onClick={async () => {
                    setIsSubmitting(true);
                    try {
                      const response = await fetch("https://formsubmit.co/ajax/blockbricksmedia@gmail.com", {
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            _subject: `New Project Inquiry from ${formData.name}`,
                            Name: formData.name,
                            Nickname: formData.nickname,
                            "Service Needed": formData.service,
                            Budget: formData.budget,
                            "Project Details": formData.problem
                        })
                      });
                      
                      if (response.ok) {
                        setStep(7);
                      } else {
                        alert("Something went wrong. Please try again.");
                      }
                    } catch (error) {
                      console.error(error);
                      alert("Error sending message.");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="flex items-center justify-center gap-3 bg-burntOrange text-warmIvory px-10 py-6 hover:bg-richBlack transition-colors group text-lg font-bold tracking-widest uppercase mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SEND IT"}
                  {!isSubmitting && <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />}
                </button>

                <div className="flex flex-col gap-1 text-sm font-mono text-softGray uppercase tracking-widest">
                  <span>No sales bullshit.</span>
                  <span>No 47-slide proposal.</span>
                  <span>Just a conversation.</span>
                </div>
              </motion.div>
            )}

            {/* SCREEN 07: SUCCESS */}
            {step === 7 && (
              <motion.div key="step-7" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col items-start max-w-[800px]">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-8">
                  BRIEF RECEIVED. <br />
                  <span className="text-burntOrange">WE'LL BE IN TOUCH.</span>
                </h1>
                <p className="text-lg text-richBlack/70 font-medium mb-12 leading-relaxed">
                  Check your inbox soon. If you don't hear from us in 24 hours, <br/>
                  someone probably spilled coffee on the server.
                </p>
                <span className="text-xs font-mono text-softGray uppercase tracking-widest">
                  NOTE: YOU MAY NEED TO ACTIVATE THIS FORM VIA EMAIL ON THE FIRST SUBMISSION
                </span>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* RIGHT: LIVE AGENCY DESK (4 cols) */}
        <div className="lg:col-span-4 hidden lg:flex flex-col pt-4 pb-12 h-full border-l border-richBlack/10 pl-12 relative">
          
          <div className="flex items-center gap-3 mb-16">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-softGray uppercase tracking-widest">
              CURRENTLY ONLINE <br/>
              <span className="text-richBlack">YES, PROBABLY</span>
            </span>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            {RECENT_ACTIVITY.map((activity, index) => (
              <div key={index} className="flex flex-col gap-2 border-b border-richBlack/10 pb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-display font-bold uppercase tracking-tight text-richBlack">
                    {activity.name}
                  </span>
                  <span className="text-[10px] font-mono text-softGray">
                    {activity.handle}
                  </span>
                </div>
                <span className="text-xs font-mono text-burntOrange lowercase">
                  {activity.action} • {activity.time}
                </span>
                <p className="text-sm font-mono text-richBlack/60 mt-1">
                  {activity.detail}
                </p>
              </div>
            ))}

            {/* Current User Slot */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-display font-bold uppercase tracking-tight text-richBlack">
                  YOU
                </span>
                <span className="text-[10px] font-mono text-softGray">
                  @you
                </span>
              </div>
              <span className="text-xs font-mono text-burntOrange lowercase">
                your turn ↓
              </span>
              <p className="text-sm font-mono text-richBlack/30 mt-1 italic">
                "{step === 0 ? "thinking..." : step === 6 ? "ready to send" : "typing..."}"
              </p>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}
