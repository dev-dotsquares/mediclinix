import { LucideIcon, Scale, Heart, Bone, Leaf, Brain, BrainCircuit, UserCheck, Ear, HeartPulse, Droplets } from 'lucide-react';
import content from './content.json';

// Re-export content to be used throughout the app
export const NAV_LINKS = content.navLinks;
export const TEAM_MEMBERS = content.teamMembers;
export const TESTIMONIALS = content.testimonials;
export const FAQS = content.faqs;

// Define the Service type with a string for the icon
export interface Service {
  name: string;
  slug: string;
  description: string;
  tagline?: string;
  icon: string; // Icon name as a string
  image: string;
  dataAiHint: string;
  details?: (string | { title: string; content: string })[];
  keyServices?: string[];
  clinicServices?: string[];
}

// Create a mapping from icon names to Lucide components
export const ICONS: { [key: string]: LucideIcon } = {
  Scale,
  Heart,
  Bone,
  Leaf,
  Brain,
  BrainCircuit,
  UserCheck,
  Ear,
  HeartPulse,
  Droplets,
  Default: Heart, // Fallback icon
};

// Augment services with the actual icon component
export const SERVICES = content.services.map(service => ({
  ...service,
  icon: ICONS[service.icon] || ICONS.Default,
}));
