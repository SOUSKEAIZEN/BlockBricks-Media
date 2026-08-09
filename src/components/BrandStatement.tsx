export default function BrandStatement() {
  return (
    <section className="w-full bg-warmIvory py-[120px]">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
        
        {/* Left Column - Heading */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
              WHO WE ARE
            </span>
          </div>

          <h2 className="text-richBlack font-display font-bold uppercase tracking-[-0.04em] leading-[0.95] text-[clamp(48px,5vw,72px)]">
            ATTENTION IS EASY.<br />
            BEING REMEMBERED<br />
            IS HARDER.
          </h2>
        </div>

        {/* Right Column - Paragraph */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end pb-2">
          <p className="text-softGray font-sans text-[17px] md:text-[19px] leading-[1.6] max-w-[340px]">
            We combine strategy, creativity and distribution to turn attention into actual brand growth.
          </p>
        </div>

      </div>
    </section>
  );
}