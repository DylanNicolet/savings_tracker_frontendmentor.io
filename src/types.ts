export interface HeroChartData {
  amount: number;
  monthName: string; 
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  deadline: string | null;
  createdAt: string;
  deposits: {
    id: string;
    amount: number;
    note: string;
    createdAt: string;
  }[];
}