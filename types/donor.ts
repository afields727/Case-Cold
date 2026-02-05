export interface Donor {
  id: number;
  name: string;
  amount: number;
  date: string;
  message: string;
  category: "Individual" | "Corporate" | "Foundation";
  avatar: string;
  email?: string;
  location?: string;
  status?: "active" | "inactive";
  donations?: Donation[];
  totalDonated?: number;
  joinedDate?: string;
}

export interface Donation {
  date: string;
  amount: number;
  program: string;
}

export interface DonorStats {
  totalDonations: number;
  totalDonors: number;
  activeDonors: number;
  averageDonation: number;
}
