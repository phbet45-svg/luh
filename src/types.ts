export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ShooterLevel {
  level: number;
  name: string;
  subtitle: string;
  description: string;
}

export interface ExplanatoryItem {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  author: string;
  rating: number;
  text: string;
  role?: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
