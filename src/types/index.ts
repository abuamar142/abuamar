export interface SkillProps {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category?: 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'Database' | 'Design';
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceProps {
  id: string;
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}
