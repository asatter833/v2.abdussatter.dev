import { twMerge } from "tailwind-merge"; // Recommended for merging Tailwind classes
import { clsx, type ClassValue } from "clsx";

// Utility to merge classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionGridProps {
  children: React.ReactNode;
  className?: string; // Add this line to fix the error
}

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
