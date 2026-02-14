
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
  INVESTOR = 'INVESTOR',
  CREATOR = 'CREATOR'
}
