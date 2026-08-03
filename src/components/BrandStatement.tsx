export default function BrandStatement() {
  return (
    <section className="w-full bg-warmIvory px-6 md:px-12 py-32 md:py-48 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        
        {/* Label with Signature Orange Brick */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2.5 h-2.5 bg-burntOrange block" />
          <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
            01 / WHO WE ARE
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-richBlack leading-[0.95] tracking-tighter uppercase">
          ATTENTION IS EASY.<br />
          BEING REMEMBERED<br />
          IS HARDER.
        </h2>

        {/* Supporting Copy */}
        <p className="mt-12 text-lg md:text-2xl text-richBlack/80 max-w-2xl font-medium leading-relaxed">
          We combine strategy, creativity and distribution to turn attention into actual brand growth.
        </p>

      </div>
    </section>
  );
}