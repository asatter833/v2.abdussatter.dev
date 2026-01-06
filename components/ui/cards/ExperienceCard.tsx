import React from "react";
// Optional helper

export const ExperienceCard = ({ exp }: { exp: any }) => (
  <div className="bg-dark p-8 hover:bg-hazard/[0.02] transition-colors h-full">
    <div className="flex justify-between font-mono text-[0.7rem] text-grey mb-4">
      <span className="text-white/60 uppercase">{exp.company}</span>
      <span>{exp.period}</span>
    </div>
    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
    <p className="text-hazard font-mono text-[0.7rem] mb-6 uppercase tracking-wider">
      {exp.location}
    </p>
    <ul className="space-y-3">
      {exp.highlights.map((h: string, j: number) => (
        <li key={j} className="flex gap-3 text-grey text-sm">
          <span className="text-hazard font-mono">⌞</span>
          {h}
        </li>
      ))}
    </ul>
  </div>
);
