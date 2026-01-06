import data from "@/data/personal.data.json";

export const Footer = () => (
  <footer className="w-full border-t border-dim bg-dark py-12 md:py-16 lg:py-12 mt-12 md:mt-16 lg:mt-20 relative z-[2]">
    {/* The inner div keeps your content centered and aligned */}
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6">
      {/* LEFT SIDE: Name & Tagline */}
      <div className="flex flex-col items-center lg:items-start gap-4 font-mono text-grey">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[0.7rem] md:text-[0.75rem]">
          <span className="copyright whitespace-nowrap text-white/80">
            © {new Date().getFullYear()} {data.name}
          </span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="tagline uppercase tracking-widest opacity-60 text-center sm:text-left">
            ARCHITECTURED FOR PERFORMANCE
          </span>
        </div>

        {/* Tablet/Mobile decorative elements */}
        <div className="lg:hidden w-12 h-px bg-dim"></div>
        <p className="lg:hidden text-[0.6rem] uppercase tracking-[5px] opacity-40 text-center">
          END OF TRANSMISSION
        </p>
      </div>

      {/* RIGHT SIDE: System Status & Version */}
      <div className="flex flex-col items-center lg:items-end font-mono">
        {/* Desktop View: Single Line */}
        <div className="hidden lg:flex items-center gap-3 text-[#e4e4e7] text-[0.75rem] border border-dim px-4 py-2 bg-hazard/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-1 bg-hazard"></div>
          <span className="w-[6px] h-[6px] rounded-full bg-hazard shadow-[0_0_10px_#facc15] animate-pulse"></span>
          <span className="tracking-[2px] font-bold uppercase whitespace-nowrap">
            System: Operational
          </span>
          <span className="opacity-20 mx-2 text-white">/</span>
          <span className="text-hazard font-bold tracking-widest">
            {data.version}
          </span>
        </div>

        {/* Tablet/Mobile View: Stacked Layout */}
        <div className="lg:hidden flex flex-col items-center lg:items-end w-full">
          <div className="flex items-center gap-3 text-[#e4e4e7] text-[0.75rem] border border-dim px-4 py-2 bg-hazard/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-1 bg-hazard"></div>
            <span className="w-[6px] h-[6px] rounded-full bg-hazard shadow-[0_0_10px_#facc15] animate-pulse"></span>
            <span className="tracking-[2px] font-bold uppercase whitespace-nowrap">
              System: Operational
            </span>
          </div>

          <div className="flex flex-row items-center gap-3 text-[0.7rem] text-grey mt-6">
            <span className="opacity-40 uppercase tracking-tighter">
              Build_ID:
            </span>
            <span className="bg-white/5 py-1 px-3 border border-dim text-hazard font-bold">
              {data.version}
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
