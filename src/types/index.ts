export interface Project {
  slug: string;
  title: string;
  category: 'web' | 'app' | 'ai';
  description: string;
  thumbnail: string;
  technologies: string[];
  client?: string;
  industry?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images?: string[];
  liveUrl?: string;
  behanceUrl?: string;
  featured?: boolean;
  // Set on projects loaded from Firestore (absent on the hardcoded ones).
  id?: string;
  source?: 'static' | 'firebase';
  createdAt?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  isFounder?: boolean;
}

export interface Service {
  title: string;
  slug: string;
  icon: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
}
