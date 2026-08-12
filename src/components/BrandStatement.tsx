export default function BrandStatement() {
  return (
    <section className="w-full bg-warmIvory py-[120px]">
      <div className="container">
        
        <div className="flex flex-col items-start max-w-[900px]">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
              WHO WE ARE
            </span>
          </div>

          <h2 className="text-richBlack font-display font-bold uppercase tracking-[-0.04em] leading-[0.95] text-[clamp(48px,5vw,72px)] mb-8">
            ATTENTION IS EASY.<br />
            BEING REMEMBERED<br />
            IS HARDER.
          </h2>

          <p className="text-softGray font-sans text-[17px] md:text-[19px] leading-[1.6] max-w-[480px]">
            We combine strategy, creativity and distribution to turn attention into actual brand growth.
          </p>
        </div>

      </div>
    </section>
  );
}