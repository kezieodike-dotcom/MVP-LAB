
export interface Project {
  id: string;
  name: string;
  description: string;
  valuation: string;
  fundingGoal: number;
  category: string;
  growth: string;
  equitySplit: string;
  icon: string;
  color: string;
}

export interface Transaction {
  id: string;
  type: string;
  projectName: string;
  amount: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  icon: string;
}

export enum UserRole {
  CLIENT = 'CLIENT',
  DEVELOPER = 'DEVELOPER',
  INVESTOR = 'INVESTOR',
  CREATOR = 'CREATOR',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN'
}

export interface MarketplaceApp {
  id: string;
  name: string;
  description: string;
  price: string;
  valuation: string;
  revenue: string;
  status: 'live' | 'pending' | 'sold';
  category: string;
  img: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  description: string;
  students: number;
  rating: number;
  price: string;
  instructor: string;
  category: string;
}
