interface ProjectProps {
  id: string;
  name: string;
  desc: string;
  tech: string[];
}

export const ProjectCard = ({ id, name, desc, tech }: ProjectProps) => (
  <div className="bg-dark p-8 md:p-10 transition-all duration-300 flex flex-col hover:bg-hazard/[0.03] hover:shadow-[inset_0_0_20px_rgba(250,204,21,0.05)] h-full">
    <div className="flex justify-between font-mono text-[0.75rem] text-grey mb-3">
      <span>ID: {id}</span>
      <span className="text-hazard/80 font-bold uppercase tracking-widest">
        Stable
      </span>
    </div>
    <h3 className="text-[1.25rem] font-bold m-0 mb-2">{name}</h3>
    <p className="text-grey text-[0.95rem] leading-[1.6] mb-8">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map((t) => (
        <span
          key={t}
          className="font-mono text-[0.65rem] py-1 px-2 bg-white/5 border border-dim uppercase tracking-wider"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);
