export type DottedGlowBackgroundProps = {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  glowColor?: string;
  opacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

export interface ResumeData {
  name: string;
  version: string;
  summary: string;
  experience: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }>;
  projects: Array<{
    id: string;
    name: string;
    desc: string;
    tech: string[];
  }>;
  skills: Record<string, string[]>;
  email: string;
  linkedin: string;
  github: string;
}

export interface SectionHeaderProps {
  id: string;
  title: string;
}

export interface SectionGridProps {
  children: React.ReactNode;
  className?: string; // Add this line to fix the error
}
