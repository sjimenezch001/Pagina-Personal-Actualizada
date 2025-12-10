import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'es';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: LucideIcon;
  category: 'Data Science' | 'Data Analysis';
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Translation {
  nav: {
    work: string;
    experience: string;
    about: string;
    contact: string;
  };
  hero: {
    status: string;
    greeting: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    btnProject: string;
    btnCv: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
  };
  work: {
    title: string;
    badgeDS: string;
    badgeDA: string;
  };
  about: {
    title: string;
    p1: string;
    p2Start: string;
    p2Bold: string;
    p2End: string;
  };
  contactSection: {
    title: string;
    text: string;
    btn: string;
  };
  footer: {
    rights: string;
  };
}