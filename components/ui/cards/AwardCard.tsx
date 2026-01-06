interface AwardProps {
  title: string;
  org: string;
  date: string;
  result: string;
}

export const AwardCard = ({ title, org, date, result }: AwardProps) => (
  <div className="bg-dark p-8 md:p-10 transition-all duration-300 flex flex-col hover:bg-hazard/[0.03] hover:shadow-[inset_0_0_20px_rgba(250,204,21,0.05)]">
    <div className="flex flex-col sm:flex-row sm:justify-between font-mono text-[0.75rem] text-grey mb-3 gap-1 sm:gap-4">
      <span className="uppercase text-white/60">{org}</span>
      <span>{date}</span>
    </div>
    <h3 className="text-[1.25rem] font-bold m-0 mb-3">{title}</h3>
    <div className="font-mono text-[0.8rem] mt-3 tracking-[2px] text-hazard border border-hazard/20 self-start px-3 py-1 bg-hazard/5">
      {result}
    </div>
  </div>
);
