export const HeroText = () => (
  <div className="mt-[-8px] md:mt-[-10px] w-full">
    <svg viewBox="0 0 800 130" className="w-full h-auto overflow-visible">
      <defs>
        <filter id="strokeGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <text
        x="0"
        y="110"
        className="font-sans font-black text-[130px] fill-none stroke-white/5 stroke-[1.5px] uppercase"
      >
        ENGINEER
      </text>
      <text
        x="0"
        y="110"
        className="outlined-text-svg animated font-sans font-black text-[130px] fill-none stroke-hazard stroke-[1.5px] uppercase"
        filter="url(#strokeGlow)"
      >
        ENGINEER
      </text>
    </svg>
  </div>
);
