import { cn } from "@/lib/utils";
import { SectionGridProps } from "@/types";

export const SectionGrid = ({ children, className }: SectionGridProps) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-dim border border-dim",
      className
    )}
  >
    {children}
  </div>
);
