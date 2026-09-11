export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: 'Keynote' | 'Hack' | 'Food' | 'Workshop' | 'Demo';
  description: string;
  location: string;
  iconName?: string;
}

export interface TrackItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  accentColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  tier: 'Title' | 'Gold' | 'Community' | 'Partner';
  category: string;
  badge: string;
  description: string;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  age: string;
  schoolOrCollege: string;
  city: string;
  discordOrHandle: string;
  trackPreference: string;
  experienceLevel: string;
  projectIdea?: string;
}
