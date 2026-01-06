import data from "@/data/personal.data.json";

export const Footer = () => (
  <footer className="border-t border-dim bg-dark py-12 mt-20 relative z-[2]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6">
      <div className="flex flex-col items-center lg:items-start gap-4 font-mono text-grey">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[0.75rem]">
          <span className="text-white/80">
            © {new Date().getFullYear()} {data.name}
          </span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="uppercase tracking-widest opacity-60">
            Architectured for Performance
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-end font-mono">
        <div className="flex items-center gap-3 text-[#e4e4e7] text-[0.75rem] border border-dim px-4 py-2 bg-hazard/5 relative">
          <div className="absolute top-0 left-0 w-1 h-1 bg-hazard" />
          <span className="w-1.5 h-1.5 rounded-full bg-hazard shadow-[0_0_10px_#facc15] animate-pulse" />
          <span className="tracking-[2px] font-bold uppercase">
            System: Operational
          </span>
          <span className="opacity-20 mx-2">/</span>
          <span className="text-hazard font-bold tracking-widest">
            {data.version}
          </span>
        </div>
      </div>
    </div>
  </footer>
);
