import { twMerge } from "tailwind-merge"; // Recommended for merging Tailwind classes
import { clsx, type ClassValue } from "clsx";

// Utility to merge classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
