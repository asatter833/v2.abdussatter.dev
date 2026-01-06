// components/ProjectCard.tsx

import { ProjectProps } from "@/lib/types";

export function ProjectCard({ title, desc, tags }: ProjectProps) {
  return (
    <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
