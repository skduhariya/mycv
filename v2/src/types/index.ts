export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
  username?: string;
}

export interface QuickStat {
  label: string;
  value: string;
  description?: string;
}

export interface CareerHighlight {
  title: string;
  client: string;
  impact: string;
  metric?: string;
  icon?: string;
  badge?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  status: string;
  location: string;
  avatarUrl: string;
  resumePdf: string;
  email: string;
  altEmail?: string;
  phone: string;
  address: string;
  website?: string;
  careerStartDate?: string;
  bio: string[];
  stats: QuickStat[];
  highlights?: CareerHighlight[];
  socialLinks: SocialLink[];
}

export interface SkillItem {
  name: string;
  score: number; // e.g. 8.5
  maxScore: number; // 10
  icon: string;
  category: 'core' | 'framework' | 'tools' | 'soft';
  highlight?: boolean;
}

export interface SkillsCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsData {
  categories: SkillsCategory[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  clientProject?: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  companyUrl?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  description: string;
  icon?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  duration: string;
  location?: string;
  description: string;
  institutionUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  duration: string;
  shortDesc: string;
  description: string;
  image: string;
  featured?: boolean;
  category: 'Enterprise' | 'Web Apps' | 'Mobile & Hybrid' | 'Design & Agency';
  technologies: {
    frontEnd: string[];
    backEnd?: string[];
    database?: string[];
  };
  responsibilities: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface BlogCodeSnippet {
  language: string;
  title?: string;
  code: string;
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  topic: string;
  summary: string;
  technology: string;
  image?: string;
  definition: string;
  explanation: string[];
  snippets: BlogCodeSnippet[];
  takeaways: string[];
  jsfiddleUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}
