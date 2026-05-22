export interface ExperienceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface WhoBelongsItem {
  id: string;
  label: string;
  iconName: string;
}

export interface ResidencyModel {
  id: string;
  title: string;
  duration: string;
  price: string;
  bullets: string[];
  description: string;
  recommended?: boolean;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface MetricItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
}

export interface CalendarEvent {
  id: string;
  date: string;
  tag: string;
  title: string;
  description: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  instagram: string;
  city: string;
  attendanceType: string;
}

export interface BrandApplicationFormData {
  brandName: string;
  website: string;
  instagram: string;
  contactName: string;
  email: string;
  residencyModel: string;
  message: string;
}
