export interface ClubInfo {
  name: string;
  tagline: string;
  location: string;
  supportingOrganization: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  linkedin?: string;
  linkedinUrl?: string;
  department: string;
  institution: string;
  affiliationText: string;
  mapsUrl?: string;
}

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPillars: string[];
  studentOutcome: string;
  initiatives?: string[];
  recommendedTools?: string[];
  primaryDomains?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  location: string;
  badges: string[];
  shortDescription: string;
  fullDescription: string;
  topicsAndActivities: string[];
  practicalTasks: {
    number: number;
    title: string;
    description?: string;
  }[];
  outcomes: string[];
  highlights: string[];
  status: 'completed' | 'planned';
}

export interface UpcomingEventItem {
  id: string;
  title: string;
  status: 'Planned' | 'Tentative';
  statusBadge: string;
  description: string;
  targetAudience: string;
  learningFocus: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isLeadership: boolean;
  leadershipTitle?: string;
  department: string;
  institution: string;
  affiliation: string;
}

export interface ContactPerson {
  id: string;
  name: string;
  roleDesc?: string;
  linkedin: string;
  email: string;
  instagram: string;
  phone?: string;
  department?: string;
  specialization?: string;
  github?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: 'Workshops' | 'Practical Sessions' | 'Student Activities' | 'Team Activities' | 'Presentations' | 'Events';
  image: string;
  filename: string;
  originalFilename?: string;
  fallbackImage?: string;
  aspectRatio: '16:9' | '4:3' | '3:4';
  featured?: boolean;
  date?: string;
  tag?: string;
  description?: string;
}

