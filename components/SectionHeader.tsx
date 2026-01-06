interface SectionHeaderProps {
  id: string;
  title: string;
}

export const SectionHeader = ({ id, title }: SectionHeaderProps) => (
  <div className="mt-16 md:mt-24 mb-8 md:mb-12">
    <div className="h-px bg-white/10 w-full mb-3 md:mb-4"></div>
    <div className="flex items-center gap-4 font-mono">
      <span className="text-hazard font-bold">{id}</span>
      <span className="tracking-[4px] text-[0.9rem] uppercase text-white/90">
        {title}
      </span>
    </div>
  </div>
);
