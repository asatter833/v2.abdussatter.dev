interface ContactCardProps {
  label: string;
  status: string;
  title: string;
  value: string;
  href: string;
}

export const ContactCard = ({
  label,
  status,
  title,
  value,
  href,
}: ContactCardProps) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="bg-dark p-8 md:p-10 transition-all duration-300 flex flex-col hover:bg-hazard/[0.03] hover:shadow-[inset_0_0_20px_rgba(250,204,21,0.05)] text-inherit no-underline group"
  >
    <div className="flex justify-between font-mono text-[0.75rem] text-grey mb-3">
      <span>{label}</span>
      <span className="text-hazard uppercase">{status}</span>
    </div>
    <h3 className="text-[1.25rem] font-bold m-0 mb-1 group-hover:text-hazard transition-colors">
      {title}
    </h3>
    <p className="text-grey text-[0.85rem] mt-4 font-mono break-all opacity-70 group-hover:opacity-100">
      {value}
    </p>
  </a>
);
