export interface ExperienceCardProps {
  company: string;
  period: string;
  role: string;
  location: string;
  highlights: string[];
}

export interface ContactCardProps {
  label: string;
  status: string;
  title: string;
  value: string;
  href: string;
}

export interface AwardProps {
  title: string;
  org: string;
  date: string;
  result: string;
}

export interface ProjectProps {
  id: string;
  name: string;
  desc: string;
  tech: string[];
}

export interface SkillTierProps {
  tier: string;
  items: string[];
}
