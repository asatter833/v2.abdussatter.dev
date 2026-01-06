interface HeroProps {
  summary: string;
}

export const Hero = ({ summary }: HeroProps) => (
  <section className="min-h-[70vh] flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] w-full gap-10 items-center">
      <div>
        <div className="font-mono text-[0.8rem] text-grey mb-6 flex items-center gap-3">
          <span className="w-10 h-px bg-grey" />
          OPERATIONAL STATUS:{" "}
          <span className="text-hazard animate-active-status uppercase tracking-widest">
            Active
          </span>
        </div>
        <h1 className="text-[14vw] lg:text-[10rem] font-black leading-[0.8] -tracking-[4px] uppercase">
          Frontend
        </h1>
        <div className="w-full max-w-[800px]">
          <svg viewBox="0 0 800 130" className="w-full h-auto overflow-visible">
            <text
              x="0"
              y="110"
              className="font-sans font-black text-[120px] fill-none stroke-white/5 stroke-[1.5px] uppercase"
            >
              Engineer
            </text>
            <text
              x="0"
              y="110"
              className="outlined-text-svg animated font-sans font-black text-[120px] fill-none stroke-hazard stroke-[1.5px] uppercase"
            >
              Engineer
            </text>
          </svg>
        </div>
      </div>
      <div className="lg:mt-20">
        <p className="font-mono text-grey leading-relaxed text-[1rem] max-w-[500px] mb-8">
          {summary}
        </p>
        <div className="w-[120px] h-[24px] bg-black border border-dim relative overflow-hidden">
          <div className="absolute inset-0 w-[60%] bg-[repeating-linear-gradient(45deg,#facc15,#facc15_8px,#000_8px,#000_16px)]" />
        </div>
      </div>
    </div>
  </section>
);
