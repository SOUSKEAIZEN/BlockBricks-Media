export default function BrandStatement() {
  return (
    <section className="w-full bg-[#F6F0E8] px-[8vw] md:px-[10vw] py-32 md:py-48 flex justify-center">
      <div className="w-full max-w-[1400px] flex flex-col items-center text-center">
        
        {/* Label with Signature Orange Brick */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <span className="w-3 h-3 bg-[#C95A21] block rounded-[1.5px]" />
          <span className="text-[10px] md:text-[11px] font-mono font-bold text-[#8A8A8A] uppercase tracking-[0.2em]">
            01 / WHO WE ARE
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 
          className="text-[#111111] font-bold uppercase tracking-[-0.04em] leading-[0.95] max-w-[1100px]"
          style={{ 
            fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)", 
            fontFamily: "Geist, sans-serif" 
          }}
        >
          ATTENTION IS EASY.<br />
          BEING REMEMBERED<br />
          IS HARDER.
        </h2>

        {/* Supporting Copy */}
        <p 
          className="mt-10 md:mt-12 text-[#8A8A8A] max-w-[600px] font-medium"
          style={{ fontSize: "clamp(17px, 1.2vw, 22px)", lineHeight: 1.5 }}
        >
          We combine strategy, creativity and distribution to turn attention into actual brand growth.
        </p>

      </div>
    </section>
  );
}