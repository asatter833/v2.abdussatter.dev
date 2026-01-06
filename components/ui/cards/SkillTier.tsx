interface SkillTierProps {
  tier: string;
  items: string[];
}

export const SkillTier = ({ tier, items }: SkillTierProps) => (
  <div className="flex border-b border-dim pb-6 md:pb-8 last:border-0 flex-col sm:flex-row">
    <div className="w-[200px] font-mono text-hazard font-extrabold text-[0.8rem] uppercase mb-3 sm:mb-0 tracking-[2px]">
      {tier}
    </div>
    <div className="flex flex-wrap gap-x-6 gap-y-3 grow">
      {items.map((item) => (
        <span
          key={item}
          className="text-[0.95rem] text-[#e4e4e7] font-medium transition-colors hover:text-hazard flex items-center group cursor-default"
        >
          <span className="hidden group-hover:inline mr-2 text-hazard opacity-50">
            ›
          </span>
          {item}
        </span>
      ))}
    </div>
  </div>
);
